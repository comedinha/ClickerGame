<template>
  <div height="100%" src="https://i.ytimg.com/vi/Xy_7tq7xn6I/maxresdefault.jpg">
    <grid-layout class="scroll-y" v-bind:style="styleGrid" :layout="gridContent" @layout-updated="updateGridContent" :col-num="22" :row-height="30" :is-draggable="getEditMode" :is-resizable="getEditMode" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true">
      <grid-item v-for="item in gridContent" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
        <v-card v-if="item.type === 'button'" ripple fab height="100%" v-bind:style="item.ref.style">
          <v-card-actions>
            <v-spacer />
            <v-menu offset-y v-if="getEditMode">
              <v-btn small icon slot="activator"><v-icon>settings</v-icon></v-btn>
              <v-list>
                <v-list-tile @click="changeGridItem(item)">
                  <v-list-tile-title>{{ $ml.get('scene.block.gridContent.edit') }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="removeGridItem(item)">
                  <v-list-tile-title>{{ $ml.get('scene.block.gridContent.remove') }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
        <v-card color="transparent" flat tile v-if="item.type === 'item'" fab height="100%" :img="item.ref.image">
          <v-card-actions>
            <v-spacer />
            <v-menu offset-y v-if="getEditMode">
              <v-btn small icon slot="activator"><v-icon>settings</v-icon></v-btn>
              <v-list>
                <v-list-tile @click="changeGridItem(item)">
                  <v-list-tile-title>{{ $ml.get('scene.block.gridContent.edit') }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="removeGridItem(item)">
                  <v-list-tile-title>{{ $ml.get('scene.block.gridContent.remove') }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
        <v-card v-if="item.type === 'information'" fab height="100%">
          <v-card-text v-html="item.ref.text" />
          <v-card-actions>
            <v-spacer />
            <v-menu offset-y v-if="getEditMode">
              <v-btn small icon slot="activator"><v-icon>settings</v-icon></v-btn>
              <v-list>
                <v-list-tile @click="changeGridItem(item)">
                  <v-list-tile-title>{{ $ml.get('scene.block.gridContent.edit') }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="removeGridItem(item)">
                  <v-list-tile-title>{{ $ml.get('scene.block.gridContent.remove') }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {GridLayout, GridItem} from 'vue-grid-layout'

export default {
  data () {
    return {
      styleGrid: {
        'height': '84vh',
        'max-height': '84vh'
      }
    }
  },
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
    updateGridLayout () {
      return {
        background: 'red',
        fontSize: '13px',
        'max-height': '84vh'
      }
    },

    updateGridContent (newLayout) {
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
