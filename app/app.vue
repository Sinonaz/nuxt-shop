<script setup lang="ts">
  import '~/assets/styles/main.less'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="less" scoped>
  .page-enter-active,
  .page-leave-active {
    transition: opacity, 0.2s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
