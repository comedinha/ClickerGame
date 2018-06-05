<template>
  <v-flex d-flex>
    <v-card fluid v-bind:style="{'background-color': bgcolor}">
      <v-toolbar dense flat>
        <v-toolbar-title>Cenários mais jogados</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <el-carousel indicator-position="none" @change="changeCarousel" type="card" height="175px">
          <el-carousel-item v-for="item in mostPlay" :key="item.name">
            <h3>{{ item.name }}</h3>
          </el-carousel-item>
        </el-carousel>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['mostPlay'],
  data () {
    return {
      bgcolor: ''
    }
  },
  methods: {
    changeCarousel (val, oldVal) {
      if (this.mostPlay[val].background) {
        this.bgcolor = this.mostPlay[val].background
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
