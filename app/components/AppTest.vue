<script setup lang="ts">
  const appConfig = useAppConfig()
</script>

<template>
  <div>
    {{ appConfig.text }}
  </div>
</template>
