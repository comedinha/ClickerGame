<template>
  <v-flex d-flex>
    <v-card fluid v-bind:style="{'background-color': bgcolor}">
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.mostPlayed.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <el-carousel indicator-position="none" @change="changeCarousel" type="card" height="175px">
          <el-carousel-item v-for="item in getMostPlayed" :key="item.name">
            <h3>{{ item.name }}</h3>
          </el-carousel-item>
        </el-carousel>
      </v-card-text>
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
      'getMostPlayed'
    ])
  },
  methods: {
    changeCarousel (val, oldVal) {
      if (this.getMostPlayed[val].background) {
        this.bgcolor = this.getMostPlayed[val].background
      }
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
