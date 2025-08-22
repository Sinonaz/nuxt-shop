<script setup lang="ts">
  const { items, name } = defineProps<{
    name: string
    items: { label: string; value: string }[]
  }>()

  const selectValue = defineModel<string>()
</script>

<template>
  <div class="select">
    <select v-model="selectValue" :name>
      <option v-for="item in items" :key="item.value" :value="item.value">{{ item.label }}</option>
    </select>

    <Icon class="select__icon" name="mdi:arrow-right" size="17px" />
  </div>
</template>

<style scoped lang="less">
  .select {
    position: relative;
    max-width: 260px;
  }

  select {
    position: relative;
    appearance: none;
    width: 100%;
    background: none;
    padding: 15px 12px;
    border-radius: 4px;
    border: none;
    box-shadow: inset 0 0 0 1px var(--color-gray);
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
  }

  .select__icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
</style>
