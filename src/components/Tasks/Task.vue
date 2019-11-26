<template>
  <div>
    <q-item
      v-touch-hold:1000.mouse="showEditTaskModal"
      clickable
      @click="updateTask({id: id, updates: { completed: !task.completed}})"
      v-ripple
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    >
      <q-item-section side top>
        <q-checkbox v-model="task.completed" />
      </q-item-section>

      <q-item-section>
        <q-item-label
          :class="{'task-strikethrough' : task.completed}"
          v-html="$options.filters.searchHighlights(task.name, search)"
        ></q-item-label>
      </q-item-section>

      <q-item-section side v-if="task.dueDate">
        <div class="row">
          <div class="column justify-center">
            <q-icon name="event" size="24px" class="q-mr-se" />
          </div>
          <div class="column">
            <q-item-label class="row justify-end">{{task.dueDate | niceDate}}</q-item-label>
            <q-item-label class="row justify-end">
              <small>{{ taskDueTime }}</small>
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
      <edit-task :task="task" @close="showEdit=false" :id="id"></edit-task>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EditTask from "./Modals/EditTask";
import { date } from "quasar";
const { addToDate } = date;

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
    showEditTaskModal() {
      this.showEdit = true;
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM D");
    },




    searchHighlights(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  },
  components: {
    "edit-task": EditTask
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapState('storeSettings', ['settings']),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        return date.formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')
      }
      return this.task.dueTime
    }
  }
};
</script>


<style lang="scss" scoped>
.task-strikethrough {
  text-decoration: line-through;
}
</style>