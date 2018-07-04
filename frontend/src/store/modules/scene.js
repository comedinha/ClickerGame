import Vue from 'vue'
import * as math from 'mathjs'

const state = {
  sceneId: '',
  sceneLoading: true,
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

  buttonGridDialog: false,
  newButtonDialog: false,
  buttonGridRef: [],
  buttonGrid: '',

  informationGridDialog: false,
  newInformationDialog: false,
  informationGridRef: [],
  informationGrid: '',

  currentTab: [],

  addItemDialog: false,
  newItem: false,
  addItem: {},

  addUpgradeDialog: false,
  newUpgrade: false,
  addUpgrade: {},

  playId: '',
  play: {},
  playAutomatic: [],
  playAutomaticValue: 0
}

// getters
const getters = {
  hasSceneId: state => !!state.sceneId,
  getSceneId: state => state.sceneId,

  isPublished: state => state.creatorVision && state.isPublished,
  canApprove: state => state.creatorVision && state.canApprove,
  canResolve: state => state.creatorVision && state.canResolve,

  getSceneLoading: state => state.sceneLoading,

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

  getWorld: state => state.world,
  getCurrentWorld: state => state.world[state.currentWorld],

  getGridContent: state => state.world[state.currentWorld].gridContent,

  getTabs: state => state.world[state.currentWorld].tabs,

  getLayoutDialog: state => state.layoutDialog,
  getEditLayout: state => state.editLayout,

  getTabLeft: state => state.world[state.currentWorld].layout.tab.left,
  getTabLayout: state => {
    let layout = {}

    if (state.world[state.currentWorld].layout.tab.backgroundColor) {
      if (state.world[state.currentWorld].layout.tab.backgroundColor.hex) {
        layout['backgroundColor'] = state.world[state.currentWorld].layout.tab.backgroundColor.hex
      }
    }

    if (state.world[state.currentWorld].layout.tab.textColor) {
      if (state.world[state.currentWorld].layout.tab.textColor.hex) {
        layout['textColor'] = state.world[state.currentWorld].layout.tab.textColor.hex
      }
    }

    if (state.world[state.currentWorld].layout.tab.btnColor) {
      if (state.world[state.currentWorld].layout.tab.btnColor.hex) {
        layout['btnColor'] = state.world[state.currentWorld].layout.tab.btnColor.hex
      }
    }

    if (state.world[state.currentWorld].layout.tab.btnTextColor) {
      if (state.world[state.currentWorld].layout.tab.btnTextColor.hex) {
        layout['btnTextColor'] = state.world[state.currentWorld].layout.tab.btnTextColor.hex
      }
    }

    return layout
  },

  getGridLayout: state => {
    let layout = {
      'height': '84vh',
      'max-height': '84vh'
    }

    if (state.world[state.currentWorld].layout.grid.backgroundColor) {
      if (state.world[state.currentWorld].layout.grid.backgroundColor.hex) {
        layout['background-color'] = state.world[state.currentWorld].layout.grid.backgroundColor.hex
      }
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

    if (state.world[state.currentWorld].layout.toolbar.backgroundColor) {
      if (state.world[state.currentWorld].layout.toolbar.backgroundColor.hex) {
        layout['backgroundColor'] = state.world[state.currentWorld].layout.toolbar.backgroundColor.hex
      }
    }

    if (state.world[state.currentWorld].layout.toolbar.btnColor) {
      if (state.world[state.currentWorld].layout.toolbar.btnColor.hex) {
        layout['btnColor'] = state.world[state.currentWorld].layout.toolbar.btnColor.hex
      }
    }

    if (state.world[state.currentWorld].layout.toolbar.btnTextColor) {
      if (state.world[state.currentWorld].layout.toolbar.btnTextColor.hex) {
        layout['btnTextColor'] = state.world[state.currentWorld].layout.toolbar.btnTextColor.hex
      }
    }

    return layout
  },

  getItemGridDialog: state => state.itemGridDialog,
  getItemGrid: state => state.itemGrid,

  getButtonGridDialog: state => state.buttonGridDialog,
  getButtonGrid: state => state.buttonGrid,

  getInformationGridDialog: state => state.informationGridDialog,
  getInformationGrid: state => state.informationGrid,

  getAddItemDialog: state => state.creatorVision && state.addItemDialog,
  getAddItem: state => state.creatorVision && state.addItem,

  getAddUpgradeDialog: state => state.creatorVision && state.addUpgradeDialog,
  getAddUpgrade: state => state.creatorVision && state.addUpgrade,

  getPlayCoins: state => state.play.coins,
  getPlayBuyedItems: state => state.play.buyedItems,
  getPlayBuyedUpgrades: state => state.play.buyedUpgrades,

  getPlayAutomaticValue: state => state.playAutomaticValue,

  getWorldItems: state => {
    let listItems = []
    if (state.creatorVision === true) {
      let getWorldItems = state.world[state.currentWorld].tabs.filter(obj => {
        return obj.type === 'item'
      })

      for (let i = 0; i < getWorldItems.length; i++) {
        for (let j = 0; j < getWorldItems[i].items.length; j++) {
          let newItem = {
            item: getWorldItems[i].items[j].ref,
            text: getWorldItems[i].items[j].title
          }

          listItems.push(newItem)
        }
      }
    }

    return listItems
  }
}

// actions
const actions = {
  loadPlay ({ dispatch, commit }, scene) {
    commit('clearScene')
    // Comentário: Fazer tudo que envolve carregar o jogo
    console.log('loadPlay')

    commit('updateSceneId', scene.playId)
    if (scene.saveId) {
      commit('updateSceneId', scene.saveId)
    } else {
      // Comentário: sceneDefault Só para testar...
      commit('sceneDefault')

      commit('playDefault')
    }

    dispatch('loadAutomatic')
    commit('updateGame', false)
  },

  loadCreate ({ commit }, scene) {
    commit('clearScene')
    console.log('loadCreate')

    Vue.http.post('api/loadScene', scene.createId).then(response => {
      commit('updateCreateScene', response.body)
    })

    commit('updateSceneId', scene.createId)
    commit('updateGame', true)
  },

  loadDefault ({ commit }) {
    commit('clearScene')

    console.log('loadDeafault')
    commit('sceneDefault')
  },

  savePlay ({ commit }) {
    console.log('savePlay')
    // Comentário: Fazer tanto salvar cenário quanto salvar jogo.
  },

  saveScene ({ commit, getters }) {
    if (getters.getConfig.name !== '') {
      console.log('saveScene')
      let saveScene = {
        id: getters.getSceneId,
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
        commit('updateSceneId', response.bodyText)
      })
    } else {
      commit('saveWarning', false)
      commit('updateEditConfigDialog', true)
    }
  },

  async loadAutomatic ({ dispatch, commit }) {
    commit('updateAutomatic')
    setTimeout(() => {
      dispatch('loadAutomatic')
    }, 1000)
  },

  setSaveWarning ({ commit }, event) {
    commit('saveWarning', event)
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

  newButtonGrid ({ commit }) {
    commit('newButtonGrid')
  },

  setButtonGridDialog ({ commit }, event) {
    commit('updateButtonGridDialog', event)
  },

  setButtonGrid ({ commit }, message) {
    commit('updateButtonGrid', message)
  },

  buttonGrid ({ commit }) {
    commit('buttonGrid')
  },

  newInformationGrid ({ commit }) {
    commit('newInformationGrid')
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

  setAddUpgradeDialogNewItem ({ commit }, message) {
    commit('updateAddUpgradeDialogNewItem', message)
  },

  addUpgrade ({ commit }, message) {
    commit('updateAddUpgrade', message)
  },

  addUpgradeTab ({ commit }) {
    commit('addUpgradeTab')
  },

  editUpgrade ({ commit }, message) {
    commit('updateEditUpgrade', message)
  },

  deleteUpgrade ({ commit }, message) {
    commit('updateDeleteUpgrade', message)
  },

  addClick ({ commit }, item) {
    commit('updateClick', item)
  },

  buyTabItem ({ commit }, message) {
    commit('updateBuyTabItem', message)
  },

  buyTabUpgrade ({ commit }, message) {
    commit('updateBuyTabUpgrade', message)
  }
}

// mutations
const mutations = {
  clearScene (state) {
    state.config = {}
    state.currentWorld = 0
    state.world = []
    state.coins = []
    state.play = {}
    state.sceneId = ''
    state.playId = ''
  },

  sceneDefault (state) {
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
        name: 'Dinheiro',
        symbol: 'R$',
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
        description: 'Descrição de teste',
        countPerSecond: 1,
        coin: {
          ref: state.coins[0].ref
        },
        startCount: 1,
        basePrice: 1,
        formula: '{tb} * {bp}',
        gridsCount: 0,
        grids: []
      }
      state.world[state.currentWorld].tabs[indexTabItem].items.push(firstItem)

      let secondItem = {
        ref: 'Content ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount,
        divRef: 'Div ' + state.world[state.currentWorld].tabs[indexTabItem].itemsCount++,
        title: 'Image Test 2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png',
        description: 'Descrição de teste',
        countPerSecond: 1,
        coin: {
          ref: state.coins[0].ref
        },
        startCount: 0,
        basePrice: 5,
        formula: '100 + ({tb} * {bp})',
        gridsCount: 0,
        grids: []
      }
      state.world[state.currentWorld].tabs[indexTabItem].items.push(secondItem)

      let tabUpgrade = {
        type: 'upgrade',
        refTab: 'Tab ' + state.world[state.currentWorld].tabCount,
        refItem: 'Item ' + state.world[state.currentWorld].tabCount++,
        title: 'Upgrades',
        itemsCount: 0,
        items: []
      }
      state.world[state.currentWorld].tabs.push(tabUpgrade)

      const indexFirstItem = state.world[state.currentWorld].tabs[indexTabItem].items.indexOf(firstItem)
      const indexTabUpgrade = state.world[state.currentWorld].tabs.indexOf(tabUpgrade)
      let firstUpgrade = {
        ref: 'Upgrade ' + state.world[state.currentWorld].tabs[indexTabUpgrade].itemsCount++,
        title: 'Upgrade',
        description: 'Upgrade Test',
        type: 'item',
        tab: state.world[state.currentWorld].tabs[indexTabItem].refTab,
        item: state.world[state.currentWorld].tabs[indexTabItem].items[indexFirstItem].ref,
        price: '100',
        formula: '{v} * 2',
        coin: {
          ref: state.coins[0].ref
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
      }
      state.world[state.currentWorld].tabs[indexTabUpgrade].items.push(firstUpgrade)

      let firstGridButton = {
        ref: 'Button ' + state.world[state.currentWorld].gridButtonsCount++,
        style: {
          backgroundColor: {},
          borderRadius: '100%'
        },
        clickValue: 1,
        coin: {
          ref: state.coins[0].ref
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
            {cs} {tc}
            <br />
            {ts} por segundo
          </div>
        `,
        style: {
          backgroundColor: {}
        },
        coin: {
          ref: state.coins[0].ref
        }
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
    state.sceneLoading = false
  },

  playDefault (state) {
    let firstPlay = {
      clickCount: 0,
      coins: [],
      buyedItems: [],
      buyedUpgrades: []
    }
    state.play = firstPlay

    for (let i = 0; i < state.coins.length; i++) {
      let firstCoins = {
        ref: state.coins[i].ref,
        count: 0
      }

      state.play.coins.push(firstCoins)
    }

    let resultTab = state.world[state.currentWorld].tabs.filter(obj => {
      return obj.type === 'item'
    })

    for (let i = 0; i < resultTab.length; i++) {
      for (let j = 0; j < resultTab[i].items.length; j++) {
        if (resultTab[i].items[j].startCount > 0) {
          let newBuy = {
            ref: resultTab[i].items[j].ref,
            count: resultTab[i].items[j].startCount
          }

          state.play.buyedItems.push(newBuy)

          for (let k = 0; k < resultTab[i].items[j].startCount; k++) {
            let automatic = {
              tab: resultTab[i].refTab,
              item: resultTab[i].items[j].ref
            }

            state.playAutomatic.push(automatic)
          }
        }
      }
    }
  },

  saveWarning (state, event) {
    state.saveWarning = event
  },

  updateCreateScene (state, message) {
    console.log(message)
    let loadConfig = {
      name: message.name,
      smallDescription: message.smallDescription,
      image: message.image,
      completeDescription: message.completeDescription
    }

    state.config = loadConfig
    state.world = message.worlds
    state.coinsCount = message.coinsCount
    state.coins = message.coins
    state.sceneLoading = false
  },

  updateGame (state, event) {
    state.editMode = event
    state.creatorVision = event
  },

  updateSceneId (state, message) {
    state.sceneId = message
  },

  updatePlayId (state, message) {
    state.playId = message
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
        if (state.world[state.currentWorld].layout) {
          let layout = state.world[state.currentWorld].layout
          if (layout.tab) {
            let layoutTab = layout.tab
            if (!layoutTab.backgroundColor) {
              layoutTab.backgroundColor = {}
            }

            if (!layoutTab.textColor) {
              layoutTab.textColor = {}
            }

            if (!layoutTab.btnColor) {
              layoutTab.btnColor = {}
            }

            if (!layoutTab.btnTextColor) {
              layoutTab.btnTextColor = {}
            }
          }

          if (layout.grid) {
            let layoutGrid = layout.grid
            if (!layoutGrid.backgroundColor) {
              layoutGrid.backgroundColor = {}
            }
          }

          if (layout.toolbar) {
            let layoutToolbar = layout.toolbar
            if (!layoutToolbar.backgroundColor) {
              layoutToolbar.backgroundColor = {}
            }

            if (!layoutToolbar.btnColor) {
              layoutToolbar.btnColor = {}
            }

            if (!layoutToolbar.btnTextColor) {
              layoutToolbar.btnTextColor = {}
            }
          }
        }

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

        if (result[0].style) {
          if (!result[0].style.backgroundColor) {
            result[0].style.backgroundColor = {}
          }
        } else {
          result[0].style = {
            backgroundColor: {}
          }
        }

        state.informationGrid = JSON.parse(JSON.stringify(result[0]))
      } else if (item.type === 'button') {
        state.buttonGridDialog = true

        let result = state.world[state.currentWorld].gridButtons.filter(obj => {
          return obj.ref === item.ref
        })

        if (!result[0].style.backgroundColor) {
          result[0].style.backgroundColor = {}
        }

        state.buttonGrid = JSON.parse(JSON.stringify(result[0]))
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

  newButtonGrid (state) {
    state.buttonGridDialog = true
    state.newButtonDialog = true
    state.buttonGrid = {
      style: {
        backgroundColor: {},
        borderRadius: '100%'
      },
      clickValue: 1
    }
  },

  updateButtonGridDialog (state, event) {
    if (state.creatorVision === true) {
      if (event === false) {
        state.buttonGrid = {}
        state.newButtonDialog = false
      }

      state.buttonGridDialog = event
    }
  },

  updateButtonGrid (state, message) {
    if (state.creatorVision === true) {
      state.buttonGrid = message
    }
  },

  buttonGrid (state) {
    if (state.creatorVision === true) {
      if (state.newButtonDialog === true) {
        state.buttonGrid.ref = 'Button ' + state.world[state.currentWorld].gridButtonsCount++
        state.world[state.currentWorld].gridButtons.push(state.buttonGrid)

        let newGridItem = {
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          i: 'Grid ' + state.world[state.currentWorld].gridCount++,
          type: 'button',
          ref: state.buttonGrid.ref
        }

        state.world[state.currentWorld].gridContent.push(newGridItem)
      } else {
        let result = state.world[state.currentWorld].gridButtons.filter(obj => {
          return obj.ref === state.buttonGrid.ref
        })

        let indexOfButton = state.world[state.currentWorld].gridButtons.indexOf(result[0])
        Vue.set(state.world[state.currentWorld].gridButtons, indexOfButton, state.buttonGrid)
      }

      state.newButtonDialog = false
      state.buttonGridDialog = false
      state.buttonGrid = {}
      state.saved = false
    }
  },

  newInformationGrid (state) {
    state.newInformationDialog = true
    state.informationGridDialog = true
    state.informationGrid = {
      style: {
        backgroundColor: {}
      }
    }
  },

  updateInformationGridDialog (state, event) {
    if (state.creatorVision === true) {
      if (event === false) {
        state.newInformationDialog = false
        state.informationGrid = {}
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
        state.informationGrid.ref = 'Information ' + state.world[state.currentWorld].gridInformationCount++
        state.world[state.currentWorld].gridInformation.push(state.informationGrid)

        let newGridItem = {
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          i: 'Grid ' + state.world[state.currentWorld].gridCount++,
          type: 'information',
          ref: state.informationGrid.ref
        }

        state.world[state.currentWorld].gridContent.push(newGridItem)
      } else {
        let result = state.world[state.currentWorld].gridInformation.filter(obj => {
          return obj.ref === state.informationGrid.ref
        })

        let indexOfInformation = state.world[state.currentWorld].gridInformation.indexOf(result[0])
        Vue.set(state.world[state.currentWorld].gridInformation, indexOfInformation, state.informationGrid)
      }

      state.newInformationDialog = false
      state.informationGridDialog = false
      state.informationGrid = {}
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
      const { tab, item } = message

      var result = state.world[state.currentWorld].gridContent.find(gridItem => gridItem.item === item.ref)
      while (result) {
        const indexGrid = state.world[state.currentWorld].gridContent.indexOf(result)
        state.world[state.currentWorld].gridContent.splice(indexGrid, 1)

        result = state.world[state.currentWorld].gridContent.find(gridItem => gridItem.item === item.ref)
      }

      let getWorldItems = state.world[state.currentWorld].tabs.filter(obj => {
        return obj.type === 'upgrade'
      })

      for (let i = 0; i < getWorldItems.length; i++) {
        for (let j = (getWorldItems[i].items.length - 1); j >= 0; j--) {
          if (getWorldItems[i].items[j].itemRef) {
            if (getWorldItems[i].items[j].itemRef.item) {
              getWorldItems[i].items.splice(j, 1)
            }
          }
        }
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
      if (!event) {
        state.newUpgrade = false
      }

      state.addUpgradeDialog = event
    }
  },

  updateAddUpgradeDialogNewItem (state, message) {
    if (state.creatorVision === true) {
      state.newUpgrade = message
    }
  },

  updateAddUpgrade (state, message) {
    if (state.creatorVision === true) {
      const { tab } = message

      state.currentTab = tab
      state.addUpgrade = {}
    }
  },

  addUpgradeTab (state) {
    if (state.creatorVision === true) {
      if (state.newUpgrade) {
        let count = state.currentTab.itemsCount++
        state.addUpgrade.ref = 'Ref ' + count
        state.addUpgrade.tab = state.currentTab.refTab

        state.currentTab.items.push(state.addUpgrade)
      } else {
        let result = state.currentTab.items.filter(obj => {
          return obj.ref === state.addUpgrade.ref
        })

        let indexItem = state.currentTab.items.indexOf(result[0])
        Vue.set(state.currentTab.items, indexItem, state.addUpgrade)
      }

      state.addUpgrade = {}
      state.currentTab = {}
      state.newUpgrade = false
      state.addUpgradeDialog = false
      state.saved = false
    }
  },

  updateEditUpgrade (state, message) {
    if (state.creatorVision === true) {
      const { tab, item } = message

      state.currentTab = tab
      state.addUpgrade = JSON.parse(JSON.stringify(item))
    }
  },

  updateDeleteUpgrade (state, message) {
    if (state.creatorVision === true) {
      const { tab, item } = message

      let indexOfItem = tab.items.indexOf(item)
      tab.items.splice(indexOfItem, 1)
    }
  },

  updateClick (state, item) {
    if (state.creatorVision === false) {
      let result = state.world[state.currentWorld].gridButtons.filter(obj => {
        return obj.ref === item.ref
      })

      let clickValue = result[0].clickValue
      let coinResult = state.coins.filter(obj => {
        return obj.ref === result[0].coin.ref
      })

      let actualCoin = state.play.coins.filter(obj => {
        return obj.ref === coinResult[0].ref
      })

      state.play.clickCount++

      let indexOfCoin = state.play.coins.indexOf(actualCoin[0])
      if (indexOfCoin !== -1) {
        let getBuyedAll = state.play.buyedUpgrades.filter(obj => {
          return obj.type === 'GPC'
        })

        for (let i = 0; i < getBuyedAll.length; i++) {
          let formula = getBuyedAll[i].formula
          formula = formula.replace(/{v}/g, clickValue)

          clickValue = math.eval(formula)
        }

        state.play.coins[indexOfCoin].count += clickValue
      }
    }
  },

  updateBuyTabItem (state, message) {
    const { tab, item } = message
    if (state.creatorVision === false) {
      let formula = item.formula
      let totalBuy = 1

      let getBuyed = state.play.buyedItems.filter(obj => {
        return obj.ref === item.ref
      })

      let getCoin = state.play.coins.filter(obj => {
        return obj.ref === item.coin.ref
      })

      if (!getBuyed[0]) {
        formula = formula
          .replace(/{tb}/g, totalBuy)
          .replace(/{bp}/g, item.basePrice)

        if (getCoin[0].count >= math.eval(formula)) {
          let newBuy = {
            ref: item.ref,
            count: totalBuy
          }

          state.play.buyedItems.push(newBuy)

          let indexOfCoin = state.play.coins.indexOf(getCoin[0])
          state.play.coins[indexOfCoin].count -= math.eval(formula)
        }
      } else {
        formula = formula
          .replace(/{tb}/g, getBuyed[0].count)
          .replace(/{bp}/g, item.basePrice)

        if (getCoin[0].count >= math.eval(formula)) {
          getBuyed[0].count += totalBuy

          let indexOfCoin = state.play.coins.indexOf(getCoin[0])
          state.play.coins[indexOfCoin].count -= math.eval(formula)
        }
      }

      let automatic = {
        tab: tab.refTab,
        item: item.ref
      }
      state.playAutomatic.push(automatic)
    }
  },

  updateAutomatic (state) {
    state.playAutomaticValue = 0
    for (let i = 0; i < state.playAutomatic.length; i++) {
      let resultTab = state.world[state.currentWorld].tabs.filter(obj => {
        return obj.refTab === state.playAutomatic[i].tab
      })

      let indexOfTab = state.world[state.currentWorld].tabs.indexOf(resultTab[0])
      let resultItem = state.world[state.currentWorld].tabs[indexOfTab].items.filter(obj => {
        return obj.ref === state.playAutomatic[i].item
      })

      let tabUpgrades = state.world[state.currentWorld].tabs.filter(obj => {
        return obj.type === 'upgrade'
      })

      let getUpgrades = []
      for (let i = 0; i < tabUpgrades.length; i++) {
        for (let j = 0; j < tabUpgrades[i].items.length; j++) {
          let getBuyed = state.play.buyedUpgrades.filter(obj => {
            return obj.item === tabUpgrades[i].items[j].item && obj.tab === tabUpgrades[i].items[j].tab
          })

          if (getBuyed.length !== 0) {
            getUpgrades.push(tabUpgrades[i].items[j])
          }
        }
      }

      let perSecond = resultItem[0].countPerSecond
      for (let i = 0; i < getUpgrades.length; i++) {
        let formula = getUpgrades[i].formula
        formula = formula.replace(/{v}/g, perSecond)

        perSecond = math.eval(formula)
      }

      let getCoin = state.play.coins.filter(obj => {
        return obj.ref === resultItem[0].coin.ref
      })

      if (getCoin[0]) {
        let getBuyedAll = state.play.buyedUpgrades.filter(obj => {
          return obj.type === 'GPS'
        })

        for (let i = 0; i < getBuyedAll.length; i++) {
          let formula = getBuyedAll[i].formula
          formula = formula.replace(/{v}/g, perSecond)

          perSecond = math.eval(formula)
        }

        getCoin[0].count += perSecond
        state.playAutomaticValue += perSecond
      }
    }
  },

  updateBuyTabUpgrade (state, item) {
    if (state.creatorVision === false) {
      let price = item.price

      let getBuyed = state.play.buyedUpgrades.filter(obj => {
        return obj.item === item.item && obj.tab === item.tab
      })

      let getCoin = state.play.coins.filter(obj => {
        return obj.ref === item.coin.ref
      })

      if (!getBuyed[0]) {
        if (getCoin[0].count >= price) {
          let newBuy = {
            item: item.item,
            tab: item.tab
          }

          state.play.buyedUpgrades.push(newBuy)

          let indexOfCoin = state.play.coins.indexOf(getCoin[0])
          state.play.coins[indexOfCoin].count -= price
        }
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
