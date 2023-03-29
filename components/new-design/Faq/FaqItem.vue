<template>
  <div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
    <div class="faq__question">
      <span>
        {{ faq.question }}
      </span>
    </div>
    <div>
      <div class="faq__answer" @click.stop="">
        {{ faq.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

interface IFaq {
  AccidentNumber: string,
}

@Component
export default class extends Vue {
  @Prop() index!: number
  @Prop() open!: boolean
  @Prop() faq!: IFaq
}
</script>

<style lang="scss" scoped>
.faq {
  display: block;
  width: 100%;
  max-width: 100%;
  background-color: transparent;

  &:last-child {
    display: block;
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    border-bottom: none;
  }

  &__question {
    position: relative;
    margin-bottom: 12px;
    padding: 22px 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #737373;
    background: #F1F1F1;
    border-radius: 21px;
    transition: all 0.4s linear;
    cursor: pointer;

    @include bp-max($mq-tablet-min){
      display: flex;
      align-items: center;
      padding: 22px 40px 22px 30px;
      min-height: 80px;
      font-size: 16px;
    }
    @include bp-max($mq-mobile-medium){
      min-height: 110px;
    }

    &::after {
      content: '';

      position: absolute;
      margin-right: 20px;
      top: 50%;
      right: 0;
      transform: translateY(-50%) rotate(0deg);
      margin-left: 10px;
      width: 15px;
      height: 10px;
      background-image: url('~/assets/img/icon/vector-3.svg');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      transition: all 0.2s linear;
    }
  }

  &__answer {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease-out;
    padding-left: 15px;

    @media (max-width: 770px) {
      font-size: 14px;
      padding-left: 15px;
    }
  }

  &.open {
    .faq__answer {
      opacity: 1;
      max-height: 100%;
      padding-bottom: 15px;
      line-height: 1.5em;
    }

    .faq__question {
      margin-bottom: 15px;

      &::after {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
}
.faq {
  &__answer {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    li {
      list-style-type: none
    }
  }
}

</style>
