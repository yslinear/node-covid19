<template>
  <v-row>
    <v-col class="text-center">
      <AreaFilter />
      <HospitalTable />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FstPage',
  watch: {
    '$store.state.area.city': function (newCity) {
      this.$store.dispatch('area/fetchDistricts', newCity)
      this.$store.dispatch('area/setDistrict', '')
      this.$store.dispatch('hospital/fetchHospitals', {
        city: this.$store.state.area.city,
        district: this.$store.state.area.district,
      })
    },
    '$store.state.area.district': function (newDistrict) {
      if (!!newDistrict) {
        this.$store.dispatch('hospital/fetchHospitals', {
          city: this.$store.state.area.city,
          district: newDistrict,
        })
      }
    },
  },
}
</script>
