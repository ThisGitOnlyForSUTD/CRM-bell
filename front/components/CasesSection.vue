<template>
  <section class="cases container">
    <h4 class="cases__title">Наши кейсы</h4>
    <ul class="cases__list">
      <li class="cases__item">
<!--        <div class="cases__case">-->
          <div class="cases__case-info">
            <div class="cases__case-company">
              <div class="cases__case-cover">
                <img src="@/assets/imgs/bell-logo.svg" alt="" class="cases__case-logo">
              </div>
              <div class="cases__case-main">
                <p class="cases__case-name">LifePay</p>
                <p class="cases__case-text">Облачный сервис приема и фискализации платежей</p>
              </div>
            </div>
              <ul class="cases__case-list">
                <li class="cases__case-item">
                  <p class="cases__case-bold">20%</p>
                  <p class="cases__case-description">увеличина скорость обработки зявок</p>
                </li>
                <li class="cases__case-item">
                  <p class="cases__case-bold">6 часов</p>
                  <p class="cases__case-description">экономия работы менеджера в неделю</p>
                </li>
                <li class="cases__case-item">
                  <p class="cases__case-bold">30%</p>
                  <p class="cases__case-description">увеличение конверсии продаж</p>
                </li>
              </ul>

          </div>
          <div class="cases__case-wrapper">
            <img src="@/assets/imgs/laptop.png" alt="case" class="cases__case-img">
          </div>
<!--        </div>-->
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CasesSection'
}
</script>

<style lang="scss" scoped>
.cases {
  margin-bottom: 110px;

  &__title {
    display: inline-block;
    color: #000000;
    font-size: 2.85em;
    line-height: 44px;
    font-weight: 400;
    margin: 0 20px 40px;
    width: auto;
    border-bottom: 1px solid black;

    position: relative;

    @media screen and (max-width: 968px) {
      font-size: 2em;
    }

    &:after {
      content: '';
      position: absolute;
      width: 80px;
      height: 10px;
      background: black;
      clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
      left: 0;
      top: 100%;
    }
  }

  &__list {
    margin-top: 100px;
    padding: 0 15px;
    @media screen and (max-width: 968px) {
      margin-top: 40px;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 968px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  &__case {

    &-wrapper {
      width: 45%;

      @media screen and (max-width: 968px) {
        width: 90%;
      }
    }

    &-img {
      width: 100%;
      height: auto;
      display: block;
    }

    &-info {
      width: 50%;

      @media screen and (max-width: 968px) {
        width: 90%;
        margin-top: 50px;
      }
    }

    &-company {
      display: flex;
      @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
    }

    &-cover {
      width: 123px;
      min-width: 123px;
      height: 123px;
    }

    &-logo {
      width: 100%;
      height: 100%;
      display: block;
    }

    &-main {
      margin-left: 10px;
    }

    &-name {
      font-style: normal;
      font-weight: 500;
      font-size: 59px;
      line-height: 71px;
      color: #2D6FAB;
    }

    &-text {
      line-height: 26px;
      color: #000000;
      font-size: 1.57em;
      font-weight: 400;
      max-width: 280px;
    }

    &-list {
      border: 1px solid #cccccc;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-left: 9px;
      margin-top: 20px;

      @media screen and (max-width: 480px) {
        flex-direction: column;
      }
    }

    &-item {
      text-align: center;
      width: 30%;
      @media screen and (max-width: 480px) {
        width: 100%;
      }

      &:last-child {
        .cases__case-description {
          &:after {
            display: none;
          }
        }
      }
    }

    &-bold {
      color: #2D6FAB;
      font-size: 1.71em;
      line-height: 37px;
      font-weight: 500;
    }

    &-description {
      margin-top: 5px;
      color: #a7a7a7;
      font-size: 1em;
      line-height: 22px;

      position: relative;

      @media screen and (max-width: 480px) {
        margin-bottom: 45px;
      }

      &:after {
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        background: #cccccc;
        top: 50%;
        right: 0%;
        transform: translate(10px, -50%);

        @media screen and (max-width: 480px) {
          height: 1px;
          width: 60px;
          top: 100%;
          right: 50%;
          transform: translate(50%,25px);
        }
      }


    }
  }


}
</style>
