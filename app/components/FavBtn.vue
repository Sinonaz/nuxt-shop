<script setup lang="ts">
  const { isActive = false } = defineProps<{ isActive?: boolean }>()
</script>

<template>
  <button
    type="button"
    class="btn"
    :aria-label="isActive ? 'Удалить из избранного' : 'Добавить в избранное'"
  >
    <Icon :name="isActive ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'" size="20px" />
  </button>
</template>

<style scoped lang="less">
  .btn {
    background: none;
    padding: 0;
    width: 20px;
    height: 20px;
    border: none;
    color: var(--color-accent);
    cursor: pointer;
  }
</style>
