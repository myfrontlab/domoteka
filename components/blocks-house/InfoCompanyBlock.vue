<template>
  <article class="card company">
    <img
      class="card__img-points"
      src="@/assets/img/background/background-4.svg"
      alt="no"
    >
    <div class="company__wrapper">
      <header>
        <h3 class="company__title">
          Хранитель вашего дома
        </h3>
      </header>
      <section class="company__description">
        <h2>
          Бесплатная платформа для связи с управляющей компанией, соседями и сервисами
        </h2>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'

@Component
export default class InfoCompanyBlock extends Vue {
}
</script>

<style lang="scss" scoped>

.card {
  position: relative;
  margin-bottom: 40px;

  &__img-points {
    position: absolute;
    left: -100px;
  }
}

.company {
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

  &__description {
    font-weight: 300;

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
  }
}

</style>
