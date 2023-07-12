<script setup>
import DebouncedCurrencyInput from '@/Utility/Currency_Input.vue'


</script>

<template>

        <h1 class="text-center text-2xl mb-6 drop-shadow-sm">Tambah Kas Masuk</h1>

        <div class="input_keterangan text-center">
            <label class="w-[130px] inline-block text-left">No Kwitansi</label> 
            <p class="w-full max-w-xs inline-block text-left text-gray-300 cursor-not-allowed">100</p>
        </div>

        <div class="input_keterangan text-center">
        <label class="w-[130px] inline-block text-left">Keterangan</label> 
        <input type="textarea" placeholder="Keterangan" minlength='1' maxlength="50" class="textarea textarea-bordered input-sm w-full max-w-xs" />
        </div>
        
        <div class="input_Tanggal text-center">
            <label  class="w-[130px] inline-block text-left">Tanggal</label> 
            <input type="date" placeholder="Tanggal" class="input input-bordered input-sm w-full max-w-xs" />
        </div>

        <div class="input_Tanggal text-center">
            <label class="w-[130px] inline-block text-left">Jumblah Masuk </label> 
            <DebouncedCurrencyInput type="text"  v-model="value"
            :options="{
              currency: 'IDR',
              hideCurrencySymbolOnFocus: false,
              hideGroupingSeparatorOnFocus: false,
              hideNegligibleDecimalDigitsOnFocus: false,
            }" class=" input input-bordered input-sm w-full max-w-xs"  placeholder="Rp."/>
        </div>
    

    
</template>