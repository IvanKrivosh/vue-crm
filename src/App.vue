<template>
  <router-link :to="'/'">Home</router-link>
  <router-link :to="'/about'">About</router-link>
  <BaseLayout />
</template>

<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
</script>
