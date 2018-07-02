<template>
  <v-tabs :style="'.tabs__container'" v-model="active" fixed-tabs>
    <v-tab v-for="tab in getTabs" :key="tab.refTab" ripple>
      {{ tab.title }}
    </v-tab>
    <v-tab-item class="scroll-y" style="max-height: 82vh" v-for="tab in getTabs" :key="tab.refItem">
      <v-card-actions v-if="getEditMode">
        <v-btn block @click="addItem(tab)">+</v-btn>
      </v-card-actions>
      <v-card-actions v-if="!getEditMode && tab.type === 'item'">
        <v-spacer />
        <v-btn>1x</v-btn>
      </v-card-actions>
      <v-list v-if="tab.type === 'item'" two-line>
        <template v-for="item in tab.items">
          <v-divider :key="item.divRef" />
          <v-list-tile :key="item.ref" avatar>
            <v-list-tile-avatar v-if="item.image">
              <img :src="item.image" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-title-subtitle v-if="item.subtitle">{{ item.subtitle }}</v-list-title-subtitle>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-card flat v-if="getEditMode">
                <v-tooltip bottom>
                  <v-btn icon slot="activator" @click="newGridItem(tab, item)">
                    <v-icon>grid_on</v-icon>
                  </v-btn>
                  <span>{{ $ml.get('scene.block.buyableTabs.addGrid') }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn icon slot="activator" @click="editItem(tab, item)">
                    <v-icon>settings</v-icon>
                  </v-btn>
                  <span>{{ $ml.get('scene.block.buyableTabs.settings') }}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn icon slot="activator" @click="deleteItem(tab, item)">
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <span>{{ $ml.get('scene.block.buyableTabs.delete') }}</span>
                </v-tooltip>
              </v-card>
            </v-list-tile-action>
          </v-list-tile>
        </template>
        <v-divider />
      </v-list>
      <v-container v-if="tab.type === 'upgrade'" fluid grid-list-md>
        <v-layout row wrap>
        <v-flex v-for="item in tab.items" :key="item.ref" md3>
          <v-card>
            <img height="50" width="100" :src="item.image" />
            <v-btn v-if="!getEditMode">{{ item.price }}</v-btn>
            <v-card-actions v-if="getEditMode">
              <v-tooltip bottom>
                <v-btn icon slot="activator">
                  <v-icon>settings</v-icon>
                </v-btn>
                <span>{{ $ml.get('scene.block.buyableTabs.settings') }}</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-btn icon slot="activator">
                  <v-icon>delete</v-icon>
                </v-btn>
                <span>{{ $ml.get('scene.block.buyableTabs.delete') }}</span>
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
      'getEditMode',
      'getTabs',
      'getAddItemDialog',
      'getTabLayout'
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
    }
  }
}
</script>
