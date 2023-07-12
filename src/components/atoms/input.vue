<script setup>
import { onUpdated, ref } from 'vue';


const props = defineProps({
    placeholder : String,
    id : String,
    type : String,
    required : Boolean,
    keydown : Boolean
})

// Disable Spasi
function SpaceDisable(e) {
        if(e.code === "Space") {
          e.preventDefault();
          return false;  
    }
}
</script>


<template>

    <input :type="props.type" :id="props.id"
    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
    :placeholder="props.placeholder"  @input="$emit('update:modelValue', $event.target.value)" :required="props.required" @keydown="props.keydown && SpaceDisable($event)" autocomplete="off" />

</template>