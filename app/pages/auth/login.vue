<script setup lang="ts">
  const authStore = useAuthStore()

  const email = ref<string | undefined>()
  const password = ref<string | undefined>()

  function login(): void {
    if (!email.value || !password.value) return

    authStore.login(email.value, password.value)
  }
</script>

<template>
  <div class="max-w-500px mx-auto">
    <h1 class="fw-500 text-33px text-center m-0">Мой аккаунт</h1>

    <form class="mt-65px flex flex-col gap-45px">
      <AppField v-model="email" variant="gray" placeholder="Email" />
      <AppField v-model="password" variant="gray" placeholder="Пароль" type="password" />
      <div class="mt-30px flex flex-col gap-15px">
        <AppButton @click.stop.prevent="login"> Вход </AppButton>
        <NuxtLink class="mx-auto text-16px hover:text-accent" :to="{ name: 'auth-restore' }">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>
