<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit="onSubmit">
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
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    onSubmit() {
      this.$refs.modalTaskRef.$refs.name.validate();
      if (!this.$refs.modalTaskRef.$refs.name.hasError) {
        this.addTask(this.taskToSubmit);
        this.$emit("closeAddTask");
      }
    }
  },

  components: {
    "modal-header": ModalHeader,
    "modal-task-name": ModalTaskName,
    "modal-due-date": ModalDueDate,
    "modal-due-time": ModalDueTime,
    "modal-button": ModalButton
  }
};
</script>