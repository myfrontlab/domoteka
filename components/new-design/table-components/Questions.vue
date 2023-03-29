<template>
  <div class="questions">
    <div class="block-title text-left">
      Вопросы ответы
    </div>
    <div class="questions_main my-mt">
      <faq-menu
        :faqs="data"
        @open="toggleOpen"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FaqMenu from '~/components/new-design/Faq/FaqMenu.vue'

@Component({
  components: { FaqMenu }
})
export default class extends Vue {
  data: any = [
    {
      question: 'Какая польза от приложения?',
      open: false,
      description: '“Домотека” объединяет в себе все нужные жителю функции, а именно : подача показаний\n' +
        'счетчиков и оплата коммунальных услуг, доступ к пропускной системе и видеонаблюдению, коммуникация\n' +
        'с УК по части ЖКХ, соседями и локальным бизнесом, уведомления об аварийных отключениях, объявления\n' +
        'и голосования. Мы всегда открыты к нововведениям, поэтому оперативно внедряем недостающий\n' +
        'фунционал.'
    },
    {
      question: 'Как подключить дом к приложению? Что для этого нужно?',
      open: false,
      description: 'Мы постепенно подключаем все большее количество управляющих компаний, и Вы можете нам в\n' +
        'этом помочь. Оставьте свои контакты прямо на сайте и наш специалист свяжется с Вами для уточнения\n' +
        'деталей.'
    },
    {
      question: 'Сколько стоит подписка на “Домотека”?',
      open: false,
      description: 'Приложение распространяется абсолютно бесплатно и не подразумевает абонентскую плату за\n' +
        'использование.'
    },
    {
      question: 'Подходит ли решение, если у нас ТСЖ, а не УК?',
      open: false,
      description: 'Подходит. В случае с ТСЖ подключение происходит еще быстрее, поскольку принять решение о\n' +
        'сотрудничестве в пределах одного многоквартирного дома еще проще.'
    }
  ]

  toggleOpen (index) {
    this.data = this.data.map((faq, i) => {
      if (index === i) {
        faq.open = !faq.open
      } else {
        faq.open = false
      }
      return faq
    })
  }
}
</script>

<style lang="scss" scoped>
.my-mt{
  margin-top: 39px;
}
.questions{
  display: flex;
  flex-direction: column;
  @include bp-max($mq-tablet-small) {
    max-width: 90%;
    margin: 0 auto;
  }
}
</style>
