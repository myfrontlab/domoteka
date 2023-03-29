<template>
  <div
    class="reviews__wrap"
  >
    <review-popup v-if="showPopup" :review="review" @close="showPopup = false" />
    <div class="reviews__wrap_background" />
    <div class="reviews">
      <div class="block-title">
        Отзывы о Домотеке
      </div>
      <div class=" desktop-content">
        <div class="reviews__content">
          <swiper-el-rev :reviews="reviews" @open-full="handleOpen" />
        </div>
      </div>
      <div class="mobile-content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SwiperElRev from '~/components/new-design/SwiperElRev.vue'
import ReviewPopup from '~/components/new-design/popups/ReviewPopup.vue'

@Component({
  components: {
    ReviewPopup,
    SwiperElRev
  }
})
export default class ServicesBlock extends Vue {
  review: any = {
    url_webp: '',
    url: require('@/assets/img/reviews/user-img.svg'),
    company: '',
    name: '',
    description: ''
  }

  showPopup: boolean = false
  reviews = [
    {
      url_webp: require('@/assets/img/reviews/user-img.webp'),
      url: require('@/assets/img/reviews/user-img.svg'),
      company: 'УК “Домовенок” ',
      name: 'г.Москва',
      description: ' Подключили личный кабинет в течение дня. Нагрузка на управляющую компанию заметно уменьшилась. Жителям тоже нравится.'
    }, {
      url_webp: require('@/assets/img/reviews/user-img.webp'),
      url: require('@/assets/img/reviews/user-img.webp'),
      company: 'ТСЖ Богородское',
      name: 'г. Уфа',
      description: ' “Домотека” позволила наконец сконцентрироваться на управлении домом вместо регулярных ответов на множество вопросов. Приложение работает. '
    }, {
      url_webp: require('@/assets/img/reviews/user-img.webp'),
      url: require('@/assets/img/reviews/user-img.webp'),
      company: 'УК “Слобода”',
      name: 'г. Казань',
      description: 'Пользуемся приложением 4 месяца. Все достаточно понятно, удобно размещать и объявления, и информацию. Выгружаем показания счетчиков, техническая поддержка всегда на связи, просьбы и рекомендации своевременно учитываются. Рекомендуем!'
    }, {
      url_webp: require('@/assets/img/reviews/user-img.webp'),
      url: require('@/assets/img/reviews/user-img.webp'),
      company: 'УК “СпецСтройМонтаж”',
      name: 'г. Армавир',
      description: 'Увидели приложение у жителей соседнего дома, обсудили и предложили нам подключиться к личному кабинету “Домотеки”. Спустя три месяца использования критических нареканий нет, все в одном месте это, действительно, удобно.'
    }
  ]

  handleOpen (item) {
    console.log(item)
    this.review = item
    this.showPopup = true
  }
}
</script>

<style scoped lang="scss">

.reviews {
  &__wrap {
    position: relative;
    margin-top: 37px;
    padding: 32px 0;
  }
  &__content {
    margin-top: 66px;
    display: flex;
    gap: 20px;
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
}
.more{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #92B84D;
  cursor: pointer;
}
</style>
