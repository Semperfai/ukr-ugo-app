/* eslint-disable prefer-const */
import axios from "axios";
import mapStyles from "@/mapStyles";
import { defineStore } from "pinia";

interface State {
  pickup: string;
  destination: string;
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  latLng: {
    start: {
      lat: number;
      lng: number;
    };
    end: {
      lat: number;
      lng: number;
    };
  };
}

export const useDirectionStore = defineStore("map", {
  state: (): State => ({
    pickup: "",
    destination: "",
    distance: {
      text: "",
      value: 0,
    },
    duration: {
      text: "",
      value: 0,
    },
    latLng: {
      start: {
        lat: 0,
        lng: 0,
      },
      end: {
        lat: 0,
        lng: 0,
      },
    },
  }),
  actions: {
    async initMap(): Promise<void> {
      let map: google.maps.Map;
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

      if (this.pickup && this.destination) {
        this.getDirections(map, directionsRenderer, directionsService);
        this.getDistance();
      }
    },
    async getDistance() {
      const res = await axios.get(
        "distance/" + this.pickup + "/" + this.destination
      );
      this.distance.text = res.data.rows[0].elements[0].distance?.text;
      this.distance.value = res.data.rows[0].elements[0].distance?.value;
      this.duration.text = res.data.rows[0].elements[0].duration?.text;
      this.duration.value = res.data.rows[0].elements[0].duration?.value;
    },
    getDirections(
      map: google.maps.Map,
      directionsRenderer: google.maps.DirectionsRenderer,
      directionsService: google.maps.DirectionsService
    ) {
      directionsRenderer.setMap(map);

      const request: google.maps.DirectionsRequest = {
        origin: this.pickup,
        destination: this.destination,
        optimizeWaypoints: true, // set to true if you want google to determine the shortest route or false to use the order specified.
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          if (result) {
            this.latLng.start.lat =
              result.routes[0].legs[0].start_location.lat();
            this.latLng.start.lng =
              result.routes[0].legs[0].start_location.lng();
            this.latLng.end.lat = result.routes[0].legs[0].end_location.lat();
            this.latLng.end.lng = result.routes[0].legs[0].end_location.lng();
          }

          directionsRenderer.setDirections(result);
        }
      });
    },
  },
  persist: true,
});
