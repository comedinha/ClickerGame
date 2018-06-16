<template>
  <grid-layout class="scroll-y" style="max-height: 75vh" :layout="gridContent" @layout-updated="updateGridContent" :col-num="22" :row-height="30" :is-draggable="getEditMode" :is-resizable="getEditMode" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true">
    <grid-item v-for="item in gridContent" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
      <v-card v-if="item.type === 'button'" ripple fab height="100%" v-bind:style="{'border-radius': '100%'}">
        <v-card-actions>
          <v-spacer />
          <v-btn small icon v-if="getEditMode" @click="removeGridItem(item)"><v-icon>settings</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      <v-card color="transparent" flat tile v-if="item.type === 'image'" fab height="100%" :img="item.ref.img">
        <v-card-actions>
          <v-spacer />
          <v-btn small icon v-if="getEditMode" @click="removeGridItem(item)"><v-icon>settings</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="item.type === 'information'" fab height="100%">
        <v-card-actions>
          <v-spacer />
          <v-btn small icon v-if="getEditMode" @click="removeGridItem(item)"><v-icon>settings</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import {GridLayout, GridItem} from 'vue-grid-layout'

export default {
  components: {
    GridLayout,
    GridItem
  },
  computed: {
    ...mapGetters([
      'getEditMode'
    ]),

    gridContent: {
      get () {
        return this.$store.getters.getGridContent
      }
    }
  },
  methods: {
    updateGridContent: function (newLayout) {
      this.$store.dispatch('updateGridContent', newLayout)
    },

    changeGridItem (item) {
      this.$store.dispatch('changeGridItem', item)
    },

    removeGridItem (item) {
      this.$store.dispatch('removeGridItem', item)
    }
  }
}
</script>
