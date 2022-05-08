<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="text-center">
      <v-card>
        <v-card-title class="headline justify-center">
          歡迎來到 COVID-19 查詢系統
        </v-card-title>
        <v-card-text>
          <p>
            本網站資料來源為
            <a href="https://data.nhi.gov.tw/" target="__blank"
              >健康保險資料開放服務</a
            >
          </p>
          <p>本網站資料僅供參考，請以政府資訊為準。</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
