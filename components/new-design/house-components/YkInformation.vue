<template>
  <div class="yk-information">
    <h2 class="yk-information__title">
      Информация об УК
    </h2>
    <div class="yk-information__informs">
      <div class="yk-information__header">
        <span class="yk-header">
          {{ yk.fullName }}
        </span>
      </div>
      <div v-if="yk.dispatcherPhone">
        <span>Телефон:</span>
        <span class="yk-description">{{ yk.dispatcherPhone }}</span>
      </div>
      <div v-if="yk.postalAddress">
        <span>Юр. Адрес:</span>
        <span class="yk-description">{{ yk.postalAddress }}</span>
      </div>
      <div v-if="yk.dispatcherWorkTime">
        <span>Часы работы диспечерской:</span>
        <span class="yk-description">{{ yk.dispatcherWorkTime }}</span>
      </div>
      <div v-if="yk.email">
        <span>Электроннная почта:</span>
        <span class="yk-description">{{ yk.email }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
@Component({})
export default class YkInformation extends Vue {
@Prop() yk: any
}
</script>

<style lang="scss" scoped>
.yk-information{
  margin: 47px 0 40px;
  &__header{
    margin-bottom: 15px;
  }

  &__title{
    margin-bottom: 11.5px;
  }
}
</style>
