<script setup>
import { onUpdated, ref } from 'vue';
import HumanIcon from '@/assets/icon/HumanIcon.vue'
import PasswordIcon from '@/assets/icon/PasswordIcon.vue'
import InputComponent from '@/components/atoms/input.vue'
import { useRouter } from 'vue-router';
import registrasi_api from '@/API/registrasi.js'
import Validasi_Register from '@/Utility/Validasi_Register.js'
import Alert_warning from '../components/atoms/alert_warning.vue';
import Alert_success from '@/components/atoms/alert_success.vue';
import audio_error from '@/assets/error.mp3'
import audio_success from '@/assets/success.mp3'


const formNext = ref(false)
const router = useRouter()
const username = ref('')
const password = ref('')
const nama_lengkap = ref('')
const alamat = ref('')
const token_organisasi = ref ('')
const alert = ref(false)
const condition_alert = ref({
    text_alert : '',
    condition : false //jika error false jika success true
})

function Submit () {
     
    // Validasi
   const validasi = Validasi_Register(username,password,nama_lengkap,token_organisasi,condition_alert.value.text_alert)
   if(validasi) {
    var audio = new Audio();
            // no event listener needed here
            audio.src = audio_success;
            audio.play();

       registrasi_api(
        username.value,
        password.value,
        nama_lengkap.value,
        alamat.value,
        token_organisasi.value
        ).then((res)=>{  
            condition_alert.value = {text_alert:res.msg,condition:true}
            setTimeout(()=>{
                router.replace('/login')
            },1400)
            return false
        }).catch (err =>{ 
            var audio = new Audio();
            // no event listener needed here
            audio.src = audio_error;
            audio.play();

            condition_alert.value.text_alert = err.response.data.msg        
        
        })
   }
   alert.value = true
   setTimeout(()=>{
    alert.value = false
   },2700)
}


document.title = 'Gabung' 
</script>

<template>

    <main class="h-screen">

        <form
            class="artboard bg-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl  py-4"
            >
            <h1 class="text-3xl text-center p-4 pb-0 m-0">Hello, Calon Member!</h1>
            <p class="text-center p-0 m-0 font-thin italice text-sm">{{!formNext ? "masukan username dan password. simpan dengan aman ya." : "silahkan masukan data anda. "}}</p>

            <section class="px-6 mt-12" v-if="!formNext">
                <div>
                    <label for="username"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <div class="flex">
                        <span
                            class="inline-flex items-center px-3 text-sm text-gray-900 bg-base-600 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <HumanIcon />
                        </span>
                        <InputComponent id="username" placeholder="erlanggaht93" type="text" v-model="username" :required='true' :keydown='true' :value="username" />
                    </div>

                    <label for="password"
                        class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div class="flex">
                        <span
                            class="inline-flex items-center px-3 text-sm text-gray-900 bg-base-600 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <PasswordIcon />
                        </span>
                        <InputComponent id="password" placeholder="*****" type="password" v-model="password" :required='true' :value="password"/>
                    </div>
                </div>

                <div class="text-right py-3 ">
                    <button type="button"  @click.prevent="router.push('/login')"
                        class="btn border btn-ghost hover:bg-transparent">masuk</button>
                    <button type="submit" class="btn bg-transparent border-none " @click.prevent="formNext = true">Lanjut &#8594;</button>
                </div>
            </section>


            <section class="px-6 mt-12" v-if="formNext">
                <div>
                    <label for="nama_lengkap"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap</label>
                    <div class="flex">
                        <InputComponent id="nama_lengkap" placeholder="Erlangga Hidayatullah" type="text" v-model="nama_lengkap" :required='true' :value="nama_lengkap" />
                    </div>

                    <label for="alamat"
                        class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white" :required='false'>Alamat</label>
                    <div class="flex">
                        
                        <InputComponent id="alamat" placeholder="Sumedang, Jawa Barat" type="text" v-model="alamat" :value="alamat"/>
                    </div>

                    <label for="token_organisasi"
                    class="mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white flex justify-between items-center pr-1" :required='true'><p>Token Organisasi<sup> *</sup></p> <p class="font-thin">tanya admin</p></label>
                <div class="flex">
                    
                    <InputComponent id="token_organisasi" placeholder="*****" type="password" v-model="token_organisasi" :value="token_organisasi" />
                </div>
                </div>

                <div class="text-right py-3 ">
                    <button type="button" @click.prevent="formNext = false"
                        class="btn bg-transparent border-none mx-2">&#8592;
                    </button>
                    <button type="submit"  class="btn bg-base-900 "  @click.prevent="Submit()"
                    >Gabung</button>
                </div>
            </section>

        </form>


        <!-- Alert -->
        <div
        :class="`${alert ? 'fixed bottom-3 right-0 sm:right-4 transition-all w-full sm:w-1/4' : 'fixed -bottom-32 w-full sm:w-1/4 right-3 ease-in-out transition-all delay-700'}`">
        <Alert_success :text_alert="condition_alert.text_alert" v-if="condition_alert.condition" />
        <Alert_warning :text_alert="condition_alert.text_alert" v-if="!condition_alert.condition" />
    </div>

    </main>

    
</template>


<style scoped>
.artboard {
    max-width: 640px;
}
</style>