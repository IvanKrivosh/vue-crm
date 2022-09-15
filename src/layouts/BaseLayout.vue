<template>
  <component v-if="layout" :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup>
const layouts = {};
Object.entries(
  import.meta.glob('@/layouts/*.vue', { import: 'default' }),
).forEach(([path, func]) => {
  layouts[path.match(/(?<=\/)([a-zA-Z]*)(?=\.)/)[0]] = func;
});
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const layout = ref();
const route = useRoute();
watch(
  route,
  async ({ meta }) => {
    try {
      const component = meta.layout && (await layouts[meta.layout]());
      layout.value = component ? markRaw(component) : null;
    } catch (e) {
      console.log(e);
      layout.value = null;
    }
  },
  { immediate: true },
);
</script>
