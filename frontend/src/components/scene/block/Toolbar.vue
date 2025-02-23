<template>
  <v-toolbar dense flat>
    <v-btn small @click="backToLobby">{{ $ml.get('scene.block.toolbar.backLobby') }}</v-btn>
    <v-spacer />
    <v-btn small v-if="editMode" @click="editMode = !editMode">{{ $ml.get('scene.block.toolbar.userVision') }}</v-btn>
    <v-btn small v-if="getCreatorVision && !editMode" @click="editMode = !editMode">{{ $ml.get('scene.block.toolbar.creatorVision') }}</v-btn>
    <v-btn small v-if="!getCreatorVision" @click="reportDialog = !reportDialog">{{ $ml.get('scene.block.toolbar.report') }}</v-btn>
    <v-menu offset-y v-if="editMode">
      <v-btn small slot="activator">{{ $ml.get('scene.block.toolbar.grid') }}</v-btn>
      <v-list>
        <v-list-tile @click="newGridButton">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.addButton') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="newGridInformation">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.addInfomation') }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y v-if="editMode">
      <v-btn small slot="activator">{{ $ml.get('scene.block.toolbar.scene') }}</v-btn>
      <v-list>
        <v-list-tile @click="editConfigDialog = !editConfigDialog">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.editConfig') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="layoutDialog = !layoutDialog">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.layout') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="coinsDialog = !coinsDialog">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.coin') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="saveScene">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.save') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="hasSceneId && !isPublished" @click="publishScene">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.publish') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="hasSceneId" @click="deleteScene">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.delete') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="canApprove" @click="approveScene">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.approval') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="canResolve" @click="resolveScene">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.resolve') }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  watch: {
    getToolbarLayout: {
      handler: function (val, oldVal) {
        if (val.backgroundColor) {
          let i = 0

          let content = document.querySelectorAll('.toolbar__content')
          for (i = 0; i < content.length; i++) {
            content[i].style.backgroundColor = val.backgroundColor
            content[i].style.borderColor = val.backgroundColor
          }
        }

        if (val.btnColor) {
          let i = 0

          let btn = document.querySelectorAll('.toolbar__content .btn__content')
          for (i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = val.btnColor
            btn[i].style.borderColor = val.btnColor
          }
        }

        if (val.btnTextColor) {
          let i = 0

          let btn = document.querySelectorAll('.toolbar__content .btn__content')
          for (i = 0; i < btn.length; i++) {
            btn[i].style.color = val.btnTextColor
          }
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters([
      'getCreatorVision',
      'getToolbarLayout',
      'hasSceneId',
      'isPublished',
      'canApprove',
      'canResolve'
    ]),

    editMode: {
      get () {
        return this.$store.getters.getEditMode
      },
      set (value) {
        this.$store.dispatch('setEditMode', value)
      }
    },

    layoutDialog: {
      get () {
        return this.$store.getters.getLayoutDialog
      },
      set (value) {
        this.$store.dispatch('setLayoutDialog', value)
      }
    },

    editConfigDialog: {
      get () {
        return this.$store.getters.getEditConfigDialog
      },
      set (value) {
        this.$store.dispatch('setEditConfigDialog', value)
      }
    },

    coinsDialog: {
      get () {
        return this.$store.getters.getCoinsDialog
      },
      set (value) {
        this.$store.dispatch('setCoinsDialog', value)
      }
    },

    reportDialog: {
      get () {
        return this.$store.getters.getReportDialog
      },
      set (value) {
        this.$store.dispatch('setReportDialog', value)
      }
    }
  },
  methods: {
    backToLobby () {
      this.$store.dispatch('backLobby').then(() => {
        this.$router.push('/')
      })
    },

    saveScene () {
      this.$store.dispatch('saveScene')
    },

    newGridButton () {
      this.$store.dispatch('newButtonGrid')
    },

    newGridInformation () {
      this.$store.dispatch('newInformationGrid')
    },

    publishScene () {
      this.$store.dispatch('publishScene')
    },

    approveScene () {
      this.$store.dispatch('approveScene')
    },

    resolveScene () {
      this.$store.dispatch('resolveScene')
    },

    deleteScene () {
      this.$store.dispatch('deleteScene')
    }
  }
}
</script>
