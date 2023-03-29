<template>
  <div
    v-if="reviews.length"
    class="reviews__wrap"
  >
    <div class="reviews__wrap_background" />
    <div class="reviews">
      <div class="reviews__title">
        Отзывы о Домотеке
      </div>
      <div class=" desktop-content">
        <div class="reviews__content">
          <div
            v-for="(review, index) in reviews"
            :key="'review-' + index"
            class="review"
          >
            <picture>
              <source :srcset="review.url_webp" type="image/webp">
              <img
                :src="review.url"
                class="review__img"
                loading="lazy"
                width="80"
                height="80"
              >
            </picture>
            <div class="review__data">
              <div class="info-user">
                <div class="info-user__company">
                  {{ review.company }}
                </div>
                <div class="info-user__name">
                  {{ review.name }}
                </div>
              </div>
              <div class="review__description">
                {{ review.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-content">
        <agile>
          <div
            v-for="(review, index) in reviews"
            :key="'review-' + index"
            class="slide review"
          >
            <img
              :src="review.url"
              class="review__img"
              loading="lazy"
              width="80"
              height="80"
            >
            <div class="review__data">
              <div class="info-user">
                <div class="info-user__company">
                  {{ review.company }}
                </div>
                <div class="info-user__name">
                  {{ review.name }}
                </div>
              </div>
              <div class="review__description">
                {{ review.description }}
              </div>
            </div>
          </div>
        </agile>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { VueAgile } from 'vue-agile'

@Component({
  components: {
    // VueAgile
  }
})
export default class ServicesBlock extends Vue {
  reviews = [
    {
      url_webp: require('@/assets/img/reviews/ufa.webp'),
      url: require('@/assets/img/reviews/ufa.jpg'),
      company: 'ООО УК "Александровский пассаж"',
      name: 'г. Уфа',
      description: 'Подключились к системе за несколько минут, регистрация в системе очень простая! В этот же день оповестили всех жителей о новой системе и уже начали рассылать уведомления и принимать платежи. Очень понравилось удобство и простота при переносе данных из системы 1С, все лицевые счета перенеслись моментально. \n' +
        'Отдельное спасибо за чаты домов, теперь общение с жителями стало максимально простым.'
    }, {
      url_webp: require('@/assets/img/reviews/ivanovo.webp'),
      url: require('@/assets/img/reviews/ivanovo.webp'),
      company: 'ТСЖ "Калинино"',
      name: 'г. Иваново',
      description: 'Отличная система, которой очень не хватало. Да еще и бесплатно! \n' +
        'До этого мы вели все дела только в бумажном виде и вы не представляете какое облегчение, когда половину этих дел теперь выполняет компьютер!\n' +
        'Теперь принимать заявки и отправлять сотрудников для выполнения работ можно в несколько кликов, да еще и оплату люди производят прямо в приложении, что невероятно удобно и избавляет нас от волокиты с самостоятельным приёмом оплаты'
    }
  ]
}
</script>

<style scoped lang="scss">

.reviews {
  &__wrap {
    z-index: 2;
    position: relative;
    padding: 32px 0;
    &_background {
    }
  }
  &__title {
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: #1D2937;
    @include bp-max($mq-tablet-min) {
      font-size: 28px;
      line-height: 32px;
      margin-left: 24px;
    }
  }
  &__content {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @include bp-max($mq-tablet-min) {
      padding-right: 24px;
      flex-wrap: nowrap;
      flex-direction: row;
      overflow-x: auto;
      margin-top: 24px;
    }
  }
  .review {
    flex-shrink: 0;
    display: flex;
    @include bp-min($mq-tablet-min) {
      width: 50%;
      padding: 0 20px 20px 0;
    }
    @include bp-max($mq-tablet-min) {
      flex-direction: column;
      width: 90vw;
      padding: 0 24px;
      margin-top: 24px;
    }
    &__img {
      object-fit: cover;
      height: 80px;
      width: 80px;
      border-radius: 45px;
    }
    &__data {
      @include bp-min($mq-tablet-min) {
        margin-left: 24px;
      }
      @include bp-max($mq-tablet-min) {
        margin-top: 16px;
      }
      .info-user {
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
      margin-top: 16px;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #383C42;
      @include bp-min($mq-tablet-min) {
        word-wrap: break-word;
      }
      @include bp-max($mq-tablet-min) {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
</style>
