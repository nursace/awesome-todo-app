<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>
      <transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <p
          v-if="search && !Object.keys(tasksToDo).length && !Object.keys(tasksCompleted).length"
        >No search result</p>
      </transition>

      <!-- <q-scroll-area class="q-scroll-area-tasks"> -->
        <tasks-todo v-if="Object.keys(tasksToDo).length" :tasksToDo="tasksToDo" />
        <no-tasks
          v-if="!search && !Object.keys(tasksToDo).length"
        />
        <tasks-completed
          v-if="Object.keys(tasksCompleted).length"
          :tasksCompleted="tasksCompleted"
        />
      <!-- </q-scroll-area> -->

      <div class="absolute-bottom text-center no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          round
          color="primary"
          size="24px"
          icon="add"
          class="addButton all-pointer-events"
        />
      </div>

      <q-dialog v-model="showAddTask">
        <add-task @closeAddTask="showAddTask=false" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Task from "../components/Tasks/Task";
import NoTasks from "../components/Tasks/NoTasks";
import AddTask from "../components/Tasks/Modals/AddTask";
import TasksToDo from "../components/Tasks/TasksToDo";
import TasksCompleted from "../components/Tasks/TasksCompleted";
import Search from "../components/Tasks/Tools/Search";
import Sort from "../components/Tasks/Tools/Sort";

export default {
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksToDo", "tasksCompleted"]),
    ...mapState("tasks", ["search"]),
  },
  components: {
    task: Task,
    "add-task": AddTask,
    "tasks-todo": TasksToDo,
    "tasks-completed": TasksCompleted,
    "no-tasks": NoTasks,
    search: Search,
    sort: Sort
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>


<style lang="scss" scoped>
.addButton {
  margin-right: 24px;
  margin-bottom: 24px;
}
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>