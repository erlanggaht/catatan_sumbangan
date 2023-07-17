<script setup>

const props = defineProps( {
  text_go : String,
  link : String,
  title : String,
  desc : String
})

</script>

<template>
        <div class="alert shadow-lg fixed bottom-0 rounded-none sm:flex hidden justify-between bg-white border-none border-[#f2f2f2] text-[#1f2937] dark:bg-[#242424] dark:text-white">
            <div class="flex items-center gap-2">
              <div>
                <h3 class="font-bold">{{title}}</h3>
                <p class="text-xs">{{desc}}</p>
            </div>
            </div>
            <router-link :to="props.link"><button class="btn btn-sm bg-white text-[#1f2937] border border-[#f2f2f2] dark:hover:text-[#222] ">{{props.text_go}}</button></router-link>
          </div>
</template>