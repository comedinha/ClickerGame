<template>
  <v-container fluid grid-list-sm fixed>
    <v-layout row wrap>
      <v-flex md8>
        <v-card height="90vh">
          <v-toolbar dense flat>
            <v-btn small @click="backLobby">Voltar ao Lobby</v-btn>
            <v-btn small>Informações</v-btn>
            <v-spacer />
            <v-btn small v-if="userVision && editMode" @click="editMode = !editMode">Visão do Usuário</v-btn>
            <v-btn small v-if="userVision && !editMode" @click="editMode = !editMode">Visão do Criador</v-btn>
            <v-btn small v-if="editMode">Cenário</v-btn>
            <v-btn small v-if="editMode">Log</v-btn>
          </v-toolbar>
          <grid-layout class="scroll-y" style="max-height: 75vh" :layout="gridContent" :col-num="22" :row-height="30" :is-draggable="editMode" :is-resizable="editMode" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true">
            <grid-item v-for="item in gridContent" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
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
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card height="90vh">
          <v-tabs v-model="active" fixed-tabs>
            <v-tab v-for="tab in tabs" :key="tab.i" ripple>
              {{ tab.title }}
            </v-tab>
            <v-tab-item class="scroll-y" style="max-height: 82vh" v-for="tab in tabs" :key="tab.ref">
              <v-card-actions v-if="editMode"><v-btn block>+</v-btn></v-card-actions>
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
            <v-btn v-if="editMode" icon @click.stop="newTab = !newTab" ripple>
              <v-icon>settings</v-icon>
            </v-btn>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {GridLayout, GridItem} from 'vue-grid-layout'

export default {
  data () {
    return {
      userVision: true,
      editMode: true,
      saved: false,
      saveWarning: false,
      gridCount: 2,
      clickButton: 1,
      infoScreen: 1,
      gridContent: [
        {x: 9, y: 4, w: 5, h: 5, i: 'Grid 0', type: 'button'},
        {x: 9, y: 0, w: 5, h: 2, i: 'Grid 1', type: 'information'}
      ],
      tabNum: 3,
      tabs: [
        {
          i: 0,
          type: 'item',
          ref: 'Tab 0',
          title: 'Items',
          itemNum: 2,
          items: [
            {
              i: 0,
              ref: 'Content 0',
              divRef: 'Div 0',
              title: 'Image Test',
              img: 'https://media.giphy.com/media/14chvzoFjnDBGE/giphy.gif',
              gridNum: 0,
              grids: []
            },
            {
              i: 1,
              ref: 'Content 1',
              divRef: 'Div 1',
              title: 'Image Test 2',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png',
              gridNum: 0,
              grids: []
            }
          ]
        },
        {
          i: 1,
          type: 'upgrade',
          ref: 'Tab 1',
          title: 'Upgrades',
          itemNum: 5,
          items: [
            {
              i: 0,
              title: 'Upgrade',
              price: '100',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              i: 1,
              title: 'Upgrade',
              price: '100',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              i: 2,
              title: 'Upgrade',
              price: '100',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              i: 3,
              title: 'Upgrade',
              price: '100',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              i: 4,
              title: 'Upgrade',
              price: '100',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            }
          ]
        }
      ],
      active: 0,
      newTab: false
    }
  },
  components: {
    GridLayout,
    GridItem
  },
  methods: {
    backLobby () {
      if (this.saved) {
        this.$router.push('/')
      } else {
        this.saveWarning = true
      }
    },
    changeGridItem (item) {
      console.log(item)
    },
    removeGridItem (item) {
      var index = this.gridContent.indexOf(item)
      if (index > -1) {
        this.gridContent.splice(index, 1)
      }
    },
    newGridItem (tab, item) {
      let tabItemGrid = {
        i: this.tabs[tab.i].items[item.i].gridNum++,
        img: item.img
      }
      console.log(tabItemGrid)
      this.tabs[tab.i].items[item.i].grids.push(tabItemGrid)

      let newGridItem = {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        i: 'Grid ' + this.gridCount++,
        type: 'image',
        ref: tab.i,
        itemRef: item.i,
        gridRef: tabItemGrid.i
      }
      console.log(newGridItem)
      this.gridContent.push(newGridItem)
    }
  }
}
</script>
