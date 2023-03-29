<template>
  <article class="card">
    <img
      class="card__img-points"
      src="@/assets/img/background/background-4.svg"
      alt="no"
    >
    <div v-if="!isSelectPost">
      <header class="news__title">
        Новости Домотеки
      </header>
      <div v-if="!loading" class="news__list">
        <section
          v-for="(post, index) of posts"
          :key="'post-' + index"
          class="news__item"
        >
          <header class="news__item__title">
            {{ post.title }}
          </header>
          <div class="news__item__preview">
            {{ post.previewText }}
          </div>
          <button
            class="news__button-show"
            @click="handlerShowPost(post)"
          >
            открыть
          </button>
        </section>
      </div>
      <div v-else class="news__list">
        <div
          v-for="index in Array(10)"
          :key="'skeleton-post-' + index"
          class="news__item"
        >
          <b-skeleton class="news__item__skeleton-title" />
          <b-skeleton class="news__item__skeleton-preview" />
        </div>
      </div>
    </div>
    <div v-else>
      <section
        v-if="!loading"
        class="news__select-post"
      >
        <button
          class="news__button-close"
          @click="handlerClosePost"
        >
          <img
            class="news__icon-close"
            src="@/assets/img/close.png"
            alt="no"
          >
        </button>
        <div class="news__header-select-post">
          <header class="news__title">
            {{ selectPost.title }}
          </header>
          <div class="news__date">
            {{ $formatters.formatDate(selectPost.date) }}
          </div>
        </div>
        <div class="news__text">
          {{ selectPost.text }}
        </div>
      </section>
      <div v-else>
        <b-skeleton class="news__skeleton-title" />
        <b-skeleton class="news__skeleton-text" />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IPostResponse } from '@/types/response/post'
import { servicePost } from '@/services/api'
import global from '@/utils/global'

@Component
export default class WatchTheNews extends Vue {
  posts: IPostResponse[] = []
  loading: boolean = true
  isSelectPost: boolean = false
  selectPost: any = {}

  async fetch () {
    this.loading = true
    if (!process.browser) { global.axios = this.$axios }
    this.posts = await servicePost.pullAll({ limit: undefined })
    this.loading = false
  }

  handlerClosePost () {
    this.isSelectPost = false
    this.selectPost = {}
  }

  async handlerShowPost (post: IPostResponse) {
    this.isSelectPost = true
    this.loading = true
    this.selectPost = await servicePost.show({ idPost: post.id })
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  @include bp-min($mq-tablet-min) {
    margin-bottom: 40px;
  }

  @include bp-max($mq-mobile-max) {
    margin-bottom: 32px;
  }

  &__img-points {
    position: absolute;
    left: -100px;
  }
}

.news {
  width: 100%;

  &__skeleton-title {
    @include bp-min($mq-tablet-min) {
      height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      height: 28px;
    }
  }

  &__skeleton-text {
    margin-top: 32px;
    height: 100px;
  }

  &__title-wrapper {
    display: flex;
    align-items: center;
  }

  &__button-close {
    height: 32px;
    outline: none;
    border: 0;
    background: transparent;
    margin-right: 40px;
  }

  &__icon-close {
    width: 32px;
    height: 32px;
  }

  &__header-select-post {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__date {
    font-weight: 300;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__text {
    font-weight: 300;
    margin-top: 32px;

    @include bp-min($mq-tablet-min) {
      font-size: 28px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 24px;
      line-height: 24px;
    }
  }

  &__title {
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 32px;
      line-height: 48px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  &__button-show {
    outline: none;
    border: 0;
    background: transparent;
    padding: 0px;
    color: #0047FF;
  }

  &__list {
    display: grid;

    @include bp-min($mq-tablet-min) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 32px 20px;
      margin-top: 32px;
    }

    @include bp-max($mq-mobile-max) {
      grid-gap: 24px 0;
      margin-top: 24px;
    }
  }

  &__item {
    &__title {
      font-weight: 500;
      color: #1D2937;

      @include bp-min($mq-tablet-min) {
        font-size: 24px;
        line-height: 32px;
      }

      @include bp-max($mq-mobile-max) {
        font-size: 20px;
        line-height: 24px;
      }
    }

    &__preview {
      font-weight: 300;
      margin-top: 8px;

      @include bp-min($mq-tablet-min) {
        font-size: 20px;
        line-height: 32px;
      }

      @include bp-max($mq-mobile-max) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__skeleton-title {
      width: 200px;
      height: 25px;
    }

    &__skeleton-preview {
      width: 250px;
      height: 60px;
    }
  }
}
</style>
