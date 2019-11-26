<template>
  <transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <div>
      <list-header v-if="!showTasksInOneList" bgColor="bg-orange-4">Tasks to do</list-header>
      <q-list bordered separator>
        <task v-for="(task, key) in tasksToDo" :key="key" :task="task" :id="key" />
      </q-list>
    </div>
  </transition>
</template>


<script>
import Task from "./Task";
import ListHeader from "../Shared/ListHeader";
import { mapGetters } from "vuex";

export default {
  props: ["tasksToDo"],
  computed: {

    ...mapGetters("storeSettings", ["settings"]),
    showTasksInOneList() {
      console.log(this.settings.showTasksInOneList)
      return this.settings.showTasksInOneList
    }
  },
  components: {
    task: Task,
    "list-header": ListHeader
  }
};
</script>


<style lang="scss" scoped>
</style>