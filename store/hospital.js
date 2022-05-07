export const state = () => ({
  list: [],
})

export const actions = {
  async fetchHospitals(state, { city, district }) {
    this.$axios
      .get(`/api/v1/hospitals?city=${city}&district=${district}`)
      .then((res) => {
        this.commit('hospital/sethospitals', res.data.data.lists)
      })
  },
}

export const mutations = {
  sethospitals(state, value) {
    state.list = value
  },
}
