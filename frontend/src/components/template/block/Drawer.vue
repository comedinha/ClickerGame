<template>
    <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" fixed right>
      <v-list>
        <v-list-group prepend-icon="account_circle" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Username</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="openInformation">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ $ml.get('template.index.user.information') }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>lock_open</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ $ml.get('template.index.user.logout') }}</v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    informationDialog: {
      get () {
        return this.$store.getters.getInformationDialog
      },
      set (value) {
        this.$store.dispatch('setInformationDialog', value)
      }
    },

    drawer: {
      get () {
        return this.$store.getters.getDrawer
      },
      set (value) {
        this.$store.dispatch('setDrawer', value)
      }
    }
  },
  methods: {
    openInformation () {
      this.informationDialog = true
      this.drawer = false
    },

    logout () {
      this.$store.dispatch('signout').then(() => {
        this.$router.push('/Signin')
      })
    }
  }
}
</script>
