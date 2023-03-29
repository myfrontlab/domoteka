<template>
  <div class="tab">
    <div class="tab_item">
      <div class="tab__tittle">
        Как изменилась
        наша жизнь <br>
        за последние 20 лет?
      </div>
      <div class="tab__vertical-divider" />
      <div class="tab__right">
        <div class="card-description first-row">
          <div><span class="green-text">Еда&nbsp;</span> - доставка за 15 минут</div>
          <div><span class="green-text">Такси&nbsp;</span> - приложение в каждом телефоне</div>
          <div><span class="green-text">Образование&nbsp;</span> - онлайн - обучение</div>
          <div><span class="green-text">ЖКХ&nbsp;</span> - что изменилось?</div>
          <div><span class="green-text">Домотека&nbsp;</span> - система взаимодействия УК/ТСЖ с жителем</div>
        </div>
      </div>
      <img
        width="423"
        height="423"
        src="@/assets/img/domoteka-for-images/yk-1.png"
        class="tab__img first"
      >
    </div>
    <div class="tab__horizontal-divider" />
    <div class="tab_item">
      <div class="tab__tittle">
        Зачем нужна
        Домотека?
      </div>
      <div class="tab__vertical-divider" />
      <div class="card-description second-row">
        <span>
          С помощью приложения Домотека ук / тсж может продавать дополнительные услуги, как свои, <br>
          так и субподрядчика, которого предоставляет сама Домотека.
        </span>
        <span>
          Житель использует приложение, заказывает услуги -
          вы зарабатываете.
        </span>
        <div class="card-description green-text">
          Дом + приложение = ваш заработок.
        </div>
      </div>
      <img
        width="416"
        height="416"
        src="@/assets/img/domoteka-for-images/yk-2.png"
        class="tab__img second"
      >
    </div>
    <div class="tab__horizontal-divider" />
    <div class="tab_item">
      <div class="tab__tittle">
        Мы не Авито!
      </div>
      <div class="tab__vertical-divider" />
      <div class="tab__right third-row">
        <span class="tab_description">
          На Авито Вам нужно самим нанимать подрядчиков, контролировать процесс, отвечать за исполнение
        </span>
        <div class="tab_description">
          <span class="tab_description__green">
            Домотека сделает это за вас.
          </span>
        </div>
        <span class="tab_description">
          Вам необходимо только рекламировать у себя в доме приложение
          и получать доход с продаж.
        </span>
      </div>
      <img
        width="437"
        height="437"
        src="@/assets/img/domoteka-for-images/yk-3.png"
        class="tab__img third"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
.first-row{
  font-weight: 700;
  font-size: 18px;
  line-height: 39px;
  display: flex;
  flex-direction: column;
  padding: 10px 13px 35px 54px;
}

.second-row {
  display: flex;
  flex-direction: column;
  padding: 10px 63px 41px 57px;
  gap: 30px;
}
.third-row {
  padding: 34px 20px 69px 59px !important;
  gap: 30px;
}

.tab{
  transform: translate(0, -33px);
  background: #FFFFFF;
  box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.08);
  border-radius: 33px;
  position: relative;
  z-index: 22;
  @include bp-max(1500px){
    max-width: 1200px;
  }
  @include bp-max(1400px){
    width: 1000px;
  }
  @include bp-max($mq-desktop-min){
    width: 99%;
  }

  &_item{
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 448px 2px 52% 10%;
    padding: 30px 10px;
    height: 355px;
    align-items: center;
    @include bp-max(1500px){
      grid-template-columns: 308px 2px 48% 10%;
    }
    @include bp-max($mq-desktop-min){
      grid-template-columns: 40% 2px 60%;
    }
    @include bp-max(868px){
      display: flex;
      flex-direction: column;
      height: auto;
      gap: 15px;
    }
  }

  &_description{
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    display: flex;
    align-items: center;
    width: 100%;
    color: rgba(103, 103, 103, 1);
    &__green{
      color: rgba(146, 184, 77, 1);
    }
    @include bp-max(1300px) {
      font-size: 16px;
    }
    @include bp-max($mq-desktop-min){
      font-size: 18px;
    }
  }

  &__tittle{
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 130.3%;
    display: flex;
    text-align: left;
    align-items: center;
    padding: 0 64px 15px 74px;
    color: #292929;
    @include bp-max(1500px){
      font-size: 24px;
    }
  }

  &__right{
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__vertical-divider{
    border-right: 1px dashed #92B84D;
    width: 2px;
    align-self: normal;
    @include bp-max(868px){
      border-top: 1px dashed #92B84D;
      width: auto;
    }
  }

  &__horizontal-divider{
    border: 1px solid #92B84D
  }
}

.first{
  position: absolute;
  right: 0;
  transform: translate(141px, -40px);
  @include bp-max(1640px){
    width: 380px;
    height: 380px;
    transform: translate(100px, -45px);
  }
  @include bp-max(1540px){
    width: 350px;
    height: 350px;
    transform: translate(80px, -45px);
  }
  @include bp-max(1500px){
    transform: translate(10px, -20px);
  }
  @include bp-max(1400px){
    width: 300px;
    height: 300px;
    transform: translate(60px, 0);
  }
  @include bp-max($mq-desktop-min){
    display: none;
  }
}

.second{
  position: absolute;
  right: 0;
  transform: translate(152px, -23px);
  @include bp-max(1640px){
    width: 370px;
    height: 370px;
    transform: translate(80px, -45px);
  }
  @include bp-max(1540px){
    width: 340px;
    height: 340px;
    transform: translate(60px, -45px);
  }
  @include bp-max(1500px){
    transform: translate(10px, 0);
  }
  @include bp-max(1400px){
    width: 300px;
    height: 300px;
    transform: translate(62px, 0);
  }
  @include bp-max($mq-desktop-min){
    display: none;
  }
}

.third {
  position: absolute;
  right: 0;
  transform: translate(174px, 36px);
  @include bp-max($mq-desktop-min){
    display: none;
  }
  @include bp-max(1640px){
    width: 350px;
    height: 350px;
    transform: translate(100px, 0);
  }
  @include bp-max(1540px){
    height: 320px;
    width: 320px;
    transform: translate(80px, -45px);
  }
  @include bp-max(1500px){
    transform: translate(10px, 0);
  }
  @include bp-max(1400px){
    width: 300px;
    height: 300px;
    transform: translate(62px, 0);
  }
}

.ul{
  font-weight: 700;
  font-size: 18px;
  line-height: 217.5%;
  display: inline-block;
  align-items: center;
  @include bp-max(1300px){
    font-size: 16px;
  }
  @include bp-max($mq-tablet-medium){
    font-size: 18px;
  }
}
</style>
