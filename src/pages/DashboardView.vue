<script setup>
import Navbar from '@/components/moleculs/navbar.vue';
import Table from '@/components/moleculs/table.vue'
import Button from '@/components/atoms/button.vue';
import AddIcon from '@/assets/icon/AddIcon.vue'
import Form_Kas_Masuk from '@/components/organism/form_kas_masuk.vue'
import Form_Kas_Keluar from '@/components/organism/form_kas_keluar.vue'

</script>

<template>

<Navbar title="Dashboard" link="/dashboard"/>

<main class="my-12">
    <section class="flex items-center gap-3 sm:px-12 my-12 sm:my-1 justify-center sm:justify-between flex-wrap-reverse ">
        <div class="flex items-center gap-2">
            <Button text="Tambah Kas Masuk" :icon="AddIcon" bg="btn-info text-white"/>
            <Button text="Tambah Kas Keluar" :icon="AddIcon" bg="btn-error text-white"/>
        </div>
        <p class="pr-3">Saldo Saat ini : Rp. 530.000</p>
    </section>

    <section class="form_add flex flex-col gap-4 mx-12 p-5 mt-16 mb-10 shadow-sm border rounded-sm">
        <Form_Kas_Masuk />
        <Form_Kas_Keluar/>
    </section>


    <Table/>
</main>


</template>