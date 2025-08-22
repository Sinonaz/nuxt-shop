<script setup lang="ts">
  const items = [
    {
      label: '1',
      value: '1'
    },
    {
      label: '2',
      value: '2'
    }
  ]
  const selectValue = ref<string>('')
</script>

<template>
  <div>
    <h1>catalog</h1>
    <AppSelect v-model="selectValue" :items label="Категория" name="category" />
  </div>
</template>

<style scoped lang="less"></style>
