<template>
  <div
    v-if="houses.length > 0"
    class="list"
  >
    <div class="block__title">
      Адреса домов
    </div>
    <div
      v-for="(item, index) in houses"
      :key="'post-house-' + index"
      class="news"
    >
      <div class="news__date">
        {{ item.shortAddress }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class NewsHouseBlock extends Vue {
  @Prop({
    default: []
  }) houses!: any[]
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
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;

    color: #000000;
    margin: 4px 0px;
  }

  &__date {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #4C5A6B;
    margin: 4px 0px;
  }

  &__button {
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    background: none;
    border: none;

    color: #0047FF;
  }
}
</style>
