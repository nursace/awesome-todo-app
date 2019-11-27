import { firebaseAuth } from "../boot/firebase";

const state = {
  loggedIn: false,
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
};

const getters = {};

const actions = {
  registerUser({}, payload) {
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response: ", response);
      })
      .catch(err => {
        console.log("error: ", err.message);
      });
  },
  loginUser({}, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response: ", response);
      })
      .catch(err => {
        console.log("error: ", err.message);
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
