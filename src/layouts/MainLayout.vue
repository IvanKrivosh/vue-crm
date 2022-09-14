<template>
  <Header></Header>
  <Sidebar></Sidebar>
  <slot></slot>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>
