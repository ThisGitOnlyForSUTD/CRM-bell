<template>
  <nav class="navbar">
    <div
      class="navbar__burger"
      @click="toggleMenuHandler"
    >
      <span
        class="navbar__burger-line"
        :class="{'navbar__burger-line_start':isOpen}"
      ></span>
      <span
        class="navbar__burger-line"
        :class="{'navbar__burger-line_middle':isOpen}"
      ></span>
      <span
        class="navbar__burger-line"
        :class="{'navbar__burger-line_end':isOpen}"
      ></span>
    </div>
    <div
      class="navbar__content"
      :class="{'navbar__content_active-mobile':isOpen}"
    >
      <div class="navbar__logo">
        <img class="navbar__svg" src="@/assets/imgs/logo.svg" alt="crm bell">
      </div>
      <ul class="navbar__links">
        <li class="navbar__link navbar__link_active">{{$t('navbar.main')}}</li>
        <li class="navbar__link">{{$t('navbar.services')}}</li>
        <li class="navbar__link">{{$t('navbar.cases')}}</li>
        <li class="navbar__link">{{$t('navbar.about')}}</li>
        <li class="navbar__link">{{$t('navbar.vacancies')}}</li>
      </ul>
      <div class="navbar__social">
        <a class="navbar__whatsapp" href="https://wa.me/79006466554">
          <img class="navbar__whatsapp-svg" src="@/assets/imgs/whatsapp.svg" alt="whatsapp">
        </a>
        <button
          class="navbar__back"
          @click="$emit('openModalHandler')"
        >Обратный звонок</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AppNavbar',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenuHandler() {
      this.isOpen = !this.isOpen
      const body = document.querySelector('body')
      if (this.isOpen) {
        body.classList.add('no-scroll')
        this.changeIsOpen(true)
      } else  {
        body.classList.remove('no-scroll')
        this.changeIsOpen(false)
      }
    },
    ...mapMutations({
      changeIsOpen: 'navbarState/changeIsOpen'
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 1000;

  height: 65px;
  left: 0;
  right: 0;
  margin-right: calc(100% - 100vw);
  background: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 30%);

  padding: 0 40px;


  @media screen and (max-width: 1140px) {
    background-color: #2D6FAB;
  }

  &__logo {
    width: 150px;

    @media screen and (max-width: 1140px) {
      width: 320px;
    }
  }

  &__svg {
    width: 100%;
    height: 100%;
  }
  &__whatsapp {
    width: 40px;
    height: 40px;

    &-svg {
      width: 100%;
      height: 100%;
    }
  }

  &__burger {
    display: none;
    position: absolute;
    right: 40px;
    top: 20px;
    width: 30px;
    height: 20px;

    @media screen and (max-width: 1140px) {
      display: block;
    }

    &-line {
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 5px;
      background-color: white;
      transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out,
        margin 0.3s ease-in-out;
      &:not(:last-child) {
        margin-bottom: 4px;
      }

      &_start {
        opacity: 0;
      }

      &_middle {
        transform: rotate(45deg);
      }

      &_end {
        margin-top: -8px;
        transform: rotate(-45deg);
      }
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1140px) {
      transition: height 0.5s ease-in-out;
      position: absolute;
      background-color: white;
      top: 65px;
      bottom: 0;
      left: 0;
      right: 0;
      flex-direction: column;
      justify-content: start;
      height: 0;
      overflow: hidden;
    }

    &_active-mobile {
      @media screen and (max-width:1140px) {

        height: calc(100vh - 65px);
      }
    }
  }



  &__logo {
    margin-right: auto;
    @media screen and (max-width: 1140px) {
      margin: 40px 0;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    margin-right: -200px;
    @media screen and (max-width: 1140px) {
      flex-direction: column;
      margin:20px 0;
    }
  }

  &__link {
    margin: 0 15px;
    font-size: 1.15em;
    font-weight: 400;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 1140px) {
      margin: 10px 0;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.5px;
      background: black;
      bottom: 2px;
      left: 0;
      opacity: 0;
      transition:bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }
    &:hover {
      &:after {
        opacity: 1;
        bottom: 0;
      }
    }
    &_active {
      font-weight: 700;
      opacity: 0.7;
      &:after {
        display: none;
      }
    }
  }
  &__social {
    display: flex;
    align-items: center;
    margin-left: auto;
    @media screen and (max-width: 1140px) {
      margin: 20px 0;
      flex-direction: column;
    }
  }
  &__back {
    display: block;
    margin-left: 30px;
    border: 1px solid black;
    height: 40px;
    background-color: white;
    color: black;
    font-weight: 800;
    padding: 0 30px;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 1140px) {
      margin-top: 20px;
    }

    &:hover {
      background-color: black;
      color: white;
    }

    @media screen and (max-width: 1140px) {
      margin-left: 0;
    }
  }
}
</style>
