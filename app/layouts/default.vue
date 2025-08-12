<script setup lang="ts">
  import AppHeader from '~/components/AppHeader.vue'
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <AppWrapper>
        <slot />
      </AppWrapper>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped lang="less">
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  main {
    flex-grow: 1;
  }
</style>
