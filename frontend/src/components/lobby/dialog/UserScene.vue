<template>
  <v-dialog v-model="userSceneDialog" max-width="750px">
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.with('u', getUserSelectedName).get('lobby.dialog.userScene.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="getUserSceneLoading" color="blue" indeterminate />
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getUserScene.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md4>
            <v-card>
              <v-system-bar>
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
                <v-tooltip v-if="!props.item.enabled" bottom>
                  <v-icon slot="activator">lock</v-icon>
                  <span>{{ $ml.get('lobby.lobby.enabled') }}</span>
                </v-tooltip>
              </v-system-bar>
              <v-card-media height="100%" :src="props.item.image">
                <v-card height="105px" width="100%" class='white--text' color="transparent" flat tile>
                  <v-card-text class="transprent-text body-2">
                    {{ props.item.smallDescription }}
                  </v-card-text>
                </v-card>
              </v-card-media>
              <v-system-bar>
                <v-spacer />
                <v-tooltip v-if="props.item.canEdit" bottom>
                  <v-btn small class="mx-0" icon slot="activator" @click="editGame(props.item)"><v-icon>settings</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.edit') }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn small class="mx-0" icon slot="activator" @click="infoGame(props.item)"><v-icon>info</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.details') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.lastGame" bottom>
                  <v-btn small class="mx-0" icon slot="activator" @click="newGame(props.item)"><v-icon>add_circle</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.newGame') }}</span>
                </v-tooltip>
                <v-tooltip v-if="props.item.lastGame" bottom>
                  <v-btn small class="mx-0" icon slot="activator" @click="continueGame(props.item)"><v-icon>play_circle_filled</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.continue') }}</span>
                </v-tooltip>
                <v-tooltip v-if="!props.item.lastGame" bottom>
                  <v-btn small class="mx-0" icon slot="activator" @click="newGame(props.item)"><v-icon>play_circle_filled</v-icon></v-btn>
                  <span>{{ $ml.get('lobby.lobby.play') }}</span>
                </v-tooltip>
              </v-system-bar>
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.dialog.userScene.pagination') }}
          </v-flex>
          <v-flex slot="no-data">
            <v-alert :value="getUserSceneLoading" color="info" icon="sync">
              {{ $ml.get('lobby.lobby.loading') }}
            </v-alert>
            <v-alert :value="!getUserSceneLoading" color="error" icon="warning">
              {{ $ml.get('error.noData') }}
            </v-alert>
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="userSceneDialog = !userSceneDialog">{{ $ml.get('lobby.dialog.userScene.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rowsPerPageItems: [3],
      pagination: {}
    }
  },
  computed: {
    ...mapGetters([
      'getUserScene',
      'getUserSelectedName',
      'getUserSceneLoading'
    ]),

    userSceneDialog: {
      get () {
        return this.$store.getters.getUserSceneDialog
      },
      set (value) {
        this.$store.dispatch('setUserSceneDialog', value)
      }
    }
  },
  methods: {
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
