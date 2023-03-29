<template>
  <div class="card">
    <div class="card__images">
      <!--      <img class="card__qr-code-image" src="@/assets/img/qr-code-store.png" alt="qr">-->
      <img
        class="card__domoteka-image"
        src="@/assets/img/domoteka.png"
        alt="no"
      >
      <img
        class="card__notify-heart-image"
        src="@/assets/img/notify-heart-front-color.png"
        alt="no"
      >
    </div>
    <div class="card__text">
      Установите мобильное приложение вашего дома, возможности:
    </div>
    <div
      v-for="(item, index) in listFunctions"
      :key="'function-app-' + index"
      class="card__text"
    >
      — {{ item }}
    </div>
    <div class="card__images-stores">
      <a
        href="https://domoteka.app.link/nujOVvVzupb"
        target="_blank"
      >
        <img
          class="card__store-image"
          src="@/assets/img/app-store.png"
          alt="no"
        >
      </a>
      <a
        href="https://domoteka.app.link/nujOVvVzupb"
        target="_blank"
      >
        <img
          class="card__store-image"
          src="@/assets/img/google-play.png"
          alt="no"
        >
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class MobileAppInfoBlock extends Vue {
  @Prop({
    default: []
  }) shortName!: any

  listFunctions: string[] = [
    'Переписывайтесь в чате дома;',
    'Получайте сведения о начислениях;',
    'Мгновенно оплачивайте жилищные услуги;',
    'Подавайте показания приборов;',
    'Отправляйте заявки в управляющую компанию "' + this.shortName + '" и многое другое.'
  ]
}
</script>

<style scoped lang="scss">
.card {
  z-index: 1000;
  margin-right: 0;
  background: #FFFFFF;
  box-shadow: 0 16px 32px #E3E7F1;
  border-radius: 32px;
  margin-bottom: 32px;

  @include bp-min(1200px) {
    position: absolute;
    right: 0;
    top: 0;
  }
  @include bp-min($mq-tablet-min) {
    width: 480px;
  }

  &__images {
    display: flex;
    //align-items: end;
  }

  &__images-stores {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  &__qr-code-image {
    width: 158px;
    height: 159px;
    @include bp-max($mq-mobile-max) {
      display: none;
    }
  }

  &__domoteka-image {
    width: 159px;
    height: 50px;
    margin-left: 35px;
    @include bp-max($mq-mobile-max) {
      display: none;
    }
  }

  &__store-image {
    width: 178px;
    height: 56px;
  }

  &__notify-heart-image {
    width: 100px;
    height: 100px;
    @include bp-max($mq-mobile-max) {
      display: none;
    }
  }

  &__text {
    font-weight: 300;
    color: #000000;

    @include bp-min($mq-tablet-min) {
      margin-top: 24px;
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
