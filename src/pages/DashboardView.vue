<script setup>
import Navbar from '@/components/moleculs/navbar.vue';
import Table from '@/components/moleculs/table.vue'
import Button from '@/components/atoms/button.vue';
import Form_Kas_Masuk from '@/components/organism/form_kas_masuk.vue'
import Form_Kas_Keluar from '@/components/organism/form_kas_keluar.vue'
import { onMounted, ref, watchEffect } from 'vue';
import getData from '@/API/get_data.js'

const condition_add_form = ref('')

let data = ref([])
const saldo_current = ref()


function fn_addForm (condition) {
    if(condition == 'in') condition_add_form.value = 'in'
    if(condition == 'out') condition_add_form.value = 'out'
    if(condition == false) condition_add_form.value = ''
}


   

onMounted(async() => {
    // get data
    const response_data = await getData()
    data.value = response_data
    saldo_current.value = response_data[response_data.length - 1].saldo              

   

})



document.title = 'Dashboard'
</script>

<template>
<Navbar title="Dashboard" link="/dashboard"/>
<main class="my-12"  >
   

    <Table/>

    <section class="flex items-center gap-3 sm:px-12 my-12 sm:my-12 justify-center sm:justify-end">
        <div class="flex items-center gap-2  flex-wrap-reverse justify-center ">
            <Button text="Tambah Kas Masuk"  bg="btn-info text-white" @click="fn_addForm('in')" />
            <Button text="Tambah Kas Keluar" bg="btn-error text-white" @click="fn_addForm('out')"/>
        </div>
    </section>

    <section class="form_add flex flex-col gap-4 mx-6 p-5 mt-16 mb-10 shadow-sm border rounded-sm relative" v-if="condition_add_form">
        <Form_Kas_Masuk v-if="condition_add_form == 'in' " :fn_addForm="fn_addForm" :data="data" :saldo_current="saldo_current" />
        <Form_Kas_Keluar v-if="condition_add_form == 'out'" :fn_addForm="fn_addForm" :data="data" :saldo_current="saldo_current"/>
    </section>
</main>


</template>