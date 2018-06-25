<template>
  <v-container fluid grid-list-sm fixed>
    <div v-if="!getViewAllScenes">
      <Approval v-if="getSceneApprovalDialog" />
      <Report v-if="getSceneReportDialog" />
      <SceneDetail v-if="getSceneDetailDialog" />
      <Users v-if="getUsersDialog" />
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
    </div>
    <div v-if="getViewAllScenes">
      <AllScenes />
    </div>
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

import AllScenes from '@/components/lobby/block/AllScenes'

import Approval from '@/components/lobby/dialog/Approval'
import Report from '@/components/lobby/dialog/Report'
import SceneDetail from '@/components/lobby/dialog/SceneDetail'
import Users from '@/components/lobby/dialog/Users'

export default {
  components: {
    BestRated,
    MostPlayed,
    MyScenes,
    Played,

    Ads,
    GuestMessage,

    AllScenes,

    Approval,
    Report,
    SceneDetail,
    Users
  },
  computed: {
    ...mapGetters([
      'getGuest',
      'getSceneDetailDialog',
      'getViewAllScenes',
      'getSceneApprovalDialog',
      'getSceneReportDialog',
      'getUsersDialog'
    ])
  }
}
</script>
