<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions('storeSettings', ['getSettings']),
      ...mapActions('storeFirebase', ['handleAuthStateChange'])
    },
    mounted() {
      this.getSettings()
      this.handleAuthStateChange()
    }
  }
</script>
