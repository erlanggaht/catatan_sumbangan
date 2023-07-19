<script setup>
import table_name_uid from '@/components/moleculs/table_nama_uid.vue'
import Navbar from '@/components/moleculs/navbar.vue'
import getAdmin from '@/API/get_data_admin'
import jwt_decode from "jwt-decode"
import {parseCookies} from 'nookies'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const login_token = parseCookies().lgn
const login_active = ref(false)
const login_username = ref('')
const login_profile = ref('')



onBeforeMount( ()=>{

//decode token
try {
    const result = jwt_decode(login_token)
    login_active.value = true
    login_username.value = result.username
} catch (error) {
    router.replace('/login')
    console.log(error.message)            
}



})


onMounted(async() => {
        
        // Getadmin
        const response =await getAdmin(login_username.value,login_token)
        login_profile.value =  response[0]
    
        // Login On
        if(!login_active.value) router.replace('/login')
    
    
})    

</script>


<template>
    <Navbar title="Dashboard" link="/dashboard" :login_profile="login_profile"/>
    <main class="my-12">

<table_name_uid/>
</main>
</template>