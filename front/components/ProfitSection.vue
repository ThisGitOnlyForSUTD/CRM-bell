<template>
 <section class="profit">
   <div class="profit__content container">
     <h4 class="profit__title">Чем мы полезны для Вашей комании</h4>
      <ul class="profit__list">
        <li
          class="profit__item"
          v-for="item in list"
          :key="item.number">
          <div class="profit__item-title">
            <span class="profit__item-number">{{item.number}}</span>
            <svg class="profit__item-svg" viewBox="0 0 50 45" xmlns="http://www.w3.org/2000/svg" ><path d="M19.65 43.9q-3.95 0-6.8-2.85Q10 38.2 10 34.25q0-3.95 2.85-6.8 2.85-2.85 6.8-2.85v3q-2.7 0-4.675 1.975Q13 31.55 13 34.25q0 2.7 1.975 4.675Q16.95 40.9 19.65 40.9q2.7 0 4.625-1.875Q26.2 37.15 26.2 33.7h3q0 4.65-2.8 7.425-2.8 2.775-6.75 2.775Zm16.7-1.5V32.2H25.5q-2.45 0-3.675-1.9-1.225-1.9-.225-4.05l4.3-9.45h-4.7l-1.35 3.65-3-1 1.4-3.75q.25-.9.925-1.4.675-.5 1.775-.5h9.6q2 0 3.125 1.6T34 18.7l-4.5 9.55h6.1q1.55 0 2.65 1.1 1.1 1.1 1.1 2.65v10.4Zm-.75-30.2q-1.5 0-2.575-1.075Q31.95 10.05 31.95 8.55q0-1.5 1.075-2.575Q34.1 4.9 35.6 4.9q1.5 0 2.575 1.075Q39.25 7.05 39.25 8.55q0 1.5-1.075 2.575Q37.1 12.2 35.6 12.2Z"/></svg>
          </div>
          <div class="profit__item-content">
            <p class="profit__item-short">{{item.title}}</p>
            <p class="profit__item-info">{{item.text}}</p>
            <div class="profit__item-nav">
              <span class="profit__item-know">Узнать</span>
              <svg class="profit__item-arrow" viewBox="0 0 50 45" xmlns="http://www.w3.org/2000/svg"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
            </div>
          </div>
        </li>
      </ul>
   </div>
 </section>
</template>
<script>
export default {
  name: 'ProfitSection',
  data(){
    return {
      list: [
        {
          number: '01',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
        {
          number: '02',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
        {
          number: '03',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
        {
          number: '04',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
        {
          number: '05',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
        {
          number: '06',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
        {
          number: '07',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
        {
          number: '08',
          title: 'Аудит продаж и amoCRM',
          text: 'погружаемся в бизнес-процессы, находим узкие места, состовляем план работ',
          svg: '@/assets/imgs/test.svg',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.profit {
  margin-top: 150px;

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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 20px;
  }

  &__item {
    width: 260px;
    border: 1px solid rgba(167, 167, 167, 0.3);
    border-radius: 8px;
    margin-bottom: 1.5%;
    margin-right: 1.5%;
    padding: 15px 15px 20px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    cursor: pointer;
    position: relative;

    transition:
      box-shadow 0.3s ease-in-out,
      background-color 0.3s ease-in-out;


    &:hover {
      background-color: #2D6FAB;
      box-shadow: 0px 0px 0px 0px rgba(34, 60, 80, 0.2);

      .profit__item-short {
        color: white;
      }

      .profit__item-svg {
        fill: white;
      }

      .profit__item-know {
        color: white;
      }

      .profit__item-arrow {
        fill: white;
      }
    }

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-number {
      color: #cccccc;
      font-size: 1.2em;
    }

    &-svg {
      width: 40px;
      height: 40px;
      transition: fill 0.3s ease-in-out;
    }

    &-content {
      margin-top: 15px;
    }

    &-short {
      font-size: 1.45em;
      font-weight: 400;
      margin-bottom: 15px;
      transition: color 0.3s ease-in-out;
    }

    &-info {
      font-size: 0.9em;
      line-height: 16px;
      color: #cccccc;
    }

    &-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    &-know {
      font-size: 0.8em;
      transition: color 0.3s ease-in-out;
    }

    &-arrow {
      width: 20px;
      height: 20px;
      transition: fill 0.3s ease-in-out;
    }
  }
}
</style>
