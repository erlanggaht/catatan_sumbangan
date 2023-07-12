<script setup>
import { defineProps } from 'vue';

const props = defineProps ({
  title : String,
  link : String
})

</script>

<template>
    <!-- Navbar -->
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
    <div class="w-full navbar bg-base-100">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div class="flex-1 px-2 mx-2"><router-link :to="props.link">{{props.title}}</router-link></div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li><router-link :to="'/login'">Masuk</router-link></li>
          </ul>
        </div>
      </div>

      <div class="drawer-side z-50">
        <label for="my-drawer-3" class="drawer-overlay"></label> 
        <ul class="menu p-4 w-80 h-full bg-base-200">
          <!-- Sidebar content here -->
          <li class="lg:hidden"><router-link :to="'/login'">Masuk</router-link></li>
          <li class="lg:hidden"><router-link :to="'/signup'">Gabung</router-link></li>
          
        </ul>
        
      </div>

</template>