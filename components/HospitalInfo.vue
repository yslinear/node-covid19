<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <v-col xl="12" lg="6" md="12" sm="12" xs="12">
          <v-card height="100%" class="d-flex align-center justify-center">
            <v-card-text>
              <p class="text-h1 text--primary">
                {{ hospitalData.fst[0].Amount }}
              </p>
              <p class="text-h3 text--primary">
                {{ hospitalData.fst[0].Brand }}
              </p>
              <p class="text-h5 text--secondary">
                {{ hospitalData.fst[0].Remark }}
              </p>
              <p class="text--secondary">
                本網站最後更新日期：{{ $dayjs(hospitalData.fst[0].UpdatedAt).format('LLL') }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="12" lg="6" md="12" sm="12" xs="12">
          <v-card height="100%" class="d-flex align-center justify-center">
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
      <v-row>
        <v-col>
          <v-card>
            <client-only>
              <line-chart
                :chartData="chartData"
                :chartOptions="chartOptions"
                :width="null"
                :height="null"
              ></line-chart>
            </client-only>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['hospitalData'],
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: '快篩試劑數量',
            backgroundColor: this.$vuetify.theme.currentTheme.primary,
            borderColor: this.$vuetify.theme.currentTheme.accent,
            fill: 1,
            tension: 0.4,
            data: [],
          },
        ],
      },
      chartOptions: {
        aspectRatio: 1.5,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    this.chartData.datasets[0].data = this.hospitalData.fst
      .slice(0)
      .reverse()
      .map((item) => item.Amount)
    this.chartData.labels = this.hospitalData.fst
      .slice(0)
      .reverse()
      .map((item) => this.$dayjs(item.UpdatedAt).fromNow())
  },
}
</script>
