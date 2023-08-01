<template>
  <div id="ServiceSetupLarge">
    <div
      class="custom-height w-full rounded-2xl bg-lime-200 hover:bg-lime-300 transition-all duration-200 ease-in">
      <div v-if="promo" class="w-full relative z-10">
        <span
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-700 p-0.5 px-2 text-gray-100 rounded-3xl text-xs">
          Promo
        </span>
      </div>

      <div class="flex justify-between p-2">
        <div class="text-2xl ml-2 hover:bg-slate-500 text-gray-900 mt-14">
          {{ text }}
        </div>
        <div class="mt-3 mr-1">
          <img :width="imageWidth" :src="'img/ukr-ugo/' + iconName + '.png'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { type Props } from './types'

const props = withDefaults(defineProps<Props>(), {
  promo: false
})
const { text, imageWidth, iconName, promo } = toRefs(props)
</script>

<style scoped>
#ServiceSetupLarge {
  .custom-height {
    height: 100px;
  }
}
</style>
