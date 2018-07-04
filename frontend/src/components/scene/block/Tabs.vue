<template>
  <v-tabs :style="'.tabs__container'" v-model="active" fixed-tabs>
    <v-tab v-for="tab in getTabs" :key="tab.refTab" ripple>
      {{ tab.title }}
    </v-tab>
    <v-tab-item class="scroll-y" style="max-height: 82vh" v-for="tab in getTabs" :key="tab.refItem">
      <v-card-actions v-if="getEditMode">
        <v-btn block v-if="tab.type === 'item'" @click="addItem(tab)">+</v-btn>
        <v-btn block v-if="tab.type === 'upgrade'" @click="addUpgrade(tab)">+</v-btn>
      </v-card-actions>
      <v-list v-if="tab.type === 'item'" two-line>
        <template v-for="item in tab.items">
          <v-divider :key="item.divRef" />
          <v-list-tile :key="item.ref" :disabled="canBuy(item)" avatar @click.native="buyItem(tab, item)">
            <v-list-tile-avatar v-if="item.image">
              <img :src="item.image" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-tooltip bottom v-if="item.description">
                <v-list-tile-title slot="activator">{{ item.title }}</v-list-tile-title>
                <span>{{ item.description }}</span>
              </v-tooltip>
              <v-list-tile-title v-if="!item.description">{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title v-if="!getEditMode">{{ getPriceSymbol(item) + ' ' + calculePrice(item) }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-card flat v-if="getEditMode">
                <v-tooltip bottom>
                  <v-btn icon slot="activator" @click="newGridItem(tab, item)">
                    <v-icon>grid_on</v-icon>
                  </v-btn>
                  <span>{{ $ml.get('scene.block.tabs.addGrid') }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn icon slot="activator" @click="editItem(tab, item)">
                    <v-icon>settings</v-icon>
                  </v-btn>
                  <span>{{ $ml.get('scene.block.tabs.settings') }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn icon slot="activator" @click="deleteItem(tab, item)">
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <span>{{ $ml.get('scene.block.tabs.delete') }}</span>
                </v-tooltip>
              </v-card>
              <span v-if="!getEditMode">{{ totalBuyed(item) }}</span>
            </v-list-tile-action>
          </v-list-tile>
        </template>
        <v-divider />
      </v-list>
      <v-container v-if="tab.type === 'upgrade'" fluid grid-list-md>
        <v-layout row wrap>
        <v-flex v-for="item in tab.items" :key="item.ref" xs3 sm3 md3 v-if="getBuyedUpgrade(tab, item)">
          <v-card>
            <v-system-bar>
              <span>{{ item.title }}</span>
            </v-system-bar>
            <v-tooltip bottom v-if="item.description && item.image">
              <img height="50" width="100" slot="activator" :src="item.image" />
              <span>{{ item.description }}</span>
            </v-tooltip>
            <img v-if="!item.description && item.image" height="50" width="100" :src="item.image" />
            <v-card-text v-if="!item.image">
              {{ item.description }}
            </v-card-text>
            <v-btn block v-if="!getEditMode" @click="buyUpgrade(tab, item)">{{ getPriceSymbol(item) + ' ' + item.price }}</v-btn>
            <v-card-actions v-if="getEditMode">
              <v-tooltip bottom>
                <v-btn icon slot="activator" @click="editUpgrade(tab, item)">
                  <v-icon>settings</v-icon>
                </v-btn>
                <span>{{ $ml.get('scene.block.tabs.settings') }}</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-btn icon slot="activator" @click="deleteUpgrade(tab, item)">
                  <v-icon>delete</v-icon>
                </v-btn>
                <span>{{ $ml.get('scene.block.tabs.delete') }}</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import * as math from 'mathjs'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      active: 0,
      '.tabs__container': {
        'background-color': '#AAAAAA',
        'border-color': '#9e9e9e'
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCreatorVision',
      'getEditMode',
      'getTabs',
      'getAddItemDialog',
      'getTabLayout',
      'getPlayBuyedItems',
      'getPlayCoins',
      'getPlayBuyedUpgrades',
      'getCoins'
    ])
  },
  watch: {
    getTabLayout: {
      handler: function (val, oldVal) {
        if (val.backgroundColor) {
          let i = 0
          let container = document.querySelectorAll('.tabs__container')
          for (i = 0; i < container.length; i++) {
            container[i].style.backgroundColor = val.backgroundColor
            container[i].style.borderColor = val.backgroundColor
          }

          let content = document.querySelectorAll('.tabs__content')
          for (i = 0; i < content.length; i++) {
            content[i].style.backgroundColor = val.backgroundColor
            content[i].style.borderColor = val.backgroundColor
          }
        }

        if (val.textColor) {
          let i = 0
          let tabsBar = document.querySelectorAll('.tabs__bar .tabs__div')
          for (i = 0; i < tabsBar.length; i++) {
            tabsBar[i].style.color = val.textColor
          }
        }

        if (val.btnColor) {
          let i = 0

          let btn = document.querySelectorAll('.tabs__content .btn__content')
          for (i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = val.btnColor
            btn[i].style.borderColor = val.btnColor
          }
        }

        if (val.btnTextColor) {
          let i = 0

          let btn = document.querySelectorAll('.tabs__content .btn__content')
          for (i = 0; i < btn.length; i++) {
            btn[i].style.color = val.btnTextColor
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    buyItem (tab, item) {
      if (this.getCreatorVision === false) {
        this.$store.dispatch('buyTabItem', { tab, item })
      }
    },

    calculePrice (item) {
      if (this.getCreatorVision === false) {
        let totalBuyed = 0
        let formula = item.formula
        let getBuyed = this.getPlayBuyedItems.filter(obj => {
          return obj.ref === item.ref
        })

        if (getBuyed[0]) {
          if (getBuyed[0].count) {
            totalBuyed = getBuyed[0].count
          }
        }

        formula = formula
          .replace(/{tb}/g, totalBuyed)
          .replace(/{bp}/g, item.basePrice || 0)

        let value = 0
        try {
          value = math.eval(formula)
        } catch (err) {
          console.log(err)
        }

        return value
      }
      return this.$ml.get('scene.block.tabs.price')
    },

    getPriceSymbol (item) {
      let symbol = '$'
      let getCoin = this.getCoins.filter(obj => {
        return obj.ref === item.coin.ref
      })

      if (getCoin[0]) {
        if (getCoin[0].symbol) {
          symbol = getCoin[0].symbol
        }
      }

      return symbol
    },

    canBuy (item) {
      let count = 0
      if (this.getCreatorVision === false) {
        let getCoin = this.getPlayCoins.filter(obj => {
          return obj.ref === item.coin.ref
        })

        if (getCoin[0]) {
          if (getCoin[0].count) {
            count = getCoin[0].count
          }
        }

        return !!(count < this.calculePrice(item))
      }
    },

    totalBuyed (item) {
      if (this.getCreatorVision === false) {
        let total = 0
        let getBuyed = this.getPlayBuyedItems.filter(obj => {
          return obj.ref === item.ref
        })

        if (getBuyed[0]) {
          total = getBuyed[0].count
        }

        return total
      }

      return this.$ml.get('scene.block.tabs.totalBuyed')
    },

    buyUpgrade (tab, item) {
      if (this.getCreatorVision === false) {
        this.$store.dispatch('buyTabUpgrade', item)
      }
    },

    getBuyedUpgrade (tab, item) {
      if (this.getCreatorVision === false) {
        let getBuyed = this.getPlayBuyedUpgrades.filter(obj => {
          return obj.item === item.item && obj.tab === item.tab
        })

        return getBuyed.length === 0
      }

      return true
    },

    newGridItem (tab, item) {
      this.$store.dispatch('newGridItem', { tab, item })
    },

    addItem (tab) {
      this.$store.dispatch('setAddItemDialog', !this.getAddItemDialog)
      this.$store.dispatch('setAddItemDialogNewItem', true)
      this.$store.dispatch('addItem', { tab })
    },

    editItem (tab, item) {
      this.$store.dispatch('setAddItemDialog', !this.getAddItemDialog)
      this.$store.dispatch('editItem', { tab, item })
    },

    deleteItem (tab, item) {
      this.$store.dispatch('deleteItem', { tab, item })
    },

    addUpgrade (tab) {
      this.$store.dispatch('setAddUpgradeDialog', !this.getAddUpgradeDialog)
      this.$store.dispatch('setAddUpgradeDialogNewItem', true)
      this.$store.dispatch('addUpgrade', { tab })
    },

    editUpgrade (tab, item) {
      this.$store.dispatch('setAddUpgradeDialog', !this.getAddUpgradeDialog)
      this.$store.dispatch('editUpgrade', { tab, item })
    },

    deleteUpgrade (tab, item) {
      this.$store.dispatch('deleteUpgrade', { tab, item })
    }
  }
}
</script>
