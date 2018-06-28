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
  ]
}

// getters
const getters = {
  getCreatorVision: state => state.creatorVision,

  getEditMode: state => state.editMode,

  getSaved: state => state.saved,

  getSaveWarning: state => state.saveWarning,

  getGridContent: state => state.world[state.currentWorld].gridContent,

  getTabs: state => state.world[state.currentWorld].tabs
}

// actions
const actions = {
  loadPlay ({commit}, scene) {
    // Fazer tudo que envolve carregar o jogo
    commit('updateGame', false)
  },

  loadCreate ({commit}, scene) {
    // Fazer tudo que envolve carregar a criação
    commit('updateGame', true)
  },

  save ({commit}) {
    // Fazer tanto salvar cenário quanto salvar jogo.
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
        img: item.img
      }

      let newGridItem = {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        i: 'Grid ' + state.gridCount++,
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
    if (state.world[state.currentWorld].creatorVision === true) {
      var indexGrid = state.world[state.currentWorld].gridContent.indexOf(item)
      if (indexGrid > -1) {
        if (item.tab) {
          var indexItem = item.tab.grids.indexOf(state.world[state.currentWorld].gridContent[indexGrid].ref)
          item.tab.grids.splice(indexItem, 1)
        }
        state.world[state.currentWorld].gridContent.splice(indexGrid, 1)
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
