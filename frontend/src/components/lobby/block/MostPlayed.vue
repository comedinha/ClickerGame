<template>
  <v-flex d-flex>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.mostPlayed.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="getMostPlayedLoading" color="blue" indeterminate />
      <v-alert :value="getMostPlayedLoading" color="info" icon="sync">
        {{ $ml.get('lobby.lobby.loading') }}
      </v-alert>
      <v-alert :value="!getMostPlayedLoading && getMostPlayed.items.length === 0" color="error" icon="warning">
        {{ $ml.get('error.noData') }}
      </v-alert>
      <v-card-media class='card-image' :src="bgcolor" v-if="getMostPlayed.items.length !== 0">
        <v-card-text class="headline white--text">
          <el-carousel indicator-position="none" @change="changeCarousel" type="card" height="175px">
            <el-carousel-item v-for="item in getMostPlayed.items" :key="item.name">
              <v-card height="100%">
                <v-toolbar dense flat>
                  <v-toolbar-title>{{ item.name }}</v-toolbar-title>
                  <v-spacer />
                  <v-tooltip v-if="item.canEdit" bottom>
                    <v-btn small class="mx-0" icon slot="activator" @click="editGame(item)"><v-icon>settings</v-icon></v-btn>
                    <span>{{ $ml.get('lobby.lobby.edit') }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <v-btn small class="mx-0" icon slot="activator" @click="infoGame(item)"><v-icon>info</v-icon></v-btn>
                    <span>{{ $ml.get('lobby.lobby.details') }}</span>
                  </v-tooltip>
                  <v-tooltip v-if="item.lastGame" bottom>
                    <v-btn small class="mx-0" icon slot="activator" @click="newGame(item)"><v-icon>add_circle</v-icon></v-btn>
                    <span>{{ $ml.get('lobby.lobby.newGame') }}</span>
                  </v-tooltip>
                  <v-tooltip v-if="item.lastGame" bottom>
                    <v-btn small class="mx-0" icon slot="activator" @click="continueGame(item)"><v-icon>play_circle_filled</v-icon></v-btn>
                    <span>{{ $ml.get('lobby.lobby.continue') }}</span>
                  </v-tooltip>
                  <v-tooltip v-if="!item.lastGame" bottom>
                    <v-btn small class="mx-0" icon slot="activator" @click="newGame(item)"><v-icon>play_circle_filled</v-icon></v-btn>
                    <span>{{ $ml.get('lobby.lobby.play') }}</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-media class='background-image' height="100%" :src="item.image">
                  <v-card class='white--text' color="transparent" flat tile width="100%">
                    <v-card-text class="transprent-text body-2">
                      {{ item.smallDescription }}
                    </v-card-text>
                  </v-card>
                </v-card-media>
              </v-card>
            </el-carousel-item>
          </el-carousel>
        </v-card-text>
      </v-card-media>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      bgcolor: ''
    }
  },
  computed: {
    ...mapGetters([
      'getMostPlayed',
      'getMostPlayedLoading'
    ])
  },
  methods: {
    changeCarousel (val, oldVal) {
      if (this.getMostPlayed.items.length !== 0) {
        if (this.getMostPlayed.items[val].image) {
          this.bgcolor = this.getMostPlayed.items[val].image
        }
      }
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
  .card-image .card__media__background {
    background-repeat: no-repeat;

    -webkit-filter: blur(5px);
    filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
  }

  .background-image .card__media__background {
    background-repeat: no-repeat;

    -webkit-filter: blur(0px);
    filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
  }

  .transprent-text {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
