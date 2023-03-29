<template>
  <div class="card-info__wrapper">
    <a
      v-for="(info, index) in cardsInfo"
      :key="'function-' + index"
      :class="'card-info '"
      :href="info.link"
    >
      <div class="card-info__text">
        {{ info.title }}
      </div>
      <div class="card-info__image-wrapper">
        <img
          class="card-info__image"
          :src="info.image"
          alt="no"
        >
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class InfoFunctionsBlock extends Vue {
  cardsInfo = [
    {
      title: 'Просмотр начислений за ЖКУ',
      image: require('@/assets/img/lamp.png'),
      link: undefined
    }, {
      title: 'Оплата ЖКУ',
      image: require('@/assets/img/card.png'),
      link: 'payment'
    }, {
      title: 'Подать показания счетчиков',
      image: require('@/assets/img/calculator.png'),
      link: undefined
    }, {
      title: 'Информация о моей УК',
      image: require('@/assets/img/thumb-up.png'),
      link: undefined
    }
  ]
}

</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.cursor-pointer {
  cursor: pointer;
}

.card-info {
  background: $color-card-info;
  border-radius: $card-info-border-radious;
  box-shadow: $card-info-shadow;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 144px;

  @media (min-width: 576px) {
    & {
      width: 49%;
    }
  }

  &__wrapper {
    @media (min-width: 576px) {
      & {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }

  &__text {
    width: 80%;
    color: white;
    margin: 20px;

    @include bp-min($mq-tablet-min) {
      font-size: 28px;
      line-height: 40px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  &__image-wrapper {
    text-align: center;
  }

  &__image {
    width: 125px;
    height: 125px;
    vertical-align: middle;
  }
}

</style>
