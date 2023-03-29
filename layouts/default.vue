<template>
  <div
    class="page"
    :class="{
      'page-index': $route.path === '/'
    }"
  >
    <header class="page__header header">
      <div class="my-background">
        <div class="left" />
        <div class="right" />
      </div>
      <img
        src="~/assets/img/app-images/header-circle.svg"
        class="circle-header"
      >
      <div class="background">
        <div class="container">
          <div class="col justify-space">
            <div class="header__logo mobile-height">
              <a
                class="page__link"
                href="/"
              >
                <img
                  width="82"
                  height="90"
                  src="~/assets/img/logo.svg"
                  class="domoteka__logo"
                  alt="no"
                >
                <img
                  width="55"
                  height="45"
                  class="page__vector"
                  src="~/assets/img/vector.svg"
                  alt="no"
                >
              </a>
<!--              <div v-if="$route.name === 'index'" class="page__link-header">-->
              <div class="page__link-header">
                <a
                  class="page__domoteka"
                  href="/"
                >
                  <img
                    width="254"
                    height="48"
                    src="~/assets/img/domoteka.svg"
                    class="domoteka__text"
                    alt="no"
                  >
                </a>
                <span class="page__description">
                  Все услуги вашего <br class="mobile-br"> дома <br class="desktop-br"> в одном <br class="mobile-br"> приложении
                </span>
              </div>
<!--              <div v-if="$route.name !== 'index'" class="other-page-text">-->
<!--                <span class="other-page-text_header">-->
<!--                  {{ headerText }}-->
<!--                </span>-->
<!--                <div class="other-page-text_body">-->
<!--                  <nuxt-link class="other-page-text_link" to="/">-->
<!--                    Главная-->
<!--                  </nuxt-link>-->
<!--                  <img src="@/assets/img/header-vector.svg" alt="">-->
<!--                  <span>-->
<!--                    {{ headerText.split(' ')[0] }}-->
<!--                  </span>-->
<!--                </div>-->
<!--              </div>-->
              <img class="header__image" src="@/assets/img/app-images/header-picture.png">
              <img class="header__mobile-image" src="@/assets/img/app-images/mobile-header-picture.png">
            </div>
            <div class="header__logo">
              <div class="page__right-header">
                <div class="disp-flex">
                  <div class="circle" />
                  <span class="page__left-header description">Легко заказывайте услуги</span>
                </div>
                <div class="disp-flex">
                  <div class="circle" style="opacity: 0.7" />
                  <span class="page__left-header description">Подавайте показания счетчиков</span>
                </div>
                <div class="disp-flex">
                  <div class="circle" style="opacity: 0.6" />
                  <span class="page__left-header description">Оплачивайте счета</span>
                </div>
                <div class="disp-flex">
                  <div class="circle" style="opacity: 0.5" />
                  <span class="page__left-header description">Узнавайте важные события дома</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="page__content">
      <nuxt />
    </main>
    <footer class="page__footer footer">
      <div class="container">
        <div class="row universal">
          <nav class="col-12 col-md-6 my-col col-xl-6">
            <p class="about">
              О сервисе
            </p>
            <p class="about-description">
              С Домотека вы легко сможете заказать необходимые услуги, подать показания, оплатить счета и узнать про важные события своего дома.
            </p>
            <p class="about-description">
              ЖКХ - это просто вместе с Домотека!
            </p>
            <br>
            <!--<a href="/info/service" class="footer__nav-link">
              Для сервисов
            </a>-->
          </nav>
          <div itemscope itemtype="http://schema.org/Organization" class="service-operator">
            <p class="footer__text">
              Оператор сервиса:
            </p>
            <p class="about-description">
              ООО “Простые платежи”<br>
              г.Казань, ул. Пушкина 12
            </p>
            <a class="about-description">Публичная оферта</a>
            <br>
            <a class="about-description">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  get headerText () {
    switch (this.$route.name) {
      case 'new-news':
        return 'Новости сервиса'
      case 'catalog-addresses-id':
        return 'Каталог услуг'
      case 'catalog-house-id':
        return 'Каталог услуг'
      case 'news':
        return 'Новости сервиса'
      case 'index-old':
        return 'Главная'
      case 'payment':
        return 'Оплата'
    }
  }

  mounted () {
    console.log(this.$route.name)
  }
}
</script>

<style lang="scss" scoped>

.universal{
  margin: 0;
  @include bp-max($mq-tablet-small){
    flex-direction: column;
    margin: 0 15px;
  }
}

.my-col{
  @include bp-max(1300px) {
   max-width: 40%;
  }
  @include bp-max($mq-tablet-small){
    max-width: 100%;
  }
}

.col{
  padding-left: 0;
  padding-right: 0;
}
.container{
  padding-right: 0;
  padding-left: 0;
}
.row {
  justify-content: space-between;
}
.page {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  &__right-header{
    padding: 17px 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
    @include bp-max($mq-tablet-small){
      margin: 0 auto;
    }
  }

  &__vector{
    transform: translate(16px, 26px);
    @include bp-max($mq-tablet-min) {
      width: 30px;
      height: 21px;
    }
  }

  &__domoteka{
    cursor: pointer;
  }

  &__link-header{
    display: flex;
    flex-direction: column;
    padding: 24px 10px;
    @include bp-max($mq-tablet-min) {
      padding: 0 10px;
    }
  }

  &__description{
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    color: #FFFFFF;
    margin-top: 32px;
    @include bp-max(1300px){
      font-size: 30px;
    }
    @include bp-max(1300px){
      font-size: 28px;
    }
    @include bp-max(1100px){
      font-size: 26px;
    }
  }

  & p {
    margin-bottom: 0.4rem;
  }

  &__title {
    color: #1D2937;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    margin-top: 24px;

    @include bp-max($mq-tablet-min) {
      font-size: 28px;
      line-height: 32px;
      margin-top: 16px;
    }
  }

  &__link {
    margin-right: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__header {
    flex-grow: 0;
  }

  &__content {
    flex-grow: 1;
  }

  &__footer {
    flex-grow: 0;
    padding: 32px 0;
  }
}

.footer {
  background-image: url("@/assets/img/background/background-footer.svg");
  background-color: #92B84D;
  font-size: 14px;
  line-height: 20px;
  color: #4C5A6B;

  &__nav-link {
    font-weight: 300;
    color: #0047FF;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
    }
    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }

    & + & {
      margin-top: 16px;
    }
  }

  &__text {
    margin-bottom: 33px !important;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    margin-top: 10px;
    & + & {
      margin-top: 8px;
    }
  }

  &__support {
    color: #0047FF;
    margin-top: 4px;
  }
}

.about{
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;
  color: #FFFFFF;
}

.about-description {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 30px 0;
  max-width: 479px;
}

a.about-description{
  color: #D3E3B8;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: underline;
  &:hover{
    text-decoration: none;
  }
}

p.about-description:last-of-type{
  margin-bottom: 30px;
}

.header__image{
  width: 330px;
  height: 330px;
  position: absolute;
  right: 45%;
  transform: translateX(70px) translateY(20px);
  @include bp-max(1300px){
    width: 290px;
    height: 290px;
    transform: translateX(60px) translateY(30px);
  }
  @include bp-max(1100px){
    width: 260px;
    height: 260px;
    transform: translateX(60px) translateY(50px);
  }
  @include bp-max($mq-tablet-small){
    display: none;
  }
}

.header__mobile-image{
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 0;
  transform: translate(0px, 60px);
  @include bp-min($mq-tablet-small){
    display: none;
  }
}

.header__logo{
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
}
.background{
  padding-top: 32px;
  position: absolute;
  width: 100%;
  top: 0;
  height: 300px;
  background: url("assets/img/background/background-6.svg") no-repeat;
  @include bp-max($mq-tablet-small){
    background-color: #92B84D ;
    height: 215px;
    background-image: url("@/assets/img/background/mobile-background.svg") ;
  }
  @include bp-max($mq-tablet-medium) {
    padding: 0;
  }
}

.mobile-height{
  @include bp-max($mq-tablet-medium) {
    height: 215px;
  }
}

.desktop-br{
  @include bp-max($mq-tablet-min) {
    display: none;
  }
}

.mobile-br{
  @include bp-min($mq-tablet-min) {
    display: none;
  }
}
.service-operator{
  padding: 0 50px;
  max-width: 328px;
  @include bp-max($mq-tablet-small){
    padding: 0 15px;
    max-width: 100%;
  }
}

.other-page-text{
    padding-top: 60px;
    display: flex;
    flex-direction: column;
  &_header{
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #FFFFFF;
  }
  &_link{
    color: rgba(255, 255, 255, 0.6);
    &:hover{
      color: #FFFFFF;
      text-decoration: none;
    }
  }
  &_body{
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    gap: 21px;
  }
}

</style>
