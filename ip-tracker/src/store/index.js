import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  geolocation: {
    location: {}
  },
  error: null
}

const mutations = {
  setGeolocation: (state, payload) => state.geolocation = payload,
  setError: (state, error) => state.error = error
}

const actions = {
  async getGeolocation ({ commit }, ip) {
    this.state.error = null
    try {
      const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_ghwQV38CFObSmiYrHunXAbpqE0owU&ipAddress=${ip}`)
      if (response.statusText === 'OK') {
        if (response.data.code) {
          commit('setError', response.data)
        } else {
          commit('setGeolocation', response.data)
        }
      } else {
        commit('setError', response.status)
      }
    } catch (error) {
      commit('setError', error)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
