<template>
  <v-dialog v-model="sceneDetailDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ getSceneDetailMessage.name }}</v-toolbar-title>
        <v-spacer />
        <v-tooltip v-if="getSceneDetailMessage.creator" bottom>
          <v-btn small icon slot="activator" @click="editGame(getSceneDetailMessage)"><v-icon>settings</v-icon></v-btn>
          <span>Editar</span>
        </v-tooltip>
        <v-tooltip v-if="getSceneDetailMessage.lastGame" bottom>
          <v-btn small icon slot="activator" @click="newGame(getSceneDetailMessage)"><v-icon>add_circle</v-icon></v-btn>
          <span>Novo Jogo</span>
        </v-tooltip>
        <v-tooltip v-if="getSceneDetailMessage.lastGame" bottom>
          <v-btn small icon slot="activator" @click="continueGame(getSceneDetailMessage)"><v-icon>play_circle_filled</v-icon></v-btn>
          <span>Continuar</span>
        </v-tooltip>
        <v-tooltip v-if="!getSceneDetailMessage.lastGame" bottom>
          <v-btn small icon slot="activator" @click="newGame(getSceneDetailMessage)"><v-icon>play_circle_filled</v-icon></v-btn>
          <span>Jogar</span>
        </v-tooltip>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md7>
            <v-card-media :src="getSceneDetailMessage.image" height="250px" contain />
          </v-flex>
          <v-flex md5>
            <v-card>
              <v-system-bar>
                Descrição
              </v-system-bar>
              <v-card-text>
                {{ getSceneDetailMessage.description }}
              </v-card-text>
            </v-card>
            <v-layout row>
              <v-flex md4>
                <v-card>
                  <v-system-bar>
                    Jogaram
                  </v-system-bar>
                  <v-card-text>
                    {{ getSceneDetailMessage.totalPlayed }}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card>
                  <v-system-bar>
                    Concluíram
                  </v-system-bar>
                  <v-card-text>
                    {{ getSceneDetailMessage.totalComplete }}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card>
                  <v-system-bar>
                    Avaliação
                  </v-system-bar>
                  <v-card-text>
                    {{ getSceneDetailMessage.score }}/5.0
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getSceneDetailMessage'
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
