<template>
  <div id="Home" class="flex flex-col h-screen">
    <div class="m-3 mb-auto">
      <div class="my-20"></div>

      <div class="grid grid-cols-2 gap-3 my-3">
        <ServiceSelectLarge
          :promo="true"
          text="Ride"
          imageWidth="74"
          icon-name="ride" />
        <div class="grid grid-cols-4 gap-3">
          <ServiceSelectSmall text="PWA guide" icon-name="pwa" />
          <ServiceSelectSmall text="About app" icon-name="info" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceSelectLarge from '@/components/ServiceSelectLarge/ServiceSelectLarge.vue'
import ServiceSelectSmall from '@/components/ServiceSelectSmall/ServiceSelectSmall.vue'
</script>
