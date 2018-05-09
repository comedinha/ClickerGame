const state = {
  count: 0,
  history: []
}

// getters
const limit = 5
const getters = {
  count: state => state.count,

  recentHistory: state => {
    const end = state.history.length
    const begin = end - limit < 0 ? 0 : end - limit
    return state.history
      .slice(begin, end)
      .join(', ')
  }
}

// actions
const actions = {
  increment ({ commit }) {
    commit('increment')
  },
  decrement ({ commit }) {
    commit('decrement')
  },

  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },

  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}

// mutations
const mutations = {
  increment: state => {
    state.count++
    state.history.push('increment')
  },

  decrement: state => {
    state.count--
    state.history.push('decrement')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
