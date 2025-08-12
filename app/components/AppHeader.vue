<script setup lang="ts"></script>

<template>
  <header class="header">
    <AppWrapper class="header__wrapper">
      <NuxtLink>
        <Icon name="icons:logo" />
      </NuxtLink>

      <nav class="header__nav">
        <NuxtLink to="/catalog/">Магазин</NuxtLink>
        <NuxtLink to="/about">О нас</NuxtLink>
      </nav>

      <div class="header__actions">
        <SearchField />
        <NuxtLink to="/cart">
          <Icon name="mdi:cart-outline" size="22px" />
        </NuxtLink>
        <NuxtLink to="/favorites">
          <Icon name="mdi:cards-heart-outline" size="22px" />
        </NuxtLink>
        <NuxtLink to="/auth/login">
          <Icon name="mdi:account-outline" size="22px" />
        </NuxtLink>
      </div>
    </AppWrapper>
  </header>
</template>

<style scoped lang="less">
  .header {
    padding-top: 48px;
  }

  .header__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 60px;
    padding-bottom: 17px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: calc(100% - (96px * 2));
      height: 1px;
      background: var(--color-gray);
      transform: translateX(-50%);
    }
  }

  .header__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    color: var(--color-dark-gray);

    & a {
      width: 22px;
      height: 22px;
      color: inherit;

      &:is(:hover, :focus) {
        color: var(--color-black);
      }
    }
  }

  .header__nav {
    justify-self: end;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 60px;
    color: var(--color-black);

    &::after {
      content: '|';
    }

    & a {
      font-size: inherit;
      color: inherit;
      text-decoration: none;

      &:is(:hover, :focus) {
        color: var(--color-accent);
      }
    }
  }
</style>
