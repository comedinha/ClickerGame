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

  sceneDetailDialog: false,
  sceneDetailMessage: 'Test',

  myScanes: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        creator: true,
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 1,
        name: 'Jogo 2',
        creator: true,
        played: 'amak',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 2,
        name: 'Jogo 3',
        creator: true,
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 3,
        name: 'Jogo 4',
        creator: true,
        played: 'aa',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 4,
        name: 'Jogo 5',
        creator: true,
        played: 'msdnjadns',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  playedGames: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        creator: true,
        played: 'iasjdo',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 1,
        name: 'Jogo 2',
        played: 'njndjskf',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 2,
        name: 'Jogo 3',
        creator: true,
        played: 'njdnsf',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 3,
        name: 'Jogo 4',
        played: 'sadmsd',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 4,
        name: 'Jogo 5',
        played: 'dsjnfjsdk',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  mostPlayed: [
    {
      id: 0,
      name: 'Jogo',
      description: 'Texto de descrição x',
      played: '0',
      background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
    },
    {
      id: 1,
      name: 'Jogo 2',
      description: 'Texto de descrição y',
      background: 'https://www.gameogre.com/wp-content/uploads/2015/07/clickerhero1-696x392.jpg'
    },
    {
      id: 2,
      name: 'Jogo 3',
      creator: true,
      description: 'Texto de descrição z',
      played: '11',
      background: 'https://i.imgur.com/ORbyF5D.jpg'
    }
  ],

  bestRated: [
    {
      id: 0,
      name: 'Jogo',
      creator: true,
      description: 'Texto de descrição x',
      background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
    },
    {
      id: 1,
      name: 'Jogo 2',
      description: 'Texto de descrição y',
      background: 'https://www.gameogre.com/wp-content/uploads/2015/07/clickerhero1-696x392.jpg'
    },
    {
      id: 2,
      name: 'Jogo 3',
      description: 'Texto de descrição z',
      played: '1',
      background: 'https://i.imgur.com/ORbyF5D.jpg'
    }
  ],

  allGames: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 1,
        name: 'Jogo 2',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 2,
        name: 'Jogo 3',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 3,
        name: 'Jogo 4',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 4,
        name: 'Jogo 5',
        description: 'Texto de descrição x',
        background: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  }
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

  getSceneDetailDialog: state => state.sceneDetailDialog,

  getSceneDetailMessage: state => state.sceneDetailMessage,

  getMyScanes: state => state.myScanes,

  getPlayedGames: state => state.playedGames,

  getMostPlayed: state => state.mostPlayed,

  getBestRated: state => state.bestRated,

  getAllGames: state => state.allGames
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

  addNews ({commit, state}, tl) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      let addNew = {
        title: tl,
        content: state.newsAddContent
      }
      console.log(addNew)
      Vue.http.post('api/addNews', addNew)
        .then(() => {
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  setInformationDialog ({ commit }, event) {
    commit('updateInformationDialog', event)
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

  setDrawer ({ commit }, event) {
    commit('updateDrawer', event)
  },

  setSceneDetailDialog ({ commit }, event) {
    commit('updateSceneDetailDialog', event)
  },

  setSceneDetailMessage ({ commit }, message) {
    commit('updateSceneDetailMessage', message)
    commit('updateSceneDetailDialog', true)
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
  },

  updateSceneDetailDialog (state, event) {
    state.sceneDetailDialog = event
  },

  updateSceneDetailMessage (state, message) {
    state.sceneDetailMessage = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
