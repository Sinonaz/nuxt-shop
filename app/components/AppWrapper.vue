<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    @padding: 96px;
    max-width: 1248px + @padding * 2;
    margin: 0 auto;
    padding: 0 @padding;

    @media (max-width: 768px) {
      @padding: 16px;
      padding: 0 @padding;
    }
  }
</style>
