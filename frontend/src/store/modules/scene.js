import Vue from 'vue'

const state = {
  creatorVision: true,
  editMode: true,

  saved: true,
  saveWarning: false,

  editConfigDialog: false,
  config: {},
  oldConfig: {},

  coinsDialog: false,
  coins: [],

  editCoinDialog: false,
  editCoin: [],
  oldCoin: [],

  currentWorld: 0,
  worldCount: 0,
  world: [],

  layoutDialog: false,
  editLayout: {},
  oldLayout: {},

  itemGridDialog: false,
  newItemGrid: false,
  newItemGridItem: [],
  itemGridRef: [],
  itemGrid: [],
  oldItemGrid: [],

  informationGridDialog: false,
  newInformationDialog: false,
  informationGridRef: [],
  oldInformationGrid: '',
  informationGrid: '',

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

  getCoinsDialog: state => state.coinsDialog,
  getCoins: state => state.coins,

  getEditCoinDialog: state => state.editCoinDialog,
  getEditCoin: state => state.editCoin,

  getWorld: state => state.world,

  getGridContent: state => state.world[state.currentWorld].gridContent,

  getTabs: state => state.world[state.currentWorld].tabs,

  getLayoutDialog: state => state.layoutDialog,
  getEditLayout: state => state.editLayout,

  getTabLeft: state => state.world[state.currentWorld].layout.tab.left,
  getTabLayout: state => {
    let layout = {}

    if (state.world[state.currentWorld].layout.tab.backgroundColor.hex) {
      layout['backgroundColor'] = state.world[state.currentWorld].layout.tab.backgroundColor.hex
    }

    if (state.world[state.currentWorld].layout.tab.textColor.hex) {
      layout['textColor'] = state.world[state.currentWorld].layout.tab.textColor.hex
    }

    if (state.world[state.currentWorld].layout.tab.btnColor.hex) {
      layout['btnColor'] = state.world[state.currentWorld].layout.tab.btnColor.hex
    }

    if (state.world[state.currentWorld].layout.tab.btnTextColor.hex) {
      layout['btnTextColor'] = state.world[state.currentWorld].layout.tab.btnTextColor.hex
    }

    return layout
  },

  getGridLayout: state => {
    let layout = {
      'height': '84vh',
      'max-height': '84vh'
    }

    if (state.world[state.currentWorld].layout.grid.backgroundColor.hex) {
      layout['background-color'] = state.world[state.currentWorld].layout.grid.backgroundColor.hex
    }
    if (state.world[state.currentWorld].layout.grid.backgroundImage) {
      layout['background-image'] = 'url(' + state.world[state.currentWorld].layout.grid.backgroundImage + ')'
      layout['background-position'] = 'center'
      layout['background-size'] = 'cover'
    }

    return layout
  },

  getToolbarLayout: state => {
    let layout = {}

    if (state.world[state.currentWorld].layout.toolbar.backgroundColor.hex) {
      layout['backgroundColor'] = state.world[state.currentWorld].layout.toolbar.backgroundColor.hex
    }

    if (state.world[state.currentWorld].layout.toolbar.btnColor.hex) {
      layout['btnColor'] = state.world[state.currentWorld].layout.toolbar.btnColor.hex
    }

    if (state.world[state.currentWorld].layout.toolbar.btnTextColor.hex) {
      layout['btnTextColor'] = state.world[state.currentWorld].layout.toolbar.btnTextColor.hex
    }

    return layout
  },

  getItemGridDialog: state => state.itemGridDialog,
  getItemGrid: state => state.itemGrid,

  getInformationGridDialog: state => state.informationGridDialog,
  getInformationGrid: state => state.informationGrid,

  getAddItemDialog: state => state.creatorVision && state.addItemDialog,
  getAddItem: state => state.creatorVision && state.addItem,

  getAddUpgradeDialog: state => state.creatorVision && state.addUpgradeDialog,
  getAddUpgrade: state => state.creatorVision && state.addUpgrade
}

// actions
const actions = {
  loadPlay ({ commit }, scene) {
    console.log('loadPlay')
    // Comentário: Fazer tudo que envolve carregar o jogo
    commit('updateGame', false)
  },

  loadCreate ({ commit }, scene) {
    console.log('loadCreate')
    // Comentário: Fazer tudo que envolve carregar a criação
    commit('updateGame', true)
  },

  loadDefault ({ commit }) {
    console.log('loadDeafault')
    commit('updateDefault')
  },

  savePlay ({ commit }) {
    console.log('savePlay')
    // Comentário: Fazer tanto salvar cenário quanto salvar jogo.
  },

  saveScene ({ commit, getters }) {
    console.log('saveScene')
    // Comentário: Utilizar getters.getConfig (const talves seja útil para dividir) e getters.getWorld (const aqui não...)
    let saveScene = {
      name: getters.getConfig.name,
      smallDescription: getters.getConfig.smallDescription,
      completeDescription: getters.getConfig.completeDescription,
      image: getters.getConfig.image,
      worlds: getters.getWorld,
      coins: getters.getCoins
    }
    console.log(saveScene)

    Vue.http.post('api/saveScene', saveScene).then(response => {
      console.log('response')
      console.log(response)
      commit('updateAllScenes', response)
    }).catch(() => {
      commit('updateAllScenesLoading', false)
    })
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

  setCoinsDialog ({ commit }, event) {
    commit('updateCoinsDialog', event)
  },

  editCoin ({ commit }, message) {
    commit('updateCoin', message)
  },

  saveCoin ({ commit }) {
    commit('saveCoin')
  },

  setEditCoinDialog ({ commit }, event) {
    commit('updateEditCoinDialog', event)
  },

  setEditCoin ({ commit }, message) {
    commit('updateEditCoin', message)
  },

  setLayoutDialog ({ commit }, event) {
    commit('updateLayoutDialog', event)
  },

  setEditLayout ({ commit }, message) {
    commit('updateEditLayout', message)
  },

  saveLayout ({ commit }) {
    commit('saveLayout')
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

  itemGrid ({ commit }) {
    commit('itemGrid')
  },

  removeGridItem ({ commit }, item) {
    commit('removeGridItem', item)
  },

  setInformationGridDialog ({ commit }, event) {
    commit('updateInformationGridDialog', event)
  },

  setInformationGrid ({ commit }, message) {
    commit('updateInformationGrid', message)
  },

  informationGrid ({ commit }) {
    commit('informationGrid')
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
    let firstConfig = {
      name: '',
      smallDescription: '',
      completeDescription: '',
      image: ''
    }
    state.config = firstConfig

    state.currentWorld = 0
    let firstWorld = {
      ref: 'World ' + state.worldCount++,
      name: 'World',

      layout: {
        tab: {
          left: false,
          backgroundColor: {},
          textColor: {},
          btnColor: {},
          btnTextColor: {}
        },
        grid: {
          backgroundColor: {},
          backgroundImage: ''
        },
        toolbar: {
          backgroundColor: {},
          btnColor: {},
          btnTextColor: {}
        }
      },

      gridCount: 0,
      gridContent: [],

      gridButtonsCount: 0,
      gridButtons: [],

      gridInformationCount: 0,
      gridInformation: [],

      tabCount: 0,
      tabs: []
    }
    state.world.push(firstWorld)

    let firstCoin = {
      name: 'Money',
      symbol: '$',
      worlds: [ { ref: firstWorld.ref } ],
      used: 0
    }
    state.coins.push(firstCoin)

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
      gridsCount: 0,
      grids: []
    }
    state.world[state.currentWorld].tabs[indexTabItem].items.push(firstItem)

    let secondItem = {
      ref: 'Content ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount,
      divRef: 'Div ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount++,
      title: 'Image Test 2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png',
      gridsCount: 0,
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
      ref: 'Button ' + state.world[state.currentWorld].gridButtonsCount++,
      style: {
        'borderRadius': '100%'
      }
    }
    state.world[state.currentWorld].gridButtons.push(firstGridButton)

    let firstButton = {
      x: 9,
      y: 4,
      w: 5,
      h: 5,
      i: 'Grid ' + state.world[state.currentWorld].gridCount++,
      type: 'button',
      ref: firstGridButton.ref
    }
    state.world[state.currentWorld].gridContent.push(firstButton)

    let firstGridInformation = {
      ref: 'Information ' + state.world[state.currentWorld].gridInformationCount++,
      text: `
        <center>{tc}</center>
        <center>{ts} por segundo</center>
      `
    }
    state.world[state.currentWorld].gridInformation.push(firstGridInformation)

    let firstInfomation = {
      x: 9,
      y: 0,
      w: 5,
      h: 2,
      i: 'Grid ' + state.world[state.currentWorld].gridCount++,
      type: 'information',
      ref: firstGridInformation.ref
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

  updateCoinsDialog (state, event) {
    state.coinsDialog = event
  },

  updateCoin (state, event) {
    state.oldCoin = event

    let old = {
      name: event.name,
      symbol: event.symbol,
      worlds: event.worlds,
      used: event.used
    }

    state.editCoin = old
    state.editCoinDialog = true
  },

  saveCoin (state) {
    const indexCoin = state.coins.indexOf(state.oldCoin)
    state.coins[indexCoin] = state.editCoin

    state.editCoinDialog = false
    state.coinsDialog = false
  },

  updateEditCoinDialog (state, event) {
    state.editCoinDialog = event
  },

  updateEditCoin (state, message) {
    state.editCoin = message
  },

  updateLayoutDialog (state, event) {
    if (event === true) {
      state.editLayout = JSON.parse(JSON.stringify(state.world[state.currentWorld].layout))
    }

    state.layoutDialog = event
  },

  updateEditLayout (state, message) {
    state.editLayout = message
  },

  saveLayout (state) {
    state.world[state.currentWorld].layout = state.editLayout
    state.editLayout = {}
    state.layoutDialog = false
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
      } else if (item.type === 'information') {
        state.informationGridDialog = true
        state.informationGridRef = item
        state.oldInformationGrid = item.ref

        let newInformation = {
          text: item.ref.text
        }
        state.informationGrid = newInformation
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

  itemGrid (state) {
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

  updateInformationGridDialog (state, event) {
    if (event === false) {
      state.informationGrid = []
      state.oldInformationGrid = []
    }

    state.informationGridDialog = event
  },

  updateInformationGrid (state, message) {
    state.informationGrid = message
  },

  informationGrid (state) {
    if (state.newInformationDialog === true) {
      // Comentário: Adicionar novo dialog.
    } else {
      const indexInformation = state.world[state.currentWorld].gridInformation.indexOf(state.informationGridRef.ref)
      state.world[state.currentWorld].gridInformation[indexInformation] = state.informationGrid

      state.informationGridRef.ref = state.world[state.currentWorld].gridInformation[indexInformation]
    }

    state.informationGridDialog = false
    state.informationGrid = []
    state.oldInformationGrid = []
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
      countPerSecond: item.countPerSecond,
      perSecond: item.perSecond,
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
        countPerSecond: state.addItem.countPerSecond,
        perSecond: state.addItem.perSecond,
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
