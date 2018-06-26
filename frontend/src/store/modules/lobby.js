import Vue from 'vue'

const state = {
  role: '',
  username: '',

  drawer: false,

  informationDialog: false,

  newsDialog: false,
  newsUpdate: false,

  newsAddDialog: false,
  newsAddContent: '',

  sceneDetailDialog: false,
  sceneDetailMessage: '',

  sceneApprovalDialog: false,
  sceneApproval: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        creator: true,
        approved: true,
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  sceneReportDialog: false,
  sceneReport: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        creator: true,
        approved: true,
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  usersDialog: false,
  users: [
    {
      id: 0,
      nome: 'a',
      enabled: false
    }
  ],

  myScanes: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        creator: true,
        approved: true,
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 1,
        name: 'Jogo 2',
        creator: true,
        lastGame: 'amak',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 2,
        name: 'Jogo 3',
        creator: true,
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 3,
        name: 'Jogo 4',
        creator: true,
        lastGame: 'aa',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 4,
        name: 'Jogo 5',
        creator: true,
        lastGame: 'msdnjadns',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  playedGames: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        creator: true,
        lastGame: 'iasjdo',
        smallDescription: 'Texto de descrição x',
        description: 'Descrição do jogo completa onde é contado como foi criado o jogo em maior detalhes.',
        totalComplete: 10,
        totalPlayed: 25,
        score: '4.6',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 1,
        name: 'Jogo 2',
        lastGame: 'njndjskf',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 2,
        name: 'Jogo 3',
        creator: true,
        lastGame: 'njdnsf',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 3,
        name: 'Jogo 4',
        lastGame: 'sadmsd',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 4,
        name: 'Jogo 5',
        lastGame: 'dsjnfjsdk',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  },

  mostPlayed: [
    {
      id: 0,
      name: 'Jogo',
      smallDescription: 'Texto de descrição x',
      lastGame: '0',
      image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
    },
    {
      id: 1,
      name: 'Jogo 2',
      smallDescription: 'Texto de descrição y',
      image: 'https://www.gameogre.com/wp-content/uploads/2015/07/clickerhero1-696x392.jpg'
    },
    {
      id: 2,
      name: 'Jogo 3',
      creator: true,
      smallDescription: 'Texto de descrição z',
      lastGame: '11',
      image: 'https://i.imgur.com/ORbyF5D.jpg'
    }
  ],

  bestRated: [
    {
      id: 0,
      name: 'Jogo',
      creator: true,
      smallDescription: 'Texto de descrição x',
      image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
    },
    {
      id: 1,
      name: 'Jogo 2',
      smallDescription: 'Texto de descrição y',
      image: 'https://www.gameogre.com/wp-content/uploads/2015/07/clickerhero1-696x392.jpg'
    },
    {
      id: 2,
      name: 'Jogo 3',
      smallDescription: 'Texto de descrição z',
      lastGame: '1',
      image: 'https://i.imgur.com/ORbyF5D.jpg'
    }
  ],

  viewAllScenes: false,
  allGames: {
    items: [
      {
        id: 0,
        name: 'Jogo',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 1,
        name: 'Jogo 2',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 2,
        name: 'Jogo 3',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 3,
        name: 'Jogo 4',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      },
      {
        id: 4,
        name: 'Jogo 5',
        smallDescription: 'Texto de descrição x',
        image: 'https://www.geek.com/wp-content/uploads/2017/10/cookie-clicker-625x352.jpg'
      }
    ]
  }
}

// getters
const getters = {
  getAdmin: state => state.role === 'ROLE_ADMIN',

  getGuest: state => state.role === 'ANONYMOUS',

  getUsername: state => state.username,

  getDrawer: state => state.drawer,

  getInformationDialog: state => state.informationDialog,

  getNewsDialog: state => state.newsDialog,

  getNewsUpdate: state => state.newsUpdate,

  getNewsAddDialog: state => state.newsAddDialog,

  getNewsAddContent: state => state.newsAddContent,

  getSceneDetailDialog: state => state.sceneDetailDialog,

  getSceneDetailMessage: state => state.sceneDetailMessage,

  getSceneApprovalDialog: state => state.sceneApprovalDialog,

  getSceneApproval: state => state.sceneApproval,

  getSceneReportDialog: state => state.sceneReportDialog,

  getSceneReport: state => state.sceneReport,

  getUsersDialog: state => state.usersDialog,

  getUsers: state => state.getUsers,

  getMyScanes: state => state.myScanes,

  getPlayedGames: state => state.playedGames,

  getMostPlayed: state => state.mostPlayed,

  getBestRated: state => state.bestRated,

  getViewAllScenes: state => state.viewAllScenes,

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

  getInfoLobby ({commit}) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      console.log('getInfoLobby')
      Vue.http.post('api/getinfolobby')
        .then(response => {
          console.log(response)
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  saveDate ({commit}) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      Vue.http.post('api/saveDateClickNews')
        .then(() => {
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  addNews ({state}, tl) {
    return new Promise((resolve, reject) => {
      let addNew = {
        title: tl,
        content: state.newsAddContent
      }

      Vue.http.post('api/addNews', addNew)
        .then(() => {
          resolve()
        }, errorCode => {
          reject(errorCode)
        })
    })
  },

  setInformationDialog ({ commit }, event) {
    commit('updateInformationDialog', event)
  },

  updateInformation (user) {
    return new Promise((resolve, reject) => {
      Vue.http.post('api/updateInformation', user)
        .then(() => {
          resolve()
        }, errorCode => {
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
  },

  setViewAllScenes ({ commit }, event) {
    commit('updateViewAllScenes', event)
  },

  setSceneApprovalDialog ({ commit }, event) {
    commit('updateSceneApprovalDialog', event)
  },

  setSceneReportDialog ({ commit }, event) {
    commit('updateSceneReportDialog', event)
  },

  setUsersDialog ({ commit }, event) {
    commit('updateUsersDialog', event)
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
  },

  updateViewAllScenes (state, event) {
    state.viewAllScenes = event
  },

  updateSceneApprovalDialog (state, event) {
    state.sceneApprovalDialog = event
  },

  updateSceneReportDialog (state, event) {
    state.sceneReportDialog = event
  },

  updateUsersDialog (state, event) {
    state.usersDialog = event
  },

  updateInfoLobby (state, response) {
    const { body } = response

    state.username = body.name
    state.role = body.authorities
    state.newsUpdate = body.news
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
