<template>
  <transition  name="fade">
    <div
      class="popup"
      v-if="isVisible"
      @click="hiddeHandler"
    >
      <div
        class="popup__content"
        @click.stop
      >
        <h4 class="popup__title">Обсудим вашу задачу</h4>
        <p class="popup__message">Введите ваши данные, чтобы мы могли связаться с вами</p>
        <form
          @submit.prevent="sendHandler"
          class="popup__form"
        >
          <div
            class="popup__warraper"
            :class="{'popup__warraper_error':errors.name}"
          >
            <input
              type="text"
              class="popup__input"
              v-model="personInfo.name"
              placeholder="Имя"
              @input="errors.name = ''"
            >
            <transition  name="fade">
              <p
                v-if="errors.name"
                class="popup__error popup__error_name">{{errors.name}}</p>
            </transition>
          </div>
          <div
            class="popup__warraper"
            :class="{'popup__warraper_error':errors.phone}"
          >
            <VuePhoneNumberInput
              v-model="personInfo.phone"
              @input="errors.phone = ''"
            />
            <transition  name="fade">
              <p
                v-if="errors.phone"
                class="popup__error">{{errors.phone}}</p>
            </transition>
          </div>
          <div class="popup__btn"></div>
          <AppButton
            text="Отправить заявку"
            type="submit"
          />
        </form>
        <p class="popup__info">
          Отправляя форму, вы соглашаетесь с Политикой о конфиденциальности и обработкой Персональных данных
        </p>
      </div>
    </div>
  </transition>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import AppButton from "~/components/ui/AppButton";
import { mapGetters } from 'vuex'

export default {
  name: 'AppPopup',
  components: {
    AppButton,
    VuePhoneNumberInput
  },
  props:{
    value: {
      type:Boolean,
      default: false,
    }
  },
  data(){
    return {
      isVisible:false,
      personInfo: {
        name: '',
        phone: ''
      },
      errors: {
        name: '',
        phone: ''
      }
    }
  },
  watch:{
    value(val){
      this.isVisible = val
    },
    isVisible(val) {
      this.$emit('input', val)
      const body = document.querySelector('body')
      if (val) {

        body.classList.add('no-scroll')
      } else  {
        if (this.isOpenNavbar) { return}
        body.classList.remove('no-scroll')
      }
    }
  },
  methods: {
    hiddeHandler() {
      this.isVisible = false
    },
    validate() {
      return Object.keys(this.personInfo).reduce((acc,key) => {
        if (!this.personInfo[key] || this.personInfo[key].length <= 0) {
          this.errors[key] = 'нужно заполнить поле!'
          acc = false
        }
        return acc
      }, true)
    },
    async sendHandler() {
      if (!this.validate()) return
      console.log('dadadadd')
    },
  },
  computed: {
    ...mapGetters({
      isOpenNavbar: 'navbarState/isOpen'
    })
  },
}
</script>
<style lang="scss">
.popup__warraper_error {
   & input {
    transition: border-color 0.3s ease-in-out;
    border-color: red !important;
  }
}
</style>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  right: calc(100% - 100vw);
  //width: 100%;
  background: rgba(0,0,0,0.35);

  display: flex;
  justify-content: center;
  align-items: center;

  &__content{
    background: white;
    padding: 20px;
    text-align: center;
    max-width: 460px;
  }

  &__title {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.23;
    margin-bottom: 6px;
  }

  &__message {
    font-size: 0.71em;
    line-height: 1.46;
    font-weight: 300;
    margin-bottom: 14px;
  }

  &__input {
    border-radius: 4px;
    caret-color: dodgerblue;
    width: 100%;
    padding: 0 12px;
    font-weight: 400;
    background-color: white;
    outline: none;
    border: 1px solid #cccccc;
    height: 40px;
    cursor: pointer;
    margin-bottom: 20px;
    transition:
      border-color 0.3s ease-out,
      box-shadow 0.3s ease-out;
    &:hover{
      border-color: dodgerblue;
    }
    &:focus {
      border-color: dodgerblue;
      box-shadow: rgb(30 144 255 / 70%) 0px 0px 0px 0.125rem;
    }
  }
  &__btn {
    margin-top: 25px;
  }
  &__info {
    margin-top: 20px;
    font-size:0.71em;
    line-height: 1.45;
    font-weight: 300;

  }

  &__warraper {
    position: relative;
  }

  &__error {
    position: absolute;
    top:100%;
    font-size: 0.8em;
    color: red;
    left: 5px;
    &_name {
      top:68%;
    }
  }

}





</style>
