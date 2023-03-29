<template>
  <div class="house-information">
    <h2 class="house-information__title">Информация о доме</h2>
    <div>
      <span>Год постройки:</span>
      <span class="yk-description">1998</span>
    </div>
    <div>
      <span>Тип перекрытий:</span>
      <span class="yk-description">Кирпич</span>
    </div>
    <div>
      <span>Количество жилых помещений:</span>
      <span class="yk-description">189</span>
    </div>
    <div>
      <span>Капитальный ремонт запланирован на:</span>
      <span class="yk-description">2023 г</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
@Component({})
export default class HouseInformation extends Vue {

}
</script>

<style lang="scss" scoped>
.house-information{
  margin-top: 32px;

  &__title{
    margin-bottom: 13.5px;
  }
}
</style>
