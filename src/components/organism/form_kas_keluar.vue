<script setup>
import DebouncedCurrencyInput from '@/Utility/Currency_Input.vue'
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue';
import getData_current from '@/API/get_data_current.js'
import AddData_api from '../../API/add_data';
import { parseCookies } from 'nookies';
import Alert_warning from '@/components/atoms/alert_warning.vue';
import Alert_success from '@/components/atoms/alert_success.vue';
import audio_success from '@/assets/success.mp3'


let props = defineProps({
    fn_addForm : Function,
    data : Array | Object,

  
})


const noKwitansi = ref(null)

// Alert
const alert = ref(false)
const condition_alert = ref({
    text_alert : '',
    condition : false //jika error false jika success true
})

// Input Model Ref
const keterangan = ref('')
const jenis = ref('Uang')
const tanggal = ref('')
const penerimaan = ref(null)
const pengeluaran = ref('')
const username = ref('')

async function Submit_Keluar () {

    if(tanggal.value === '') {
        condition_alert.value = {text_alert:"Tanggal harus di isi",condition:false}
        var audio = new Audio();
            // no event listener needed here
            audio.src = audio_error;
            audio.play();
            
        alert.value = true
        setTimeout(() => {
            alert.value = false
        }, 3400)

        return false
    }

const add_data = await AddData_api(
    username.value,
    keterangan.value,
    jenis.value,
    tanggal.value,
    penerimaan.value,
    pengeluaran.value
    )

    var audio = new Audio();
        // no event listener needed here
        audio.src = audio_success;
        audio.play();

    condition_alert.value = {text_alert:"data PENGELUARAN berhasil ditambah. silahkan klik tombol refresh diatas table untuk melihat data baru." ||add_data.data.msg,condition:true}
   
    alert.value = true
    setTimeout(() => {
        alert.value = false
    }, 3400)


 // Empty Input
 const empty_string = [keterangan,tanggal,pengeluaran] 
        for(let i = 0;i < empty_string.length;i++) {
        empty_string[i].value = ''
        }  

     
//   location.reload()
}


onBeforeMount(() => {
    username.value = parseCookies().admin
})

onMounted(async() => {

    const response = await getData_current()
    noKwitansi.value = response.kode

})






</script>

<template>

        <h1 class="text-center text-2xl mb-6 drop-shadow-sm mt-10 md:mt-0 ">Tambah Kas Keluar</h1>

        <div class="input_keterangan sm:text-center">
            <label class="w-[130px] inline-block text-left">Nama</label> 
        <input type="input" :placeholder='username' class="input input-bordered input-sm w-full max-w-xs bg-[#f2f2f2] disabled:bg-[#f2f2f2]  border-none" :disabled="true"  />
        </div>

        <div class="input_keterangan sm:text-center">
        <label class="w-[130px] inline-block text-left">Keterangan</label> 
        <input type="textarea" placeholder="Keterangan" minlength='1' maxlength="50" class="textarea textarea-bordered input-sm w-full max-w-xs bg-[#f2f2f2]" v-model="keterangan" />
        </div>

        <div class="input_keterangan sm:text-center">
            <label class="w-[130px] inline-block text-left">Jenis</label> 
            <select className="select select-bordered w-full max-w-xs bg-[#f2f2f2] text-[#222]"  v-model="jenis">
                <option disabled selected>Jenis Donasi</option>
                <option>Uang</option>
                <option>Barang</option>
              </select>            
            </div>
        
        <div class="input_Tanggal sm:text-center">
            <label  class="w-[130px] inline-block text-left ">Tanggal</label> 
            <input type="date" placeholder="Tanggal" class="input input-bordered input-sm w-full max-w-xs bg-[#f2f2f2]" 
            v-model="tanggal" required/>
        </div>
        

        <div class="input_keterangan absolute top-2 left-2 p-2" >
            <label class=" inline-block text-left text-gray-500 dark:text-white">No Kwitansi : {{noKwitansi + 1 || '100'}} </label>             
        </div>
        
        <div class="input_Tanggal sm:text-center">
            <label class="w-[130px] inline-block text-left ">Jumblah Keluar </label> 
            <DebouncedCurrencyInput type="text" 
            :options="{
              currency: 'IDR',
              hideCurrencySymbolOnFocus: false,
              hideGroupingSeparatorOnFocus: false,
              hideNegligibleDecimalDigitsOnFocus: false,
            }" class=" input input-bordered input-sm w-full max-w-xs bg-[#f2f2f2]"  placeholder="Rp."  v-model="pengeluaran"/>
        </div>

      
        <div class="text-right flex justify-end gap-2 mt-8 sm:mt-0 ">
            <button class="btn btn-ghost" @click="fn_addForm(false)">Tutup</button>
            <button class="btn btn-ghost" @click="Submit_Keluar">Tambah</button>
        </div>

  <!-- Alert -->
  <div
  :class="`${alert ? 'fixed top-0 sm:top-3 right-0 sm:right-4 transition-all w-full sm:w-1/3 z-50' : 'fixed -bottom-32 w-full sm:w-1/4 right-3 ease-in-out transition-all delay-700'}`">
  <Alert_success :text_alert="condition_alert.text_alert" v-if="condition_alert.condition" />
  <Alert_warning :text_alert="condition_alert.text_alert" v-if="!condition_alert.condition" />
</div>

</template>


<style scoped>
input,textarea {
    background-color: #fff !important;
    color: #222 !important;
}

</style>