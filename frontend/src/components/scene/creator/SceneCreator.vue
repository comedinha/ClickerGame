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
import Toolbar from '@/components/scene/block/Toolbar'
import GridContent from '@/components/scene/block/GridContent'
import BuyableTabs from '@/components/scene/block/BuyableTabs'

export default {
  components: {
    Toolbar,
    GridContent,
    BuyableTabs
  }
}
</script>
