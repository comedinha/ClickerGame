<template>
  <div height="100%" src="https://i.ytimg.com/vi/Xy_7tq7xn6I/maxresdefault.jpg">
    <grid-layout class="scroll-y" v-bind:style="getGridLayout" :layout="gridContent" @layout-updated="updateGridContent" :col-num="22" :row-height="30" :is-draggable="getEditMode" :is-resizable="getEditMode" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true">
      <grid-item v-for="item in gridContent" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
        <v-card v-if="item.type === 'button'" ripple fab height="100%" v-bind:style="viewButtonStyle(item)" @click.native="clickButton(item)">
          <v-card-actions v-if="getEditMode">
            <v-spacer />
            <v-menu offset-y>
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
        <v-card color="transparent" flat tile v-if="item.type === 'item'" fab height="100%" :img="viewItemRef(item).image">
          <v-card-actions v-if="getEditMode">
            <v-spacer />
            <v-menu offset-y>
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
        <v-card v-if="item.type === 'information'" fab height="100%" v-bind:style="viewInformationStyle(item)">
          <v-card-text v-html="updateInformationText(item)" />
          <v-card-actions v-if="getEditMode">
            <v-spacer />
            <v-menu offset-y>
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
  components: {
    GridLayout,
    GridItem
  },
  computed: {
    ...mapGetters([
      'getEditMode',
      'getGridLayout',
      'getCurrentWorld',
      'getCreatorVision',
      'getCoins',
      'getPlayCoins',
      'getPlayAutomaticValue'
    ]),

    gridContent: {
      get () {
        return this.$store.getters.getGridContent
      }
    }
  },
  methods: {
    viewItemRef (item) {
      let result = []
      if (item.type === 'button') {
        result = this.getCurrentWorld.gridButtons.filter(obj => {
          return obj.ref === item.ref
        })
      } else if (item.type === 'information') {
        result = this.getCurrentWorld.gridInformation.filter(obj => {
          return obj.ref === item.ref
        })
      } else if (item.type === 'item') {
        let resultTab = this.getCurrentWorld.tabs.filter(obj => {
          return obj.refTab === item.tab
        })

        let indexOfTab = this.getCurrentWorld.tabs.indexOf(resultTab[0])
        let resultItem = this.getCurrentWorld.tabs[indexOfTab].items.filter(obj => {
          return obj.ref === item.item
        })

        let indexOfItem = this.getCurrentWorld.tabs[indexOfTab].items.indexOf(resultItem[0])
        result = this.getCurrentWorld.tabs[indexOfTab].items[indexOfItem].grids.filter(obj => {
          return obj.ref === item.ref
        })
      }

      return result[0]
    },

    viewInformationStyle (item) {
      let newItem = this.viewItemRef(item)
      let newStyle = {
        'background-color': newItem.style.backgroundColor.hex
      }

      return newStyle
    },

    viewButtonStyle (item) {
      let newItem = this.viewItemRef(item)
      let newStyle = {
        'background-color': newItem.style.backgroundColor.hex,
        'border-radius': newItem.style.borderRadius
      }

      return newStyle
    },

    updateInformationText (item) {
      let newItem = this.viewItemRef(item)
      var newItemText = newItem.text
      if (!this.getCreatorVision) {
        let coinsResult = this.getCoins.filter(obj => {
          return obj.ref === newItem.coin.ref
        })

        let playerResult = this.getPlayCoins.filter(obj => {
          return obj.ref === coinsResult[0].ref
        })

        newItemText = newItemText
          .replace(/{cn}/g, coinsResult[0].name)
          .replace(/{cs}/g, coinsResult[0].symbol)
          .replace(/{tc}/g, playerResult[0].count)
          .replace(/{ts}/g, this.getPlayAutomaticValue)
      }

      return newItemText
    },

    clickButton (item) {
      if (!this.getCreatorVision) {
        this.$store.dispatch('addClick', item)
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
