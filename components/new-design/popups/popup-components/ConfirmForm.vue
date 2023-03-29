<template>
  <div class="confirm-form">
    <div class="confirm-form_section">
      <div class="confirm-form_row">
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            ФИО плательщика:
          </span>
          <span class="confirm-form_value">
            {{ form.payer.fio }}
          </span>
        </div>
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            Почта плательщика:
          </span>
          <span class="confirm-form_value">
            {{ form.payer.email }}
          </span>
        </div>
      </div>
      <div class="confirm-form_row">
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            Лицевой счет абонента:
          </span>
          <span class="confirm-form_value">
            {{ form.payer.personal_account }}
          </span>
        </div>
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            Расчетный счет получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.personal_account }}
          </span>
        </div>
      </div>
      <div class="confirm-form_row">
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            Корреспондентский счет получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.correspondent_account }}
          </span>
        </div>
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            ИНН получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.inn }}
          </span>
        </div>
      </div>
      <div class="confirm-form_row">
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            БИК банка получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.inn }}
          </span>
        </div>
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            КПП получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.kpp }}
          </span>
        </div>
      </div>
      <div class="confirm-form_row">
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            ОКТМО получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.oktmo }}
          </span>
        </div>
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            Имя получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.name }}
          </span>
        </div>
      </div>
      <div class="confirm-form_row">
        <div class="confirm-form_row-item">
          <span class="confirm-form_label-text">
            Банк получателя:
          </span>
          <span class="confirm-form_value">
            {{ form.payment.bank }}
          </span>
        </div>
      </div>
    </div>
    <div class="confirm-form_divider" />
    <div class="confirm-form_section">
      <div class="confirm-form_sum-row">
        <div class="confirm-form_sum">
          <span class="confirm-form_sum-text">
            Оплачиваемая сумма:
          </span>
          <span class="confirm-form_sum-value">
            {{ formatSum(form.payment.sum) }} ₽
          </span>
        </div>
        <!-- <div class="confirm-form_sum">
          <span class="confirm-form_sum-text">
            Комиссия:
          </span>
          <span class="confirm-form_sum-value">
            250 ₽
          </span>
        </div> -->
      </div>
      <div>
        <div class="confirm-form_itogo">
          <span class="confirm-form_itogo-text">
            Итого:
          </span>
          <span class="confirm-form_itogo-value">
            {{ formatSum(form.payment.sum) }} ₽
          </span>
        </div>
      </div>
    </div>
    <div class="confirm-form_divider" />
    <div class="confirm-form_section">
      <div class="agreements-terms">
        <div class="agreements-terms_text">
          Продолжая процесс оплаты, вы соглашаетесь с условиями <span style="color: #92B84D">соглашения</span>
        </div>
      </div>
      <base-button class="confirm-form_btn" @click.native="payClick">
        Оплатить
      </base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import BaseButton from '~/components/UI/BaseButton.vue'
import connecterUser from '@/connecters/user'
@Component({
  components: { BaseButton }
})
export default class ConfirmForm extends Vue {
@Prop() form : any

formatSum (sum: number) {
  return new Intl.NumberFormat('ru-RU').format(sum)
}

async payClick () {
  const { token } = await connecterUser.registration()
  const headers = { Authorization: 'Bearer ' + token }
  const urlForPay = (await this.$axios.get(`https://dev.domoteka.online/api/payment/get-form?type=free_reqs&payer_name=${this.form.payer.fio}&email=${this.form.payer.email}&bank_name=${this.form.payment.bank}&bik=${this.form.payment.bik}&inn=${this.form.payment.inn}&kpp=${this.form.payment.kpp}&oktmo=${this.form.payment.oktmo}&receiver_name=${this.form.payment.name}&rs=${this.form.payment.personal_account}&ks=${this.form.payment.correspondent_account}&ls=${this.form.payer.personal_account}&amount=${this.form.payment.sum}`, { headers })).data
  this.$router.push({
    path: '/payment',
    query: {
      sum: this.form.payment.sum,
      personal_account: this.form.payer.personal_account,
      link_to_pay: urlForPay
    }
  })
}
}
</script>

<style lang="scss" scoped>
.confirm-form{
  &_divider{
    border-bottom: 1px solid #E7E7E7;
    position: absolute;
    width: 100%;
    transform: translateX(-50%);
    left: 50%;
  }
  &_section{
    display: flex;
    flex-direction: column;
  }
  &_row{
    margin-top: 29px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 255px;
    @include bp-max($mq-tablet-small){
      grid-template-columns: 1fr;
      grid-row-gap: 15px;
      margin-top: 15px;
    }
    &:last-child{
      margin-bottom: 29px;
    }

    &-item{
      font-style: normal;
      font-size: 16px;
      line-height: 19px;
    }
  }

  &_label-text{
    color: #B4B4B4;
  }
  &_value{
    color: #292929;
  }

  &_sum-row{
    display: flex;
    gap: 27px;
    margin:28px 0 18px;
    @include bp-max($mq-tablet-small){
      flex-direction: column;
      gap: 18px;
    }
  }

  &_sum{
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    &-text{
      color: rgba(41, 41, 41, 0.7);
    }
    &-value{
      color: #92B84D;
    }
  }

  &_itogo{
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 28px;
    &-text{
      color: #292929;
    }
    &-value{
      color: #92B84D;
    }
  }

  &_btn{
    max-width: 462px;
  }
}

.agreements-terms{
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #676767;
}
</style>
