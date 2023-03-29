<template>
  <div class="tab">
    <div class="tab_item">
      <div class="tab__tittle">
        Ищете больше
        заказов?
      </div>
      <div class="tab__vertical-divider" />
      <div class="tab__right">
        <div class="tab_description">
          <div>Получите <span class="tab_description__green">бесплатную площадку</span> с постоянными заказами</div>
          <div>Гарантия <span class="tab_description__green">минимальной оплаты</span></div>
          <div><span class="tab_description__green">Регулярные выплаты </span> на карту или расчетный счет</div>
        </div>
      </div>
      <img
        width="377"
        height="377"
        src="@/assets/img/domoteka-for-images/profi-1.png"
        class="tab__img first"
      >
    </div>
    <div class="tab__horizontal-divider" />
    <div class="tab_item">
      <div class="tab__tittle">
        Как
        это работает?
      </div>
      <div class="tab__vertical-divider" />
      <div class="tab__right">
        <div>
          <p class="tab_description direction-row">
            <span class="tab_description__circle">1</span>
            Вы размещаете свои услуги в нашем приложении
          </p>
        </div>
        <div>
          <p class="tab_description direction-row">
            <span class="tab_description__circle">2</span>
            Жильцы заказывают ваши услуги
          </p>
        </div>
        <div>
          <p class="tab_description direction-row">
            <span class="tab_description__circle">3</span>
            Вы оказываете услуги жильцу
          </p>
        </div>
        <div>
          <p class="tab_description direction-row">
            <span class="tab_description__circle">4</span>
            Совместно получаем прибыль
          </p>
        </div>
      </div>
      <img
        width="397"
        height="397"
        src="@/assets/img/domoteka-for-images/profi-2.png"
        class="tab__img second"
      >
    </div>
    <div class="tab__horizontal-divider" />
    <div class="tab_item">
      <div class="tab__tittle">
        Почему
        это выгодно?
      </div>
      <div class="tab__vertical-divider" />
      <div class="tab__right">
        <div>
          <p class="tab_description direction-row">
            <span class="tab_description__circle">1</span>
            На нашей площадке вы можете размещать
            свои услуги бесплатно всегда
          </p>
        </div>
        <div>
          <p class="tab_description direction-row">
            <span class="tab_description__circle">2</span>
            Мы не берём никакой абонентской платы с Профи
          </p>
        </div>
        <div>
          <p class="tab_description direction-row">
            <span class="tab_description__circle">3</span>
            Мы не берем процент от стоимости услуги,
            а добавляем наценку самостоятельно
          </p>
        </div>
      </div>
      <img
        width="436"
        height="436"
        src="@/assets/img/domoteka-for-images/profi-3.png"
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
.tab{
  transform: translate(0, -33px);
  background: #FFFFFF;
  box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.08);
  border-radius: 33px;
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
    position: relative;
    grid-auto-flow: column;
    grid-template-columns: 448px 2px 52% 10%;
    padding: 30px 10px;
    height: 347px;
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
    font-weight: 700;
    font-size: 18px;
    line-height: 217.5%;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    &__circle{
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #FFFFFF;
      background: #92B84D;
      border-radius: 21px;
      width: 42px;
      height: 42px;
      max-width: 42px;
      min-width: 42px;
      max-height: 42px;

      @include bp-max($mq-tablet-medium) {
        font-size: 20px;
      }
    }
  }

  &__tittle{
    font-style: normal;
    height: auto;
    font-weight: 700;
    font-size: 30px;
    padding: 0 90px;
    line-height: 130.3%;
    display: flex;
    align-items: center;
    text-align: left;
    color: #292929;
    @include bp-max(1500px){
      font-size: 24px;
    }
  }

  &__right{
    display: flex;
    max-height: 290px;
    flex-direction: column;
    justify-content: center;
  }

  &__img {
    transform: translate(-70px,0);
  }

  &__vertical-divider{
    border: 1px dashed #92B84D;
    width: 2px;
    @include bp-max(868px){
      border-top: 1px dashed #92B84D;
      width: auto;
    }
  }

  &__horizontal-divider{
    border: 1px solid #92B84D
  }
}

.direction-row{
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.first{
  position: absolute;
  right: 0;
  transform: translate(125px, -50px);
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
    transform: translate(90px, 0);
  }
  @include bp-max($mq-desktop-min){
    display: none;
  }
}

.second{
  position: absolute;
  right: 0;
  transform: translate(120px, -50px);
  @include bp-max(1640px){
    width: 370px;
    height: 370px;
    transform: translate(80px, -45px);
  }
  @include bp-max(1540px){
    transform: translate(80px, -45px);
  }
  @include bp-max(1500px){
    transform: translate(10px, 0);
  }
  @include bp-max(1400px){
    width: 300px;
    height: 300px;
    transform: translate(40px, 40px);
  }
  @include bp-max($mq-desktop-min){
    display: none;
  }
}

.third{
  position: absolute;
  right: 0;
  transform: translate(140px, 0px);
  @include bp-max($mq-desktop-min){
    display: none;
  }
  @include bp-max(1640px){
    width: 380px;
    height: 380px;
    transform: translate(120px, 40px);
  }
  @include bp-max(1540px){
    transform: translate(120px, 40px);
  }
  @include bp-max(1500px){
    transform: translate(10px, 0);
  }
  @include bp-max(1400px){
    width: 300px;
    height: 300px;
    transform: translate(40px, 30px);
  }
}
</style>
