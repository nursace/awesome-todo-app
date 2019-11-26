<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit.prevent="submitEditForm">
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <modal-task-name ref="modalTaskRef" :name.sync="taskToSubmit.name" />
          <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />
          <modal-due-time v-if="taskToSubmit.dueDate" :dueTime.sync="taskToSubmit.dueTime" />
        </div>
      </q-card-section>
      <modal-button />
    </q-form>
  </q-card>
</template>


<script>
import { mapActions } from "vuex";
import ModalHeader from "./Shared/ModalHeader";
import ModalTaskName from "./Shared/ModalTaskName";
import ModalDueDate from "./Shared/ModalDuedate";
import ModalDueTime from "./Shared/ModalDueTime";
import ModalButton from "./Shared/ModalButton";

export default {

  props:["task", "id"],

  data() {
    return {
      taskToSubmit: {}
    }
  },

  components: {
    "modal-header": ModalHeader,
    "modal-task-name": ModalTaskName,
    "modal-due-date": ModalDueDate,
    "modal-due-time": ModalDueTime,
    "modal-button": ModalButton
  },


  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitEditForm () {
      this.updateTask({id: this.id, updates: this.taskToSubmit}),
      this.$emit('close')
    }
  },

  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  },

};
</script>
