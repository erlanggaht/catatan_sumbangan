<script setup>
import Navbar from '@/components/moleculs/navbar.vue';
import Table from '@/components/moleculs/table.vue'
import Button from '@/components/atoms/button.vue';
import Form_Kas_Masuk from '@/components/organism/form_kas_masuk.vue'
import Form_Kas_Keluar from '@/components/organism/form_kas_keluar.vue'
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue';
import getData from '@/API/get_data.js'
import {parseCookies} from 'nookies'
import getAdmin from '@/API/get_data_admin'
import jwt_decode from "jwt-decode"
import { useRouter } from 'vue-router';
import FileTree from '../components/organism/filte_tree.vue';

const router = useRouter()
const condition_add_form = ref('')

let data = ref([])
const saldo_current = ref()
const login_token = parseCookies().lgn
const login_active = ref(false)
const login_username = ref('')
const login_profile = ref('')

function fn_addForm (condition) {
    if(condition == 'in') condition_add_form.value = 'in'
    if(condition == 'out') condition_add_form.value = 'out'
    if(condition == false) condition_add_form.value = ''
}


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
    // get data
    const response_data = await getData()
    data.value = response_data
    saldo_current.value = response_data[response_data.length - 1].saldo              

    // Getadmin
    const response =await getAdmin(login_username.value,login_token)
    login_profile.value =  response[0]

    // Login On
    if(!login_active.value) router.replace('/login')
   

})



document.title = 'Dashboard'
</script>

<template>
<Navbar title="Dashboard" link="/dashboard" :login_profile="login_profile"/>
<main class="my-12"  >
   
  <section class="w-full flex justify-center shadow pb-12">  <FileTree/> </section>

    <Table/>

    <section class="flex items-center gap-3 sm:px-12  justify-center sm:justify-end py-3 bg-white dark:bg-[#222]">
        <div class="flex items-center gap-2  flex-wrap-reverse justify-center ">
            <Button text="Tambah Kas Masuk"  bg="btn-info text-white" @click="fn_addForm('in')" />
            <Button text="Tambah Kas Keluar" bg="btn-error text-white" @click="fn_addForm('out')"/>
        </div>
    </section>

    <section class="form_add bg-white flex flex-col gap-4 px-12 py-12 mb-10 border-none  dark:border-none dark:bg-[#242424] rounded-sm relative" v-if="condition_add_form">
        <Form_Kas_Masuk v-if="condition_add_form == 'in' " :fn_addForm="fn_addForm" :data="data" :saldo_current="saldo_current" />
        <Form_Kas_Keluar v-if="condition_add_form == 'out'" :fn_addForm="fn_addForm" :data="data" :saldo_current="saldo_current"/>
    </section>
</main>


</template>