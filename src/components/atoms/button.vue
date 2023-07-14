<script setup>
import AddIcon from '@/assets/icon/AddIcon.vue'


const props = defineProps ({
    text : String,
    bg: String
})


const class_btn = `btn ${props.bg}`
</script>

<template>

    <button :className='class_btn'>
        <AddIcon/>
        {{props.text}}
      </button>

</template>