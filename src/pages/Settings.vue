<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="showTasksInOneList" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered padding class="q-mt-lg">
      <q-item-label header>More</q-item-label>

      <q-item to="/settings/help" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>

      <q-item @click="visitOurWebsite" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>

      <q-item @click="emailUs" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";

export default {
  methods: {
    ...mapActions("storeSettings", [
      "setShow12HourTimeFormat",
      "setShowTasksInOneList"
    ]),
    visitOurWebsite() {
      openURL("http://www.optimabank.kg");
    },
    emailUs() {
      window.location.href="mailto:hello@optimabank.kg?subject=Awesome Todo Feedback"
    }
  },
  computed: {
    ...mapGetters("storeSettings", ["settings"]),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(val) {
        this.setShow12HourTimeFormat(val);
      }
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList;
      },
      set(val) {
        this.setShowTasksInOneList(val);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
</style>