import { firebaseAuth } from "../boot/firebase";
import { LocalStorage, Loading } from "quasar";
import { showErrorMessage } from "../functions/show-error-message";

const state = {
  loggedIn: false
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
    LocalStorage.set("loggedIn", value);
  }
};

const getters = {};

const actions = {
  registerUser({}, payload) {
    Loading.show();
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response: ", response);
      })
      .catch(err => {
        showErrorMessage(err.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response: ", response);
      })
      .catch(err => {
        showErrorMessage(err.message);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ dispatch, commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit("setLoggedIn", true);
        this.$router.replace("/").catch(err => {});

        dispatch('tasks/fbReadData', null, {root: true})

      } else {
        commit("setLoggedIn", false);
        this.$router.replace("/auth").catch(err => {});
      }
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
