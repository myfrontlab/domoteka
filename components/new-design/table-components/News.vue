<template>
  <div class="news">
    <div class="block-title text-left">
      Новости сервиса
    </div>
    <div class="news_main my-mt">
      <div v-for="(news, i) in data" :key="i + Date.now()" class="news_item">
        <span class="news_main_header">
          {{ news.title }}
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.952437 7.90752L1.14007 8.07272L0.952436 7.90752C0.682521 8.21409 0.682521 8.69954 0.952436 9.00611C1.23875 9.3313 1.71774 9.3313 2.00405 9.00611L5.04756 5.54929C5.31748 5.24273 5.31748 4.75727 5.04756 4.45071L2.00405 0.993892C1.71774 0.668703 1.23875 0.668703 0.952437 0.993892C0.682521 1.30046 0.682521 1.78591 0.952437 2.09248L3.51233 5L0.952437 7.90752Z" fill="#92B84D" stroke="#92B84D" stroke-width="0.5"/></svg>
        </span>
        <span class="news_main_date">{{ formatDate(news.publication_date) }}</span>
        <span class="news_main_description">{{ cutText(news.preview_text) }}</span>
        <div class="news_divider" />
      </div>
    </div>
    <div class="news_all">
      <nuxt-link class="news_link" to="/news">
        Все новости &nbsp;
      </nuxt-link>
      <img src="@/assets/img/icon/vector-8.svg">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  data: any = []

  async fetch () {
    const response = await this.$axios.get('https://domoteka.online/api/web/posts')
    response.data.splice(2)
    this.data = response.data
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
.my-mt{
  margin-top: 39px;
}
.news{
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  @include bp-max($mq-tablet-small) {
    max-width: 90%;
    margin: 0 auto;
  }
  &_all{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #92B84D;
    cursor: pointer;
  }

  &_item{
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }

  &_main{
    &_header{
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

  &_link{
    color: #92B84D;
    &:hover{
      text-decoration: none;
    }
  }
}
</style>
