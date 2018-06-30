import Vue from 'vue'

const state = {
  creatorVision: true,
  editMode: true,

  saved: true,
  saveWarning: false,

  editConfigDialog: false,
  config: {
    name: '',
    smallDescription: '',
    completeDescription: '',
    image: ''
  },
  oldConfig: {},

  currentWorld: 0,
  world: [
    {
      ref: 'World 0',

      gridCount: 0,
      gridContent: [],

      gridButtons: [],

      gridInformation: [],

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

  getEditConfigDialog: state => state.editConfigDialog,
  getConfig: state => state.config,

  getWorld: state => state.world,

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

  loadDefault ({ commit }) {
    commit('updateDefault')
  },

  savePlay ({ commit }) {
    // Comentário: Fazer tanto salvar cenário quanto salvar jogo.
  },

  saveScene ({ commit, getters }) {
    // Comentário: Utilizar getters.getConfig (const talves seja útil para dividir) e getters.getWorld (const aqui não...)
    console.log(getters.getConfig)
    console.log(getters.getWorld)
  },

  setEditMode ({ commit }, event) {
    commit('updateEditMode', event)
  },

  backLobby ({ commit }) {
    return new Promise((resolve) => {
      commit('backToLobby', resolve)
    })
  },

  setEditConfigDialog ({ commit }, event) {
    commit('updateEditConfigDialog', event)
  },

  setConfig ({ commit }, message) {
    commit('updateConfig', message)
  },

  saveConfig ({ commit }) {
    commit('saveConfig')
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

  setAddItemDialogNewItem ({commit}, event) {
    commit('updateItemDialogNewItem', event)
  },

  setAddItem ({ commit }, message) {
    commit('updateAddItem', message)
  },

  setEditItem ({ commit }, message) {
    commit('editItem', message)
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
  updateDefault (state) {
    let firstGridButton = {
      style: {
        'border-radius': '100%'
      }
    }
    state.world[state.currentWorld].gridButtons.push(firstGridButton)

    const indexButton = state.world[state.currentWorld].gridButtons.indexOf(firstGridButton)
    let firstButton = {
      x: 9,
      y: 4,
      w: 5,
      h: 5,
      i: 'Grid ' + state.world[state.currentWorld].gridCount++,
      type: 'button',
      ref: state.world[state.currentWorld].gridButtons[indexButton]
    }
    state.world[state.currentWorld].gridContent.push(firstButton)

    let firstGridInformation = {
      text: `
        <center>{tc}</center>
        <center>{ts} por segundo</center>
      `
    }
    state.world[state.currentWorld].gridInformation.push(firstGridInformation)

    const indexInformation = state.world[state.currentWorld].gridInformation.indexOf(firstGridInformation)
    let firstInfomation = {
      x: 9,
      y: 0,
      w: 5,
      h: 2,
      i: 'Grid ' + state.world[state.currentWorld].gridCount++,
      type: 'information',
      ref: state.world[state.currentWorld].gridInformation[indexInformation]
    }
    state.world[state.currentWorld].gridContent.push(firstInfomation)
  },

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

  updateEditConfigDialog (state, event) {
    if (state.creatorVision === true) {
      if (event === false) {
        if (state.config !== state.oldConfig) {
          state.config = state.oldConfig
        }
      } else {
        let old = {
          name: state.config.name,
          smallDescription: state.config.smallDescription,
          completeDescription: state.config.completeDescription,
          image: state.config.image
        }

        state.oldConfig = old
      }

      state.editConfigDialog = event
    }
  },

  updateConfig (state, message) {
    state.config = message
  },

  saveConfig (state) {
    state.editConfigDialog = false
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
        itemGrid: item.grids,
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
        if (item.itemGrid) {
          var indexItem = item.itemGrid.indexOf(state.world[state.currentWorld].gridContent[indexGrid].ref)
          item.itemGrid.splice(indexItem, 1)
        } else if (item.type === 'button') {
          var indexButton = state.world[state.currentWorld].gridButtons.indexOf(state.world[state.currentWorld].gridContent[indexGrid].ref)
          state.world[state.currentWorld].gridButtons.splice(indexButton, 1)
        } else if (item.type === 'information') {
          var indexInformation = state.world[state.currentWorld].gridInformation.indexOf(state.world[state.currentWorld].gridContent[indexGrid].ref)
          state.world[state.currentWorld].gridInformation.splice(indexInformation, 1)
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

  updateItemDialogNewItem (state, message) {
    state.newItem = message
  },

  updateAddItem (state, message) {
    const { tab } = message

    state.currentTab = tab
    state.addItem = []
  },

  editItem (state, message) {
    const { tab, item } = message
    state.currentTab = tab

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
    state.addItemDialog = false
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
