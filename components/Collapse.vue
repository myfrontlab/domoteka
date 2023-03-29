<template>
  <div
    class="collapse"
    :class="{ 'open': opened }"
  >
    <div
      class="collapse__trigger"
      @click.stop="opened = !opened"
    >
      <slot name="trigger" />
      <slot name="indicator">
        <div class="collapse__trigger__indicator" />
      </slot>
    </div>
    <div
      class="collapse__content"
      :style="contentHeight !== null ? ('max-height: ' + (opened ? contentHeight : 0) + 'px') : ''"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Collapse extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) isOpen!: boolean

  opened: boolean = this.isOpen
  contentHeight: number | null = null

  mounted () {
    this.contentHeight = this.$el.querySelector('.collapse__content')?.clientHeight || 0
  }
}
</script>

<style lang="scss" scoped>
.collapse {
  display: flex;
  flex-direction: column;

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;

    &__indicator {
      margin-left: 8px;
      flex: 0 0 24px;
      width: 24px; height: 24px;
      background: transparent url(~@/assets/img/icon/chevron-down.svg) no-repeat center;
      transition: transform .1s linear;
    }
  }

  &__content {
    overflow: hidden;
    transition: max-height .1s linear;
  }

  &.open &__trigger {
    &__indicator {
      transform: rotate(180deg);
    }
  }

  &.reverse {
    flex-direction: column-reverse;
  }
}
</style>
