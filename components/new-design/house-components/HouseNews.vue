<template>
  <div class="house-news">
    <h2 class="house-news__title">
      Ближайшие отключения
    </h2>
    <div v-for="(news, i) in outages" :key="i + Date.now()" class="house-news__news">
      <span style="margin-bottom: 10px;">
        {{ news.name }}
      </span>
      <p class="mutted">
        {{ formatDate(news.start_date) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import 'assets/scss/new-design/styles.scss'
@Component({})
export default class HouseNews extends Vue {
@Prop() outages: any []

formatDate (date: string) {
  return date.split('-').reverse().join('.')
}
}
</script>

<style lang="scss" scoped>
.house-news{
  display: flex;
  flex-direction: column;
  margin-top: 43px;

  &__news{
    margin-bottom: 4px;
    p {
      margin-top: 5px;
    }
  }

  &__title{
    margin-bottom: 20px;
  }
}
</style>
