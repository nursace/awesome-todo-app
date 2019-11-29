<template>
  <q-input outlined :value="dueTime" label="Due time" @input="$emit('update:dueTime', $event)">
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer" color="primary">
        <transition appear enter-active-class="animated scale" leave-active-class="animated scale">
          <q-popup-proxy ref="dueDateModal">
            <q-card flat class="fixed-center">
                <q-time
                  class="no-shadow"
                  :value="dueTime"
                  mask="HH:mm"
                  format24h
                  @input="$emit('update:dueTime', $event)"
                />
              <q-card-actions>
                <q-space />
                <q-btn @click="cancel" label="Close" color="orange-4" />
              </q-card-actions>
            </q-card>
          </q-popup-proxy>
        </transition>
      </q-icon>
    </template>
  </q-input>
</template>


<script>
export default {
  props: ["dueTime"],
  methods: {
    cancel() {
      this.$refs.dueDateModal.hide();
    }
  }
};
</script>


<style scoped lang="stylus"></style>