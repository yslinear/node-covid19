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
  data() {
    return {
      city: null,
      district: null,
    }
  },
  watch: {
    city(newCity) {
      console.log(newCity)
      this.$store.dispatch('area/fetchDistricts', newCity)
    },
  },
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
  },
}
</script>
