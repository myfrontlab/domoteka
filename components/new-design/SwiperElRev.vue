<template>
  <div class="container">
    <client-only>
      <Carousel
        :navigation-enabled="true"
        :is-navigation-required="true"
        :controls-visible="true"
        class="carousel-feedback"
        :navigation-prev-label="buttonPrev"
        :navigation-next-label="buttonNext"
        pagination-active-color="#B8B8B8"
        pagination-color="#D9D9D9"
      >
        <Slide v-for="(review, i) in reviews" :key="i + Date.now()">
          <div class="slide review">
            <div class="review__header">
              <div class="review__header__company">
                {{ review.company }}
              </div>
              <div class="review__header__name">
                {{ review.name }}
              </div>
            </div>
            <div class="review__data">
              <div class="info-user" />
              <div class="review__description">
                {{ cutText(review.description) }}
              </div>
              <div class="review__open-full" @click="handleClick(review)">
                Читать полностью
                <svg width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L2.75012 3.81235C2.89621 3.62974 2.89621 3.37026 2.75012 3.18765L1 1" stroke="#92B84D" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </client-only>
  </div>
</template>

<script lang="ts">

import { Component, Prop } from 'nuxt-property-decorator'
import Vue from 'vue'
import ReviewPopup from '~/components/new-design/popups/ReviewPopup.vue'

@Component({
  components: { ReviewPopup }
})
export default class SwiperElRev extends Vue {
  @Prop() reviews
      buttonPrev = '<img src="/images/icons/vector-prev.svg" alt="no" />'
      buttonNext = '<img src="/images/icons/vector-next.svg" alt="no" />'

  maxTextLength = 150
  cutText (text) {
    text = text.trim()
    if (text.length <= this.maxTextLength) {
      return text
    }
    text = text.slice(0, this.maxTextLength)
    const lastSpace = text.lastIndexOf(' ')
    if (lastSpace > 0) {
      text = text.substr(0, lastSpace)
    }
    return text + '...'
  }

  handleClick (review) {
    this.$emit('open-full', review)
  }
}
</script>

<style lang="scss" scoped>
.review {
  margin: 0 20px;
  padding: 53px 54px 55px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 33px;
  @include bp-max($mq-tablet-min) {
    flex-direction: column;
    width: 90vw;
    padding: 0 24px;
    margin-top: 24px;
  }

  &__open-full{
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #92B84D;
    margin-top: 4px;
    &:hover{
      text-decoration: none;
    }
    svg{
      margin-left: 3px;
    }
  }

  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    &__company {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #1D2937;
      @include bp-max($mq-tablet-min) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__name {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #92B84D;
    }
  }

  &__img {
    object-fit: cover;
    height: 66px;
    width: 66px;
    border-radius: 45px;
    margin-right: 5px;
  }

  &__data {
    display: flex;
    flex-direction: column;
    @include bp-max($mq-tablet-min) {
      margin-top: 16px;
    }

    .info-user {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      &__fio {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #383C42;
        @include bp-max($mq-tablet-min) {
          line-height: 24px;
        }
      }
    }
  }

  &__description {
    margin-top: 29px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #676767;
    margin-bottom: 27px;
    @include bp-min($mq-tablet-min) {
      word-wrap: break-word;
    }
    @include bp-max($mq-tablet-min) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

.carousel-feedback {
  &.VueCarousel-pagination{
    margin-top: 28px;
  }
  &.VueCarousel-dot--active{
    scale: 200%;
    color: red;
  }
}

</style>
