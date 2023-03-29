<template>
  <div class="container">
    <div class="breadcrumbs">
      <a href="/">Главная</a>
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.08258 3.54673L1.79995 0.954118C1.56033 0.681961 1.15704 0.681961 0.917418 0.954118C0.694194 1.20766 0.694194 1.60712 0.917418 1.86066L2.80098 4L0.917418 6.13934C0.694194 6.39288 0.694194 6.79234 0.917418 7.04588C1.15704 7.31804 1.56033 7.31804 1.79995 7.04588L4.08258 4.45327C4.30581 4.19973 4.30581 3.80027 4.08258 3.54673Z" fill="#92B84D" stroke="#92B84D" stroke-width="0.5"/>
      </svg>
      <span>Новости системы</span>
    </div>
    <!-- /.breadcrumbs -->
    <h1 class="block-title text-left mb-4">Новости системы</h1>
    <div class="grid">
      <div v-for="(news, i) in newsList" :key="i + Date.now()" class="news_item">
        <span class="news_main_header" @click="handleClick(news)">{{ news.title }}</span>
        <span class="news_main_date">{{ formatDate(news.publication_date) }}</span>
        <span class="news_main_description">{{ cutText(news.preview_text) }}</span>
        <div class="news_divider" />
      </div>
    </div>
    <div v-if="pageCount > 1" class="pagination">
      <div class="pagination__wrap">
        <div
          v-for="i in pageCount"
          :key="i"
          :class="{'pagination__item_current': i === currentPage }"
          class="pagination__item"
          @click="currentPage = i"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'
import axios from 'axios'
import NewsPopup from '~/components/new-design/popups/NewsPopup.vue'

@Component({
  components: {
    NewsPopup
  }
})
export default class NewNews extends Vue {
  perPage: number = 6
  popupItem: any = {
    title: '',
    date: '',
    description: ''
  }

  showPopup: boolean = false
  currentPage: number = 1
  data: any = []

  async asyncData () {
    const response = await axios.get('https://domoteka.online/api/web/posts')
    const data = response.data
    return { data }
  }

  handleClick (item) {
    Object.assign(this.popupItem, item)
    this.showPopup = true
  }

  get pageCount () {
    return Math.ceil(this.data.length / this.perPage)
  }

  get newsList () {
    return this.data.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
  }

  formatDate (date:string) {
    return date.split('-').reverse().join('.')
  }

  maxTextLength = 150

  cutText (text:string) {
    if (text) {
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
  }
}
</script>

<style lang="scss" scoped>
.grid{
  margin-top: 15px;
  display: grid;
 grid-template-columns: 1fr 1fr;
  grid-column-gap: 72px;
  grid-row-gap: 18px;
}
.news{
  &_item{
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
    max-width: 615px;
  }

  &_main{
    &_header{
      cursor: pointer;
      font-weight: 700;
      font-size: 21px;
      line-height: 26px;
      color: #292929;
    }

    &_date{
      margin-top: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #92B84D;
      margin-bottom: 12px;
    }

    &_description{
      font-weight: 500;
      font-size: 16px;
      line-height: 145%;
      color: #676767;
    }
  }

  &_divider{
    border: 1px solid #E1E1E1;
    margin: 20px 0 18px;
  }
}

.pagination{
  &__wrap{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  &__item{
    background: rgba(146, 184, 77, 0.5);
    border-radius: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 57px;
    height: 57px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
  }
  &__item_current {
    background: #92B84D;
  }
}
</style>
