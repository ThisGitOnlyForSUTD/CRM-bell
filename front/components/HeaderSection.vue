<template>
  <header class="header">
    <div class="header__content container">
      <div class="header__imgs-cover">
<!--        <img src="@/assets/imgs/ht.png" alt="" class="header__imgs-img">-->
      </div>
      <div class="header__info">
        <h1 class="header__short">
          Новое поколение <span class="header__decorate">ПРОДАЖ НА БАЗЕ CRM</span> систем.
        </h1>
        <div class="header__text">
          Погружаем в ваши бизнес процессы, подбираем технологии и IT инструменты для автоматизации и увеличения продаж, внедряя ведущие CRM системы и обучаем Ваших сотрудников.
        </div>
        <div class="header__btn">
          <AppButton
            text="Обсудить проект"
            @action="$emit('openModalHandler')"
            :isClip="true"
          />
        </div>
      </div>
    </div>
    <div class="header__cover">
      <video class="header__viedo" autoplay loop muted preload="auto" playsinline>
        <source src="@/assets/imgs/header.mp4" type='video/mp4'>
      </video>
    </div>
  </header>
</template>
<script>
import AppButton from "~/components/ui/AppButton";
export default {
  name: 'HeaderSection',
  components: {AppButton},
}
</script>
<style lang="scss" scoped>
.header{
  position: relative;
  width: 100%;
  height:  740px;
  margin-top: 65px;
  @media screen and (max-width: 968px) {
    height: auto;
  }


  &__cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    z-index: -1;
  }

  &__viedo {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__content {
    display: flex;
    align-items: flex-start;
    height: 100%;
    position: relative;

    @media screen and (max-width: 968px) {
      flex-direction: column-reverse;
      align-items: center;
    }
    &:after {
      content: '';
      display: block;
      height: 35px;
      width: 100%;
      position: absolute;
      bottom: -5px;
      left: 0;
      background-color: white;
      clip-path: polygon(5% 0, 95% 0, 100% 100%, 0% 100%);
    }
  }

  &__imgs-cover {
    margin-top: auto;
    display: flex;
    justify-content: center;
    width: 50%;
  }

  &__imgs-img {
    display: block;
    height: 100%;
    width: auto;
  }

  &__info {
    width: 50%;
    max-width: 390px;
    margin-top: 120px;
    @media screen and (max-width: 968px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
      width: 100%;
    }
  }

  &__short, &__text, &__btn{
    max-width: 390px;
    @media screen and (max-width: 968px) {

      text-align: center;
      margin: 0 auto;
      padding: 0 10px;
    }
  }

  &__short {
    font-size: 37px;
    color: #939393;
    font-weight: 500;
  }
  &__decorate {
    font-size: 40px;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
  }

  &__text {
    margin-top: 20px;
    font-size: 1.28em;
    line-height: 27px;
    color: #696969;
    @media screen and (max-width: 968px) {
      margin-top: 40px;
    }
  }

  &__btn {
    margin-top: 40px;
    display: flex;
    justify-content: end;
    width: 206px;
    margin-left: auto;

    @media screen and (max-width: 968px) {
      width: 220px;
      justify-content: center;
      margin: 60px 0;

    }
  }
}
</style>
