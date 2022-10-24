<template>
  <div class="where">
    <div class="where__bg"></div>
    <div class="where__content container">
      <h4 class="where__title">Работаем с клиентами по всему миру</h4>
      <div class="where__wrapp">
        <div class="where__first">
          <img class="where__img" src="" alt="first">
        </div>
        <div class="where__second">
          <p class="where__text">
            Обратились в компанию Генезис за внедрением amoCRM по рекомендации нашего партнёра, который также сотрудничает с данной компанией достаточно давно. После согласования сроков и условий сотрудники приступили к работе, четко придерживаясь прописанного плана и оперативно откликаясь на дополнительные запросы и помощь по настройкам.
          </p>
        </div>
        <div class="where__main">
          <img class="where__img" src="" alt="first">
        </div>
        <div class="where__four">
          <p class="where_text">
            Это помогло нам выжить. В 2017 году мы были в минусе и кредитовались, пытаясь как-то выравнять положение. И выйти из этой ситуации нам помогло внедрение amoCRM от компании Генезис.
          </p>
        </div>
        <div class="where__five">
          <img class="where__img" src="" alt="first">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WhereSection'
}
</script>
<style lang="scss" scoped>
.where {
  height: 820px;
  width: 100%;
  position: relative;

  &__bg {
    background-image: url("@/assets/imgs/where_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  &__title {
    line-height: 62px;
    color: #000000;
    font-size: 40px;
    font-weight: 400;
    margin-top: 40px;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__wrapp {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: calc(820px - 102px);
  }

  &__img {
    width: 100%;
    height: auto;
    display: block;
  }
  &__first {
    position: absolute;
    width: 368px;
    height: 219px;
    background: #445c87;
    z-index: 100;
    left: 0%;
    top: 0%;
  }
  &__main {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 573px;
    height: 324px;
    background: #0072bc;
    z-index: 1;
  }
  &__five {
    position: absolute;
    width: 292px;
    height: 172px;
    background: #9abcc4;
    z-index: 100;
    top: 52%;
    left: 60%;
  }
  &__second {
    position: absolute;
    background: white;
    padding: 15px;
    width: 400px;
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    z-index: 100;
    top: 0%;
    left: 65%;

  }
  &__four {
    position: absolute;
    background: white;
    padding: 15px;
    width: 400px;
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    z-index: 100;
    top: 47%;
    left: 10%;
  }



}
</style>
