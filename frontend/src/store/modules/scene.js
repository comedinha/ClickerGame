import Vue from 'vue'

const state = {
  sceneId: '',
  creatorVision: true,
  editMode: true,

  isPublished: false,
  canApprove: false,
  canResolve: false,

  saved: true,
  saveWarning: false,

  editConfigDialog: false,
  config: {},
  oldConfig: {},

  coinsDialog: false,
  coinsCount: 0,
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
  itemGridTab: [],
  itemGridItem: [],
  itemGrid: [],

  informationGridDialog: false,
  newInformationDialog: false,
  informationGridRef: [],
  informationGrid: '',

  currentTab: [],

  addItemDialog: false,
  newItem: false,
  addItem: {},

  addUpgradeDialog: false,
  addUpgrade: {},

  playId: ''
}

// getters
const getters = {
  hasSceneId: state => !!state.sceneId,
  isPublished: state => state.creatorVision && state.isPublished,
  canApprove: state => state.creatorVision && state.canApprove,
  canResolve: state => state.creatorVision && state.canResolve,

  getCreatorVision: state => state.creatorVision,

  getEditMode: state => state.creatorVision && state.editMode,

  getSaved: state => state.saved,

  getSaveWarning: state => state.saveWarning,

  getEditConfigDialog: state => state.editConfigDialog,
  getConfig: state => state.config,

  getCoinsDialog: state => state.coinsDialog,
  getCoinsCount: state => state.coinsCount,
  getCoins: state => state.coins,

  getEditCoinDialog: state => state.editCoinDialog,
  getEditCoin: state => state.editCoin,

  getCurrentWorld: state => state.world[state.currentWorld],

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
    if (getters.getConfig.name !== '') {
      console.log('saveScene')
      // Comentário: Utilizar getters.getConfig (const talves seja útil para dividir) e getters.getWorld (const aqui não...)
      let saveScene = {
        name: getters.getConfig.name,
        smallDescription: getters.getConfig.smallDescription,
        completeDescription: getters.getConfig.completeDescription,
        image: getters.getConfig.image,
        worlds: getters.getWorld,
        coinsCount: getters.getCoinsCount,
        coins: getters.getCoins
      }
      console.log(saveScene)

      Vue.http.post('api/saveScene', saveScene).then(response => {
        console.log(response)
        commit('updateAllScenes', response)
      }).catch(() => {
        commit('updateAllScenesLoading', false)
      })
    } else {
      commit('updateEditConfigDialog', true)
    }
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

  newGridItem ({ commit }, message) {
    commit('newGridItem', message)
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
    if (state.creatorVision === true) {
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
        ref: 'Ref ' + state.coinsCount++,
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
          <div style="text-align:center">
            {tc}
            <br />
            {ts} por segundo
          </div>
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
    }
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
        state.oldConfig = JSON.parse(JSON.stringify(state.config))
      }

      state.editConfigDialog = event
    }
  },

  updateConfig (state, message) {
    if (state.creatorVision === true) {
      state.config = message
    }
  },

  saveConfig (state) {
    if (state.creatorVision === true) {
      state.editConfigDialog = false
      state.saved = false
    }
  },

  updateCoinsDialog (state, event) {
    if (state.creatorVision === true) {
      state.coinsDialog = event
    }
  },

  updateCoin (state, event) {
    if (state.creatorVision === true) {
      state.oldCoin = event

      state.editCoin = JSON.parse(JSON.stringify(event))
      state.editCoinDialog = true
    }
  },

  saveCoin (state) {
    if (state.creatorVision === true) {
      const indexCoin = state.coins.indexOf(state.oldCoin)
      state.coins[indexCoin] = state.editCoin

      state.editCoinDialog = false
      state.coinsDialog = false
      state.saved = false
    }
  },

  updateEditCoinDialog (state, event) {
    if (state.creatorVision === true) {
      state.editCoinDialog = event
    }
  },

  updateEditCoin (state, message) {
    if (state.creatorVision === true) {
      state.editCoin = message
    }
  },

  updateLayoutDialog (state, event) {
    if (state.creatorVision === true) {
      if (event === true) {
        state.editLayout = JSON.parse(JSON.stringify(state.world[state.currentWorld].layout))
      }

      state.layoutDialog = event
    }
  },

  updateEditLayout (state, message) {
    if (state.creatorVision === true) {
      state.editLayout = message
    }
  },

  saveLayout (state) {
    if (state.creatorVision === true) {
      state.world[state.currentWorld].layout = state.editLayout
      state.editLayout = {}
      state.layoutDialog = false
      state.saved = false
    }
  },

  newGridItem (state, message) {
    if (state.creatorVision === true) {
      const {tab, item} = message

      state.itemGridDialog = true
      state.itemGridTab = tab
      state.itemGridItem = item
      state.newItemGrid = true

      let itemDefault = {
        image: item.image,
        useItemImage: true,
        showWhen: 0
      }
      state.itemGrid = itemDefault
      state.saved = false
    }
  },

  updateGridContent (state, event) {
    if (state.creatorVision === true) {
      state.world[state.currentWorld].gridContent = event
      state.saved = false
    }
  },

  changeGridItem (state, item) {
    if (state.creatorVision === true) {
      if (item.type === 'item') {
        state.itemGridDialog = true
        state.newItemGrid = false

        let resultTab = state.world[state.currentWorld].tabs.filter(obj => {
          return obj.refTab === item.tab
        })
        state.itemGridTab = resultTab[0]

        let indexOfTab = state.world[state.currentWorld].tabs.indexOf(resultTab[0])
        let resultItem = state.world[state.currentWorld].tabs[indexOfTab].items.filter(obj => {
          return obj.ref === item.item
        })
        state.itemGridItem = resultItem[0]

        let indexOfItem = state.world[state.currentWorld].tabs[indexOfTab].items.indexOf(resultItem[0])
        let result = state.world[state.currentWorld].tabs[indexOfTab].items[indexOfItem].grids.filter(obj => {
          return obj.ref === item.ref
        })

        state.itemGrid = JSON.parse(JSON.stringify(result[0]))
      } else if (item.type === 'information') {
        state.informationGridDialog = true

        let result = state.world[state.currentWorld].gridInformation.filter(obj => {
          return obj.ref === item.ref
        })
        state.informationGrid = JSON.parse(JSON.stringify(result[0]))
      }

      state.saved = false
    }
  },

  updateItemGridDialog (state, event) {
    if (state.creatorVision === true) {
      if (event === false) {
        state.itemGridTab = []
        state.itemGridItem = []
        state.itemGrid = []
        state.newItemGrid = false
      }

      state.itemGridDialog = event
    }
  },

  updateItemGrid (state, message) {
    if (state.creatorVision === true) {
      state.itemGrid = message
    }
  },

  updateItemGridValue (state) {
    if (state.creatorVision === true) {
      if (state.itemGrid.useItemImage === true) {
        state.itemGrid.image = state.itemGridItem.image
      }
    }
  },

  itemGrid (state) {
    if (state.creatorVision === true) {
      if (state.newItemGrid === true) {
        state.itemGrid.ref = 'Ref ' + state.itemGridItem.gridsCount++
        state.itemGridItem.grids.push(state.itemGrid)

        let newGridItem = {
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          i: 'Grid ' + state.world[state.currentWorld].gridCount++,
          type: 'item',
          tab: state.itemGridTab.refTab,
          item: state.itemGridItem.ref,
          ref: state.itemGrid.ref
        }

        state.world[state.currentWorld].gridContent.push(newGridItem)
      } else {
        let result = state.itemGridItem.grids.filter(obj => {
          return obj.ref === state.itemGrid.ref
        })

        const indexGrid = state.itemGridItem.grids.indexOf(result[0])
        state.itemGridItem.grids[indexGrid] = state.itemGrid
      }

      state.itemGridDialog = false
      state.itemGrid = []
      state.itemGridTab = []
      state.itemGridItem = []
      state.saved = false
    }
  },

  removeGridItem (state, item) {
    if (state.creatorVision === true) {
      var indexGrid = state.world[state.currentWorld].gridContent.indexOf(item)
      if (indexGrid > -1) {
        if (item.type === 'item') {
          let resultTab = state.world[state.currentWorld].tabs.filter(obj => {
            return obj.refTab === item.tab
          })

          let indexOfTab = state.world[state.currentWorld].tabs.indexOf(resultTab[0])
          let resultItem = state.world[state.currentWorld].tabs[indexOfTab].items.filter(obj => {
            return obj.ref === item.item
          })

          let indexOfItem = state.world[state.currentWorld].tabs[indexOfTab].items.indexOf(resultItem[0])
          let result = state.world[state.currentWorld].tabs[indexOfTab].items[indexOfItem].grids.filter(obj => {
            return obj.ref === item.ref
          })

          var indexItem = state.world[state.currentWorld].tabs[indexOfTab].items[indexOfItem].grids.indexOf(result[0])
          state.world[state.currentWorld].tabs[indexOfTab].items[indexOfItem].grids.splice(indexItem, 1)
        } else if (item.type === 'button') {
          let result = state.world[state.currentWorld].gridButtons.filter(obj => {
            return obj.ref === item.ref
          })

          var indexButton = state.world[state.currentWorld].gridButtons.indexOf(result)
          state.world[state.currentWorld].gridButtons.splice(indexButton, 1)
        } else if (item.type === 'information') {
          let result = state.world[state.currentWorld].gridInformation.filter(obj => {
            return obj.ref === item.ref
          })

          var indexInformation = state.world[state.currentWorld].gridInformation.indexOf(result)
          state.world[state.currentWorld].gridInformation.splice(indexInformation, 1)
        }

        state.world[state.currentWorld].gridContent.splice(indexGrid, 1)
        state.saved = false
      }
    }
  },

  updateInformationGridDialog (state, event) {
    if (state.creatorVision === true) {
      if (event === false) {
        state.informationGrid = []
      }

      state.informationGridDialog = event
    }
  },

  updateInformationGrid (state, message) {
    if (state.creatorVision === true) {
      state.informationGrid = message
    }
  },

  informationGrid (state) {
    if (state.creatorVision === true) {
      if (state.newInformationDialog === true) {
        // Comentário: Adicionar novo dialog.
      } else {
        let result = state.world[state.currentWorld].gridInformation.filter(obj => {
          return obj.ref === state.informationGrid.ref
        })

        let indexOfInformation = state.world[state.currentWorld].gridInformation.indexOf(result[0])
        Vue.set(state.world[state.currentWorld].gridInformation, indexOfInformation, state.informationGrid)
      }

      state.informationGridDialog = false
      state.informationGrid = []
      state.saved = false
    }
  },

  updateItemDialog (state, event) {
    if (state.creatorVision === true) {
      if (event === false) {
        state.newItem = false
      }

      state.addItemDialog = event
    }
  },

  updateItemDialogNewItem (state, message) {
    if (state.creatorVision === true) {
      state.newItem = message
    }
  },

  addItem (state, message) {
    if (state.creatorVision === true) {
      const { tab } = message

      state.currentTab = tab
      state.addItem = {}
    }
  },

  editItem (state, message) {
    if (state.creatorVision === true) {
      const { tab, item } = message
      state.currentTab = tab

      state.addItem = JSON.parse(JSON.stringify(item))
    }
  },

  deleteItem (state, message) {
    if (state.creatorVision === true) {
      // Comentário: Falta deletar upgrade se tiver...
      const { tab, item } = message

      var result = state.world[state.currentWorld].gridContent.find(gridItem => gridItem.item === item.ref)
      while (result) {
        const indexGrid = state.world[state.currentWorld].gridContent.indexOf(result)
        state.world[state.currentWorld].gridContent.splice(indexGrid, 1)

        result = state.world[state.currentWorld].gridContent.find(gridItem => gridItem.item === item.ref)
      }

      const indexItem = tab.items.indexOf(item)
      tab.items.splice(indexItem, 1)
      state.saved = false
    }
  },

  addItemTab (state) {
    if (state.creatorVision === true) {
      if (state.newItem) {
        let count = state.currentTab.itemsCount++
        state.addItem.ref = 'Content ' + count
        state.addItem.divRef = 'Div ' + count
        state.addItem.grids = []

        state.currentTab.items.push(state.addItem)
      } else {
        let result = state.currentTab.items.filter(obj => {
          return obj.ref === state.addItem.ref
        })

        let indexItem = state.currentTab.items.indexOf(result[0])
        Vue.set(state.currentTab.items, indexItem, state.addItem)
      }

      state.addItem = {}
      state.currentTab = {}
      state.newItem = false
      state.addItemDialog = false
      state.saved = false
    }
  },

  updateUpgradeDialog (state, event) {
    if (state.creatorVision === true) {
      state.addUpgradeDialog = event
    }
  },

  updateAddUpgrade (state, item) {
    if (state.creatorVision === true) {
      state.addUpgrade = item
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
