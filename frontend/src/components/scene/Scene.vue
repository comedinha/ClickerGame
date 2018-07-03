<template>
  <v-container fluid grid-list-sm fixed v-if="!getSceneLoading">
    <ButtonGrid v-if="getCreatorVision && getButtonGridDialog" />
    <Coins v-if="getCreatorVision && getCoinsDialog" />
    <Config v-if="getCreatorVision && getEditConfigDialog" />
    <EditCoin v-if="getCreatorVision && getEditCoinDialog" />
    <Item v-if="getCreatorVision && getAddItemDialog" />
    <ItemGrid v-if="getCreatorVision && getItemGridDialog" />
    <Layout v-if="getCreatorVision && getLayoutDialog" />
    <Upgrade v-if="getCreatorVision && getAddUpgradeDialog" />
    <InformationGrid v-if="getCreatorVision && getInformationGridDialog" />
    <v-layout row wrap>
      <v-flex v-if="getTabLeft" xs12 sm12 md4>
        <Tabs />
      </v-flex>
      <v-flex xs12 sm12 md8>
        <v-card height="90vh">
          <Toolbar />
          <Grid />
        </v-card>
      </v-flex>
      <v-flex v-if="!getTabLeft" xs12 sm12 md4>
        <Tabs />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import Toolbar from '@/components/scene/block/Toolbar'
import Grid from '@/components/scene/block/Grid'
import Tabs from '@/components/scene/block/Tabs'

import ButtonGrid from '@/components/scene/creator/dialog/ButtonGrid'
import Coins from '@/components/scene/creator/dialog/Coins'
import Config from '@/components/scene/creator/dialog/Config'
import EditCoin from '@/components/scene/creator/dialog/EditCoin'
import InformationGrid from '@/components/scene/creator/dialog/InformationGrid'
import Item from '@/components/scene/creator/dialog/Item'
import ItemGrid from '@/components/scene/creator/dialog/ItemGrid'
import Layout from '@/components/scene/creator/dialog/Layout'
import Upgrade from '@/components/scene/creator/dialog/Upgrade'

export default {
  beforeCreate () {
    if (this.$route.query.playId) {
      const { playId, saveId } = this.$route.query
      this.$store.dispatch('loadPlay', { playId, saveId }).catch(() => {
        this.$router.go('/')
      })
    } else {
      if (this.getGuest) {
        this.$router.go('/')
      } else {
        const { createId } = this.$route.query
        if (createId) {
          this.$store.dispatch('loadCreate', { createId }).catch(() => {
            this.$router.go('/')
          })
        } else {
          this.$store.dispatch('loadDefault')
        }
      }
    }
  },
  beforeDestroy () {
    // Comentário: Criar save automático.
  },
  computed: {
    ...mapGetters([
      'getSceneLoading',
      'getGuest',
      'getCreatorVision',
      'getAddItemDialog',
      'getAddUpgradeDialog',
      'getEditConfigDialog',
      'getItemGridDialog',
      'getInformationGridDialog',
      'getCoinsDialog',
      'getEditCoinDialog',
      'getLayoutDialog',
      'getTabLeft',
      'getButtonGridDialog'
    ])
  },
  components: {
    Toolbar,
    Grid,
    Tabs,

    InformationGrid,
    Item,
    ItemGrid,
    Upgrade,
    Config,
    Coins,
    EditCoin,
    Layout,
    ButtonGrid
  }
}
</script>
