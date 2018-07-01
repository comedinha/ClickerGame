<template>
  <v-dialog v-model="sceneDetailDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ getSceneDetailInfo.name }}</v-toolbar-title>
        <v-spacer />
        <v-tooltip v-if="getSceneDetailInfo.canEdit" bottom>
          <v-btn small class="mx-0" icon slot="activator" @click="editGame(getSceneDetailInfo)"><v-icon>settings</v-icon></v-btn>
          <span>{{ $ml.get('lobby.lobby.edit') }}</span>
        </v-tooltip>
        <v-tooltip v-if="getSceneDetailInfo.lastGame" bottom>
          <v-btn small class="mx-0" icon slot="activator" @click="newGame(getSceneDetailInfo)"><v-icon>add_circle</v-icon></v-btn>
          <span>{{ $ml.get('lobby.lobby.newGame') }}</span>
        </v-tooltip>
        <v-tooltip v-if="getSceneDetailInfo.lastGame" bottom>
          <v-btn small class="mx-0" icon slot="activator" @click="continueGame(getSceneDetailInfo)"><v-icon>play_circle_filled</v-icon></v-btn>
          <span>{{ $ml.get('lobby.lobby.continue') }}</span>
        </v-tooltip>
        <v-tooltip v-if="!getSceneDetailInfo.lastGame" bottom>
          <v-btn small class="mx-0" icon slot="activator" @click="newGame(getSceneDetailInfo)"><v-icon>play_circle_filled</v-icon></v-btn>
          <span>{{ $ml.get('lobby.lobby.play') }}</span>
        </v-tooltip>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md7>
            <v-card-media :src="getSceneDetailInfo.image" height="250px" contain />
          </v-flex>
          <v-flex md5>
            <v-card>
              <v-system-bar>
                {{ $ml.get('lobby.dialog.sceneDetail.description') }}
              </v-system-bar>
              <v-card-text>
                {{ getSceneDetailInfo.description }}
              </v-card-text>
            </v-card>
            <v-layout row>
              <v-flex md4>
                <v-card>
                  <v-system-bar>
                    {{ $ml.get('lobby.dialog.sceneDetail.creator') }}
                  </v-system-bar>
                  <v-card-text>
                    {{ getSceneDetailInfo.creator }}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card>
                  <v-system-bar>
                    {{ $ml.get('lobby.dialog.sceneDetail.played') }}
                  </v-system-bar>
                  <v-card-text>
                    {{ getSceneDetailInfo.totalPlayed }}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card>
                  <v-system-bar>
                    {{ $ml.get('lobby.dialog.sceneDetail.score') }}
                  </v-system-bar>
                  <v-card-text>
                    {{ getSceneDetailInfo.score }}/5.0
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="sceneDetailDialog = !sceneDetailDialog">{{ $ml.get('lobby.dialog.sceneDetail.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getSceneDetailInfo'
    ]),

    sceneDetailDialog: {
      get () {
        return this.$store.getters.getSceneDetailDialog
      },
      set (value) {
        this.$store.dispatch('setSceneDetailDialog', value)
      }
    }
  },
  methods: {
    editGame (scene) {
      this.$router.push('/Scene?createId=' + scene.id)
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
