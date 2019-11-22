<template>
  <q-card-section class="row">
      <div class="text-h6"><slot></slot></div>
      <q-space />
      <q-btn flat v-close-popup round dense icon="close" />
    </q-card-section>
</template>