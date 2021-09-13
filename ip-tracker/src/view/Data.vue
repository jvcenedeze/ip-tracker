<template>
  <div class="all-status-data">
    <div
      class="row h-100"
      v-if="!this.$store.state.error"
    >
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100">
            <p class="status-type">IP ADDRESS</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >{{ geolocation.ip }}</p>
            <div
              class="loading-data"
              v-if="isLoading"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100">
            <p class="status-type">LOCATION</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >{{ location.city }}, {{ location.region }} - {{ location.country }}</p>
            <div
              class="loading-data"
              v-if="isLoading"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100">
            <p class="status-type">TIMEZONE</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >UTC {{ location.timezone }}</p>
            <div
              class="loading-data"
              v-if="isLoading"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="status d-flex justify-content-center align-items-center">
          <div class="h-50 w-100">
            <p class="status-type">ISP</p>
            <p
              class="status-data"
              v-if="!isLoading"
            >{{ geolocation.isp }}</p>
            <div
              class="loading-data"
              v-if="isLoading"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row h-100"
      v-if="this.$store.state.error == 'Error: Request failed with status code 422'"
    >
      <div class="col-12 h-100 w-100">
        <div class="alert-invalid-ip h-100 d-flex justify-content-center align-items-center">
          Input correct IPv4 or IPv6 address.
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
.all-status-data {
  max-width: 1300px;
  margin: auto;
}
.alert-invalid-ip {
  border-radius: 15px;
  background-color: rgb(234, 234, 255);
  color: blue;
}

@media (min-width: 992px) {
  .alert-invalid-ip {
    font-size: 24px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .alert-invalid-ip {
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  .alert-invalid-ip {
    font-size: 14px;
  }
}
</style>