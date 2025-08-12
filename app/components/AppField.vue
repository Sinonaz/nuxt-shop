<script setup lang="ts">
  const value = defineModel<string>()
  const { variant = 'gray' } = defineProps<{ variant?: 'gray' | 'black' }>()
</script>

<template>
  <input v-model="value" class="input" :class="variant" />
</template>

<style scoped lang="less">
  .input {
    padding: 12px 0;
    background: none;
    border: none;
    color: var(--color-black);
    outline: none;
    font-family: var(--font);
    font-size: 16px;

    &::placeholder {
      color: var(--color-dark-gray);
    }

    &.gray {
      border-bottom: 2px solid var(--color-gray);
    }

    &.black {
      border-bottom: 2px solid var(--color-black);
    }
  }
</style>
