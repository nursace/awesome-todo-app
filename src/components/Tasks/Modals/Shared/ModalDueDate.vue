<template>
  <q-input :value="dueDate" outlined @input="$emit('update:dueDate', $event)" label="Due date">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer" color="primary">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date minimal :value="dueDate" @input="$emit('update:dueDate', $event)" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>


<script>
export default {
  props: ["dueDate"]
};
</script>