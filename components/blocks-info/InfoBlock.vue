<template>
  <div class="card">
    <img
      v-if="haveDecorativeImage"
      class="card__img-points"
      src="@/assets/img/background/background-4.svg"
      alt="no"
    >
    <div class="container">
      <div class="container__info">
        <h1>{{ organizationName }}</h1>
        <header class="container__title">
          {{ title }}
        </header>
        <article>
          <section
            v-for="(description, index) in descriptions"
            :key="'descriptoin-' + index"
            class="container__description"
          >
            {{ description }}
          </section>
        </article>
        <a target="_blank" :href="linkClick" class="container__button ">
          <span class="container__button-text">
            {{ titleButton }}
          </span>
        </a>
      </div>
      <div class="container__image-wrapper">
        <img
          class="container__image"
          :src="img"
          alt="no"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ConnectBlock extends Vue {
  @Prop() title!: string
  @Prop() descriptions!: string[]
  @Prop() img!: any
  @Prop() titleButton!: string
  @Prop() linkClick!: string
  @Prop() haveDecorativeImage: boolean
  @Prop() organizationName!: string
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  padding-bottom: 0px;

  &__img-points {
    position: absolute;
    left: -100px;
  }
}

.container {
  @include flex-between-end;
  padding: 0;

  &__info {
    margin: 0px;
    @include bp-min($mq-tablet-min) {
      width: 60%;
      margin-bottom: 40px;
    }

    @include bp-max($mq-mobile-max) {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  &__content {
    display: flex;
    align-items: flex-end;
  }

  &__title {
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      width: 175%;
      font-size: 32px;
      line-height: 48px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  &__description {
    color: #000000;

    @include bp-min($mq-tablet-min) {
      margin-top: 32px;
      font-weight: 300;
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      margin-top: 24px;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__button {
    margin-top: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 60px;

    background: #92B84D;
    border-radius: 16px;
    border-style: none;

    width: 100%;
    color: white;
  }

  &__button-text {
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;

    color: #FFFFFF;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 10px;
  }

  &__image-wrapper {
    text-align: center;
    position: relative;

    @include bp-min($mq-tablet-min) {
      width: 35%;
      height: 100%;
    }

    @include bp-max($mq-mobile-max) {
      width: 100%;
      height: 40vh;
    }
  }

  &__image {
    height: 100%;

    @include bp-min($mq-tablet-min) {
      max-height: 440px;
      height: 10%;
    }
  }
}

h1 {
  font-size: 35px;
  font-weight: 700;
  line-height: 43.33px;
  color: #292929;
}
</style>
