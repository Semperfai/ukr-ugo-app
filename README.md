## App Setup

Clone the repository
```
git clone https://github.com/Semperfai/ukr-ugo-app.git
```

Open a terminal, CD in to the folder and run these commands
```
npm i

cp .env.example .env
```

Now go to https://console.cloud.google.com/

Generate an API KEY.

You'll need to ENABLE Maps API, Directions API, Places API, and Distance Matrix API.

Add your new API KEY to the script inside **public/index.html**

Now run this command to start the project 
```
npm run serve
```

And to start in PWA mode run the command
```
npm run pwa
```
Open another terminal
```
cd server

npm i

cp .env.example .env
```

Add the Google API Key to the .env

```
GOOGLE_MAPS_API_KEY=keyhere

npm run watch
```

# Application Images

<p float="left">
  <img width="270" alt="Screenshot" src="https://res.cloudinary.com/dnenvhtxp/image/upload/v1691435502/ukr-ugo/mobile1_xyrheu.png">
  <img width="270" alt="Screenshot" src="https://res.cloudinary.com/dnenvhtxp/image/upload/v1691435502/ukr-ugo/mobile2_sktjh2.png">
  <img width="270" alt="Screenshot" src="https://res.cloudinary.com/dnenvhtxp/image/upload/v1691435502/ukr-ugo/mobile3_fq9xin.png">
</p>
