<script setup lang="ts">
  const route = useRoute()
  const id = ref(route.params.id)
</script>

<template>
  <div>{{ id }}</div>
</template>

<style scoped lang="less"></style>
