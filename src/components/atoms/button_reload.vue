<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  text : String
})

</script>

<template>

    <button class="btn">
        <span class="loading loading-spinner loading-md"></span>
        {{props.text}}
      </button>

    </template>