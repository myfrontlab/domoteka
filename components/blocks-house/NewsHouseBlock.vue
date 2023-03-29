<template>
  <div
    v-if="posts.length > 0"
    class="list"
  >
    <div class="block__title">
      Новости
    </div>
    <div
      v-for="(item, index) in postsShow"
      :key="'post-house-' + index"
      class="news"
    >
      <div class="news__text">
        {{ item.text }}
      </div>
      <div class="news__date">
        {{ $formatters.formatDate(item.date) }}
      </div>
    </div>
    <button
      v-if="posts.length > 3"
      class="news__button"
      @click="isOpen = !isOpen"
    >
      {{ isOpen ? 'Скрыть' : 'Показать еще' }}
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class NewsHouseBlock extends Vue {
  @Prop({
    default: []
  }) posts!: any[]

  isOpen: boolean = false

  get postsShow () {
    if (this.isOpen) {
      return this.posts
    } else {
      return this.posts.slice(0, 3)
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
