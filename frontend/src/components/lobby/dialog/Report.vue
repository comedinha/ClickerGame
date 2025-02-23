<template>
  <v-dialog v-model="sceneReportDialog" max-width="750px">
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.dialog.report.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="getSceneReportLoading" color="blue" indeterminate />
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getSceneReport.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" :loading="getSceneReportLoading" content-tag="v-layout" row wrap>
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
                  <v-card-text v-if="props.item.report" class="transprent-text body-2">
                    {{ props.item.report }}
                  </v-card-text>
                  <v-card-text v-if="!props.item.report" class="transprent-text body-2">
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
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.dialog.report.pagination') }}
          </v-flex>
          <v-flex slot="no-data">
            <v-alert :value="getSceneReportLoading" color="info" icon="sync">
              {{ $ml.get('lobby.lobby.loading') }}
            </v-alert>
            <v-alert :value="!getSceneReportLoading" color="error" icon="warning">
              {{ $ml.get('error.noData') }}
            </v-alert>
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="sceneReportDialog = !sceneReportDialog">{{ $ml.get('lobby.dialog.report.close') }}</v-btn>
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
      'getSceneReport',
      'getSceneReportLoading'
    ]),

    sceneReportDialog: {
      get () {
        return this.$store.getters.getSceneReportDialog
      },
      set (value) {
        this.$store.dispatch('setSceneReportDialog', value)
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
