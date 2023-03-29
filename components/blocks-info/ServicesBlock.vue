<template>
  <div class="service__wrap">
    <div
      v-for="(service, index) in services"
      :key="'service-' + index"
      class="service"
    >
      <img
        class="service__image"
        :src="service.img"
        alt="no"
      >
      <div class="service__text">
        {{ service.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ServicesBlock extends Vue {
  @Prop({
    default: []
  }) services!: any[]
}

</script>

<style scoped lang="scss">
.service {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  @include bp-min($mq-mobile-small) {
    & {
      width: 80%;
    }
  }

  @include bp-min($mq-mobile-medium) {
    & {
      width: 48%
    }
  }

  @include bp-min($mq-tablet-small) {
    & {
      width: 30%
    }
  }

  &__wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @include bp-min($mq-tablet-min) {
      margin: 40px 0px 40px;
    }

    @include bp-max($mq-mobile-max) {
      margin: 32px 0 32px;
      padding: 0px 16px 0px;
    }
  }

  &__image {
    width: 80px;
    height: 80px;

    margin: 16px 0px;
  }

  &__text {
    color: #1D2937;
    font-weight: 500;

    @include bp-min($mq-tablet-min) {
      font-size: 24px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 20px;
      line-height: 24px;
    }

  }
}
</style>
