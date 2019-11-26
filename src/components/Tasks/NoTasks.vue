<template>
<transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
  <q-banner class="bg-grey-3" :class="{'q-mb-lg' : showTasksInOneList}">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No tasks to do today!
    <template v-slot:action>
      <q-btn @click="$root.$emit('showAddTask')" flat color="primary" label="Add tasks" />
    </template>
  </q-banner>
  </transition>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters('storeSettings', ['settings']),
    showTasksInOneList () {
      return this.settings.showTasksInOneList
    }
  }
};
</script>

<style lang="scss" scoped>
</style>