<script setup lang="ts">
  const hello = ref<string>('hello')
</script>

<template>
  <div>
    {{ hello }}
    <AppTest />
  </div>
</template>
