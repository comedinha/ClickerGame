<template>
  <v-tabs v-model="active" fixed-tabs>
    <v-tab v-for="tab in tabs" :key="tab.refTab" ripple>
      {{ tab.title }}
    </v-tab>
    <v-tab-item class="scroll-y" style="max-height: 82vh" v-for="tab in tabs" :key="tab.refItem">
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
                <v-btn icon @click="newGridItem(item)">
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
    }
  },
  methods: {
    newGridItem (item) {
      let tabItemGrid = {
        img: item.img
      }

      let newGridItem = {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        i: 'Grid ' + this.gridContent.length,
        type: 'image',
        ref: item.grids[(item.grids.push(tabItemGrid) - 1)]
      }
      this.gridContentFlag.push(newGridItem)
    }
  }
}
</script>
