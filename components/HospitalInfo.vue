<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <v-col xl="12" lg="6" md="12" sm="12" xs="12" align-self="center">
          <v-card>
            <v-card-text>
              <p class="text-h1 text--primary">
                {{ hospitalData.fst[0].Amount }}
              </p>
              <p class="text-h3 text--primary">
                {{ hospitalData.fst[0].Brand }}
              </p>
              <p class="text-h6 text--secondary">
                {{ hospitalData.fst[0].Remark }}
              </p>
              <p class="text--secondary">
                本網站最後更新日期：{{ hospitalData.fst[0].UpdatedAt }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="12" lg="6" md="12" sm="12" xs="12" align-self="center">
          <v-card>
            <v-card-text>
              <p class="text-h3 text--primary">
                {{ hospitalData.info.Name }}
              </p>
              <p>
                <a
                  class="text-h5 text--primary"
                  :href="`http://www.google.com/maps/place/${hospitalData.info.Lat},${hospitalData.info.Lng}`"
                  target="__blank"
                >
                  {{ hospitalData.info.City }} {{ hospitalData.info.District }}
                  {{ hospitalData.info.Address }}
                </a>
              </p>
              <p>
                <a
                  class="text-h5 text--primary"
                  :href="`tel:${hospitalData.info.Phone}`"
                  >{{ hospitalData.info.Phone }}</a
                >
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['hospitalCode'],
  mounted() {
    this.fetchhospitalData()
  },
  data() {
    return {
      hospitalData: {
        fst: [
          {
            UpdatedAt: '',
            Brand: '',
            Amount: '',
            Remark: '',
          },
        ],
        info: '',
      },
    }
  },
  methods: {
    fetchhospitalData() {
      this.$axios.get(`/api/v1/hospital/${this.hospitalCode}`).then((res) => {
        this.hospitalData = res.data.data
      })
    },
  },
}
</script>
