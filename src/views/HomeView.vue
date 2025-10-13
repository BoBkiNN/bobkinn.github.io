<script setup lang="ts">
import AvatarDisplay from '@/components/AvatarDisplay.vue';
import LinksList from '@/components/LinksList.vue';
import config from '@/config';
</script>

<template>
<div class="flex justify-center min-h-screen gap-10 py-10">
  <!-- Аватар не сжимается -->
  <div class="flex-shrink-0">
    <AvatarDisplay />
  </div>

  <!-- Текст занимает оставшееся место -->
  <div class="max-w-1/3">
    <div id="username">
      <span>BoBkiNN</span>
    </div>
    <div id="description">
      <span>
        Long long long long text sdfdsfdsfbsdf dsfdsfdsf sdf sdfdsf dsfdsfdsf
        sdfsdfdsf ds fs df  ds fdsf ds f  dsf ds f dsf sdf ds fs df sdf sd f dsf<br>
        sdfdsfdsjfndksjbflbasdfbaesbflbsdfds ds f SDFjkhKLSDFh 🎲🎲🎰🎲🎰🎰
        🕹🕹🕹🎮🎮
      </span>
    </div>
  </div>
  <div class="max-w-md p-0">
    <LinksList/>
  </div>
</div>

</template>

<style scoped>

#username {
  color: var(--color-accent);
  font-size: 3rem;
}
</style>
