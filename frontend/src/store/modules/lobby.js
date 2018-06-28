import Vue from 'vue'

const state = {
  role: '',
  username: '',

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
  sceneDetailMessage: '',

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
  getSceneDetailMessage: state => state.sceneDetailMessage,

  getSceneApprovalDialog: state => state.sceneApprovalDialog,
  getSceneApprovalLoading: state => state.sceneApprovalLoading,
  getSceneApproval: state => state.sceneApproval,

  getSceneReportDialog: state => state.sceneReportDialog,
  getSceneReportLoading: state => state.sceneReportLoading,
  getSceneReport: state => state.sceneReport,

  getUsersDialog: state => state.usersDialog,
  getUsersLoading: state => state.usersLoading,
  getUsers: state => state.users,

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
        commit('updateNewsLoading')
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
  },

  setApproveScene ({commit}, event) {
    //
  },

  setResolveScene ({commit}, event) {
    //
  },

  setDeleteScene ({commit}, event) {
    //
  }
}

// mutations
const mutations = {
  updateNewsDialog (state, event) {
    state.newsDialog = event
    state.newsUpdate = 0
  },

  updateNewsList (state, responseList) {
    state.newsContent.items = responseList.body
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

    state.bestRatedLoading = false
    state.mostPlayedLoading = false
    state.myScenesLoading = false
    state.playedGamesLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
