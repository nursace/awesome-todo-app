<template>
  <q-input
    outlined
    :value="name"
    @input="$emit('update:name', $event)"
    :rules="[val => !!val || 'Field is required']"
    label="Task name*"
    ref="name"
    autofocus
    v-select-all
    clearable
  />
</template>


<script>
import { selectAll } from '../../../../directives/directive-select-all'

export default {
  props: ["name"],
  directives: {
    selectAll
  }
}
</script>