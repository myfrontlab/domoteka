<template>
  <popup @close="$emit('close')">
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
          {{ review.description }}
        </div>
      </div>
    </div>
  </popup>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Popup from '~/components/UI/Popup.vue'
import BaseButton from '~/components/UI/BaseButton.vue'

@Component({
  components: { BaseButton, Popup }

})
export default class ClaimThanksPopup extends Vue {
  @Prop() review
}
</script>

<style lang="scss" scoped>
.review {
  max-width: 580px;
  margin: 0 20px;
  //padding: 22px 54px 20px;
  //padding: 50px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  //box-shadow: 0 4px 13px rgba(0, 0, 0, 0.08);
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
    @include bp-min($mq-tablet-min) {
      word-wrap: break-word;
    }
    @include bp-max($mq-tablet-min) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
