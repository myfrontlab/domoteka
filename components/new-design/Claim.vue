<template>
  <div class="claim">
    <div class="claim_left">
      <img
        width="210"
        height="204"
        class="claim_left__picture"
        src="@/assets/img/claim-picture.svg"
        alt=""
      >
      <img
        width="169"
        height="206"
        class="claim_left__scheme"
        src="@/assets/img/claim-scheme.svg"
        alt=""
      >
    </div>
    <div class="claim_right">
      <div class="claim_card">
        <p class="card-header green-text">
          Оставьте заявку, и с вами свяжется наш специалист, чтобы помочь подключить ваш дом к Домотеке
        </p>
        <form class="claim__form" @submit.prevent>
          <input
            v-model="formData.fio"
            placeholder="Фамилия Имя Отчество"
            class="new-design_input"
          >
          <input
            v-model="formData.phone"
            placeholder="Номер телефона"
            class="new-design_input"
          >
          <input
            v-model="formData.address"
            placeholder="Адрес"
            class="new-design_input"
          >
          <base-button class="claim__btn" @btn-click="handleClick">
            Отправить заявку
          </base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import BaseButton from '~/components/UI/BaseButton.vue'

@Component({
  components: { BaseButton }
})
export default class extends Vue {
  formData = {
    fio: '',
    phone: '',
    address: ''
  }

  handleClick () {
    this.$emit('claim')
    axios.post('https://domoteka.online/api/web/contact/citizen', this.formData)
  }
}
</script>

<style lang="scss" scoped>
.card-header{
  text-align: left;
}
.claim{
  margin-top: 40px;
  border: 1px solid #92B84D;
  filter: drop-shadow(0px 4px 49px rgba(0, 0, 0, 0.08));
  border-radius: 17px;
  display: flex;
  flex-direction: row;
  &_left{
    display: flex;
    flex-direction: column;
    padding: 0 -13px 30px 15px;

    &__picture{
      transform: translate(-34px, -35px);
      @include bp-max($mq-tablet-medium) {
        position: absolute;
        object-fit: contain;
        width: 108px;
        height: 105px;
        transform: translate(-30px, -70px);
      }
    }

    &__scheme{
      transform: translate(15px, -28px);
      position: relative;
      bottom: 0;
      @include bp-max(1180px){
        transform: translate(15px, -16px);
      }
      @include bp-max($mq-tablet-medium) {
        display: none;
      }
    }
  }

  &_right{
    padding: 44px 31px 55px 0;
    @include bp-max($mq-tablet-medium) {
      padding: 35px 25px;
    }
    @include bp-max($mq-tablet-min) {
      padding: 51px 25px;
    }
  }

  &__form{
    display: flex;
    flex-direction: column;
    padding: 18px 24px 0 0;
    @include bp-max($mq-mobile-medium) {
      padding: 0;
    }
  }

  &_card{
    display: flex;
    flex-direction: column;
  }
  &__btn{
    margin-top: 12px;
  }
}
</style>
