<script setup>

const props = defineProps( {
  text_go : String,
  link : String,
  title : String,
  desc : String
})

</script>

<template>
    
            <div class="flex items-center gap-2">
              <div>
                <h3 class="font-bold">{{title}}</h3>
                <p class="text-xs">{{desc}}</p>
            </div>
            </div>
            <router-link :to="props.link"><button class="btn btn-sm bg-white hover:bg-gray-100 border-none text-[#1f2937] border border-[#f2f2f2] dark:hover:text-[#222] dark:hover:bg-white ">{{props.text_go}}</button></router-link>
  
</template>