<template>
  <section class="partners container">
    <p class="partners__info">Мы являемся экспертами и официальными пратнерами большинства разработчиков CRM-систем из ТОП-10 и 30+ сервисов автоматизации бизнеса</p>
    <ul class="partners__list">
      <li class="partners__item">
        <div class="partners__cover">
          <img
            src="@/assets/imgs/partner.png"
            alt="bitrix"
            class="partners__logo"
          >
          <p class="partners__status">Золотой партнер</p>
        </div>
      </li>
      <li class="partners__item">
        <div class="partners__cover">
          <img
            src="@/assets/imgs/partner.png"
            alt="bitrix"
            class="partners__logo"
          >
          <p class="partners__status">Бизнес-партнер</p>
        </div>
      </li>
      <li class="partners__item">
        <div class="partners__cover">
          <img
            src="@/assets/imgs/partner.png"
            alt="bitrix"
            class="partners__logo"
          >
          <p class="partners__status">Партнер-интегратор 3 уровня</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'PartnersSection'
}
</script>

<style lang="scss" scoped>
  .partners {
    margin-top: 150px;

    &__info {
      color: #000000;
      font-size: 2.85em;
      line-height: 44px;
      font-weight: 400;
      padding: 0 20px;
      margin-bottom: 80px;
      text-align: center;
      @media screen and (max-width: 968px) {
        font-size: 2em;
      }
    }

    &__list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 20px;
    }

    &__item {
      width: 30%;
      margin: 0 1.5% 40px;

      @media screen and (max-width: 968px) {
        width: 45%;
        margin: 0 2.5% 40px;
      }
      @media screen and (max-width: 578px) {
        width: 90%;
        margin: 0 5% 80px;
      }
    }

    &__cover {
      width: 100%;
      height: auto;
    }

    &__logo {
      width: 100%;
      height: auto;
      display: block;
    }

    &__status {
      margin-top: 10px;
      color: #0072bc;
      font-size: 1.2em;
    }
  }
</style>
