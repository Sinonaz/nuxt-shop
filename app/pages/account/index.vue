<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })

  const authStore = useAuthStore()

  function logout(): void {
    authStore.clearToken()

    navigateTo({ name: 'index' })
  }
</script>

<template>
  <div>
    <h1>{{ authStore.userEmail }}</h1>

    <button
      class="font-inherit text-16px hover:text-accent cursor-pointer underline underline-offset-3"
      @click="logout"
    >
      Выйти
    </button>
  </div>
</template>

<style scoped lang="less"></style>
