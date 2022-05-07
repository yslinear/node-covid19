<template>
  <div>
    <v-row>
      <v-col>
        <v-select v-model="city" :items="cities" label="縣市" solo></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="district"
          :items="districts"
          label="鄉鎮市區"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('area/fetchCities')
  },
  computed: {
    cities() {
      return this.$store.state.area.cities
    },
    districts() {
      return this.$store.state.area.districts
    },
    city: {
      get() {
        return this.$store.state.area.city
      },
      set(value) {
        this.$store.dispatch('area/setCity', value)
        this.$store.dispatch('area/setDistrict', null)
      },
    },
    district: {
      get() {
        return this.$store.state.area.district
      },
      set(value) {
        this.$store.dispatch('area/setDistrict', value)
      },
    },
  },
}
</script>
