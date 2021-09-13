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
                  @keyup.enter="setMap"
                  v-model.trim="ipOrDomain"
                >
                <span
                  class="input-group-text d-flex justify-content-center alig-items-center"
                  @click="setMap"
                  id="basic-addon2"
                ><i class="fas fa-chevron-right fa"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-1"></div>
        <div class="col-10">
          <Data :isLoading="isLoading" />
        </div>
      </div>
    </div>
    <Map v-if="!isLoading && !this.$store.state.error" />
  </div>
</template>

<script>

import Map from './../view/Map.vue'
import Data from './../view/Data.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Map,
    Data
  },
  data () {
    return {
      isLoading: true,
      ipOrDomain: ''
    }
  },
  methods: {
    ...mapActions([
      'getGeolocation'
    ]),
    setLoading (payload) {
      this.isLoading = payload
    },
    async mountMap () {
      // eslint-disable-next-line no-unused-vars
      const response = await this.getGeolocation(this.ipOrDomain)
      this.setLoading(false)
    },
    async setMap () {
      this.setLoading(true)
      // eslint-disable-next-line no-unused-vars
      const response = await this.getGeolocation(this.ipOrDomain)
      this.setLoading(false)
    }
  },
  created () {
    this.mountMap()
  }
}
</script>

<style lang="scss">
$very-dark-grey: hsl(0, 0%, 17%);
$middle-dark-grey: hsl(0, 0%, 30%);
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
    transition: background-color 0.3s;
    border: none;
    width: 55px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    i {
      color: white;
    }
  }
  span#basic-addon2:hover {
    background-color: $middle-dark-grey;
    transition: background-color 0.3s;
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
.row {
  z-index: 20;
  .col-10 {
    .all-status-data {
      background-color: white;
      border-radius: 15px;
      div.row {
        div.col-12 {
          .status {
            z-index: 30;
            .status-type {
              margin-top: -5px;
              font-weight: 500;
              color: $dark-grey;
              z-index: 30;
            }
            .status-data {
              margin-top: -10px;
              font-weight: 500;
              z-index: 30;
            }
          }
        }
      }
    }
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

@media (min-width: 992px) {
  #mapid {
    margin-top: -70px;
  }
  div.col-12 {
    height: 100%;
    .status {
      height: 100%;

      .status-type {
        font-size: 12px;
      }
      .status-data {
        font-size: 20px;
      }
      .loading-data {
        opacity: 0.7;
        animation: skeleton-loading 1s linear infinite alternate;
        width: 90%;
        height: 20px;
        border-radius: 0.2rem;
        margin-top: -5px;
      }
      div {
        border-right: 1px solid hsl(0, 0%, 79%);
      }
    }
    .all-status-data {
      height: 140px;
      margin-top: -70px;
      .row {
        .col-12:first-child {
          .status {
            div {
              padding-left: 20px;
            }
          }
        }
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
}

@media (min-width: 768px) and (max-width: 991px) {
  #mapid {
    margin-top: -110px;
  }
  .all-status-data {
    height: 220px;
    margin-top: -110px;
    .row {
      .col-12 {
        height: 50%;
        .status {
          height: 100%;
          margin: 0 16px;
          .status-type {
            font-size: 12px;
          }
          .status-data {
            font-size: 20px;
          }
          .loading-data {
            opacity: 0.7;
            animation: skeleton-loading 1s linear infinite alternate;
            width: 90%;
            height: 20px;
            border-radius: 0.2rem;
            margin-top: -5px;
          }
          div {
            margin-right: -50px;
            padding-right: 18px;
            p {
              margin-left: -30px;
            }
          }
        }
      }
      .col-12:first-child {
        .status {
          border-bottom: 1px solid hsl(0, 0%, 79%);
          div {
            border-right: 1px solid hsl(0, 0%, 79%);
            p {
              margin-left: -20px;
            }
          }
        }
      }
      .col-12:nth-child(3) {
        .status {
          div {
            border-right: 1px solid hsl(0, 0%, 79%);
            p {
              margin-left: -20px;
            }
          }
        }
      }
      .col-12:last-child {
        .status {
          border-top: 1px solid hsl(0, 0%, 79%);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  #mapid {
    margin-top: -130px;
  }
  .all-status-data {
    margin-top: -100px;
    height: 230px;
    .row {
      .col-12 {
        .status {
          .status-type {
            font-size: 10px;
            margin-bottom: 10px;
            letter-spacing: 1.5px;
            text-align: center;
          }
          .status-data {
            font-size: 16px;
            text-align: center;
          }
          .loading-data {
            opacity: 0.7;
            animation: skeleton-loading 1s linear infinite alternate;
            width: 90%;
            height: 20px;
            border-radius: 0.2rem;
            margin: 0px auto;
          }
        }
      }
    }
  }
  .all-status-data {
    .row {
      .col-12:first-child {
        .status {
          padding-top: 15px;
        }
      }
    }
  }
}
</style>