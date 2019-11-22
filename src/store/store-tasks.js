import Vue from 'vue'
import { uid } from 'quasar'


const state = {
  tasks: {
    'ID1': {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/11/21",
      dueTime: "14:00"
    },
    'ID2': {
      name: "Get bananas",
      completed: false,
      dueDate: "2019/11/21",
      dueTime: "15:05"
    },
    'ID3': {
      name: "Get apples",
      completed: false,
      dueDate: "2019/11/21",
      dueTime: "16:10"
    }
  }
}


const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },

  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },

  addTask(state, payload) {

    Vue.set(state.tasks, payload.id, payload.task)
    console.log('payload from mutation addTask', payload)
  }

}


const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({commit}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task,
    }

    console.log(payload)
    commit('addTask', payload)
  }

}


const getters = {
  tasks: (state) => {
    return state.tasks
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}