<template>
  <v-app id="inspire">
    <UpdateInformation v-if="informationDialog" />
    <News v-if="newsDialog" />
    <AddNews v-if="getNewsAddDialog" />
    <Drawer v-if="drawer" />
    <v-toolbar dense>
      <v-tooltip v-if="!viewAllScenes" bottom>
        <v-btn class="mx-0" slot="activator" @click="viewAllScenes = !viewAllScenes" icon><v-icon>view_module</v-icon></v-btn>
        <span>{{ $ml.get('lobby.lobby.allScenes') }}</span>
      </v-tooltip>
      <v-tooltip v-if="viewAllScenes" bottom>
        <v-btn class="mx-0" slot="activator" @click="viewAllScenes = !viewAllScenes" icon><v-icon>view_array</v-icon></v-btn>
        <span>{{ $ml.get('lobby.lobby.lobby') }}</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn class="mx-0" slot="activator" icon @click.stop="newsDialog = !newsDialog">
          <v-badge icon overlap top color="red">
            <span slot="badge" v-if="getNewsUpdate !== 0">{{ getNewsUpdate }}</span>
            <v-icon>developer_board</v-icon>
          </v-badge>
        </v-btn>
        <span>{{ $ml.get('lobby.lobby.news') }}</span>
      </v-tooltip>
      <v-spacer />
      <v-toolbar-title><img height="45px" src="./../../assets/logo.png"></v-toolbar-title>
      <v-spacer />
      <v-tooltip v-if="getAdmin" bottom>
        <v-btn class="mx-0" slot="activator" @click="sceneApprovalDialog = !sceneApprovalDialog" small icon>
          <v-badge icon overlap top color="red">
            <span slot="badge" v-if="getSceneApprovalNumber !== 0">{{ getSceneApprovalNumber }}</span>
            <v-icon>flag</v-icon>
          </v-badge>
        </v-btn>
        <span>{{ $ml.get('lobby.lobby.approval') }}</span>
      </v-tooltip>
      <v-tooltip v-if="getAdmin" bottom>
        <v-btn class="mx-0" slot="activator" @click="sceneReportDialog = !sceneReportDialog" small icon>
          <v-badge icon overlap top color="red">
            <span slot="badge" v-if="getSceneReportNumber !== 0">{{ getSceneReportNumber }}</span>
            <v-icon>report_problem</v-icon>
          </v-badge>
        </v-btn>
        <span>{{ $ml.get('lobby.lobby.reported') }}</span>
      </v-tooltip>
      <v-tooltip v-if="getAdmin" bottom>
        <v-btn class="mx-0" slot="activator" @click="usersDialog = !usersDialog" small icon><v-icon>people</v-icon></v-btn>
        <span>{{ $ml.get('lobby.lobby.users') }}</span>
      </v-tooltip>
      <v-menu class="hidden-sm-and-down" open-on-hover bottom offset-y>
        <v-toolbar-title slot="activator">
          {{ getUsername }} <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-if="!getGuest" @click.stop="informationDialog = !informationDialog">
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
import { mapGetters } from 'vuex'

import Drawer from '@/components/template/block/Drawer'
import Footer from '@/components/template/block/Footer'

import UpdateInformation from '@/components/template/dialog/UpdateInformation'
import News from '@/components/template/dialog/News'
import AddNews from '@/components/template/dialog/AddNews'

export default {
  beforeCreate () {
    this.$store.dispatch('getInfoLobby').catch(() => {
      this.logout()
    })
  },
  components: {
    Drawer,
    Footer,
    UpdateInformation,
    News,
    AddNews
  },
  computed: {
    ...mapGetters([
      'getAdmin',
      'getGuest',
      'getNewsUpdate',
      'getUsername',
      'getNewsAddDialog',
      'getSceneApprovalNumber',
      'getSceneReportNumber'
    ]),

    newsDialog: {
      get () {
        return this.$store.getters.getNewsDialog
      },
      set (value) {
        this.$store.dispatch('setNewsDialog', value)
      }
    },

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
    },

    viewAllScenes: {
      get () {
        return this.$store.getters.getViewAllScenes
      },
      set (value) {
        this.$store.dispatch('setViewAllScenes', value)
      }
    },

    sceneApprovalDialog: {
      get () {
        return this.$store.getters.getSceneApprovalDialog
      },
      set (value) {
        this.$store.dispatch('setSceneApprovalDialog', value)
      }
    },

    sceneReportDialog: {
      get () {
        return this.$store.getters.getSceneReportDialog
      },
      set (value) {
        this.$store.dispatch('setSceneReportDialog', value)
      }
    },

    usersDialog: {
      get () {
        return this.$store.getters.getUsersDialog
      },
      set (value) {
        this.$store.dispatch('setUsersDialog', value)
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('signout').then(() => {
        this.$router.push('/Signin')
      })
    }
  }
}
</script>
