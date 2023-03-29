<template>
  <div>
    <div class="card container card_opportunities">
      <div class="card__opportunities">
        <div class="card-header text-center py-4">
          В приложении удобнее!
        </div>
        <client-only>
          <swiper-el />
        </client-only>
      </div>
      <div class="card__app">
        <div class="card__app-title">
          Для установки приложения наведите камеру вашего телефона на QR код
        </div>
        <div class="image-wrap">
          <img
            class="qr-code-image"
            width="163"
            height="163"
            src="@/assets/img/qr-code-store.png"
            alt="no"
          >
        </div>
      </div>
      <div class="card__stores">
        <div>
          <a href="https://play.google.com/store/apps/details?id=online.domoteka.app.pro&hl=ru&gl=US" target="_blank">
            <img
              src="@/assets/img/stores/play-market.png"
              width="189"
              height="73"
            >
          </a>
        </div>
        <div>
          <a
            href="https://apps.apple.com/ru/app/%D0%B4%D0%BE%D0%BC%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8-%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE-%D0%B4%D0%BE%D0%BC%D0%B0/id6443410990"
            target="_blank"
          >
            <img src="@/assets/img/stores/app-store.svg">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'
import SwiperEl from '~/components/new-design/SwiperEl.vue'

@Component({
  components: {
    SwiperEl
  }
})
export default class ConnectBlock extends Vue {
}
</script>

<style scoped lang="scss">
.card {
  border-radius: 32px;
  padding: 32px;
  @media (max-width: 767.98px) {
    padding: 24px;
    border-radius: 0;
  }

  // & + & {
  //   margin-top: 32px;
  // }
  &_mission {
    background: rgba(14, 202, 179, 1);
  }

  &_opportunities {
    padding: 0px;
  }

  &__opportunities {
    border-radius: 32px 32px 0px 0px;
    padding: 20px;
    @include bp-max($mq-tablet-min) {
      padding: 24px 0 0;
      border-radius: 32px;
    }
  }

  &__app {
    border-radius: 0px 0px 32px 32px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 8px;
    background: white;
    padding: 20px;
    @include bp-max($mq-tablet-min) {
      display: none;
    }

    .image-wrap {
      display: flex;
      justify-content: center;
    }

    .qr-code-image {
      margin-top: 9px;
      width: 153px;
      height: 153px;
      border-radius: 12px;
    }
  }

  &__app-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #89BB38;
    padding: 10px;

  }

  &__stores{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 33px;
    @include bp-min($mq-tablet-min) {
      display: none;
    }
  }

  // &__wrap-images {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   margin-top: 112px;
  //   flex-wrap: wrap;
  // }

  // &__wrap-images-store {

  //   width: 170px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: left;
  // }

  &__img-points {
    position: absolute;
    left: -100px;
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #292929;

    @include bp-max($mq-tablet-min) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__possibility-title {
    margin-top: 32px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;

    color: #FFFFFF;
  }

  &__description {
    margin-top: 12px;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;

    & + & {
      margin: 0px;
    }

    @include bp-max($mq-tablet-min) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__possibility {
    margin-top: 12px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;

    color: #FFFFFF;

    & + & {
      margin-top: 0px;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
</style>
