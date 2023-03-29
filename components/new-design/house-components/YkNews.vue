<template>
  <div class="yk-news">
    <yk-news-popup v-if="showPopup" :popup-item="popupItem" @close="showPopup = false" />
    <h2>Новости управляющей компании</h2>
    <div v-for="(news, i) in posts" :key="i + Date.now()" class="yk-news__faq" @click="handleClick(news)">
      <span>{{ news.name }}</span>
      <span class="mutted">{{ $formatters.formatDate(news.date) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import YkNewsPopup from '~/components/new-design/popups/popup-components/YkNewsPopup.vue'
@Component({
  components: { YkNewsPopup }
})
export default class YkNews extends Vue {
  @Prop() posts: any

  popupItem: any = {}
  showPopup: boolean = false
  data: any = [
    {
      title: 'Барсук съел кота на крыше дома',
      description: 'Это очнень печально, чертов барсук, срочно нанимаем охотника чтобы он больше не жрал котов!!!!!',
      date: '22.12.2022'
    },
    {
      title: 'Барсук съел кота на крыше дома',
      description: 'Это очнень печально, чертов барсук, срочно нанимаем охотника чтобы он больше не жрал котов!!!!!',
      date: '22.12.2022'
    },
    {
      title: 'Барсук съел кота на крыше дома',
      description: 'Это очнень печально, чертов барсук, срочно нанимаем охотника чтобы он больше не жрал котов!!!!!',
      date: '22.12.2022'
    }
  ]

  handleClick (item) {
    this.popupItem = item
    this.showPopup = true
  }
}
</script>

<style lang="scss" scoped>
.yk-news{
  margin-top: 46px;

  &__faq{
    display: flex;
    flex-direction: column;
    background: #F7F7F7;
    border-radius: 16px;
    padding: 9px 20px 8px 28px;
    margin-bottom: 4px;
  }
}
</style>
