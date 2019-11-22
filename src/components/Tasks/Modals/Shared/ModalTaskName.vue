<template>
  <q-input
    outlined
    :value="name"
    @input="$emit('update:name', $event)"
    :rules="[val => !!val || 'Field is required']"
    label="Task name*"
    ref="name"
    autofocus
    clearable
  />
</template>


<script>
export default {
  props: ["name"]
  
}
</script>