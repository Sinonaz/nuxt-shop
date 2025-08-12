<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <AppWrapper class="footer__wrapper">
      <div class="footer__top">
        <nav class="footer__nav">
          <a href="#">Контакты</a>
          <a href="#">Условия покупки</a>
          <a href="#">Доставка и возврат</a>
        </nav>

        <SubscribeField />
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">© 2024 Shoppe</p>

        <div class="footer__social">
          <a href="#" target="_blank">
            <Icon name="mdi:linkedin" size="1.5em" />
          </a>
          <a href="#" target="_blank">
            <Icon name="mdi:facebook" size="1.5em" />
          </a>
          <a href="#" target="_blank">
            <Icon name="mdi:instagram" size="1.5em" />
          </a>
          <a href="#" target="_blank">
            <Icon name="mdi:twitter" size="1.5em" />
          </a>
        </div>
      </div>
    </AppWrapper>
  </footer>
</template>

<style scoped lang="less">
  .footer {
    padding-bottom: 90px;
  }

  .footer__bottom,
  .footer__top {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .footer__top {
    @media (min-width: 1100px) {
      padding-top: 40px;
      border-top: 1px solid var(--color-gray);
    }
  }

  .footer__wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .footer__nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    & a {
      font-size: 16px;
      color: var(--color-dark-gray);
      text-transform: uppercase;
      text-decoration: none;

      &:is(:hover, :focus) {
        color: var(--color-black);
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      gap: 10px;

      & a {
        font-size: 12px;
      }
    }
  }

  .footer__social {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    & a {
      color: var(--color-dark-gray);

      &:is(:hover, :focus) {
        color: var(--color-black);
      }
    }
  }

  .footer__copyright {
    margin: 5px 0;
  }
</style>
