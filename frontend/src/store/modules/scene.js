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
    globalCoin: true,
    coinName: '',
    coinSymbol: '',
    image: ''
  },
  oldConfig: {},

  currentWorld: 0,
  worldCount: 1,
  world: [
    {
      ref: 'World 0',
      name: 'World',
      coinName: '',
      coinSymbol: '',

      gridCount: 0,
      gridContent: [],

      gridButtons: [],

      gridInformation: [],

      tabCount: 0,
      tabs: []
    }
  ],

  itemGridDialog: false,
  newItemGrid: false,
  newItemGridItem: [],
  itemGridRef: [],
  itemGrid: [],
  oldItemGrid: [],

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

  getItemGridDialog: state => state.itemGridDialog,
  getItemGrid: state => state.itemGrid,

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

  updateGridContent ({ commit }, event) {
    commit('updateGridContent', event)
  },

  changeGridItem ({ commit }, item) {
    commit('changeGridItem', item)
  },

  newGridItem ({ commit }, item) {
    commit('newGridItem', item)
  },

  setItemGridDialog ({ commit }, event) {
    commit('updateItemGridDialog', event)
  },

  setItemGrid ({ commit }, message) {
    commit('updateItemGrid', message)
  },

  setItemGridValue ({ commit }) {
    commit('updateItemGridValue')
  },

  addItemGrid ({ commit }) {
    commit('addItemGrid')
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

  addItemTab ({ commit }) {
    commit('addItemTab')
  },

  addItem ({ commit }, message) {
    commit('addItem', message)
  },

  editItem ({ commit }, message) {
    commit('editItem', message)
  },

  deleteItem ({ commit }, message) {
    commit('deleteItem', message)
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
    let tabItem = {
      type: 'item',
      refTab: 'Tab ' + state.world[state.currentWorld].tabCount,
      refItem: 'Item ' + state.world[state.currentWorld].tabCount++,
      title: 'Items',
      itemsCount: 0,
      items: []
    }
    state.world[state.currentWorld].tabs.push(tabItem)

    const indexTabItem = state.world[state.currentWorld].tabs.indexOf(tabItem)
    let firstItem = {
      ref: 'Content ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount,
      divRef: 'Div ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount++,
      title: 'Image Test',
      image: 'https://media.giphy.com/media/14chvzoFjnDBGE/giphy.gif',
      grids: []
    }
    state.world[state.currentWorld].tabs[indexTabItem].items.push(firstItem)

    let secondItem = {
      ref: 'Content ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount,
      divRef: 'Div ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount++,
      title: 'Image Test 2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png',
      grids: []
    }
    state.world[state.currentWorld].tabs[indexTabItem].items.push(secondItem)

    let tabUpgrade = {
      type: 'upgrade',
      refTab: 'Tab ' + state.world[state.currentWorld].tabCount,
      refItem: 'Item ' + state.world[state.currentWorld].tabCount++,
      title: 'Upgrades',
      items: []
    }
    state.world[state.currentWorld].tabs.push(tabUpgrade)

    const indexTabUpgrade = state.world[state.currentWorld].tabs.indexOf(tabUpgrade)
    let firstUpgrade = {
      title: 'Upgrade',
      price: '100',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
    }
    state.world[state.currentWorld].tabs[indexTabUpgrade].items.push(firstUpgrade)

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
          coinName: state.config.coinName,
          coinSymbol: state.config.coinSymbol,
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
    state.itemGridDialog = true
    state.itemGridRef = item
    state.newItemGrid = true

    let itemDefault = {
      image: item.image,
      useItemImage: true,
      showWhen: 0
    }
    state.itemGrid = itemDefault
  },

  updateGridContent (state, event) {
    if (state.creatorVision === true) {
      state.world[state.currentWorld].gridContent = event
    }
  },

  changeGridItem (state, item) {
    if (state.creatorVision === true) {
      if (item.type === 'item') {
        state.itemGridDialog = true
        state.itemGridRef = item.item
        state.oldItemGrid = item.ref
        state.newItemGridItem = item
        state.newItemGrid = false

        let newItem = {
          image: item.ref.image,
          useItemImage: item.ref.useItemImage,
          showWhen: item.ref.showWhen
        }
        state.itemGrid = newItem
      }
    }
  },

  updateItemGridDialog (state, event) {
    if (event === false) {
      state.itemGridRef = []
      state.itemGrid = []
      state.newItemGrid = false
    }

    state.itemGridDialog = event
  },

  updateItemGrid (state, message) {
    state.itemGrid = message
  },

  updateItemGridValue (state) {
    if (state.itemGrid.useItemImage === true) {
      state.itemGrid.image = state.itemGridRef.image
    }
  },

  addItemGrid (state) {
    if (state.creatorVision === true) {
      if (state.newItemGrid === true) {
        let newGridItem = {
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          i: 'Grid ' + state.world[state.currentWorld].gridCount++,
          type: 'item',
          item: state.itemGridRef,
          ref: state.itemGridRef.grids[(state.itemGridRef.grids.push(state.itemGrid) - 1)]
        }

        state.world[state.currentWorld].gridContent.push(newGridItem)
      } else {
        const indexGrid = state.itemGridRef.grids.indexOf(state.oldItemGrid)
        state.itemGridRef.grids[indexGrid] = state.itemGrid

        state.newItemGridItem.ref = state.itemGridRef.grids[indexGrid]
      }

      state.itemGridDialog = false
      state.itemGrid = []
      state.oldItemGrid = []
      state.itemGridRef = []
    }
  },

  removeGridItem (state, item) {
    if (state.creatorVision === true) {
      var indexGrid = state.world[state.currentWorld].gridContent.indexOf(item)
      if (indexGrid > -1) {
        if (item.type === 'item') {
          var indexItem = item.item.grids.indexOf(state.world[state.currentWorld].gridContent[indexGrid].ref)
          item.item.grids.splice(indexItem, 1)
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

  addItem (state, message) {
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

  deleteItem (state, message) {
    // Comentário: Falta deletar upgrade se tiver...
    const { tab, item } = message

    var result = state.world[state.currentWorld].gridContent.find(gridItem => gridItem.item === item)
    while (result) {
      const indexGrid = state.world[state.currentWorld].gridContent.indexOf(result)
      state.world[state.currentWorld].gridContent.splice(indexGrid, 1)

      result = state.world[state.currentWorld].gridContent.find(gridItem => gridItem.item === item)
    }

    const indexItem = tab.items.indexOf(item)
    tab.items.splice(indexItem, 1)
  },

  addItemTab (state) {
    if (state.newItem) {
      let newItem = {
        ref: 'Content ' + state.currentTab.itemsCount,
        divRef: 'Div ' + state.currentTab.itemsCount++,

        title: state.addItem.title,
        image: state.addItem.image,
        description: state.addItem.description,
        startCount: state.addItem.startCount,
        startPrice: state.addItem.startPrice,
        formula: state.addItem.formula,
        grids: []
      }

      state.currentTab.items.push(newItem)
      state.currentTab = []
    } else {
      var indexItem = state.currentTab.items.indexOf(state.editItem)

      Vue.set(state.currentTab.items, indexItem, state.addItem)
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
