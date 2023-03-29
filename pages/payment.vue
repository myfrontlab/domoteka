<template>
  <div class="container">
    <div class="card payment">
      <div class="payment__title">
        Оплата ЖКУ
      </div>
      <div class="payment__price-title add-margin-top">
        Сумма к оплате
      </div>
      <div class="payment__number">
        {{ $route.query.sum }} руб.
      </div>
      <!-- <div class="payment__text add-margin-top">
        Коммиссия за информационно-телекомунникационное взаимодействие:
      </div>
      <div class="payment__number">
        18 руб.
      </div> -->
      <div class="payment__text add-margin-top">
        Назначение платежа: оплата жилищно-коммунальных услуг по лицевому счету {{ $route.query.personal_account }}.
      </div>
      <iframe
        class="payment__iframe add-margin-top"
        :src="link"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  link = this.$route.query.link_to_pay
  mounted () {
    console.log(this.link)
  }
}

</script>

<style scoped lang="scss">

.container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.add-margin-top {
  margin-top: 15px;
}

.payment {
  @include bp-min($mq-tablet-min) {
    margin: 0px auto 40px;
  }

  @include bp-max($mq-mobile-max) {
    padding: 10px;
    margin: 0px auto 32px;
  }

  &__title {
    font-weight: lighter;
    font-size: 32px;
    line-height: 48px;
    text-align: center;

    color: #1D2937;
    @include bp-min($mq-tablet-min) {
      font-size: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 24px;
    }
  }

  &__price-title {
    width: 300px;
    height: 32px;

    /* desktop/p */
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */

    color: #1D2937;
  }

  &__number {
    width: 300px;
    height: 32px;

    font-weight: 900;
    font-size: 24px;
    line-height: 32px;

    color: #000000;
  }

  &__text {
    width: 500px;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #1D2937;
  }

  &__iframe {
    width: 500px;
    height: 271px;
    left: 0px;
    top: 0px;

    background: #E9E9E9;
    border-radius: 16px;
    border-width: 0px;
  }
}

</style>
