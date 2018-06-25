<template>
  <v-flex d-flex xs12 sm4 md2>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.myScenes.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getMyScanes.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md12>
            <v-card>
              <v-system-bar dense flat>
                <span>{{ props.item.name }}</span>
              </v-system-bar>
              <v-card-media height="100%" :src="props.item.image">
                <v-card height="105px" width="100%" class='white--text' color="transparent" flat tile>
                  <v-card-text class="transprent-text body-2">
                    {{ props.item.smallDescription }}
                  </v-card-text>
                </v-card>
              </v-card-media>
              <v-system-bar dense flat>
                <v-spacer />
                <v-tooltip v-if="props.item.creator" bottom>
                  <v-btn small icon slot="activator" @click="editGame(props.item)"><v-icon>settings</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.edit') }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn small icon slot="activator" @click="infoGame(props.item)"><v-icon>info</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.details') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.lastGame" bottom>
                  <v-btn small icon slot="activator" @click="newGame(props.item)"><v-icon>add_circle</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.newGame') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.lastGame" bottom>
                  <v-btn small icon slot="activator" @click="continueGame(props.item)"><v-icon>play_circle_filled</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.continue') }}</span>
                </v-tooltip>
                <v-tooltip v-if="!props.item.lastGame" bottom>
                  <v-btn small icon slot="activator" @click="newGame(props.item)"><v-icon>play_circle_filled</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.play') }}</span>
                </v-tooltip>
              </v-system-bar>
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.block.myScenes.pagination') }}
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-container class="align-end">
        <v-btn block>{{ $ml.get('lobby.block.myScenes.button') }}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rowsPerPageItems: [2],
      pagination: {}
    }
  },
  computed: {
    ...mapGetters([
      'getMyScanes'
    ])
  },

  methods: {
    changeCarousel (val, oldVal) {
      if (this.getMostPlayed[val].background) {
        this.bgcolor = this.getMostPlayed[val].background
      }
    },

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
