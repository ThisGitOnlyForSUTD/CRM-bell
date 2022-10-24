<template>
  <section class="slider">
    <div class="slider__content container">
      <div class="slider__wrapper">
        <div class="carousel-wrapper">
          <div v-swiper:mySwiper="options">
            <div class="swiper-wrapper">
              <div v-for="i in slides" :key="i.number" class="slide-warpper swiper-slide">
                <p class="slide__number">{{i.number}}</p>
                <p class="slide__title">{{i.title}}</p>
                <p class="slide__text">{{i.text}}</p>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },
      slides: [

        {
          title: 'Звонок клиенту, отправка СМС и КП в один клик',
          number: '01',
          text: 'Скорость работы менеджеров значительно увеличится за счет удобства интерфейса amoCRM. Ежедневные рутинные действия менеджеров будут упрощены до одного клика.'
        },
        {
          title: 'Ни один запрос клиента не будет забыт',
          number: '02',
          text: 'По методологии по каждому запросу клиента (лиду) должна выставляться следующая задача, и она не должна быть просрочена. В интерфейсе amoCRM проблемные сделки выделяются. Поэтому каждый входящий запрос будет отработан вовремя.'
        },
        {
          title: 'Автоматическая фиксация заявок из всех каналов коммуникаций',
          number: '03',
          text: 'AmoCRM фиксирует звонки в отдел продаж, электронные письма, запросы в соцсетях, заявки с сайта. По каждому обращению автоматически создается новая сделка. Проигнорировать входящую активность технически невозможно.'
        },
        {
          title: 'Производительность менеджеров вырастет кратно',
          number: '04',
          text: 'Так как по каждому запросу клиента выставляется задача и у них есть конкретный срок, менеджер будет всегда видеть список дел перед своими глазами. Отработал задачу, следующая на подходе. В итоге менеджер за день может закрывать в среднем по 80 задач, что обеспечивает максимальную производительность.'
        },
        {
          title: 'Все коммуникации будут в одном месте',
          number: '05',
          text: 'Так как сделок в работе становится много, менеджеру сложно вспомнить ситуацию по каждому клиенту. Но благодаря интерфейсу amoCRM на одном экране, мы видим все коммуникации: звонки, переписку в соцсетях и WhatsApp, а так же задачи, которые выставлялись, и комментарии менеджеров.'
        },
        {
          title: 'Можно продавать через переписку в WhatsApp',
          number: '06',
          text: 'Электронная почта уже устарела, клиенты охотно выходят на связь через WhatsApp. В дальнейшем подписанным на бота клиентам можно отправлять через amoCRM любую информацию как практического, так и рекламного характера.'
        },
        {
          title: 'Интеграция с 1С, телефонией и с сотнями других сервисов',
          number: '07',
          text: 'AmoCRM позволяет интегрироваться с большинством популярных систем через API, поэтому если у вас специфический бизнес, то с большой степенью вероятности мы сможем настроить обмен данными.'
        },
        {
          title: 'AmoCRM будет продавать сама',
          number: '08',
          text: 'Благодаря настройкам автоматических действий в воронках, amoCRM может сама «догревать» потенциальных клиентов в зависимости от этапа: отправит СМС, сообщение в чат, покажет рекламу, отправит письмо и т.д. Все это повышает конверсию продаж.'
        },
        {
          title: 'Клиентская база в полном порядке',
          number: '09',
          text: 'Список наших покупателей является ценным капиталом для любой компании. И относиться к базе нужно максимально трепетно. AmoCRM сохранит не только контактные данные, но и историю взаимодействий. А благодаря новому функционалу клиентов можно еще и сегментировать.'
        },
        {
          title: 'Менеджеры смогут работать из дома и из любой точки мира',
          number: '10',
          text: 'Как показала эпоха пандемии, менеджеры могут комфортно работать из дома и вообще из любой точки, где есть интернет. Но без amoCRM выстроить такую работу невозможно.'
        },
        {
          title: 'Система отчетов обеспечит полную прозрачность всех процессов',
          number: '11',
          text: 'Одного взгляда будет достаточно для того, чтобы понять ситуацию в отделе продаж. А такие отчеты как активность менеджеров, план-факт продаж обеспечат прозрачность работы в любом отделе.'
        },
        {
          title: 'РОП сможет выстроить и контролировать работу отдела',
          number: '12',
          text: 'Теперь в каждую сделку можно зайти и проверить качество работы менеджеров. Разговоры можно будет прослушать и оценить, насколько качественно менеджеры презентуют товар и отрабатывают возражения. РОП сможет выставлять задачи и контролировать ключевые показатели.'
        },
        {
          title: 'Ощущение полного порядка в отделе продаж',
          number: '13',
          text: 'AmoCRM внедряется в первую очередь для менеджеров. Менеджеры будут находиться в потоке задач, ни один запрос клиента не будет забыт. Хаос превратится в систему.'
        },
        {
          title: 'Заявки с сайтов и агрегаторов не будут теряться на почте',
          number: '14',
          text: 'Зачастую клиентов приходится вызванивать неделями, чтобы продажа состоялась. Если же заявки с сайта будут падать на почту, а не в CRM, то вероятность навсегда потерять этих клиентов будет максимально высока.'
        },
        {
          title: 'С запросами из социальных сетей поможет справиться чат-бот',
          number: '15',
          text: 'Наступила новая эра продаж, и клиенты все чаще предпочитают общаться через социальные сети. Благодаря удобному конструктору, вы сможете самостоятельно настраивать сценарии ботов, что может значительно облегчить нагрузку на отдел продаж.'
        },
        {
          title: 'Эффективность рекламы вырастет кратно',
          number: '16',
          text: 'Если в вашей компании нет CRM системы, то скорее всего дорогостоящие входящие заявки будут обработаны с низкой конверсией. Это может привести к тому, что рекламный бюджет не окупится. А, значит, масштабировать такой бизнес нельзя. Также с CRM можно выстроить сквозную аналитику.'
        },
        {
          title: 'Всего несколько спасенных сделок окупят все затраты на проект',
          number: '17',
          text: 'Как правило, бюджет внедрения CRM системы меньше тех денег, которые могли бы принести потенциальные клиенты на протяжении всего своего срока жизни. Поэтому внедрение — это в первую очередь инвестиционный проект.'
        },
        {
          title: 'А сделки будут спасаться ежедневно',
          number: '18',
          text: 'Вы удивитесь тому, как вырастет производительность отдела продаж. С amoCRM даже самые бесперспективные запросы будут превращаться в продажи.'
        },

      ],
    }
  }
}
</script>
<style lang="scss">
.swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  border: 1px solid #0072bc;
  background: transparent;
}
.swiper-pagination-bullet-active {
  background-color: #0072bc;
}

</style>
<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 745px;
  padding: 160px 0 90px;

  @media screen and (max-width: 968px) {
    height: auto;
  }
  &__content {
    display: flex;
    justify-content: end;

    @media screen and (max-width: 968px) {
      justify-content: center;
    }
  }
  &__wrapper {
    max-width: 525px;
    height: 400px;
    background-image: url("@/assets/imgs/second_slider_bg.jpg");
    border-radius: 10px;
    opacity: 0.9;
    margin-right: 120px;
    @media screen and (max-width: 968px) {
      margin-right: 0;
      height: calc(550px);
    }
    @media screen and (max-width: 540px) {
      width: 420px;
    }
    @media screen and (max-width: 420px) {
      width: 320px;
    }
  }
}

.swiper-button-next {
  width: 90px;
  height: 90px;
  background-image: url("@/assets/imgs/arrow_ico.png");
  background-size: cover;
  transform: translate(120px, -50%);
  z-index: 1000;
  overflow: auto !important;
  top: 50%;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 968px) {
      display: none;
    }

}
.swiper-button-prev {
  width: 90px;
  height: 90px;
  background-image: url("@/assets/imgs/arrow_ico.png");
  background-size: cover;
  transform: translate(-120px, -50%) rotate(180deg);
  top: 50%;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 968px) {
      display: none;
    }

}

.swiper-slide {
  width: 100%;
  height: 100%;
}

.carousel-wrapper {
  position: relative;
  height: 100%;
}

.swiper-pagination {
  top: 85%;
  width: 80%;
  left: 50%;
  transform: translate(-50%);
  text-align: left;
}

.swiper-container {
  height: 100%;
}

.slide-warpper {
  padding: 50px;
  width: 100%;
  @media screen and (max-width: 968px) {
    padding:50px 30px ;
  }
}
.slide__number {
  margin-bottom: 30px;
  color: #445c87;
  font-weight: 300;
  font-size: 2.57em;
}
.slide__title {
  font-weight: 700;
  color: #fff;
  font-size: 1.92em;
}
.slide__text {
  margin-top: 15px;
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: #9abcc4;
}

//.carousel-wrapper {
//  padding: 40px;
//  height: 300px;
//  width: 100%;
//  .swiper-slide {
//    text-align: center;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//  }
//  .img-warpper img {
//    margin: auto;
//    width: 200px;
//    height: 100px;
//    background-image: linear-gradient(gray 100%, transparent 0);
//  }
//  ::v-deep.swiper-pagination-bullet-active {
//    background-color: black;
//  }
//}
</style>
