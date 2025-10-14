<script setup lang="ts">
import VueParticles from '@tsparticles/vue3';
</script>

<template>
  <!-- <vue-particles id="tsparticles" url="http://foo.bar/particles.json" /> -->

  <vue-particles id="tsparticles" :options="{
    background: {
      color: {
        value: '#18181800'
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push'
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        },
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#ffffff'
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
        },
        value: 100
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    detectRetina: true
  }" class="fixed inset-0 -z-10"/>
</template>
