<template>
  <v-container fluid grid-list-sm fixed>
    <SceneDetail v-if="getSceneDetailDialog" />
    <v-layout row wrap>
      <MyScenes v-if="!getGuest" />
      <GuestMessage v-if="getGuest" />
      <v-flex d-flex xs12 sm8 md6>
        <v-layout column>
          <MostPlayed />
          <BestRated />
        </v-layout>
      </v-flex>
      <Played v-if="!getGuest" />
      <Ads v-if="getGuest" />
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import BestRated from '@/components/lobby/block/BestRated'
import MostPlayed from '@/components/lobby/block/MostPlayed'
import MyScenes from '@/components/lobby/block/MyScenes'
import Played from '@/components/lobby/block/Played'

import Ads from '@/components/lobby/block/Ads'
import GuestMessage from '@/components/lobby/block/GuestMessage'

import SceneDetail from '@/components/lobby/dialog/SceneDetail'

export default {
  components: {
    BestRated,
    MostPlayed,
    MyScenes,
    Played,

    Ads,
    GuestMessage,

    SceneDetail
  },
  computed: {
    ...mapGetters([
      'getGuest',
      'getSceneDetailDialog'
    ])
  }
}
</script>
