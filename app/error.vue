<script lang="ts" setup>
  import type { NuxtError } from '#app'

  const { error } = defineProps<{ error: NuxtError }>()
  const errorMessages = new Map<number, string>([
    [404, 'Страница не найдена, попробуйте перейти на главную страницу']
  ])

  function goHome() {
    navigateTo('/')
  }
</script>

<template>
  <main>
    <div class="error">
      <h1 class="error__title">{{ error.statusCode }} ошибка</h1>
      <p v-if="errorMessages.has(error.statusCode)" class="error__text">
        {{ errorMessages.get(error.statusCode) }}
      </p>
      <p v-else class="error__text">{{ error.statusMessage }}</p>
      <AppButton class="error__button" color="ghost" @click="goHome">Главная страница</AppButton>
    </div>
  </main>
</template>

<style lang="less" scoped>
  main {
    display: grid;
    place-items: center;
  }

  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 425px;
    gap: 24px;
    line-height: 1.3;
  }

  .error__title {
    margin: 0;
    font-weight: 500;
    font-size: 33px;
    text-align: center;
  }

  .error__text {
    margin: 0;
    text-align: center;
    font-size: 20px;
    color: var(--color-dark-gray);
  }

  .error__button {
    margin-top: 40px;
  }
</style>
