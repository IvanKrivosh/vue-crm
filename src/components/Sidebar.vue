<template>
  <div>
    <ul id="nav-bar">
      <li v-for="link of links" :key="link.link">
        <router-link :to="link.link" active-class="active-router">{{
          link.label
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import links from '@/config/router-config.js';
</script>

<style>
.active-router {
  color: red;
}
#nav-bar {
  list-style: none;
}
</style>
