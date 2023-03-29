<template>
  <div class="number-input">
    <input
      class="number-input_input"
      :placeholder="placeholder"
      :value="value"
      required
    >
    <div class="number-input_arrows">
      <img
        src="~/assets/img/icon/arrow-up.svg"
        class="number-input_arrows__arrow-up"
        alt=""
        @click="$emit('plus')"
      >
      <img
        src="~/assets/img/icon/arrow-down.svg"
        class="number-input_arrows__arrow-down"
        alt=""
        @click="$emit('minus')"
      >
    </div>
  </div>
</template>

<script  lang="ts">
import { Component, Prop } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component({})
export default class BaseNumberInput extends Vue {
  @Prop() placeholder: string
  @Prop() value: number
}
</script>

<style lang="scss" scoped>
.number-input{
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  &_input{
    background: #FFFFFF;
    border: none;
    box-shadow: 0 4px 29px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    height: 52px;
    width: 100%;
    padding: 10px 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    &::placeholder{
      color: rgba(41, 41, 41, 1);
      opacity: 0.35;
    }
  }
  &_arrows{
    position: absolute;
    right: 20px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    &__arrow-up{
      cursor: pointer;
    }
    &__arrow-down{
      cursor: pointer;
    }
  }
}
</style>
