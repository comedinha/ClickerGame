<template>
  <v-tabs v-model="active" fixed-tabs>
    <v-tab v-for="tab in tabs" :key="tab.i" ripple>
      {{ tab.title }}
    </v-tab>
    <v-tab-item class="scroll-y" style="max-height: 82vh" v-for="tab in tabs" :key="tab.ref">
      <v-card-actions v-if="editMode">
        <v-btn block>+</v-btn>
      </v-card-actions>
      <v-card-actions v-if="!editMode">
        <v-spacer />
        <v-btn>1x</v-btn>
      </v-card-actions>
      <v-list v-if="tab.type === 'item'" two-line>
        <template v-for="item in tab.items">
          <v-divider :key="item.divRef" />
          <v-list-tile :key="item.ref" avatar>
            <v-list-tile-avatar v-if="item.img">
              <img :src="item.img" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-title-subtitle v-if="item.subtitle">{{ item.subtitle }}</v-list-title-subtitle>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-card flat v-if="editMode">
                <v-btn icon @click="newGridItem(tab, item)">
                  <v-icon>grid_on</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>settings</v-icon>
                </v-btn>
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
            <img height="50" width="100" :src="item.img" />
            <v-btn>{{ item.price }}</v-btn>
          </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-tab-item>
    <v-spacer />
    <v-btn v-if="editMode" icon @click.stop="editTab = !editTab" ripple>
      <v-icon>settings</v-icon>
    </v-btn>
  </v-tabs>
</template>

<script>
export default {
  props: ['editMode', 'gridContent', 'tabs'],
  data () {
    return {
      active: 0
    }
  },
  computed: {
    gridContentFlag: {
      get () {
        return this.gridContent
      },
      set (val) {
        this.$emit('updateGridContent', val)
      }
    },
    tabsFlag: {
      get () {
        return this.tabs
      },
      set (val) {
        this.$emit('updateTabs', val)
      }
    }
  },
  methods: {
    newGridItem (tab, item) {
      let tabItemGrid = {
        i: this.tabs[tab.i].items[item.i].grids.length,
        img: item.img
      }
      this.tabsFlag[tab.i].items[item.i].grids.push(tabItemGrid)

      let newGridItem = {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        i: 'Grid ' + this.gridContent.length,
        type: 'image',
        ref: tab.i,
        itemRef: item.i,
        gridRef: tabItemGrid.i
      }
      this.gridContentFlag.push(newGridItem)
    }
  }
}
</script>
