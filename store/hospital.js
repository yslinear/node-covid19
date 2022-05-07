export const state = () => ({
  list: [],
})

export const actions = {
  async fetchHospitals(state, { city, district }) {
    this.$axios
      .get(`/api/v1/hospitals?city=${city}&district=${district}`)
      .then((res) => {
        this.commit('hospital/SET_HOSPITALS', res.data.data.lists)
      })
  },
}

export const mutations = {
  SET_HOSPITALS(state, value) {
    state.list = value
  },
}
