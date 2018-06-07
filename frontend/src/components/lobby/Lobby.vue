<template>
  <v-container fluid grid-list-sm fixed>
    <v-layout row wrap>
      <MyScenes :myscanes="myscanes"/>
      <v-flex d-flex xs12 sm8 md6>
        <v-layout column>
          <MostPlayed :mostPlay="mostPlay" />
          <BestRated :bestRated="bestRated" />
        </v-layout>
      </v-flex>
      <Played :allGames="allGames" />
    </v-layout>
  </v-container>
</template>

<script>
import MyScenes from '@/components/lobby/block/MyScenes'
import MostPlayed from '@/components/lobby/block/MostPlayed'
import BestRated from '@/components/lobby/block/BestRated'
import Played from '@/components/lobby/block/Played'

export default {
  data () {
    return {
      myscanes: {
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
          background: 'white'
        },
        {
          name: 'Jogo 3',
          background: 'white'
        }
      ],
      bestRated: [
        {
          name: 'Jogo',
          background: 'white'
        },
        {
          name: 'Jogo 2',
          background: 'white'
        },
        {
          name: 'Jogo 3',
          background: 'white'
        }
      ]
    }
  },
  components: {
    MyScenes,
    MostPlayed,
    BestRated,
    Played
  }
}
</script>
