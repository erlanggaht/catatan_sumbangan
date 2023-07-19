<script setup>

import {  onMounted, ref } from 'vue';
import getLaporan_Nama from '@/API/get_laporan_nama';
import { useRoute } from 'vue-router';
import rupiah from '@/Utility/to_idr.js'


const route = useRoute()
let data = ref([])
let nama_lengkap = ref('')
let total_saldo =ref(0)


onMounted(async() => {
        


  
  // GETAPI
  try {
    const response = await getLaporan_Nama(route.params.uid) 
    data.value = response
    
  } catch (error) {
    console.log(error.response.data.msg)
  }
  
  //Get Nama _lengkap di storage
  nama_lengkap.value = localStorage.getItem('nama_lengkap')

    // Total Saldo
  try {
    let saldo = []
   data.value.forEach(element => {
    saldo.push(element.saldo)
  });
  
  total_saldo.value = rupiah(saldo.reduce ((acc,current) => {return acc+current})) 
  } catch (error) {
    
  }


})

</script>


<template>
<h1 class="text-center text-2xl  pt-2">{{nama_lengkap}}</h1>
<p class="text-center pb-12">{{this.$route.params.uid && ''}}</p>
<div class="overflow-x-auto sm:p-12 bg-white dark:bg-[#222]" v-if="data.length > 0 ">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>No.</th> 
              <th>Kode Barang</th> 
              <th>Keterangan</th> 
              <th>Tanggal</th> 
              <th>Penerimaan</th> 
              <th>Pengeluaran</th>
              <th>Saldo</th>
              <td>Action</td>

            </tr>
          </thead> 
          <tbody>
            <tr v-for="datas,index in data" :key="index">
              <th>{{index + 1}}</th> 
              <td>{{datas.kode}}</td> 
              <td>{{datas.keterangan}}</td> 
              <td>{{datas.tanggal}}</td> 
              <td>{{datas.penerimaan}}</td> 
              <td>{{datas.pengeluaran}}</td>
              <td>{{datas.saldo}}</td>
              <td></td>
            </tr>
          </tbody> 
          <tfoot>
            <tr>
              <th></th> 
              <th></th> 
              <th></th> 
              <th></th> 
              <th></th> 
              <th></th> 
              <th>Total : {{total_saldo}}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div v-else class="text-center"> {{ nama_lengkap }} belum menulis. tidak ada data</div>

</template>


<style scoped>

tr {
  border-color:#f2f2f2;
}

</style>