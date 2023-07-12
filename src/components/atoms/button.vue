<script setup>

const props = defineProps ({
    text : String,
    icon : String,
    bg: String
})


const class_btn = `btn ${props.bg}`
</script>

<template>

    <button :className='class_btn'>
        <props.icon/>
        {{props.text}}
      </button>

</template>