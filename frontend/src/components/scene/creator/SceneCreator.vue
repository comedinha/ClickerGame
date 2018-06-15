<template>
  <v-container fluid grid-list-sm fixed>
    <v-layout row wrap>
      <v-flex md8>
        <v-card height="90vh">
          <Toolbar :saved="saved" @updateSaveWarning="saveWarning = $event" :editMode="editMode" @updateEditMode="editMode = $event" :userVision="userVision"/>
          <GridContent :editMode="editMode" :gridContent="gridContent" @updateGridContent="gridContent = $event" :tabs="tabs" />
        </v-card>
      </v-flex>
      <v-flex md4>
        <BuyableTabs :editMode="editMode" :gridContent="gridContent" @updateGridContent="gridContent = $event" :tabs="tabs" @updateTabs="tabs = $event" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Toolbar from '@/components/scene/block/Toolbar'
import GridContent from '@/components/scene/block/GridContent'
import BuyableTabs from '@/components/scene/block/BuyableTabs'

export default {
  data () {
    return {
      userVision: true,
      editMode: true,

      saved: false,
      saveWarning: false,

      clickButton: 1,
      infoScreen: 1,
      gridContent: [
        {x: 9, y: 4, w: 5, h: 5, i: 'Grid 0', type: 'button', ref: 'Button 0'},
        {x: 9, y: 0, w: 5, h: 2, i: 'Grid 1', type: 'information', ref: 'Information 0'}
      ],

      tabs: [
        {
          i: 0,
          type: 'item',
          ref: 'Tab 0',
          title: 'Items',
          items: [
            {
              i: 0,
              ref: 'Content 0',
              divRef: 'Div 0',
              title: 'Image Test',
              img: 'https://media.giphy.com/media/14chvzoFjnDBGE/giphy.gif',
              grids: []
            },
            {
              i: 1,
              ref: 'Content 1',
              divRef: 'Div 1',
              title: 'Image Test 2',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png',
              grids: []
            }
          ]
        },
        {
          i: 1,
          type: 'upgrade',
          ref: 'Tab 1',
          title: 'Upgrades',
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

      editTab: false
    }
  },
  components: {
    Toolbar,
    GridContent,
    BuyableTabs
  }
}
</script>
