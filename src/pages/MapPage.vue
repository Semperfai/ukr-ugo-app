<template>
  <div id="MapPage">
    <div id="map" />

    <div id="VehicleSelection" class="w-full">
      <div class="w-full h-2 border-t"></div>
      <div
        class="w-full text-center border-t-2 p-1.5 text-gray-700 text-lg font-semibold">
        Distance: 0 km
      </div>
      <div class="scrollSection">
        <div class="bg-service-sel-large hover:bg-lime-300">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/ukr-ugo/x.png" alt="car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <p class="text-2xl mb-1">UkrUgoX</p>
                <p class="text-xl">$ 55.5</p>
              </div>
              <p class="text-xl">7 hourse</p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/ukr-ugo/comfort.png" alt="car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <p class="text-2xl mb-1">UkrUgoComfort</p>
                <p class="text-xl">$ 55.5</p>
              </div>
              <p class="text-xl">7 hourse</p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/ukr-ugo/xl.png" alt="car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <p class="text-2xl mb-1">UkrUgoXL</p>
                <p class="text-xl">$ 55.5</p>
              </div>
              <p class="text-xl">7 hourse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import mapStyles from '@/mapStyles'

let map: google.maps.Map

async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary
  map = new Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 48.3794, lng: 31.1656 },
    zoom: 4,
    minZoom: 4,
    maxZoom: 17,
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyles()
  })
}

onMounted(() => {
  setTimeout(() => {
    initMap()
  }, 500)
})
</script>

<style>
#map {
  width: 100%;
  height: 45vh;
  top: 0px;
  left: 0px;
}

.gm-style-cc {
  display: none;
}

#VehicleSelection {
  .scrollSection {
    height: calc(50vh - 120px);
    position: absolute;
    overflow-y: auto;
    width: 100%;
  }
}
</style>
