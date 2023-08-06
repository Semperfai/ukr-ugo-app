<template>
  <div id="PWAGuide">
    <base-container>
      <div class="flex flex-col gap-5 h-full p-10">
        <router-link to="/" class="mb-4">
          <img width="140" src="img/ukr-ugo/logo.png" alt="logo" />
        </router-link>
        <h1 class="lg:text-2xl text-xl">
          Web Apps are apps built for the browser using web technologies such as
          HTML, JS, CSS. These apps are accessible via a URL, which makes it
          universally accessible to anyone with a device that can access the
          internet with a modern browser.
        </h1>
        <p>
          A Progressive Web App expands on this concept by enabling a Web App to
          be “installed” onto your device directly from the browser. This
          includes mobile, tablets, and even your computer’s desktop. It runs in
          a headless browser so it looks 100% like an app and even works in
          offline mode. It also appears as an icon on your home screen like any
          normal app. Similar to a native app, you also have access to the
          features of the device if the relevant browser APIs exist, including
          camera, Bluetooth, NFC, and more. You get all of this without ever
          going through the App Store or Play Store!
        </p>
        <h2 class="text-2xl font-bold m-2">## Steps</h2>
        <div class="flex justify-center items-start flex-wrap sm:flex-nowrap">
          <ul
            class="flex w-full sm:max-w-[45%] flex-col gap-3 text-sm lg:text-lg"
          >
            <li>
              You can use npx as shown above or you can install it globally:
              <span class="font-semibold">
                npm install --global vue-pwa-asset-generator
              </span>
            </li>
            <li>
              VueJS PWA asset generator has a vue-asset-generate command with
              two parameters:
              <p class="font-semibold">
                -a: input asset, it can be an SVG file or a PNG file (the
                largest image is a 512x512 png image).
              </p>
              <p class="font-semibold">
                -o: output folder (created if it does not exist). This parameter
                is optional, by default, vue-pwa-asset-generator will assume the
                command is run in a VueJS project. Therefor the manifest.json
                and favicon.ico are in public folder, the rest ies in
                public/img/icons folder.
              </p>
              <p class="font-semibold">
                -b: fallback background color for the ico image.
              </p>
              <p class="font-semibold">
                --no-manifest: option to not generate manifest.json file
              </p>
            </li>
            <li>
              Examples
              <p class="font-semibold">vue-asset-generate -a logo.png -o img</p>
              <p class="font-semibold">vue-asset-generate -a logo.svg</p>
            </li>
            <li>
              Add script to package.json
              <p class="font-semibold">
                "pwa":"npm run build && npx http-server dist"
              </p>
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
