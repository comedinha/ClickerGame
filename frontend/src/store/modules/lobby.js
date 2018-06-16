const state = {
  admin: true,

  drawer: false,

  informationDialog: false,

  newsDialog: false,
  newsUpdate: false,

  myScanes: {
    items: [
      {
        name: 'Jogo'
      },
      {
        name: 'Jogo 2'
      },
      {
        name: 'Jogo 3'
      },
      {
        name: 'Jogo 4'
      },
      {
        name: 'Jogo 5'
      }
    ]
  },

  allGames: {
    items: [
      {
        name: 'Jogo'
      },
      {
        name: 'Jogo 2'
      },
      {
        name: 'Jogo 3'
      },
      {
        name: 'Jogo 4'
      },
      {
        name: 'Jogo 5'
      }
    ]
  },

  mostPlayed: [
    {
      name: 'Jogo',
      background: 'white'
    },
    {
      name: 'Jogo 2',
      background: 'white'
    },
    {
      name: 'Jogo 3',
      background: 'white'
    }
  ],

  bestRated: [
    {
      name: 'Jogo',
      background: 'white'
    },
    {
      name: 'Jogo 2',
      background: 'white'
    },
    {
      name: 'Jogo 3',
      background: 'white'
    }
  ]
}

// getters
const getters = {
  getAdmin: state => state.admin,

  getDrawer: state => state.drawer,

  getInformationDialog: state => state.informationDialog,

  getNewsDialog: state => state.newsDialog,

  getNewsUpdate: state => state.newsUpdate,

  getMyScanes: state => state.myScanes,

  getAllGames: state => state.allGames,

  getMostPlayed: state => state.mostPlayed,

  getBestRated: state => state.bestRated
}

// actions
const actions = {
  setNewsDialog ({ commit }, event) {
    commit('updateNewsDialog', event)
  },

  setInformationDialog ({ commit }, event) {
    commit('updateInformationDialog', event)
  },

  setDrawer ({ commit }, event) {
    commit('updateDrawer', event)
  }
}

// mutations
const mutations = {
  updateNewsDialog (state, event) {
    state.newsDialog = event
  },

  updateInformationDialog (state, event) {
    state.informationDialog = event
  },

  updateDrawer (state, event) {
    state.drawer = event
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
