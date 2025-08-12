<script setup lang="ts"></script>

<template>
  <form class="subscribe">
    <AppField
      class="subscribe__field"
      placeholder="Ваш email для акций и предложений"
      type="email"
    />
    <button class="subscribe__btn" type="submit" aria-label="Отправить форму">
      <Icon name="mdi:arrow-right" size="20px" />
    </button>
  </form>
</template>

<style scoped lang="less">
  .subscribe {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    border-bottom: 1px solid var(--color-dark-gray);
    font-size: 16px;

    @media (max-width: 768px) {
      max-width: 100%;
      font-size: 14px;
    }
  }

  .subscribe__field {
    width: 100%;
  }

  .subscribe__btn {
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;

    &:is(:hover, :focus) {
      color: green;
    }
  }
</style>
