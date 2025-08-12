<script setup lang="ts"></script>

<template>
  <div class="search">
    <button class="search__btn" type="submit">
      <Icon name="mdi:magnify" size="22px" />
    </button>
  </div>
</template>

<style scoped lang="less">
  .search__btn {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--color-dark-gray);

    &:is(:hover, :focus) {
      color: var(--color-black);
    }
  }
</style>
