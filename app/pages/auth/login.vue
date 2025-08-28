<script setup lang="ts"></script>

<template>
  <div class="max-w-500px mx-auto">
    <h1 class="fw-500 text-33px text-center m-0">Мой аккаунт</h1>

    <form class="mt-65px flex flex-col gap-45px">
      <AppField variant="gray" placeholder="Email" />
      <AppField variant="gray" placeholder="Пароль" type="password" />
      <div class="mt-30px flex flex-col gap-15px">
        <AppButton> Вход </AppButton>
        <NuxtLink class="mx-auto text-16px hover:text-accent" :to="{ name: 'auth-restore' }">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>
