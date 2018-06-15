<template>
  <grid-layout class="scroll-y" style="max-height: 75vh" :layout="gridContentFlag" :col-num="22" :row-height="30" :is-draggable="editMode" :is-resizable="editMode" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true">
    <grid-item v-for="item in gridContentFlag" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
      <v-card v-if="item.type === 'button'" ripple fab height="100%" v-bind:style="{'border-radius': '100%'}">
        <v-card-actions>
          <v-spacer />
          <v-btn small icon v-if="editMode" @click="changeGridItem(item)"><v-icon>settings</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      <v-card color="transparent" flat tile v-if="item.type === 'image'" fab height="100%" :img="tabs[item.ref].items[item.itemRef].grids[item.gridRef].img">
        <v-card-actions>
          <v-spacer />
          <v-btn small icon v-if="editMode" @click="changeGridItem(item)"><v-icon>settings</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="item.type === 'information'" fab height="100%">
        <v-card-actions>
          <v-spacer />
          <v-btn small icon v-if="editMode" @click="changeGridItem(item)"><v-icon>settings</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import {GridLayout, GridItem} from 'vue-grid-layout'

export default {
  props: ['editMode', 'gridContent', 'tabs'],
  data () {
    return {
    }
  },
  components: {
    GridLayout,
    GridItem
  },
  computed: {
    gridContentFlag: {
      get () {
        return this.gridContent
      },
      set (val) {
        this.$emit('updateGridContent', val)
      }
    }
  },
  methods: {
    changeGridItem (item) {
      console.log(item)
    },
    removeGridItem (item) {
      var index = this.gridContent.indexOf(item)
      if (index > -1) {
        this.gridContentFlag.splice(index, 1)
      }
    }
  }
}
</script>
