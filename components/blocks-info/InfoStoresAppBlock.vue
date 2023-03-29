<template>
  <div class="card stores">
    <img
      v-if="$route.path !== '/news'"
      class="card__img-points"
      src="@/assets/img/background/background-4.svg"
      alt="no"
    >
    <div class="stores__wrapper">
      <div>
        <div class="stores__title">
          Хранитель вашего дома
        </div>
        <div class="stores__description">
          Бесплатная платформа для связи с управляющей компанией, соседями и сервисами
        </div>
        <div class="stores__images">
          <a
            href="https://domoteka.app.link/nujOVvVzupb"
            target="_blank"
          >
            <img
              class="stores__image"
              src="@/assets/img/app-store.png"
              alt="no"
            >
          </a>
          <a
            href="https://domoteka.app.link/nujOVvVzupb"
            target="_blank"
          >
            <img
              class="stores__image"
              src="@/assets/img/google-play.png"
              alt="no"
            >
          </a>
        </div>
      </div>
      <div>
        <img
          class="stores__qr-code-image"
          src="@/assets/img/qr-code-store.png"
          alt="no"
        >
      </div>
    </div>

    <div class="stores__separator" />

    <search-addresses
      placeholder="Aдрес, начиная с города"
      @select-address="openHouse"
    />
    <a
      v-if="isSearchByCatalog"
      href="/catalog/addresses"
      class="stores__link"
    >
      Поиск по каталогу
    </a>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop
} from 'nuxt-property-decorator'
import SearchAddresses from '@/components/address/SearchAddresses.vue'

@Component({
  components: {
    SearchAddresses
  }
})
export default class InfoStoresAppBlock extends Vue {
  @Prop({
    type: Boolean,
    default: true
  }) isSearchByCatalog!: boolean

  openHouse (address: any) {
    window.open(`/catalog/house?fias_guid=${address.fiasHouse}`, '_self')
  }
}
</script>

<style lang="scss" scoped>

.card {
  position: relative;
  margin-bottom: 40px;

  &__img-points {
    position: absolute;
    left: -100px;
    top: 0px;
    bottom: 0px;
  }
}

.stores {
  &__title {
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 24px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__qr-code-image {
    @include bp-min($mq-tablet-min) {
      width: 156px;
      height: 158px;
    }

    @include bp-max($mq-mobile-max) {
      display: none;
    }
  }

  &__image {
    width: 162px;
    height: 54px;
  }

  &__images {
    margin-top: 33.18px;
  }

  &__description {
    font-weight: 300;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
      margin-top: 8px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
      margin-top: 16px;
      margin-right: 16px;
    }
  }

  &__form {
    @include bp-min($mq-tablet-min) {
      margin-top: 40px;
    }

    @include bp-max($mq-mobile-max) {
      margin-top: 24px;
    }
  }

  &__link {
    display: block;
    margin-top: 16px;
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
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__separator {
    width: 100%;
    height: 2px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 32px 0 32px;
    background: linear-gradient(51.03deg, rgba(255, 127, 255, 0) -10.35%, rgba(245, 137, 255, 0.0566) -4.95%, rgba(192, 187, 255, 0.3722) 25.15%, rgba(153, 224, 255, 0.6459) 51.26%, rgba(130, 247, 255, 0.8643) 72.08%, #79FFFF 85.02%);
  }
}

.form {
  &__title {
    font-weight: 500;
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 24px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__group {
    margin-top: 16px;
  }
}
</style>
