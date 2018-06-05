<template>
  <v-app id="inspire">
    <Drawer :drawer="drawer" @updateDrawer="drawer = $event" />
    <v-toolbar dense>
      <v-btn icon>
        <v-badge top color="red">
          <span slot="badge">1</span>
          <v-icon>announcement</v-icon>
        </v-badge>
      </v-btn>
      <v-spacer />
      <v-toolbar-title>My Click</v-toolbar-title>
      <v-spacer />
      <v-menu class="hidden-sm-and-down" open-on-hover bottom offset-y>
        <v-toolbar-title slot="activator">
          Username <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Editar Senha</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Preferências</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-sm fixed>
        <v-layout row wrap>
          <MyScenes :myscanes="myscanes"/>
          <v-flex d-flex xs12 sm8 md6>
            <v-layout column>
              <MostPlayed :mostPlay="mostPlay" />
              <recentCreated :recentAdd="recentAdd" />
            </v-layout>
          </v-flex>
          <Played :allGames="allGames" />
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Drawer from '@/components/lobby/blocks/Drawer'
import MyScenes from '@/components/lobby/blocks/MyScenes'
import MostPlayed from '@/components/lobby/blocks/MostPlayed'
import RecentCreated from '@/components/lobby/blocks/RecentCreated'
import Played from '@/components/lobby/blocks/Played'

import Footer from '@/components/Template/Footer'

export default {
  data () {
    return {
      myscanes: {
        search: '',
        rowsPerPageItems: [2],
        pagination: {
          rowsPerPage: 2
        },
        items: [
          {
            name: 'Jogo'
          },
          {
            name: 'Jogo 2'
          },
          {
            name: 'Jogo 3'
          },
          {
            name: 'Jogo 4'
          },
          {
            name: 'Jogo 5'
          }
        ]
      },
      allGames: {
        search: '',
        rowsPerPageItems: [4],
        pagination: {
          rowsPerPage: 4
        },
        items: [
          {
            name: 'Jogo'
          },
          {
            name: 'Jogo 2'
          },
          {
            name: 'Jogo 3'
          },
          {
            name: 'Jogo 4'
          },
          {
            name: 'Jogo 5'
          }
        ]
      },
      mostPlay: [
        {
          name: 'Jogo',
          background: 'white'
        },
        {
          name: 'Jogo 2',
          background: 'red'
        },
        {
          name: 'Jogo 3',
          background: 'blue'
        }
      ],
      recentAdd: [
        {
          name: 'Jogo',
          background: 'white'
        },
        {
          name: 'Jogo 2',
          background: 'red'
        },
        {
          name: 'Jogo 3',
          background: 'blue'
        }
      ],
      drawer: false
    }
  },
  components: {
    Drawer,
    MyScenes,
    MostPlayed,
    RecentCreated,
    Played,
    Footer
  },
  methods: {
    changeRecentAddedCarousel (val, oldVal) {
      if (this.recentAdd[val].background) {
        this.carousel.recentAdd = this.recentAdd[val].background
      }
    },
    logout () {
      this.$store.dispatch('authLogout').then(() => {
        this.$router.push('/Signin')
      })
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
