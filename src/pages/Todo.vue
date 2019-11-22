<template>
  <q-page padding>
    <q-list v-if="Object.keys(tasks).length" bordered separator>
      <task  v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key" />
    </q-list>
    <div class="row">
    <q-btn
      @click="showAddTask = true"
      round
      color="primary"
      size="24px"
      icon="add"
      class="addButton absolute-bottom-right"
    />
    
    <q-dialog v-model="showAddTask">
      <add-task @closeAddTask="showAddTask=false" />
    </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import Task from '../components/Tasks/Task'
import AddTask from '../components/Tasks/Modals/AddTask'
export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': Task,
    'add-task': AddTask,
  }
};
</script>


<style lang="scss" scoped>
  .addButton {
    margin-right: 24px;
    margin-bottom: 24px;
  }

</style>