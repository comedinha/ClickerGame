<template>
  <v-toolbar dense flat>
    <v-btn small @click="backToLobby">{{ $ml.get('scene.block.toolbar.backLobby') }}</v-btn>
    <v-btn small>{{ $ml.get('scene.block.toolbar.information') }}</v-btn>
    <v-spacer />
    <v-btn small v-if="editMode" @click="editMode = !editMode">{{ $ml.get('scene.block.toolbar.userVision') }}</v-btn>
    <v-btn small v-if="getCreatorVision && !editMode" @click="editMode = !editMode">{{ $ml.get('scene.block.toolbar.creatorVision') }}</v-btn>
    <v-menu offset-y v-if="editMode">
      <v-btn small slot="activator">{{ $ml.get('scene.block.toolbar.scene') }}</v-btn>
      <v-list>
        <v-list-tile @click="editConfigDialog = !editConfigDialog">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.editConfig') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="saveScene">
          <v-list-tile-title>{{ $ml.get('scene.block.toolbar.save') }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCreatorVision'
    ]),

    editMode: {
      get () {
        return this.$store.getters.getEditMode
      },
      set (value) {
        this.$store.dispatch('setEditMode', value)
      }
    },

    editConfigDialog: {
      get () {
        return this.$store.getters.getEditConfigDialog
      },
      set (value) {
        this.$store.dispatch('setEditConfigDialog', value)
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
    }
  }
}
</script>
