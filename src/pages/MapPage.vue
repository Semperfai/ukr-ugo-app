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
        Distance: {{ distance.text }}
      </div>
      <div class="scrollSection">
        <div class="bg-slate-200 hover:bg-slate-300">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/ukr-ugo/x.png" alt="car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <p class="text-2xl mb-1">UUgo X</p>
                <p class="text-xl">$ {{ calculatePrice(1, distance.value) }}</p>
              </div>
              <p class="text-xl">{{ duration.text }}</p>
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
                  $ {{ calculatePrice(1.25, distance.value) }}
                </p>
              </div>
              <p class="text-xl">{{ duration.text }}</p>
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
                  $ {{ calculatePrice(1.5, distance.value) }}
                </p>
              </div>
              <p class="text-xl">{{ duration.text }}</p>
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
import axios from "axios";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useDirectionStore } from "@/stores/direction";
import { ref } from "vue";
import mapStyles from "@/mapStyles";
const direction = useDirectionStore();
const router = useRouter();
let map: google.maps.Map;

const distance = ref({
  text: "",
  value: null,
});
const duration = ref({
  text: "",
  value: null,
});
const latLng = ref({
  start: {
    lat: 0,
    lng: 0,
  },
  end: {
    lat: 0,
    lng: 0,
  },
});

async function initMap(): Promise<void> {
  const directionsService = new window.google.maps.DirectionsService();
  const directionsRenderer = new window.google.maps.DirectionsRenderer();

  directionsRenderer.setOptions({
    polylineOptions: {
      strokeColor: "#212121",
      strokeWeight: 5,
    },
  });

  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    minZoom: 3,
    maxZoom: 17,
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyles(),
  });

  if (direction.pickup && direction.destination) {
    getDirections(map, directionsRenderer, directionsService);
    getDistance();
  }
}
const getDirections = (
  map: google.maps.Map,
  directionsRenderer: google.maps.DirectionsRenderer,
  directionsService: google.maps.DirectionsService
) => {
  directionsRenderer.setMap(map);

  const request: google.maps.DirectionsRequest = {
    origin: direction.pickup,
    destination: direction.destination,
    optimizeWaypoints: true, // set to true if you want google to determine the shortest route or false to use the order specified.
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, function (result, status) {
    if (status === "OK") {
      if (result) {
        latLng.value.start.lat = result.routes[0].legs[0].start_location.lat();
        latLng.value.start.lng = result.routes[0].legs[0].start_location.lng();
        latLng.value.end.lat = result.routes[0].legs[0].end_location.lat();
        latLng.value.end.lng = result.routes[0].legs[0].end_location.lng();
      }

      directionsRenderer.setDirections(result);
    }
  });
};

const getDistance = async () => {
  let res = await axios.get(
    "distance/" + direction.pickup + "/" + direction.destination
  );

  distance.value.text = res.data.rows[0].elements[0].distance.text;
  distance.value.value = res.data.rows[0].elements[0].distance.value;
  duration.value.text = res.data.rows[0].elements[0].duration.text;
  duration.value.value = res.data.rows[0].elements[0].duration.value;
};

const calculatePrice = (multiplier: number, price: number) => {
  let res = (price / 900) * multiplier;
  return res.toFixed(2);
};

const goBack = () => {
  router.push("/directions");
};
onMounted(() => {
  if (!direction.pickup || !direction.destination) {
    router.push("/");
  }
  setTimeout(() => {
    initMap();
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
