<template>
  <v-flex d-flex xs12 sm12 md4>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.ads.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        ADS
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      search: '',
      rowsPerPageItems: [4],
      pagination: {}
    }
  },
  computed: {
    ...mapGetters([
      'getPlayedGames'
    ])
  },
  methods: {
    editGame (scene) {
      this.$router.push('/SceneCreator?id=' + scene.id)
    },

    infoGame (scene) {
      this.$store.dispatch('setSceneDetailMessage', scene)
    },

    continueGame (scene) {
      this.$router.push('/Scene?id=' + scene.id + '&continue=' + scene.lastGame)
    },

    newGame (scene) {
      this.$router.push('/Scene?id=' + scene.id)
    }
  }
}
</script>

<style>
  .transprent-text {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
