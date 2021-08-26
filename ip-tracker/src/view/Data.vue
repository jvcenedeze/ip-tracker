<template>
  <div class="all-status-data">
    <div class="row h-100">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100 ps-4">
            <p class="status-type">IP ADDRESS</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >{{ geolocation.ip }}</p>
            <p
              class="blur-data"
              v-if="isLoading"
            >8.8.8.8</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100 ps-2">
            <p class="status-type">LOCATION</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >{{ location.city }}, {{ location.region }} - {{ location.country }}</p>
            <p
              class="blur-data"
              v-if="isLoading"
            >Mountain View, California - US</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100 ps-2">
            <p class="status-type">TIMEZONE</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >UTC {{ location.timezone }}</p>
            <p
              class="blur-data"
              v-if="isLoading"
            >UTC -07:00</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100 ps-2">
            <p class="status-type">ISP</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >{{ geolocation.isp }}</p>
            <p
              class="blur-data"
              v-if="isLoading"
            >Google LLC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Data',
  props: {
    isLoading: Boolean
  },
  computed: {
    ...mapState({
      geolocation: state => state.geolocation,
      location: state => state.geolocation && state.geolocation.location
    })
  },
}
</script>

<style lang="scss">
</style>