<template>
  <div class="block-info__wrapper">
    <div v-if="disclosuries.length">
      <div class="block__title">
        Раскрытие информации
      </div>
      <collapse
        v-for="(disclosure, index) in disclosuries"
        :key="'disclosure-title-' + index"
        class="block-info"
      >
        <template #trigger>
          <div class="block-info__title">
            {{ disclosure.title }}
          </div>
        </template>
        <template #default>
          <div class="">
            <div
              v-for="(element, index2) in disclosure.elements"
              :key="'disclosure-' + index2"
            >
              <div
                v-if="element.linkFile"
                class="block-info__item"
              >
                <img
                  class="block-info__file-img"
                  :src="image"
                  alt="no"
                >
                <a
                  class="block-info__file-name"
                  download
                  :href="'https://domoteka.online/' + element.linkFile"
                  target="_blank"
                  rel="nofollow"
                >
                  {{ element.title }}
                </a>
              </div>
              <div
                v-else
                class="block-info__item"
              >
                <div class="block-info__text">
                  {{ element.title }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
import { IDislosureCategoryResponse } from '@/types/response/disclosure'

@Component
export default class DisclosureInformationBlock extends Vue {
  @Prop({
    default: []
  }) disclosuries!: IDislosureCategoryResponse[]

  image = require('@/assets/img/file.png')
}
</script>

<style scoped lang="scss">
.block-info {
  width: 100%;
  border: 1px solid #ADB9C8;
  box-sizing: border-box;
  border-radius: 16px;

  padding: 16px;

  & + & {
    margin: 16px 0px;
  }

  // @include bp-min($mq-tablet-min) {
  //   width: 680px;
  // }

  @include bp-max($mq-mobile-max) {
    // width: 100%;
    padding: 16px;
  }

  &__wrapper {
    @include bp-min($mq-tablet-min) {
      margin-bottom: 40px;
    }

    @include bp-max($mq-mobile-max) {
      margin-bottom: 32px;
    }
  }

  &__skeleton-title {
    height: 25px;
    margin-bottom: 8px;
    @include bp-min($mq-tablet-min) {
      // width: 200px;

    }

    @include bp-max($mq-mobile-max) {
      width: 100%;
    }
  }

  &__skeleton-collapse {
    width: 100%;
    @include bp-min($mq-tablet-min) {
      height: 60px;
      margin-bottom: 40px;
    }

    @include bp-max($mq-mobile-max) {
      // width: 100%;
      margin-bottom: 32px;
    }
  }

  &__wrapper-skeleton {
    @include bp-max($mq-mobile-max) {
      padding: 0px 16px 0px;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;

    color: #000000;
  }

  &__text {
    font-weight: 300;
    color: #000000;

    @include bp-min($mq-mobile-medium) {
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-min($mq-tablet-small) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__item {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__file {
    break-inside: avoid;
    display: flex;
    align-items: center;

    & + & {
      margin-top: 16px;
    }
  }

  &__file-img {
    width: 24px;
    height: 32px;
  }

  &__file-name {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #0047FF;
    margin: 0px 8px;
  }

}
</style>
