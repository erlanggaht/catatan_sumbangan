<script setup>
import { ref } from 'vue';
import HumanIcon from '@/assets/icon/HumanIcon.vue'
import PasswordIcon from '@/assets/icon/PasswordIcon.vue'
import InputComponent from '@/components/atoms/input.vue'
import { useRouter } from 'vue-router';
import login_api from '@/API/login';
import Alert_warning from '@/components/atoms/alert_warning.vue';
import Alert_success from '@/components/atoms/alert_success.vue';
import audio_error from '@/assets/error.mp3'
import audio_success from '@/assets/success.mp3'
import {setCookie} from 'nookies'
const router = useRouter()

const username = ref('')
const password = ref('')
const alert = ref(false)
const condition_alert = ref({
    text_alert : '',
    condition : false //jika error false jika success true
})

function Submit() {

    const response = login_api(username.value, password.value)
    response.then((res) => {
        const refresh_token = res.token.refreshToken
        
        

        var audio = new Audio();
            // no event listener needed here
            audio.src = audio_success;
            audio.play();


        condition_alert.value = {text_alert:res.msg,condition:true}
        setTimeout(() => {
            router.replace('/dashboard')
        }, 1200)

        alert.value = true
        setTimeout(() => {
            alert.value = false
        }, 2700)

    // setcook
        setCookie(null,'lgn',refresh_token,{
            maxAge : 6000000,
            path : "/"
        })
        setCookie(null,'admin',username.value,{
            maxAge : 6000000,
            path : "/"
        })
       
        return false
    }).catch(err => {

        var audio = new Audio();
            // no event listener needed here
            audio.src = audio_error;
            audio.play();
        condition_alert.value.text_alert = err.response?.data.msg   
        alert.value = true
        setTimeout(() => {
            alert.value = false
        }, 2700)

          
    
})


   


}

document.title = 'Masuk' 
</script>

<template>
    <main class="h-screen">

        <form
            class="artboard md:w-1/2 bg-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl  py-4">
            <h1 class="text-3xl text-center p-4 pb-0 m-0">Hello, Admin!</h1>
            <p class="text-center p-0 m-0 font-thin italice text-sm">masukan username dan password ya.</p>

            <section class="px-6 mt-12">

                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm text-gray-900 bg-base-600 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <HumanIcon />
                    </span>
                    <InputComponent id="username" placeholder="..." type="text" v-model="username" />
                </div>

                <label for="password"
                    class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <div class="flex">
                    <span
                        class="inline-flex items-center px-3 text-sm text-gray-900 bg-base-600 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <PasswordIcon />
                    </span>
                    <InputComponent id="password" placeholder="*****" type="password" v-model='password' />
                </div>

                <div class="text-right py-3 ">
                    <button type="button" @click.prevent="router.push('/signup')"
                        class="btn border btn-ghost hover:bg-transparent">gabung</button>
                    <button type="submit" class="btn bg-base-900 btn-ghost" @click.prevent="Submit">masuk</button>
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