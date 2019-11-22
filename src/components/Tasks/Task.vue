<template>
<div>

  <q-item
    clickable
    @click="updateTask({id: id, updates: { completed: !task.completed}})"
    v-ripple
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'task-strikethrough' : task.completed}">{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section side v-if="task.dueDate">
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="24px" class="q-mr-se" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end">{{task.dueDate}}</q-item-label>
          <q-item-label class="row justify-end">
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn @click.stop="showEdit=true" round dense color="primary" icon="edit" />
    </q-item-section>

    <q-item-section side>
      <q-btn @click.stop="propmtToDelete(id)" round dense color="red" icon="delete" />
    </q-item-section>
  </q-item>

  <q-dialog v-model="showEdit">
    <edit-task :task=task></edit-task>
  </q-dialog>

</div>
</template>

<script>
import { mapActions } from "vuex";
import EditTask from "./Modals/EditTask"

export default {
  data() {
    return {
      showEdit: false
    };
  },
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    propmtToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete this task?",
          ok: {
            push: true
          },
          cancel: {
            color: "negative"
          },
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
    promptToEdit(id) {}
  },
  components: {
    "edit-task": EditTask,
  }
};
</script>


<style lang="scss" scoped>
.task-strikethrough {
  text-decoration: line-through;
}
</style>