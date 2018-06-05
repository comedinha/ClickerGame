<template>
  <v-app id="inspire">
    <Drawer :drawer="drawer" @updateDrawer="drawer = $event" />
    <v-toolbar dense>
      <v-btn icon>
        <v-badge top color="red">
          <span slot="badge">1</span>
          <v-icon>announcement</v-icon>
        </v-badge>
      </v-btn>
      <v-spacer />
      <v-toolbar-title>My Click</v-toolbar-title>
      <v-spacer />
      <v-menu class="hidden-sm-and-down" open-on-hover bottom offset-y>
        <v-toolbar-title slot="activator">
          Username <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Editar Senha</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Preferências</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Drawer from '@/components/template/block/Drawer'
import Footer from '@/components/template/block/Footer'

export default {
  data () {
    return {
      drawer: false
    }
  },
  components: {
    Drawer,
    Footer
  },
  methods: {
    logout () {
      this.$store.dispatch('authLogout').then(() => {
        this.$router.push('/Signin')
      })
    }
  }
}
</script>
