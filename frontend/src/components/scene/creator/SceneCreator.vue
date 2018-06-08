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
            <v-btn small v-if="editMode" @click="newGridItem">Cenário</v-btn>
            <v-btn small v-if="editMode">Log</v-btn>
          </v-toolbar>
          <grid-layout class="scroll-y" style="max-height: 75vh" v-scroll:#scroll-target="onScroll" :layout="gridContent" :col-num="22" :row-height="30" :is-draggable="editMode" :is-resizable="editMode" :vertical-compact="false" :margin="[10, 10]" :use-css-transforms="true">
            <grid-item v-for="item in gridContent" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
              <v-card v-if="item.type === 'button'" ripple fab height="100%" v-bind:style="{'border-radius': '100%'}">
                <v-card-actions>
                  <v-spacer />
                  <v-btn small icon v-if="editMode" @click="changeGridItem(item)"><v-icon>settings</v-icon></v-btn>
                </v-card-actions>
              </v-card>
              <v-card color="transparent" flat tile v-if="item.type === 'image'" fab height="100%" :img="tabs[item.ref].content[item.elementRef].img">
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
          <v-tabs v-model="active">
            <v-tab v-for="tab in tabs" :key="tab.title" ripple>
              {{ tab.title }}
            </v-tab>
            <v-tab-item class="scroll-y" style="max-height: 82vh" v-scroll:#scroll-target="onScroll" v-for="tab in tabs" :key="tab.title">
              <v-card flat>
                <v-card-actions v-if="editMode"><v-btn block>+</v-btn></v-card-actions>
                <div v-for="item in gridContent" :key="item.i">
                    <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                </div>
                <v-card-text>{{ tab.message }}</v-card-text>
              </v-card>
            </v-tab-item>
            <v-spacer />
            <v-btn v-if="editMode" icon color="primary" @click.stop="newTab = !newTab" ripple>
              +
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
      gridContent: [
        {x: 9, y: 4, w: 4, h: 4, i: '0', type: 'button', ref: 'clickButton'},
        {x: 4, y: 0, w: 2, h: 2, i: '1', type: 'image', ref: '0', elementRef: '0'}
      ],
      tabNum: 3,
      elementNum: 1,
      tabs: [
        {
          title: 'test',
          message: 'oi',
          content: [
            {
              title: 'Image Test',
              img: 'https://media.giphy.com/media/14chvzoFjnDBGE/giphy.gif'
            }
          ]
        },
        {
          title: 'test 2',
          message: 'olá'
        },
        {
          title: 'test 3',
          message: 'black'
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
    newGridItem () {
      let newGridItem = {
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        i: this.gridCount++,
        type: 'image',
        ref: 0,
        elementRef: 0
      }
      this.gridContent.push(newGridItem)
    }
  }
}
</script>
