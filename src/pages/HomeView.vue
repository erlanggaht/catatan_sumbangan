<script setup>
import Alert_message from '@/components/atoms/alert_message.vue';
import Navbar from '@/components/moleculs/navbar.vue';

</script>

<template>
  <header>
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
          <Navbar title="Catatan Sumbangan!" link="/"/> 
        <!-- Page content here -->
        <main class="h-screen grid place-content-center">
        <h1 class="text-center text-4xl">Selamat Datang</h1>
        <p class="text-center p-2">silahkan masuk untuk catat pemasukan atau pengeluaran organisasi kami.</p>
        <Alert_message/>
        </main>
      </div> 
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label> 
        <ul class="menu p-4 w-80 h-full bg-base-200">
          <!-- Sidebar content here -->
          <li class="lg:hidden"><router-link :to="'/login'">Masuk</router-link></li>
          <li class="lg:hidden"><router-link :to="'/signup'">Gabung</router-link></li>
          
        </ul>
        
      </div>
    </div>
    
  </header>
</template>
