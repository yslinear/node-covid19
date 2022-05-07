<template>
  <v-row>
    <v-col class="text-center">
      <AreaFilter />
    </v-col>
  </v-row>
</template>

<script>
import AreaFilter from '~/components/AreaFilter.vue'
export default {
  name: 'FstPage',
  components: { AreaFilter },
  data() {
    return {
      cities: [],
    }
  },
  fetchOnServer: true,
}
</script>
