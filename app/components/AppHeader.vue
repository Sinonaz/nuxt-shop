<script setup lang="ts"></script>

<template>
  <header class="header">
    <AppWrapper class="header__wrapper">
      <NuxtLink>
        <Icon name="icons:logo" />
      </NuxtLink>

      <nav class="header__nav">
        <NuxtLink to="/catalog/" active-class="border-bottom">Магазин</NuxtLink>
        <NuxtLink to="/about" active-class="border-bottom">О нас</NuxtLink>
      </nav>

      <div class="header__actions">
        <SearchField />
        <NuxtLink to="/cart" active-class="border-bottom">
          <Icon name="mdi:cart-outline" size="22px" />
        </NuxtLink>
        <NuxtLink to="/favorites" active-class="border-bottom">
          <Icon name="mdi:cards-heart-outline" size="22px" />
        </NuxtLink>
        <NuxtLink to="/auth/login" active-class="border-bottom">
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

  .border-bottom {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 18px);
      left: 0;
      z-index: 1;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
    }
  }
</style>
