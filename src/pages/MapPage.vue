<template>
  <div id="MapPage">
    <div id="map" />
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
  }, 200)
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

  .bg-custom-gray {
    background-color: rgb(237, 237, 237);
  }
}
</style>
