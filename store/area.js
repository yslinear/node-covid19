export const state = () => ({
  cities: [],
  districts: [],
  city: '',
  district: '',
})

export const actions = {
  async fetchCities() {
    this.$axios.get(`/api/v1/hospitals/cities`).then((res) => {
      this.commit('area/SET_CITIES', res.data.data)
    })
  },
  async fetchDistricts(state, city) {
    this.$axios.get(`/api/v1/hospitals/districts/${city}`).then((res) => {
      this.commit('area/SET_DISTRICTS', res.data.data)
    })
  },
  async setCity(state, city) {
    this.commit('area/SET_CITY', city)
  },
  async setDistrict(state, district) {
    this.commit('area/SET_DISTRICT', district)
  },
}

export const mutations = {
  SET_CITIES(state, value) {
    state.cities = value
  },
  SET_DISTRICTS(state, value) {
    state.districts = value
  },
  SET_CITY(state, value) {
    state.city = value
  },
  SET_DISTRICT(state, value) {
    state.district = value
  },
}
