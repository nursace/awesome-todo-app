import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    'ID1': {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/11/08",
      dueTime: "08:00"
    },
    'ID2': {
      name: "Get bananas",
      completed: false,
      dueDate: "2019/11/03",
      dueTime: "15:05"
    },
    'ID3': {
      name: "Get apples",
      completed: false,
      dueDate: "2019/11/24",
      dueTime: "16:10"
    },
  },
  search: '',
  sort: 'dueDate',
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
  },
  setSearch(state, value) {
    state.search = value
  },

  setSort(state, value) {
    state.sort = value
  }
}


const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task,
    }

    console.log(payload)
    commit('addTask', payload)
  },


  setSearch({ commit }, value) {
    commit('setSearch', value)
  },

  setSort({commit}, value) {
    commit('setSort', value)
  }

}

const getters = {

  tasksSorted: state => {
    let tasksSorted = {},
      keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase()
      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      return 0
    })

    keysOrdered.forEach(key => {
      tasksSorted[key] = state.tasks[key]
    })

    return tasksSorted
  },


  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted,
        tasksFiltered = {}

    if (state.search) {
      Object.keys(tasksSorted).forEach(key => {
        let task = tasksSorted[key]
        if (task.name.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return tasksSorted
  },
  tasksToDo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]
      if (task.completed) {
        tasks[key] = task
      }
    })

    return tasks
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}