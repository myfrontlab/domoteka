<template>
  <div class="card search">
    <div class="search__title">
      Хранитель вашего дома
    </div>
    <div class="search__description">
      Бесплатная платформа для связи с управляющей компанией, соседями и сервисами
    </div>
    <search-addresses
      placeholder="Aдрес, начиная с города"
      @select-address="openHouse"
    />
    <a
      href="/catalog/addresses"
      class="search__link"
    >
      Поиск по каталогу
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SearchAddresses from '@/components/address/SearchAddresses.vue'

@Component({
  components: {
    SearchAddresses
  }
})
export default class SearchBlock extends Vue {
  openHouse (address: any) {
    window.open(`/catalog/house?fias_guid=${address.fiasHouse}`, '_self')
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 28px
}

.search {
  &__title {
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 48px;
      line-height: 64px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 27px;
      line-height: 40px;
    }
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
