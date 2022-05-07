<template>
  <v-row>
    <v-col class="text-center">
      <HospitalInfo v-bind:hospitalCode="this.$route.params.code" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FstHospitalPage',
}
</script>
