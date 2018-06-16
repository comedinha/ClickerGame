const state = {
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
      type: 'item',
      refTab: 'Tab 0',
      refItem: 'Item 0',
      title: 'Items',
      items: [
        {
          ref: 'Content 0',
          divRef: 'Div 0',
          title: 'Image Test',
          img: 'https://media.giphy.com/media/14chvzoFjnDBGE/giphy.gif',
          grids: []
        },
        {
          ref: 'Content 1',
          divRef: 'Div 1',
          title: 'Image Test 2',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png',
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
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
        },
        {
          title: 'Upgrade',
          price: '100',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
        },
        {
          title: 'Upgrade',
          price: '100',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
        },
        {
          title: 'Upgrade',
          price: '100',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
        },
        {
          title: 'Upgrade',
          price: '100',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/170px-Stick_Figure.svg.png'
        }
      ]
    }
  ]
}

// getters
const getters = {
  userVision: state => state.userVision,

  editMode: state => state.editMode,

  saved: state => state.saved,

  saveWarning: state => state.saveWarning,

  gridContent: state => state.gridContent,

  tabs: state => state.tabs
}

// actions
const actions = {
  updateEditMode ({ commit }, event) {
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
  }
}

// mutations
const mutations = {
  updateEditMode (state, event) {
    state.editMode = event
  },

  backToLobby (state, resolve) {
    if (state.saved) {
      resolve()
    } else {
      state.saveWarning = true
    }
  },

  newGridItem (state, item) {
    let tabItemGrid = {
      img: item.img
    }

    let newGridItem = {
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      i: 'Grid ' + state.gridContent.length,
      type: 'image',
      tab: item,
      ref: item.grids[(item.grids.push(tabItemGrid) - 1)]
    }
    state.gridContent.push(newGridItem)
  },

  updateGridContent (state, event) {
    state.gridContent = event
  },

  changeGridItem (state, item) {
    console.log(state, item)
  },

  removeGridItem (state, item) {
    var indexGrid = state.gridContent.indexOf(item)
    if (indexGrid > -1) {
      if (item.tab) {
        var indexItem = item.tab.grids.indexOf(state.gridContent[indexGrid].ref)
        item.tab.grids.splice(indexItem, 1)
      }
      state.gridContent.splice(indexGrid, 1)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
