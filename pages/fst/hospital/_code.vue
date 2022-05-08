<template>
  <v-row>
    <v-col class="text-center">
      <HospitalInfo :hospital-data="hospitalData" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FstHospitalPage',
  head() {
    return {
      title: this.hospitalName,
    }
  },
  data() {
    return {}
  },
  async asyncData({ route, $axios }) {
    const { data } = await $axios.get(`/api/v1/hospital/${route.params.code}`)
    return { hospitalData: data.data, hospitalName: data.data.info.Name }
  },
}
</script>
