<template>
  <v-flex d-flex xs12 sm4 md2>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.myScenes.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="getMyScenesLoading" color="blue" indeterminate />
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getMyScenes.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md12>
            <v-card>
              <v-system-bar dense flat>
                <span>{{ props.item.name }}</span>
                <v-spacer />
                <v-tooltip v-if="!props.item.approved" bottom>
                  <v-icon slot="activator">flag</v-icon>
                  <span>{{ $ml.get('lobby.lobby.approved') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.deleted" bottom>
                  <v-icon slot="activator">delete</v-icon>
                  <span>{{ $ml.get('lobby.lobby.deleted') }}</span>
                </v-tooltip>
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
                <v-tooltip v-if="props.item.canApprove" bottom>
                  <v-btn small icon slot="activator" @click="approveGame(props.item)"><v-icon>check_circle</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.approve') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.canResolve" bottom>
                  <v-btn small icon slot="activator" @click="resolveGame(props.item)"><v-icon>done</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.conclude') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.canDelete" bottom>
                  <v-btn small icon slot="activator" @click="deleteGame(props.item)"><v-icon>delete</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.delete') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.canEdit" bottom>
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
          <v-flex slot="no-data">
            <v-alert :value="getMyScenesLoading" color="info" icon="sync">
              {{ $ml.get('lobby.lobby.loading') }}
            </v-alert>
            <v-alert :value="!getMyScenesLoading" color="error" icon="warning">
              {{ $ml.get('error.noData') }}
            </v-alert>
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-container class="align-end">
        <v-btn block to="/Scene">{{ $ml.get('lobby.block.myScenes.button') }}</v-btn>
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
      'getMyScenes',
      'getMyScenesLoading'
    ])
  },

  methods: {
    approveGame (scene) {
      this.$store.dispatch('setApproveScene', scene)
    },

    resolveGame (scene) {
      this.$store.dispatch('setResolveScene', scene)
    },

    deleteGame (scene) {
      this.$store.dispatch('setDeleteScene', scene)
    },

    editGame (scene) {
      this.$router.push('/Scene?createId=' + scene.id)
    },

    infoGame (scene) {
      this.$store.dispatch('setSceneDetailInfo', scene)
    },

    continueGame (scene) {
      this.$router.push('/Scene?playId=' + scene.id + '&continueId=' + scene.lastGame)
    },

    newGame (scene) {
      this.$router.push('/Scene?playId=' + scene.id)
    }
  }
}
</script>

<style>
  .transprent-text {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
