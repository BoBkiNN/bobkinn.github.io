<script setup lang="ts">
defineProps<{
  text: string
}>()
const emit = defineEmits(["click"])
</script>

<template>
  <div id="c" class="flex items-center transition-colors duration-200 py-3 cursor-pointer px-3" v-on:click="emit('click')">
    <!-- <div class="flex items-center gap-3 px-3">
      <img v-for="(icon, i) in item.icons" :key="i" :src="icon" alt="icon" class="w-6 h-6 object-contain" />

    </div> -->
    {{ text }}
    <!-- <span class=""></span> -->
  </div>
</template>

<style scoped>
#c {
  font-size: 2em;
}

#c:hover {
  background-color: #bb9bff46;
}

</style>
