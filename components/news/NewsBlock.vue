<template>
  <article class="news">
    <header>
      <h2 class="news__title">
        Новости домотеки
      </h2>
    </header>

    <div
      v-if="$fetchState && posts.length"
    >
      <div class="desktop-content">
        <div class="news__content">
          <section
            v-for="(post, index) in posts"
            :key="'domoteka-post-' + index"
            class="post"
          >
            <h3 class="post__title">
              {{ post.title }}
            </h3>
            <div class="post__description">
              {{ post.previewText }}
            </div>
          </section>
        </div>
      </div>
      <div class="mobile-content">
        <agile>
          <section
            v-for="(post, index) in posts"
            :key="'domoteka-post-' + index"
            class="post"
          >
            <h3 class="post__title">
              {{ post.title }}
            </h3>
            <div class="post__description">
              {{ post.previewText }}
            </div>
          </section>
        </agile>
      </div>
    </div>
    <div
      v-if="!$fetchState"
      class="news__content"
    >
      <div
        v-for="index in Array(2)"
        :key="'domoteka-post-skeleton-' + index"
        class="post"
      >
        <b-skeleton class="post__skeleton-title" />
        <b-skeleton class="post__skeleton-description" />
      </div>
    </div>
    <div class="news__link-wrap">
      <a href="/news">
        Все новости
      </a>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { IPostResponse } from '@/types/response/post'
import global from '@/utils/global'
import { servicePost } from '~/services/api'

@Component
export default class NewsBlock extends Vue {
  posts: IPostResponse[] = []

  async fetch () {
    if (!process.browser) { global.axios = this.$axios }
    this.posts = await servicePost.pullAll({ limit: 4 })
  }
}
</script>

<style scoped lang="scss">
.news {
  width: 100%;
  &__title {
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: #1D2937;
    @include bp-max($mq-tablet-min) {
      font-size: 28px;
      line-height: 32px;
      margin-left: 24px;
    }
  }
  &__link-wrap {
    @include bp-max($mq-tablet-min) {
      margin-top: 24px;
      margin-left: 24px;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    @include bp-max($mq-tablet-min) {
      overflow-x: scroll;
      font-size: 20px;
      line-height: 24px;
      padding: 0 24px;
    }
  }
}

.post {
  max-width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  flex-shrink: 0;
  @include bp-max($mq-tablet-min) {
    max-width: 100%;
    padding: 0 24px;
    margin-bottom: 0;
  }

  &__title {
    color: #1D2937;
    font-weight: bolder;
    font-size: 24px;
    line-height: 32px;
    @include bp-max($mq-mobile-max) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  &__description {
    color: #383C42;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

// .card-news {
//   flex-grow: 1;
//   margin-top: 32px;
//   height: 100%;
//   @media (min-width: 576px) {
//     & {
//       width: 49%;
//     }
//   }
//   &__wrapper {
//     @media (min-width: 576px) {
//       & {
//         display: flex;
//         flex-direction: row;
//         flex-wrap: wrap;
//         justify-content: space-between;
//       }
//     }
//   }
//   &__link-wrapper {
//     margin-top: 32px;
//   }
//   &__skeleton-title {
//     height: 25px;
//     width: 200px;
//   }
//   &__skeleton-text {
//     margin-top: 8px;
//     height: 25px;
//     width: 250px;
//   }
// }
</style>
