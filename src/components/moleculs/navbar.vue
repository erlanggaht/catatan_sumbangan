<script setup>
import { defineProps, onUnmounted, ref} from 'vue';
import BackIcon from '@/assets/icon/backIcon.vue'
import { useRouter } from 'vue-router';
import Logout_Comp from '@/components/moleculs/logout_comp.vue'
import {destroyCookie} from 'nookies'
import SwapDark from '@/components/atoms/swap_dark.vue'
const props = defineProps ({
  title : String,
  link : String,
  login_profile : Object
})

const router = useRouter()
const logout = ref(false)


function Logout() {
  
  logout.value = true
  setTimeout(() => {
    destroyCookie(null,'lgn')
    localStorage.clear()
    router.replace('/login')
  },2600)

}


function darkmode () {
      console.log(document.querySelector('.modedark').className)
      document.querySelector('.modedark').classList.toggle('dark')

}

</script>

<template>
    <!-- Logout Component -->
    <Logout_Comp v-if="logout"/>

    <!-- Navbar -->
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle " /> 
    <div class="w-full navbar bg-white shadow-sm dark:bg-[#242424] dark:text-white">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost md:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        
        <div class="flex-1 px-2 mx-2 ">
          <a href="#" @click="router.back()" class="back  hover:bg-gray-200 py-1 pr-2 pl-1 rounded active:bg-gray-100 "><BackIcon class="w-[26px] "/></a>
          <router-link :to="props.link" class="hover:bg-gray-200 p-2 mx-2 rounded active:bg-gray-100 dark:hover:bg-[#333] dark:text-white">{{props.title}}</router-link>

        </div>
        <div class="flex-none hidden md:block" >
          <ul class="menu menu-horizontal flex items-center">
            <!-- Navbar menu content here -->
            <li>
            
              <router-link :to="'/Dashboard'" class="dark:hover:text-gray-300" v-if="props?.login_profile?.nama_lengkap">Hello, {{props.login_profile.nama_lengkap}}</router-link> 
              <router-link :to="'/login'" v-else class="dark:hover:text-gray-300">Masuk</router-link>
            </li>
          
           

            <li>
            <a href="#" class="dark:hover:text-gray-300" @click.prevent="Logout()"  v-if="props?.login_profile?.nama_lengkap" >Logout</a> 
          
          </li>
        
          <li>
            <label class="swap swap-rotate">
              <input type="checkbox" @click="darkmode" />
              <SwapDark />
            </label>
          </li>
          </ul>
        </div>
      </div>

      <div class="drawer-side z-50">
        <label for="my-drawer-3" class="drawer-overlay"></label> 
        <ul class="menu p-2 w-80 h-full bg-white relative dark:bg-[#242424] dark:text-white">
          <!-- Sidebar content here / Mobile -->
          <li class="flex flex-row items-center justify-between">
            <router-link class="md:hidden dark:hover:text-gray-300" :to="'/dashboard'" v-if="props?.login_profile?.nama_lengkap">Hello, {{props?.login_profile?.nama_lengkap}}</router-link>
            <router-link class="md:hidden dark:hover:text-white" :to="'/login'" v-else>Masuk</router-link>
            <label class="swap swap-rotate md:hidden">
              <input type="checkbox" @click="darkmode" />
              <SwapDark />
            </label>
          </li>
          <li class=" absolute bottom-2 right-2 ">
            <a href="#" @click.prevent="Logout"  v-if="props?.login_profile?.nama_lengkap" class="md:hidden dark:hover:text-gray-300 ">Logout</a> 
           
          </li>
          
        </ul>
        
      </div>

</template>


<style scoped>

@media (max-width: 767px) {
  .back {
    display: none;
  }
}

</style>