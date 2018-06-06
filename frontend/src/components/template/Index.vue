<template>
  <v-app id="inspire">
    <UpdateInformation :information="information" @updateInformation="information = $event" />
    <News :admin="admin" :news="news" @updateNews="news = $event" />
    <Drawer :drawer="drawer" @updateDrawer="drawer = $event" :information="information" @updateInformation="information = $event" />
    <v-toolbar dense>
      <v-btn icon v-if="update" @click.stop="news = !news" :update="update" @updateUpdate="update = $event">
        <v-badge overlap top color="red">
          <span slot="badge">!</span>
          <v-icon>new_releases</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon v-if="!update">
        <v-icon>info</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title>{{ $ml.get('game.name') }}</v-toolbar-title>
      <v-spacer />
      <v-menu class="hidden-sm-and-down" open-on-hover bottom offset-y>
        <v-toolbar-title slot="activator">
          Username <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile @click.stop="information = !information">
            <v-list-tile-content>{{ $ml.get('template.index.user.information') }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-content>{{ $ml.get('template.index.user.logout') }}</v-list-tile-content>
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

import UpdateInformation from '@/components/template/dialog/UpdateInformation'
import News from '@/components/template/dialog/News'

export default {
  data () {
    return {
      admin: true,
      drawer: false,
      information: false,
      news: false,
      update: true
    }
  },
  components: {
    Drawer,
    Footer,
    UpdateInformation,
    News
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
