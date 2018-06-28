<template>
  <v-container fluid grid-list-sm fixed>
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
    BuyableTabs
  }
}
</script>
