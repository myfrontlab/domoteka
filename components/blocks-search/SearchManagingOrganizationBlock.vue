<template>
  <div class="card container">
    <div class="container__title">
      Свяжитесь с вашей управляющей компанией
    </div>
    <div class="container__wrap-search-addresses">
      <search-managing-organization
        title="Введите часть названия вашей УК"
        placeholder="Начните вводить название"
      />
    </div>
    <a
      href="/catalog/addresses"
      class="container__link"
    >
      Найти УК в каталоге
    </a>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'
import SearchManagingOrganization from '@/components/managing-organization/SearchManagingOrganization.vue'

@Component({
  components: {
    SearchManagingOrganization
  }
})
export default class SearchBlock extends Vue {}
</script>

<style lang="scss" scoped>

.card {
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
}

.container {
  &__title {
    color: #1D2937;
    font-weight: bolder;

    @include bp-min($mq-tablet-min) {
      font-size: 24px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__wrap-search-addresses {
    margin-top: 16px;
  }

  &__title-search {
    margin-top: 24px;
    font-weight: 300;
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__description {
    margin-top: 8px;
    font-weight: 300;
    color: #1D2937;

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
