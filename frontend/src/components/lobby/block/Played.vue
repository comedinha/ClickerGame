<template>
  <v-flex d-flex xs12 sm12 md4>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.played.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-actions>
        <v-text-field v-model="search" append-icon="search" :label="$ml.get('lobby.block.played.search')" single-line />
      </v-card-actions>
      <v-container fluid grid-list-sm>
        <v-data-iterator :items="getPlayedGames.items" :search="search" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md6>
            <v-card>
              <v-system-bar dense flat>
                <span>{{ props.item.name }}</span>
              </v-system-bar>
              <v-card-media :src="props.item.image">
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
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.block.played.pagination') }}
          </v-flex>
        </v-data-iterator>
      </v-container>
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
