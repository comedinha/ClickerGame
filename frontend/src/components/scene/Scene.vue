<template>
  <v-container fluid grid-list-sm fixed>
    <EditConfig v-if="getCreatorVision && getEditConfigDialog" />
    <AddItem v-if="getCreatorVision && getAddItemDialog" />
    <AddUpgrade v-if="getCreatorVision && getAddUpgradeDialog" />
    <v-layout row wrap>
      <v-flex md8>
        <v-card height="90vh">
          <Toolbar />
          <GridContent />
        </v-card>
      </v-flex>
      <v-flex md4>
        <BuyableTabs />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import Toolbar from '@/components/scene/block/Toolbar'
import GridContent from '@/components/scene/block/GridContent'
import BuyableTabs from '@/components/scene/block/BuyableTabs'

import AddItem from '@/components/scene/creator/dialog/AddItem'
import AddUpgrade from '@/components/scene/creator/dialog/AddUpgrade'
import EditConfig from '@/components/scene/creator/dialog/EditConfig'

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
    this.$store.dispatch('save')
  },
  computed: {
    ...mapGetters([
      'getGuest',
      'getCreatorVision',
      'getAddItemDialog',
      'getAddUpgradeDialog',
      'getEditConfigDialog'
    ])
  },
  components: {
    Toolbar,
    GridContent,
    BuyableTabs,

    AddItem,
    AddUpgrade,
    EditConfig
  }
}
</script>
