<template>
  <v-container fluid grid-list-sm fixed>
    <AddItem v-if="getCreatorVision" />
    <AddUpgrade />
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
      'getCreatorVision'
    ])
  },
  components: {
    Toolbar,
    GridContent,
    BuyableTabs,

    AddItem,
    AddUpgrade
  }
}
</script>
