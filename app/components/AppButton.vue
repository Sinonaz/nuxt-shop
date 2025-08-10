<script lang="ts" setup>
  const { color = 'primary' } = defineProps<{ color?: 'primary' | 'ghost' }>()
</script>

<template>
  <button class="button" :class="{ 'button--ghost': color === 'ghost' }">
    <slot />
  </button>
</template>

<style lang="less" scoped>
  .button {
    font-family: var(--font);
    font-weight: 700;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 16px;
    background: var(--color-black);
    color: white;
    cursor: pointer;

    &:is(:hover, :focus) {
      background: var(--color-accent);
      color: white;
      border-color: var(--color-accent);
    }

    &--ghost {
      background: transparent;
      border-color: var(--color-black);
      color: var(--color-black);
    }
  }
</style>
