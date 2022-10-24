<template>
  <footer class="footer">
    <div class="footer-inner container">
    <ul class="footer__items">
      <li class="footer-item" v-for="link in links" :key="link+links">
        <h4 class="footer-item__title">
          {{ link }}
        </h4>
        <a href="#" class="footer-item__link"></a>
      </li>
    </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      links: [
        'Приложения',
        'Партнеры',
        'Ресурсы',
        'О нас',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #2D6FAB;
  min-height: 198px;
  width: 100%;

  &-inner {
    padding-top: 20px;
  }

  &__items {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: 968px) {
      display: block;
    }
  }

  &-item {
    @media screen and (max-width: 968px) {
      margin-left: 15px;
    }

    &__title {
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #FFFFFF;
      margin-bottom: 10px;
    }

    &__link {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 15px;
      color: rgba(186, 186, 186, 0.63);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>