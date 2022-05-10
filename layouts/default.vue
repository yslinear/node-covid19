<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="toolbarTitle" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — Build with
        <v-icon size="20px">mdi-coffee</v-icon> by
        <strong
          ><a href="https://yslinear.dev/about/" target="__blank"
            >Ying-Shan Lin</a
          ></strong
        >
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      title: this.toolbarTitle,
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          name: 'index',
          icon: 'mdi-home-variant',
          title: '首頁',
          to: '/',
        },
        {
          name: 'fst',
          icon: 'mdi-test-tube',
          title: '快篩試劑查詢',
          to: '/fst',
        },
      ],
      miniVariant: false,
    }
  },
  computed: {
    toolbarTitle() {
      const name = this.$route.name
      const result = this.items.find((item) => {
        if (item.name === name) {
          return item.title
        }
      })
      return result ? result.title : ''
    },
  },
}
</script>
