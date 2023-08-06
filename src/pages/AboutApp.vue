<template>
  <div id="AboutAppPage">
    <base-container>
      <div class="flex flex-col gap-5 h-full p-10">
        <router-link to="/" class="mb-4">
          <img width="140" src="img/ukr-ugo/logo.png" alt="logo" />
        </router-link>
        <h1 class="lg:text-2xl text-xl">
          This app has used Vue JS, Tailwind CSS, Node JS, Google Maps API, PWA
          and Vue 3 to create a powerful web app that looks and feels just like
          real taxi apps
        </h1>
        <h2 class="text-2xl font-bold m-2">## App Setup</h2>
        <div class="flex justify-center items-start flex-wrap sm:flex-nowrap">
          <ul class="flex max-w-[45%] flex-col gap-3 text-sm lg:text-lg">
            <li>
              Clone the repository git clone
              <span class="font-semibold"
                >https://github.com/Semperfai/ukr-ugo-app.git
              </span>
            </li>
            <li>
              Open a terminal, CD in to the folder and run these commands
              <span class="font-semibold"> npm i cp .env.example .env </span>
            </li>
            <li class="flex flex-col">
              <span
                >Now go to
                <span class="font-semibold"
                  >https://console.cloud.google.com/</span
                >
                Generate an API KEY.</span
              >
              <span
                >You'll need to ENABLE Maps API, Directions API, Places API, and
                Distance Matrix API..</span
              >
              <span
                >Add your new API KEY to the script inside
                **public/index.html**</span
              >
            </li>
            <li>
              Now run this command to start the project
              <span class="font-semibold"> npm run serve </span>
            </li>
            <li>
              And to start in PWA mode run the command
              <span class="font-semibold"> npm run pwa </span>
            </li>
            <li>
              And to start in PWA mode run the command
              <span class="font-semibold"> npm run pwa </span>
            </li>
            <li>
              Open another terminal
              <span class="font-semibold flex flex-col">
                <span> cd server </span>
                <span>npm i cp</span>
                <span>cp .env.example .env</span>
              </span>
            </li>
            <li>
              Add the Google API Key to the .env

              <span class="font-semibold">
                GOOGLE_MAPS_API_KEY=keyhere, npm run watch</span
              >
            </li>
          </ul>
          <div
            class="grid grid-cols-1 justify-items-center items-center md:grid-cols-2 gap-3 my-3"
          >
            <img
              class="max-w-[60%]"
              src="mobile1.png"
              alt="example mobile img"
            />
            <img
              class="max-w-[60%]"
              src="mobile2.png"
              alt="example mobile img"
            />
          </div>
        </div>
      </div>
    </base-container>
  </div>
</template>
<script setup lang="ts">
import BaseContainer from "@/components/BaseContainer/BaseContainer.vue";
</script>
