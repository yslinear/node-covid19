import Vue from 'vue'
import { Line } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

Vue.component('line-chart', {
  extends: Line,
  props: ['chartData', 'chartOptions'],
  mounted() {
    this.renderLineChart()
  },
  methods: {
    renderLineChart() {
      this.renderChart(this.chartData, this.chartOptions)
    },
  },
  watch: {
    chartData: {
      handler: function () {
        this.renderLineChart()
      },
      deep: true,
    },
  },
})
