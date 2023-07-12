<template>
        <div class="alert shadow-lg fixed bottom-0  sm:flex hidden justify-between">
            <div class="flex items-center gap-2">
              <div>
                <h3 class="font-bold">Ayo Gabung</h3>
              <p class="text-xs">di organisasi kami</p>
            </div>
            </div>
            <router-link :to="'/signup'"><button class="btn btn-sm">Gabung</button></router-link>
          </div>
</template>