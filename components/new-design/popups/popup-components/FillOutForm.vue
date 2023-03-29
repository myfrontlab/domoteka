<template>
  <form class="fill-form" @submit="$emit('click', form)">
    <div class="fill-form_section">
      <div class="fill-form_title mb-3">
        Данные плательщика
      </div>
      <div class="fill-form_row">
        <input
          v-model="form.payer.fio"
          required
          class="new-design_input"
          placeholder="ФИО плательщика"
        >
        <input
          v-model="form.payer.email"
          required
          type="email"
          class="new-design_input"
          placeholder="Почта плательщика"
        >
      </div>
      <div class="fill-form_row">
        <input
          v-model="form.payer.personal_account"
          required
          type="number"
          class="new-design_input"
          placeholder="Лицевой счет абонента"
        >
      </div>
    </div>
    <div class="fill-form_section">
      <div class="fill-form_title mb-2">
        Реквизиты платежа
      </div>
      <div class="fill-form_row">
        <input
          v-model="form.payment.personal_account"
          required
          type="number"
          class="new-design_input"
          placeholder="Расчетный счет получателя"
        >
        <input
          v-model="form.payment.inn"
          required
          type="number"
          class="new-design_input"
          placeholder="ИНН получателя"
        >
      </div>
      <div class="fill-form_row">
        <input
          v-model="form.payment.correspondent_account"
          required
          type="number"
          class="new-design_input"
          placeholder="Корреспондентский счет получателя"
        >
        <input
          v-model="form.payment.kpp"
          required
          type="number"
          class="new-design_input"
          placeholder="КПП получателя"
        >
      </div>
      <div class="fill-form_row">
        <input
          v-model="form.payment.bik"
          required
          type="number"
          class="new-design_input"
          placeholder="БИК банка получателя"
        >
        <input
          v-model="form.payment.name"
          required
          class="new-design_input"
          placeholder="Имя получателя"
        >
      </div>
      <div class="fill-form_row">
        <input
          v-model="form.payment.oktmo"
          required
          type="number"
          class="new-design_input"
          placeholder="ОКТМО получателя"
        >
        <input
          v-model="form.payment.bank"
          required
          class="new-design_input"
          placeholder="Банк получателя"
        >
      </div>
      <br>
      <div class="fill-form_row">
        <input
          v-model="form.payment.sum"
          required
          type="number"
          class="new-design_input sum_input"
          placeholder="Оплачиваемая сумма"
        >
        <base-button>
          Оплатить
        </base-button>
      </div>
    </div>
    <div class="agreement-terms">
      <div class="agreement-terms_text">
        Продолжая процесс оплаты, вы соглашаетесь с условиями <span style="color: #92B84D">соглашения</span>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'
import vSelect from 'vue-select'
import BaseButton from '~/components/UI/BaseButton.vue'

@Component({
  components: {
    BaseButton,
    vSelect
  }
})
export default class FillOutForm extends Vue {
  form = {
    payer: {
      fio: '',
      email: '',
      personal_account: ''
    },
    payment: {
      personal_account: '',
      inn: '',
      correspondent_account: '',
      kpp: '',
      bik: '',
      name: '',
      oktmo: '',
      bank: '',
      sum: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.fill-form{
  &_section{
    margin-top: 28px;
    margin-bottom: 21px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &_row{
    display: grid;
    grid-template-columns: 462px 462px;
    grid-column-gap: 13px;
    grid-row-gap: 12px;
    @include bp-max($mq-tablet-small){
      display: flex;
      flex-direction: column;
    }
  }
  &_title{
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #92B84D;
  }
}

.new-design_input{
  margin-bottom: 0;
}
.agreement-terms{
  display: flex;
  justify-content: flex-end;
  &_text{
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #676767;
    opacity: 0.5;
    width: 462px;
    padding-right: 96px;
    @include bp-max($mq-mobile-medium){
      width: auto;
    }
  }
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
