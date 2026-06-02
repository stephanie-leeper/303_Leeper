<template>
  <v-app>
    <router-view />
    <BottomNav />
  </v-app>
</template>

<script setup lang="ts">
import BottomNav from './components/BottomNav.vue';
</script>
