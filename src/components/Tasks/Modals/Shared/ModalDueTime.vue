<template>
  <q-input outlined :value="dueTime" label="Due time" @input="$emit('update:dueTime', $event)" >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer" color="primary">
        <q-popup-proxy transition-show="scale" transition-hide="scale" >
          <q-time :value="dueTime" mask="HH:mm" format24h @input="$emit('update:dueTime', $event)" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>


<script>
export default {
  props: ["dueTime"]
};
</script>