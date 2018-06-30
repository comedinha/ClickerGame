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

  sceneApprovalNumber: 0,
  sceneApprovalDialog: false,
  sceneApprovalLoading: true,
  sceneApproval: {
    items: []
  },

  sceneReportNumber: 0,
  sceneReportDialog: false,
  sceneReportLoading: true,
  sceneReport: {
    items: []
  },

  usersDialog: false,
  usersLoading: true,
  users: [],
  userSelectedName: '',

  userSceneLoading: true,
  userSceneDialog: false,
  userScene: {
    items: []
  },

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

  getSceneApprovalNumber: state => state.sceneApprovalNumber,
  getSceneApprovalDialog: state => state.sceneApprovalDialog,
  getSceneApprovalLoading: state => state.sceneApprovalLoading,
  getSceneApproval: state => state.sceneApproval,

  getSceneReportNumber: state => state.sceneReportNumber,
  getSceneReportDialog: state => state.sceneReportDialog,
  getSceneReportLoading: state => state.sceneReportLoading,
  getSceneReport: state => state.sceneReport,

  getUsersDialog: state => state.usersDialog,
  getUsersLoading: state => state.usersLoading,
  getUsers: state => state.users,
  getUserSelectedName: state => state.userSelectedName,

  getUserSceneLoading: state => state.userSceneLoading,
  getUserSceneDialog: state => state.userSceneDialog,
  getUserScene: state => state.userScene,

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
        commit('updateNewsLoading', false)
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

  deleteNews ({ commit }, news) {
    Vue.http.post('api/deletenews', news).then(response => {
      commit('updateUser', response)
    }).catch(() => {
      commit('updateUsersLoading', false)
    })

    commit('updateNewsLoading', true)
    commit('updateNewsDialog', false)
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
    commit('updateSceneDetailDialog', true)
  },

  setViewAllScenes ({ commit, getters }, event) {
    if (event === true && getters.getAllScenesLoading === true) {
      Vue.http.post('api/getallscenes').then(response => {
        commit('updateAllScenes', response)
      }).catch(() => {
        commit('updateAllScenesLoading', false)
      })
    }

    commit('updateViewAllScenes', event)
  },

  setSceneApprovalDialog ({ commit, getters }, event) {
    if (event === true && getters.getSceneApprovalLoading === true) {
      Vue.http.post('api/getapproval').then(response => {
        commit('updateSceneApproval', response)
      }).catch(() => {
        commit('updateSceneApprovalLoading', false)
      })
    }

    commit('updateSceneApprovalDialog', event)
  },

  setSceneReportDialog ({ commit, getters }, event) {
    if (event === true && getters.getSceneReportLoading === true) {
      Vue.http.post('api/getreport').then(response => {
        commit('updateSceneReport', response)
      }).catch(() => {
        commit('updateSceneReportLoading', false)
      })
    }

    commit('updateSceneReportDialog', event)
  },

  setUsersDialog ({ commit, getters }, event) {
    if (event === true && getters.getUsersLoading === true) {
      Vue.http.post('api/getallusers').then(response => {
        commit('updateUsers', response)
      }).catch(() => {
        commit('updateUsersLoading', false)
      })
    }

    commit('updateUsersDialog', event)
  },

  setUserSceneDialog ({ commit }, event) {
    commit('updateUserSceneDialog', event)
  },

  viewUserScenes ({ commit }, message) {
    commit('updateUserSelectedName', message.name)
    Vue.http.post('api/getscenesuser', message).then(response => {
      commit('updateUserScene', response)
    }).catch(() => {
      commit('updateUserSceneLoading', false)
    })
  },

  setEditUserDialog ({ commit }, event) {
    commit('updateEditUserDialog', event)
  },

  setEditUserInfo ({ commit }, message) {
    commit('updateUserSelectedName', message.name)
    commit('updateEditUserInfo', message)
  },

  setUpdateUser ({ commit }, user) {
    Vue.http.post('api/updateuser', user).then(response => {
      commit('updateUser', response)
    }).catch(() => {
      commit('updateUsersLoading', false)
    })
    commit('updateUser')
  },

  deleteUser ({ commit }, user) {
    Vue.http.post('api/deleteuser', user).then(response => {
      commit('updateUser', response)
    }).catch(() => {
      commit('updateUsersLoading', false)
    })
    commit('updateUser')
    commit('updateUser')
  }
}

// mutations
const mutations = {
  updateNewsDialog (state, event) {
    if (event === false && state.newsContent.items.length === 0) {
      state.newsLoading = true
    }

    state.newsDialog = event
    state.newsUpdate = 0
  },

  updateNewsList (state, responseList) {
    state.newsContent.items = responseList.body
    state.newsLoading = false
  },

  updateNewsLoading (state, event) {
    state.newsLoading = event
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
  },

  updateViewAllScenes (state, event) {
    if (event === false && state.allScenes.items.length === 0) {
      state.allScenesLoading = true
    }

    state.viewAllScenes = event
  },

  updateAllScenes (state, message) {
    state.allScenes.items = message.body
    state.allScenesLoading = false
  },

  updateAllScenesLoading (state, event) {
    state.allScenesLoading = event
  },

  updateSceneApprovalDialog (state, event) {
    if (event === false && state.sceneApproval.items.length === 0) {
      state.sceneApprovalLoading = true
    }

    state.sceneApprovalDialog = event
  },

  updateSceneApproval (state, message) {
    state.sceneApproval.items = message.body
    state.sceneApprovalLoading = false
  },

  updateSceneApprovalLoading (state, event) {
    state.sceneApprovalLoading = event
  },

  updateSceneReportDialog (state, event) {
    if (event === false && state.sceneReport.length === 0) {
      state.sceneReportLoading = true
    }

    state.sceneReportDialog = event
  },

  updateSceneReport (state, message) {
    state.sceneReport.items = message.body
    state.sceneReportLoading = false
  },

  updateSceneReportLoading (state, event) {
    state.sceneReportLoading = event
  },

  updateUsersDialog (state, event) {
    if (event === false && state.users.length === 0) {
      state.usersLoading = true
    }

    state.usersDialog = event
  },

  updateUsers (state, message) {
    state.users = message.body
    state.usersLoading = false
  },

  updateUsersLoading (state, event) {
    state.usersLoading = event
  },

  updateUserSelectedName (state, message) {
    state.userSelectedName = message
  },

  updateUserSceneDialog (state, event) {
    if (event === false) {
      state.userScene = []
      state.userSceneLoading = true
      state.userSelectedName = ''
    }

    state.userSceneDialog = event
  },

  updateUserSceneLoading (state, event) {
    state.userSceneLoading = event
  },

  updateUserScene (state, message) {
    state.userSceneDialog = true
    state.userSceneLoading = false

    state.userScene.items = message.body
  },

  updateEditUserDialog (state, event) {
    if (event === false) {
      state.editUserInfo = {}
    }

    state.editUserDialog = event
  },

  updateEditUserInfo (state, message) {
    state.editUserDialog = true

    let userInfo = {
      id: message.id,
      name: message.name,
      email: message.email,
      role: message.role,
      enabled: message.enabled,
      needApproval: message.needApproval
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

    state.sceneApprovalNumber = body.numApproval
    state.sceneReportNumber = body.numReport

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
