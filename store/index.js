import Vuex from 'vuex'

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
new Vuex.Store({
  state: () => ({
    counter: 0
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  modules: {
    todos: {
      namespaced: true,
      state: () => ({
        list: []
      }),
      mutations: {
        add(state, {
          text
        }) {
          state.list.push({
            text,
            done: false
          })
        },
        remove(state, {
          todo
        }) {
          state.list.splice(state.list.indexOf(todo), 1)
        },
        toggle(state, {
          todo
        }) {
          todo.done = !todo.done
        }
      }
    },
    favorites: {
      namespaced: true,
      state: () => ({
        list: []
      }),
      mutations: {
        add(state, {
          text
        }) {
          state.list.push({
            text,
            done: false
          })
        },
        remove(state, {
          favorite
        }) {
          state.list.splice(state.list.indexOf(favorite), 1)
        },
        toggle(state, {
          favorite
        }) {
          favorite.done = !favorite.done
        }
      }
    }
  }
})
