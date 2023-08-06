<template>
  <div id="MapPage">
    <div
      id="BackBtn"
      class="absolute z-50 rounded-full bg-white p-1 top-8 left-4"
      @click="goBack()"
    >
      <ArrowLeftIcon :size="40" />
    </div>
    <div id="map" />

    <div id="VehicleSelection" class="w-full">
      <div class="w-full h-2 border-t"></div>
      <div
        class="w-full text-center border-t-2 p-1.5 text-gray-700 text-lg font-semibold"
      >
        Distance: {{ direction.distance.text }}
      </div>
      <div class="scrollSection">
        <div class="bg-slate-200 hover:bg-slate-300">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/ukr-ugo/x.png" alt="car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <p class="text-2xl mb-1">UUgo X</p>
                <p class="text-xl">
                  $ {{ calculatePrice(1, direction.distance.value) }}
                </p>
              </div>
              <p class="text-xl">{{ direction.duration.text }}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/ukr-ugo/comfort.png" alt="car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <p class="text-2xl mb-1">Comfort</p>
                <p class="text-xl">
                  $ {{ calculatePrice(1.25, direction.distance.value) }}
                </p>
              </div>
              <p class="text-xl">{{ direction.duration.text }}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/ukr-ugo/xl.png" alt="car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <p class="text-2xl mb-1">UUgo XL</p>
                <p class="text-xl">
                  $ {{ calculatePrice(1.5, direction.distance.value) }}
                </p>
              </div>
              <p class="text-xl">{{ direction.duration.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center bg-white py-6 px-4 w-full absolute bottom-0 shadow-inner"
      >
        <button
          class="bg-black text-2xl lg:max-w-xl text-white py-4 px-4 rounded-sm w-full hover:bg-white hover:text-black hover:border-[3px] hover:border-cyan-950 transition-all duration-200 ease-in"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useDirectionStore } from "@/stores/map.store";
import { calculatePrice } from "../lib/helpers/calculatePrice";
const direction = useDirectionStore();
const router = useRouter();

const goBack = () => {
  router.push("/directions");
};
onMounted(() => {
  if (!direction.pickup || !direction.destination) {
    router.push("/");
  }
  setTimeout(() => {
    direction.initMap();
  }, 500);
});
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
