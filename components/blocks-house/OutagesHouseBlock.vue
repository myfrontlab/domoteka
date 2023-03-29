<template>
  <div class="list">
    <div class="block__title">
      Плановые работы
    </div>
    <div v-if="outages.length > 0">
      <div
        v-for="(item, index) in outagesShow"
        :key="'outage-' + index"
        class="news"
      >
        <div class="news__text">
          {{ item.name }}
        </div>
        <div class="news__date">
          C {{ $formatters.formatDate(item.startDate || item.start_date) }} по {{ $formatters.formatDate(item.endDate || item.end_date) }}
        </div>
      </div>
      <button
        v-if="outages.length > 3"
        class="news__button"
        @click="isOpen = !isOpen"
      >
        {{ isOpen ? 'Скрыть' : 'Показать еще' }}
      </button>
    </div>
    <div
      v-else
      class="news__date"
    >
      Нет запланированных отключений услуг.
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class NewsHouseBlock extends Vue {
  @Prop({
    default: []
  }) outages!: any[]

  isOpen: boolean = false

  get outagesShow () {
    if (this.isOpen) {
      return this.outages
    } else {
      return this.outages.slice(0, 3)
    }
  }
}
</script>

<style scoped lang="scss">
.block {
  margin-bottom: 32px;
  width: 100%;
}
.news {
  margin-top: 16px;
  margin-bottom: 16px;

  &__text {
    //font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;

    color: #000000;
    margin: 4px 0;
  }

  &__date {
    //font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #4C5A6B;
    margin: 4px 0;
  }

  &__button {
    //font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    background: none;
    border: none;

    color: #0047FF;
  }
}
</style>
