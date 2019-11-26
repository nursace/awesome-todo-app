<template>
  <transition appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut">
    <div class="q-mb-xl" :class="{'q-mt-md q-mb-xl' : !showTasksInOneList}">
      <list-header v-if="!showTasksInOneList" bgColor="bg-green-4">Completed</list-header>
      <q-list bordered separator>
        <task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key" />
      </q-list>
    </div>
  </transition>
</template>

<script>
import Task from "./Task";
import ListHeader from "../Shared/ListHeader";
import { mapGetters } from 'vuex'

export default {
  props: ["tasksCompleted"],
  computed: {
    ...mapGetters('storeSettings', ['settings']),
    showTasksInOneList(){
      return this.settings.showTasksInOneList
    }
  },
  components: {
    task: Task,
    "list-header": ListHeader
  }
};
</script>

<style scoped>

</style>