<template>
  <div id="Directions">
    <div class="grid grid-cols-12 mt-4 shadow-md">
      <div class="col-span-2 mx-auto">
        <div>
          <ArrowLeftIcon size="35" />
        </div>
        <div class="h-16 mt-4 w-full">
          <div :class="[isPickupActive ? 'circle-black' : 'circle-gray']"></div>
          <div class="line"></div>
          <div
            :class="[!isPickupActive ? 'square-black' : 'square-gray']"
          ></div>
        </div>
      </div>

      <div class="col-span-10 pr-4">
        <div class="w-full h-5"></div>
        <div class="mb-2 mt-5">
          <AutoCompleteInput
            v-model:input="pickup"
            placeholder="Enter"
            theId="inputFrom"
            @is-active="isPickupActive = true"
          />
        </div>
        <div class="mb-3">
          <AutoCompleteInput
            v-model:input="destination"
            placeholder="Where to?"
            theId="inputTo"
            @is-active="isPickupActive = false"
          />
        </div>
      </div>
    </div>

    <div v-for="address in addressData" :key="address">
      <div class="flex items-center custom-border-bottom">
        <div class="bg-gray-400 mx-5 p-1.5 rounded-full">
          <MapMarkerIcon :size="30" fillColor="#f5f5f5" />
        </div>
        <div>
          <p class="text-lg text-gray-600">{{ address?.description }}</p>
          <p class="text-lg text-gray-400">{{ address?.terms[2].value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AutoCompleteInput from "@/components/AutoCompleteInput/AutoCompleteInput.vue";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue";
import { debounce } from "lodash";
import { onMounted, ref, watch } from "vue";
import axios from "axios";

const isPickupActive = ref<boolean>(true);
const pickup = ref<string>("");
const destination = ref<string>("");
const addressData = ref<any>(null);
//methods
const findAddress = debounce(async (address?: string) => {
  if (address === null || address === "null" || address === "") return;
  try {
    let res = await axios.get("address/" + address);
    addressData.value = res.data;
  } catch (error: Error | unknown) {
    console.log(error);
  }
}, 300);

watch(pickup, async (pickup) => {
  await findAddress(pickup);
});
watch(destination, async (destination) => {
  await findAddress(destination);
});

onMounted(() => {
  const inputFrom = document.getElementById("inputFrom");
  if (inputFrom) {
    inputFrom.focus();
  }
});
</script>

<style scoped>
#Directions {
  height: 100vh;
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }

  .circle-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
    border-radius: 100%;
  }

  .circle-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
    border-radius: 100%;
  }

  .square-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
  }

  .square-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
  }

  .line {
    margin: 0 auto;
    width: 2px;
    height: 45px;
    background-color: rgb(191, 191, 191);
  }

  .custom-border-bottom {
    border-bottom: 1px solid rgb(230, 230, 230);
  }
}
</style>
