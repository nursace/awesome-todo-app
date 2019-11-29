<template>
  <q-input :value="dueDate" outlined @input="$emit('update:dueDate', $event)" label="Due date">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer" color="primary">
        <q-popup-proxy ref="qDateProxy">
          <q-card bordered flat class="fixed-center">
            <q-date flat minimal :value="dueDate" @input="$emit('update:dueDate', $event)" />
            <q-card-actions>
              <q-space />
              <q-btn label="Close" @click="close" color="orange-4" />
            </q-card-actions>
          </q-card>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>


<script>
export default {
  props: ["dueDate"],
  methods: {
    close() {
      this.$refs.qDateProxy.hide();
    }
  }
};
</script>