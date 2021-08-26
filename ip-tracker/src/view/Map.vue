<template>
  <div id="mapid">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="center">
        <l-popup>
          <div>
            O IP se encontra aqui!
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>

import leaflet from "leaflet";

export default {
  name: 'Map',
  data () {
    return {
      zoom: 15,
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9pb3pleCIsImEiOiJja3NwM2tibzMwMjI1MzBsY2swbGIzYm02In0.1yvOJvYWO2WiWMY7mXiWaQ',
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      mapOptions: {
        zoomSnap: 0.5
      },
      center: leaflet.latLng(this.$store.state.geolocation.location.lat, this.$store.state.geolocation.location.lng)
    }
  }
}
</script>

<style lang="scss">
#mapid {
  margin-top: -70px;
  height: 400px;
  width: 100%;
  z-index: 10;
}
</style>