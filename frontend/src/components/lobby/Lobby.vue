<template>
  <v-container fluid grid-list-sm fixed>
    <SceneDetail />
    <v-layout row wrap>
      <MyScenes />
      <v-flex d-flex xs12 sm8 md6>
        <v-layout column>
          <MostPlayed />
          <BestRated />
        </v-layout>
      </v-flex>
      <Played />
    </v-layout>
  </v-container>
</template>

<script>
import MyScenes from '@/components/lobby/block/MyScenes'
import MostPlayed from '@/components/lobby/block/MostPlayed'
import BestRated from '@/components/lobby/block/BestRated'
import Played from '@/components/lobby/block/Played'

import SceneDetail from '@/components/lobby/dialog/SceneDetail'

export default {
  components: {
    MyScenes,
    MostPlayed,
    BestRated,
    Played,

    SceneDetail
  }
}
</script>
