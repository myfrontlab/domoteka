<template>
  <form
    class="search__form form"
    @submit.prevent
  >
    <div class="input-group">
      <input
        :value="value"
        class="input input-search "
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
      >
    </div>
  </form>
</template>

<script lang="ts">
import {
  Vue,
  Prop,
  Component
} from 'nuxt-property-decorator'

@Component({})
export default class InputSearch extends Vue {
  @Prop({
    type: String,
    default: ''
  }) value!: string
}

</script>

<style lang="scss" scoped>
.search {
  &__title {
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 48px;
      line-height: 64px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 36px;
      line-height: 40px;
    }
  }

  &__description {
    font-weight: 300;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
      margin-top: 8px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
      margin-top: 16px;
    }
  }
  &__link {
    display: block;
    margin-top: 16px;
    font-weight: 300;
    color: #0047FF;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

.form {
  &__title {
    font-weight: 500;
    color: #1D2937;
    margin-bottom: 16px;

    @include bp-min($mq-tablet-min) {
      font-size: 24px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__group {
    margin-top: 16px;
  }
}
</style>
