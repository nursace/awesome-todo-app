<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">Awesome Todo App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="(nav, index) in navs"
          :key="index"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :width="250"
      :breakpoint="768"
    >
      <q-list>
        <q-item-label header class="text-grey-4">Navigation</q-item-label>
        <q-item
          v-for="(nav, index) in navs"
          :key="index"
          clickable
          :to="nav.to"
          exact
          class="text-grey-4"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
            <q-item-label caption>@{{nav.labelCaption}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "Todo",
          labelCaption: "Manage your todos",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          labelCaption: "Manage your setting",
          icon: "settings",
          to: "/settings"
        },
        {
          label: "About",
          labelCaption: "Who we are",
          icon: "info",
          to: "/about"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
}
</style>
