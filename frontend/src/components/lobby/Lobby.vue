<template>
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
</template>

<script>
import MyScenes from '@/components/lobby/block/MyScenes'
import MostPlayed from '@/components/lobby/block/MostPlayed'
import RecentCreated from '@/components/lobby/block/RecentCreated'
import Played from '@/components/lobby/block/Played'

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
      ]
    }
  },
  components: {
    MyScenes,
    MostPlayed,
    RecentCreated,
    Played
  }
}
</script>
