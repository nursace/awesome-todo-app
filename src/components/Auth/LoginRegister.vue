<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{tab | titleCase}} to access your Todos anywhere!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address']"
        lazy-rules
        outlined
        v-model="formData.email"
        class="col"
        label="Email "
        stack-label
        ref="email"
        clearable
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters']"
        lazy-rules
        type="password"
        outlined
        v-model="formData.password"
        class="col"
        label="password"
        ref="password"
        stack-label
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn type="submit" color="primary" :label="tab" />
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  props: ["tab"],
  methods: {
    ...mapActions('storeFirebase', ['registerUser', 'loginUser']),
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === "login") {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
          
        }
      }
    },
    isValidEmailAddress(val) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(val).toLowerCase());
    }
  },
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>