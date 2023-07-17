<script setup>

const props = defineProps( {
  text_go : String,
  link : String,
  title : String,
  desc : String
})

</script>

<template>
        <div class="alert shadow-lg fixed bottom-0  sm:flex hidden justify-between">
            <div class="flex items-center gap-2">
              <div>
                <h3 class="font-bold">{{title}}</h3>
                <p class="text-xs">{{desc}}</p>
            </div>
            </div>
            <router-link :to="props.link"><button class="btn btn-sm">{{props.text_go}}</button></router-link>
          </div>
</template>