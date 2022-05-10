<template>
  <v-data-table
    :headers="headers"
    :items="hospitals"
    item-key="name"
    class="elevation-1"
  >
    <template #item.Name="{ item }">
      <nuxt-link :to="`/fst/hospital/${item.Code}`">
        {{ item.Name }}
      </nuxt-link>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '名稱', value: 'Name', align: 'left' },
        { text: '縣市', value: 'City', align: 'left' },
        { text: '鄉鎮市區', value: 'District', align: 'left' },
        { text: '地址', value: 'Address', align: 'left' },
        { text: '電話', value: 'Phone', align: 'left' },
      ],
    }
  },
  computed: {
    hospitals() {
      return this.$store.state.hospital.list
    },
  },
}
</script>
