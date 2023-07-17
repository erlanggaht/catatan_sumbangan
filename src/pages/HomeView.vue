<script setup>
import Alert_message from '@/components/atoms/alert_message.vue';
import Navbar from '@/components/moleculs/navbar.vue';
import {parseCookies} from 'nookies'
import { onBeforeMount, onMounted, ref } from 'vue';
import getAdmin from '@/API/get_data_admin'
import jwt_decode from "jwt-decode"
import Logout_comp from '@/components/moleculs/logout_comp.vue';
import { useRouter } from 'vue-router';

const login_token = parseCookies().lgn
const login_active = ref(false)
const login_username = ref('')
const login_profile = ref('')
const router = useRouter()
const logout = ref(false)



onBeforeMount(async ()=>{

//decode token
try {
    const result = jwt_decode(login_token)
    login_active.value = true
    login_username.value = result.username
} catch (error) {
     console.log(error.message)            
}





})

onMounted(async() => {

  // Getadmin
  try {
    const response =await getAdmin(login_username.value,login_token)
    login_profile.value =  response[0]
  } catch (error) {
   return false
  }
 

})


function Logout() {
  
  logout.value = true
  setTimeout(() => {
    destroyCookie(null,'lgn')
    router.replace('/login')
  },2600)

}
</script>

<template>
 <!-- Logout Component -->
 <Logout_comp v-if="logout"/>


  <header>
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
          <Navbar title="Catatan Sumbangan" link="/" :login_profile="login_profile"/> 
        <!-- Page content here -->
        <main class="h-screen grid place-content-center">
        <h1 class="text-center text-4xl">Selamat Datang</h1>
        <p class="text-center p-2">silahkan masuk untuk catat pemasukan atau pengeluaran organisasi kami.</p>
        <Alert_message 
        :link="login_profile.nama_lengkap ? '/dashboard' : '/signup'"  
        :text_go="login_profile.nama_lengkap ? 'Dashboard' : 'Gabung' "
        :title="login_profile.nama_lengkap ? login_profile.nama_lengkap : 'Ayo Gabung' "
        :desc="login_profile.nama_lengkap ? 'Jujur kunci segalanya.' : 'di organisasi kami' "

        />
        </main>
      </div> 

      <div class="drawer-side">
        
        <label for="my-drawer-3" class="drawer-overlay"></label> 
        <ul class="menu p-4 w-80 h-full bg-base-200">
          <!-- Sidebar content here -->
          <li>
            <router-link :to="'/dashboard'" v-if="login_profile?.nama_lengkap">Hello, {{login_profile.nama_lengkap}}</router-link> 
            <router-link :to="'/login'" v-else>Masuk</router-link>
          </li>
         <li>
          
            <a href="#" @click="Logout"  v-if="login_profile?.nama_lengkap" >Logout</a> 
            <router-link :to="'/signup'" v-else>Gabung</router-link>
           </li>
          
        </ul>
        
      </div>
    </div>
    
  </header>
</template>
