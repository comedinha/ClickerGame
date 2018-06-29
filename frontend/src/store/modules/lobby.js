import Vue from 'vue'

const state = {
  role: 'ANONYMOUS',
  username: 'Anônimo',

  drawer: false,

  informationDialog: false,

  newsDialog: false,
  newsLoading: true,
  newsUpdate: 0,
  newsContent: {
    items: []
  },

  newsAddDialog: false,
  newsAddContent: '',

  sceneDetailDialog: false,
  sceneDetailInfo: {},

  sceneApprovalDialog: false,
  sceneApprovalLoading: true,
  sceneApproval: {
    items: []
  },

  sceneReportDialog: false,
  sceneReportLoading: true,
  sceneReport: {
    items: []
  },

  usersDialog: false,
  usersLoading: true,
  users: [],

  editUserDialog: false,
  editUserInfo: {},

  myScenesLoading: true,
  myScenes: {
    items: []
  },

  playedGamesLoading: true,
  playedGames: {
    items: []
  },

  mostPlayedLoading: true,
  mostPlayed: {
    items: []
  },

  bestRatedLoading: true,
  bestRated: {
    items: []
  },

  viewAllScenes: false,
  allScenesLoading: true,
  allScenes: {
    items: []
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
  getNewsLoading: state => state.newsLoading,
  getNewsUpdate: state => state.newsUpdate,
  getNewsContent: state => state.newsContent,

  getNewsAddDialog: state => state.newsAddDialog,
  getNewsAddContent: state => state.newsAddContent,

  getSceneDetailDialog: state => state.sceneDetailDialog,
  getSceneDetailInfo: state => state.sceneDetailInfo,

  getSceneApprovalDialog: state => state.sceneApprovalDialog,
  getSceneApprovalLoading: state => state.sceneApprovalLoading,
  getSceneApproval: state => state.sceneApproval,

  getSceneReportDialog: state => state.sceneReportDialog,
  getSceneReportLoading: state => state.sceneReportLoading,
  getSceneReport: state => state.sceneReport,

  getUsersDialog: state => state.usersDialog,
  getUsersLoading: state => state.usersLoading,
  getUsers: state => state.users,

  getEditUserDialog: state => state.editUserDialog,
  getEditUserInfo: state => state.editUserInfo,

  getMyScenesLoading: state => state.myScenesLoading,
  getMyScenes: state => state.myScenes,

  getPlayedGamesLoading: state => state.playedGamesLoading,
  getPlayedGames: state => state.playedGames,

  getMostPlayedLoading: state => state.mostPlayedLoading,
  getMostPlayed: state => state.mostPlayed,

  getBestRatedLoading: state => state.bestRatedLoading,
  getBestRated: state => state.bestRated,

  getViewAllScenes: state => state.viewAllScenes,

  getAllScenesLoading: state => state.allScenesLoading,
  getAllScenes: state => state.allScenes
}

// actions
const actions = {
  setNewsDialog ({ commit, getters }, event) {
    if (event === true && getters.getNewsLoading === true) {
      Vue.http.post('api/getNews').then(responseList => {
        commit('updateNewsList', responseList)
      }).catch(() => {
        commit('updateNewsLoading')
      })
    }
    commit('updateNewsDialog', event)
  },

  setNewsAddDialog ({ commit }, event) {
    commit('updateNewsAddDialog', event)
  },

  setNewsAddContent ({ commit }, content) {
    commit('updateNewsAddContent', content)
  },

  getInfoLobby ({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.http.post('api/getinfolobby')
        .then(response => {
          console.log(response)
          commit('updateInfoLobby', response)
          resolve()
        }, errorCode => {
          reject(errorCode)
        })
    })
  },

  addNews ({ commit, getters }, tl) {
    return new Promise((resolve, reject) => {
      let addNew = {
        title: tl,
        content: getters.getNewsAddContent
      }

      Vue.http.post('api/addNews', addNew)
        .then(() => {
          commit('updateNewsAdd')
          resolve()
        }, errorCode => {
          reject(errorCode)
        })
    })
  },

  setInformationDialog ({ commit }, event) {
    commit('updateInformationDialog', event)
  },

  setUpdateInformation ({ commit }, user) {
    return new Promise((resolve, reject) => {
      Vue.http.post('api/updateInformation', user)
        .then(() => {
          commit('updateInformation', user.name)
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

  setSceneDetailInfo ({ commit }, message) {
    commit('updateSceneDetailInfo', message)
  },

  setViewAllScenes ({ commit }, event) {
    if (event === true && getters.getAllScenesLoading === true) {
      // Comentário: Adicionar Conexão aqui
    }

    commit('updateViewAllScenes', event)
  },

  setSceneApprovalDialog ({ commit }, event) {
    if (event === true && getters.getSceneApprovalLoading === true) {
      // Comentário: Adicionar Conexão aqui
    }

    commit('updateSceneApprovalDialog', event)
  },

  setSceneReportDialog ({ commit }, event) {
    if (event === true && getters.getSceneReportLoading === true) {
      // Comentário: Adicionar Conexão aqui
    }

    commit('updateSceneReportDialog', event)
  },

  setUsersDialog ({ commit }, event) {
    if (event === true && getters.getUsersLoading === true) {
      // Comentário: Adicionar Conexão aqui
    }

    commit('updateUsersDialog', event)
  },

  setEditUserDialog ({commit}, event) {
    commit('updateEditUserDialog', event)
  },

  setEditUserInfo ({commit}, message) {
    commit('updateEditUserInfo', message)
  },

  setUpdateUser ({commit}, user) {
    // Comentário: Luiz faz o resto mas quando tiver ok deixa essa parte dentro do then
    commit('updateUser')
  }
}

// mutations
const mutations = {
  updateNewsDialog (state, event) {
    state.newsDialog = event
    state.newsUpdate = 0

    if (event === false && state.newsContent.items.length === 0) {
      state.newsLoading = true
    }
  },

  updateNewsList (state, responseList) {
    state.newsContent.items = responseList.body
    state.newsLoading = false
  },

  updateNewsLoading (state) {
    state.newsLoading = false
  },

  updateNewsAddDialog (state, event) {
    if (event === false) {
      state.newsDialog = false
    }

    state.newsAddDialog = event
  },

  updateNewsAddContent (state, content) {
    state.newsAddContent = content
  },

  updateNewsAdd (state) {
    state.newsAddContent = ''
    state.newsLoading = true
    state.newsUpdate = 1
  },

  updateInformationDialog (state, event) {
    state.informationDialog = event
  },

  updateInformation (state, name) {
    if (name !== '') {
      state.username = name
    }
  },

  updateDrawer (state, event) {
    state.drawer = event
  },

  updateSceneDetailDialog (state, event) {
    state.sceneDetailDialog = event
  },

  updateSceneDetailInfo (state, message) {
    state.sceneDetailInfo = message
    state.sceneDetailDialog = true
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

  updateEditUserDialog (state, event) {
    if (event === false) {
      state.editUserInfo = {}
    }

    state.editUserDialog = event
  },

  updateEditUserInfo (state, message) {
    // Comentário: Talvez alterar
    let userInfo = {
      id: message.id,
      name: message.name,
      email: message.email,
      role: message.role,
      enabled: message.enabled
    }

    state.editUserInfo = userInfo
  },

  updateUser (state) {
    state.editUserDialog = false
    state.usersDialog = false
    state.usersLoading = true
  },

  updateInfoLobby (state, response) {
    const { body } = response

    state.username = body.name
    state.role = body.authorities
    state.newsUpdate = body.news

    state.bestRatedLoading = false
    state.bestRated.items = body.bestRated

    state.mostPlayedLoading = false
    state.mostPlayed.items = body.mostPlayed

    state.myScenesLoading = false
    state.myScenes.items = body.myScenes

    state.playedGamesLoading = false
    state.playedGames.items = body.playedGames
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
