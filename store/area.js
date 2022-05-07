export const state = () => ({
  cities: [],
  districts: [],
  city: '',
  district: '',
})

export const actions = {
  async fetchCities() {
    this.$axios.get(`/api/v1/hospitals/cities`).then((res) => {
      this.commit('area/setCities', res.data.data)
    })
  },
  async fetchDistricts(state, city) {
    this.$axios.get(`/api/v1/hospitals/districts/${city}`).then((res) => {
      this.commit('area/setDistricts', res.data.data)
    })
  },
  async setCity(state, city) {
    this.commit('area/setCity', city)
  },
  async setDistrict(state, district) {
    this.commit('area/setDistrict', district)
  },
}

export const mutations = {
  setCities(state, value) {
    state.cities = value
  },
  setDistricts(state, value) {
    state.districts = value
  },
  setCity(state, value) {
    state.city = value
  },
  setDistrict(state, value) {
    state.district = value
  },
}
