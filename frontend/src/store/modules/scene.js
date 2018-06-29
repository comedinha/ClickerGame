import Vue from 'vue'

const state = {
  creatorVision: true,
  editMode: true,

  saved: true,
  saveWarning: false,

  currentWorld: 0,
  world: [
    {
      ref: 'World 0',

      clickButton: 1,
      infoScreen: 1,
      gridCount: 2,
      gridContent: [
        {x: 9, y: 4, w: 5, h: 5, i: 'Grid 0', type: 'button', ref: 'Button 0'},
        {x: 9, y: 0, w: 5, h: 2, i: 'Grid 1', type: 'information', ref: 'Information 0'}
      ],

      tabs: [
        {
          type: 'item',
          refTab: 'Tab 0',
          refItem: 'Item 0',
          title: 'Items',
          items: [
            {
              ref: 'Content 0',
              divRef: 'Div 0',
              title: 'Image Test',
              image: 'https://media.giphy.com/media/14chvzoFjnDBGE/giphy.gif',
              grids: []
            },
            {
              ref: 'Content 1',
              divRef: 'Div 1',
              title: 'Image Test 2',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png',
              grids: []
            }
          ]
        },
        {
          type: 'upgrade',
          refTab: 'Tab 1',
          refItem: 'Item 1',
          title: 'Upgrades',
          items: [
            {
              title: 'Upgrade',
              price: '100',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              title: 'Upgrade',
              price: '100',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              title: 'Upgrade',
              price: '100',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              title: 'Upgrade',
              price: '100',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            },
            {
              title: 'Upgrade',
              price: '100',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
            }
          ]
        }
      ]
    }
  ],

  currentTab: [],

  addItemDialog: false,
  newItem: false,
  editItem: {},
  addItem: {},

  addUpgradeDialog: false,
  addUpgrade: {}
}

// getters
const getters = {
  getCreatorVision: state => state.creatorVision,

  getEditMode: state => state.creatorVision && state.editMode,

  getSaved: state => state.saved,

  getSaveWarning: state => state.saveWarning,

  getGridContent: state => state.world[state.currentWorld].gridContent,

  getTabs: state => state.world[state.currentWorld].tabs,

  getAddItemDialog: state => state.creatorVision && state.addItemDialog,
  getAddItem: state => state.creatorVision && state.addItem,

  getAddUpgradeDialog: state => state.creatorVision && state.addUpgradeDialog,
  getAddUpgrade: state => state.creatorVision && state.addUpgrade
}

// actions
const actions = {
  loadPlay ({ commit }, scene) {
    // Comentário: Fazer tudo que envolve carregar o jogo
    commit('updateGame', false)
  },

  loadCreate ({ commit }, scene) {
    // Comentário: Fazer tudo que envolve carregar a criação
    commit('updateGame', true)
  },

  save ({ commit }) {
    // Comentário: Fazer tanto salvar cenário quanto salvar jogo.
  },

  setEditMode ({ commit }, event) {
    commit('updateEditMode', event)
  },

  backLobby ({ commit }) {
    return new Promise((resolve) => {
      commit('backToLobby', resolve)
    })
  },

  newGridItem ({ commit }, item) {
    commit('newGridItem', item)
  },

  updateGridContent ({ commit }, event) {
    commit('updateGridContent', event)
  },

  changeGridItem ({ commit }, item) {
    commit('changeGridItem', item)
  },

  removeGridItem ({ commit }, item) {
    commit('removeGridItem', item)
  },

  setAddItemDialog ({ commit }, event) {
    commit('updateItemDialog', event)
  },

  setAddItemDialogTab ({ commit }, message) {
    commit('updateItemDialogTab', message)
  },

  setAddItemDialogNewItem ({commit}, event) {
    commit('updateItemDialogNewItem', event)
  },

  setAddItem ({ commit }, item) {
    commit('updateAddItem', item)
  },

  setEditItem ({ commit }, item) {
    commit('editItem', item)
  },

  addItemTab ({ commit }) {
    commit('addItemTab')
  },

  setAddUpgradeDialog ({ commit }, event) {
    commit('updateUpgradeDialog', event)
  },

  addUpgrade ({ commit }, item) {
    commit('updateAddUpgrade', item)
  }
}

// mutations
const mutations = {
  updateGame (state, event) {
    state.editMode = event
    state.creatorVision = event
  },

  updateEditMode (state, event) {
    if (state.creatorVision === true) {
      state.editMode = event
    }
  },

  backToLobby (state, resolve) {
    if (state.creatorVision === true) {
      if (state.saved) {
        resolve()
      } else {
        state.saveWarning = true
      }
    } else {
      resolve()
    }
  },

  newGridItem (state, item) {
    if (state.creatorVision === true) {
      let tabItemGrid = {
        image: item.image
      }

      let newGridItem = {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        i: 'Grid ' + state.world[state.currentWorld].gridCount++,
        type: 'image',
        tab: item,
        ref: item.grids[(item.grids.push(tabItemGrid) - 1)]
      }
      state.world[state.currentWorld].gridContent.push(newGridItem)
    }
  },

  updateGridContent (state, event) {
    if (state.creatorVision === true) {
      state.world[state.currentWorld].gridContent = event
    }
  },

  changeGridItem (state, item) {
    if (state.creatorVision === true) {
      console.log(state, item)
    }
  },

  removeGridItem (state, item) {
    if (state.creatorVision === true) {
      var indexGrid = state.world[state.currentWorld].gridContent.indexOf(item)
      if (indexGrid > -1) {
        if (item.tab) {
          var indexItem = item.tab.grids.indexOf(state.world[state.currentWorld].gridContent[indexGrid].ref)
          item.tab.grids.splice(indexItem, 1)
        }
        state.world[state.currentWorld].gridContent.splice(indexGrid, 1)
      }
    }
  },

  updateItemDialog (state, event) {
    if (event === false) {
      state.newItem = false
    }

    state.addItemDialog = event
  },

  updateItemDialogTab (state, message) {
    state.currentTab = message
  },

  updateItemDialogNewItem (state, message) {
    state.newItem = message
  },

  updateAddItem (state, item) {
    state.addItem = item
  },

  editItem (state, item) {
    let itemInfo = {
      ref: item.ref,
      divRef: item.divRef,

      title: item.title,
      image: item.image,
      description: item.description,
      startCount: item.startCount,
      startPrice: item.startPrice,
      formula: item.formula,
      grids: item.grids
    }

    state.editItem = item
    state.addItem = itemInfo
  },

  addItemTab (state) {
    if (state.newItem) {
      let newItem = {
        ref: 'Content ' + state.currentTab.length,
        divRef: 'Div ' + state.currentTab.length,

        title: state.addItem.title,
        image: state.addItem.image,
        description: state.addItem.description,
        startCount: state.addItem.startCount,
        startPrice: state.addItem.startPrice,
        formula: state.addItem.formula,
        grids: []
      }

      state.currentTab.push(newItem)
      state.currentTab = []
    } else {
      var indexItem = state.currentTab.indexOf(state.editItem)

      Vue.set(state.currentTab, indexItem, state.addItem)
    }
  },

  updateUpgradeDialog (state, event) {
    state.addUpgradeDialog = event
  },

  updateAddUpgrade (state, item) {
    state.addUpgrade = item
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
