import Vue from 'vue'

const state = {
  role: '',
  username: '',

  drawer: false,

  informationDialog: false,

  newsDialog: false,
  newsUpdate: 0,
  newsContent: {
    items: []
  },

  newsAddDialog: false,
  newsAddContent: '',

  sceneDetailDialog: false,
  sceneDetailMessage: '',

  sceneApprovalDialog: false,
  sceneApproval: {
    items: []
  },

  sceneReportDialog: false,
  sceneReport: {
    items: []
  },

  usersDialog: false,
  users: [],

  myScanes: {
    items: []
  },

  playedGames: {
    items: []
  },

  mostPlayed: {
    items: []
  },

  bestRated: {
    items: []
  },

  viewAllScenes: false,
  allGames: {
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
  getNewsUpdate: state => state.newsUpdate,
  getNewsContent: state => state.newsContent,

  getNewsAddDialog: state => state.newsAddDialog,
  getNewsAddContent: state => state.newsAddContent,

  getSceneDetailDialog: state => state.sceneDetailDialog,
  getSceneDetailMessage: state => state.sceneDetailMessage,

  getSceneApprovalDialog: state => state.sceneApprovalDialog,
  getSceneApproval: state => state.sceneApproval,

  getSceneReportDialog: state => state.sceneReportDialog,
  getSceneReport: state => state.sceneReport,

  getUsersDialog: state => state.usersDialog,
  getUsers: state => state.users,

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
    if (event === true) {
      Vue.http.post('api/getNews')
        .then(responseList => {
          commit('updateNewsList', responseList)
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
          commit('updateInfoLobby', response)
          resolve()
        }, errorCode => {
          reject(errorCode)
        })
    })
  },

  addNews ({ state }, tl) {
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

  updateInformation ({ commit }, user) {
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
    console.log(responseList.body)
    state.newsContent.items = responseList.body
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
