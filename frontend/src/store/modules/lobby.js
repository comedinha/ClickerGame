import Vue from 'vue'

const state = {
  admin: true,
  username: 'Usuário',

  drawer: false,

  informationDialog: false,

  newsDialog: false,
  newsUpdate: false,

  newsAddDialog: false,
  newsAddContent: '',

  myScanes: {
    items: [
      {
        name: 'Jogo',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 2',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 3',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 4',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 5',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  allGames: {
    items: [
      {
        name: 'Jogo',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 2',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 3',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 4',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        name: 'Jogo 5',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  mostPlayed: [
    {
      name: 'Jogo',
      description: 'Texto de descrição x',
      background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
    },
    {
      name: 'Jogo 2',
      description: 'Texto de descrição y',
      background: 'https://www.gameogre.com/wp-content/uploads/2015/07/clickerhero1-696x392.jpg'
    },
    {
      name: 'Jogo 3',
      description: 'Texto de descrição z',
      background: 'https://i.imgur.com/ORbyF5D.jpg'
    }
  ],

  bestRated: [
    {
      name: 'Jogo',
      description: 'Texto de descrição x',
      background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
    },
    {
      name: 'Jogo 2',
      description: 'Texto de descrição y',
      background: 'https://www.gameogre.com/wp-content/uploads/2015/07/clickerhero1-696x392.jpg'
    },
    {
      name: 'Jogo 3',
      description: 'Texto de descrição z',
      background: 'https://i.imgur.com/ORbyF5D.jpg'
    }
  ]
}

// getters
const getters = {
  getAdmin: state => state.admin,

  getUsername: state => state.username,

  getDrawer: state => state.drawer,

  getInformationDialog: state => state.informationDialog,

  getNewsDialog: state => state.newsDialog,

  getNewsUpdate: state => state.newsUpdate,

  getNewsAddDialog: state => state.newsAddDialog,

  getNewsAddContent: state => state.newsAddContent,

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

  setNewsAddDialog ({ commit }, event) {
    commit('updateNewsAddDialog', event)
  },

  setNewsAddContent ({ commit }, content) {
    commit('updateNewsAddContent', content)
  },

  setInformationDialog ({ commit }, event) {
    commit('updateInformationDialog', event)
  },

  setDrawer ({ commit }, event) {
    commit('updateDrawer', event)
  },

  updateInformation ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      Vue.http.post('api/updateInformation', user)
        .then(() => {
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  addNews ({commit, state}, title) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      console.log(title)
      console.log(...state.newsAddContent)
      Vue.http.post('api/addNews', { title, ...state.newsAddContent })
        .then(() => {
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  }
}

// mutations
const mutations = {
  updateNewsDialog (state, event) {
    state.newsDialog = event
  },

  updateNewsAddDialog (state, event) {
    state.newsAddDialog = event
  },

  updateNewsAddContent (state, content) {
    state.newsAddContent = content
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
