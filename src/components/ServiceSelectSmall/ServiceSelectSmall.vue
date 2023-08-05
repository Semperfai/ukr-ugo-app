<template>
  <div id="ServiceSetupSmall">
    <div
      class="custom-height w-full rounded-2xl relative bg-amber-100 hover:bg-amber-200 transition-all duration-200 ease-in"
    >
      <div
        class="absolute top-1/3 left-1/3 transform -translate-x-1/4 -translate-y-1/4"
      >
        <img width="55" :src="'img/ukr-ugo/' + iconName + '.png'" />
      </div>
    </div>

    <div class="text-sm md:text-lg text-center mt-2 text-gray-900">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { type Props } from "@/components/ServiceSelectSmall/types";

const props = defineProps<Props>();

const { text, iconName } = toRefs(props);
</script>

<style scoped>
#ServiceSetupSmall {
  .custom-height {
    height: 100px;
  }
}
</style>
