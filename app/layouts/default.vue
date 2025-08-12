<script setup lang="ts"></script>

<template>
  <div class="app">
    <header>Header</header>
    <main>
      <slot />
    </main>
    <footer>Footer</footer>
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
