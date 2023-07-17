<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  text : String
})

</script>

<template>

    <button class="btn bg-white text-[#1f2937] border border-[#f2f2f2] hover:text-[#fff]">
        <span class="loading loading-spinner loading-md"></span>
        {{props.text}}
      </button>

    </template>