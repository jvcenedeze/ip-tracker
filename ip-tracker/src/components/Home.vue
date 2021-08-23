<template>
  <div class="container-fluid">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="blue-background">
        <div class="row">
          <div class="col-1 col-md-2 col-lg-3 col-xl-4"></div>
          <div class="col-10 col-md-8 col-lg-6 col-xl-4">
            <div class="d-flex flex-column justify-content-center">
              <h3 class="text-center pt-4 header-h3">IP Address Tracker</h3>
              <div class="input-group my-3">
                <input
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Search for any IP address or domain"
                  aria-label="Search for any IP address or domain"
                  aria-describedby="basic-addon2"
                  v-model.trim="ipOrDomain"
                >
                <span
                  class="input-group-text d-flex justify-content-center alig-items-center"
                  @click="putGeolocation"
                  id="basic-addon2"
                ><i class="fas fa-chevron-right fa"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-1 col-md-2"></div>
          <div class="col-10 col-md-8">
            <div class="all-status-data">
              <div class="row h-100">
                <div class="col-12 col-md-6 col-lg-3">
                  <div class="status d-flex justify-content-center align-items-center">
                    <div class="h-50 w-100 ps-4">
                      <p class="status-type">IP ADDRESS</p>
                      <p
                        class="status-data"
                        v-if="ip"
                      >{{ ip }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                  <div class="status d-flex justify-content-center align-items-center">
                    <div class="h-50 w-100 ps-2">
                      <p class="status-type">LOCATION</p>
                      <p
                        class="status-data"
                        v-if="city && region && country"
                      >{{ city }}, {{ region }} - {{ country }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                  <div class="status d-flex justify-content-center align-items-center">
                    <div class="h-50 w-100 ps-2">
                      <p class="status-type">TIMEZONE</p>
                      <p
                        class="status-data"
                        v-if="timezone"
                      >UTC {{ timezone }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                  <div class="status d-flex justify-content-center align-items-center">
                    <div class="h-50 w-100 ps-2">
                      <p class="status-type">ISP</p>
                      <p
                        class="status-data"
                        v-if="isp"
                      >{{ isp }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mapid"></div>
  </div>

</template>

<script>

import { mapState, mapActions } from 'vuex'
import leaflet from "leaflet";

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false,
      ipOrDomain: ''
    }
  },
  computed: {
    ...mapState({
      ip: state => state.geolocation.ip,
      city: state => state.geolocation.location.city,
      region: state => state.geolocation.location.region,
      country: state => state.geolocation.location.country,
      timezone: state => state.geolocation.location.timezone,
      isp: state => state.geolocation.isp,
      lat: state => state.geolocation.location.lat,
      lng: state => state.geolocation.location.lng
    })
  },
  methods: {
    ...mapActions([
      'getGeolocation'
    ]),
    async putGeolocation () {
      this.isLoading = true
      // eslint-disable-next-line no-unused-vars
      const response = await this.getGeolocation(this.ipOrDomain)
      this.isLoading = false
    },
  },
  created () {
    this.getGeolocation('')
  },
  mounted () {
    let mymap;

    mymap = leaflet.map('mapid').setView([51.505, -0.09], 13);

    leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9pb3pleCIsImEiOiJja3NwM2tibzMwMjI1MzBsY2swbGIzYm02In0.1yvOJvYWO2WiWMY7mXiWaQ', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicG9pb3pleCIsImEiOiJja3NwM2tibzMwMjI1MzBsY2swbGIzYm02In0.1yvOJvYWO2WiWMY7mXiWaQ'
    }).addTo(mymap);

  }
}
</script>

<style lang="scss">
$very-dark-grey: hsl(0, 0%, 17%);
$dark-grey: hsl(0, 0%, 59%);

.blue-background {
  background-image: url("../assets/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 100%;
  .header-h3 {
    color: white;
  }
  span#basic-addon2 {
    background-color: $very-dark-grey;
    border: none;
    width: 55px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    i {
      color: white;
    }
  }
  .input-group {
    height: 55px;
    input.form-control {
      font-size: 18px;
      border: none;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      padding-left: 20px;
    }
  }
}
.all-status-data {
  background-color: white;
  border-radius: 15px;
  height: 140px;
  margin-top: 30px;
  div.row {
    div.col-12 {
      height: 100%;
      .status {
        height: 100%;
        .status-type {
          font-size: 12px;
          margin-top: -5px;
          font-weight: 500;
          color: $dark-grey;
        }
        .status-data {
          margin-top: -10px;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
}
#mapid {
  height: 500px;
  width: 800px;
}

@media (min-width: 992px) {
  .status {
    div {
      border-right: 1px solid hsl(0, 0%, 79%);
    }
  }
  .all-status-data {
    .row {
      .col-12:last-child {
        .status {
          div {
            border: none;
          }
        }
      }
    }
  }
}
</style>