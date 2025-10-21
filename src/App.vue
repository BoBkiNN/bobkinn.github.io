<script setup lang="ts">
import { RouterView } from 'vue-router'
import ModalHost from './components/ModalHost.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <RouterView v-slot="{ Component }">
    <!-- We pass the footer as a slot -->
    <component :is="Component">
      <template #footer>
        <FooterComponent />
      </template>
    </component>
  </RouterView>
  <ModalHost />
</template>
