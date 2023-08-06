<template>
  <div id="Home" class="flex flex-col h-screen">
    <div class="m-3 mb-auto">
      <div class="my-10">
        <img width="140" src="img/logo/logo.png" alt="logo" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
        <ServiceSelectLarge
          @click="isNavigation('directions')"
          :promo="true"
          text="Ride"
          imageWidth="74"
          icon-name="ride"
        />
        <div class="grid grid-cols-4 gap-3">
          <router-link to="pwa">
            <ServiceSelectSmall text="PWA guide" icon-name="pwa" />
          </router-link>
          <router-link to="about">
            <ServiceSelectSmall text="About app" icon-name="info" />
          </router-link>
        </div>

        <div
          @click="isNavigation('directions')"
          class="w-ful bg-slate-100 h-14 rounded-full flex items-center p-3"
        >
          <MagnifyIcon :size="40" />
          <div class="ml-3 text-xs font-semibold text-gray-700">
            Enter pick-up point
          </div>
        </div>
      </div>
      <footer
        class="w-full z-50 flex justify-around p-1 mb-2 border-t-2 border-t-gray-200"
      >
        <div class="grid place-items-center">
          <HomeIcon :size="30" fillColor="#1f1e1e" />
          <div
            class="w-full -mt-1 text-xs text-center text-gray-800 font-semibold"
          >
            Home
          </div>
        </div>
        <div
          @click="isNavigation('directions')"
          class="grid place-items-center"
        >
          <MapMarkerIcon :size="30" fillColor="#b3b1b1" />
          <div
            class="w-full -mt-1 text-xs text-center text-gray-400 font-semibold"
          >
            Destination
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceSelectLarge from "@/components/ServiceSelectLarge/ServiceSelectLarge.vue";
import ServiceSelectSmall from "@/components/ServiceSelectSmall/ServiceSelectSmall.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import HomeIcon from "vue-material-design-icons/Home.vue";
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue";
import { useRouter } from "vue-router";
import { useDirectionStore } from "@/stores/map.store";
import { onMounted } from "vue";
const router = useRouter();
const direction = useDirectionStore();

const isNavigation = (path: string) => {
  router.push(path);
};

onMounted(() => {
  direction.pickup = "";
  direction.destination = "";
});
</script>
@/stores/direction.store @/stores/map.store
