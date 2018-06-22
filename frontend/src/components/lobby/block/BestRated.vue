<template>
  <v-flex d-flex>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.bestRated.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-media class='card-image' :src="bgcolor">
        <v-card-text class="headline white--text">
          <el-carousel indicator-position="none" @change="changeCarousel" type="card" height="175px">
            <el-carousel-item v-for="item in getBestRated" :key="item.name">
              <v-card height="100%">
                <v-toolbar dense flat>
                  <v-toolbar-title>{{ item.name }}</v-toolbar-title>
                </v-toolbar>
                <v-card-media class='background-image' height="100%" :src="item.background">
                  <v-card class='white--text' color="transparent" flat tile width="100%">
                    <v-card-text class="transprent-text body-2">
                      {{ item.description }}
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn small>Info</v-btn>
                      <v-btn small>Jogar</v-btn>
                    </v-card-actions>
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
      'getBestRated'
    ])
  },
  methods: {
    changeCarousel (val, oldVal) {
      if (this.getBestRated[val].background) {
        this.bgcolor = this.getBestRated[val].background
      }
    }
  }
}
</script>

<style>
  .card-image .card__media__background {
    background-repeat:no-repeat;

    -webkit-filter: blur(5px);
    filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
  }

  .background-image .card__media__background {
    background-repeat:no-repeat;

    -webkit-filter: blur(0px);
    filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
  }

  .transprent-text {
    background: rgba(0, 0, 0, 0.5)
  }
</style>
