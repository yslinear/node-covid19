<template>
  <v-row>
    <v-col class="text-center">
      <HospitalInfo
        v-bind:hospitalCode="this.$route.params.code"
        :hospitalName.sync="hospitalName"
      />
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
    return {
      hospitalName: '',
    }
  },
}
</script>
