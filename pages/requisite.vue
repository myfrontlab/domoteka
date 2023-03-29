<template>
  <b-form
    class="card form"
    @submit.prevent="pay"
  >
    <div class="form__title">
      Оплата ЖКУ
    </div>
    <div class="form__item">
      <b-input
        v-model="form.fio"
        type="text"
        class="form__input"
        placeholder="ФИО плательщика"
        aria-describedby="input-name"
        required
      />
      <b-form-invalid-feedback
        id="input-name"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.email"
        type="text"
        class="form__input"
        placeholder="Почта плательщика"
        aria-describedby="input-email"
        required
      />
      <b-form-invalid-feedback
        id="input-email"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.ls"
        type="number"
        class="form__input"
        placeholder="Лицевой счет абонента"
        aria-describedby="input-personal-account"
        required
      />
      <b-form-invalid-feedback
        id="input-personal-account"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.rs"
        type="number"
        class="form__input"
        placeholder="Расчетный счет получателя"
        aria-describedby="input-checking-account"
        required
      />
      <b-form-invalid-feedback
        id="input-checking-account"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.ks"
        type="number"
        class="form__input"
        placeholder="Корреспондентский счет получателя"
        aria-describedby="input-ks"
        required
      />
      <b-form-invalid-feedback
        id="input-ks"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.inn"
        type="number"
        class="form__input"
        placeholder="ИНН получателя"
        aria-describedby="input-inn"
        required
      />
      <b-form-invalid-feedback
        id="input-inn"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.bik"
        type="number"
        class="form__input"
        placeholder="БИК банка получателя"
        aria-describedby="input-bik"
        required
      />
      <b-form-invalid-feedback
        id="input-bik"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.kpp"
        type="number"
        class="form__input"
        placeholder="КПП получателя"
        aria-describedby="input-kpp"
        required
      />
      <b-form-invalid-feedback
        id="input-kpp"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.oktmo"
        type="number"
        class="form__input"
        placeholder="ОКТМО получателя"
        aria-describedby="input-oktmo"
        required
      />
      <b-form-invalid-feedback
        id="input-oktmo"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.receiverName"
        type="text"
        class="form__input"
        placeholder="Имя получателя"
        aria-describedby="input-receiverName"
        required
      />
      <b-form-invalid-feedback
        id="input-receiverName"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.bankName"
        type="text"
        class="form__input"
        placeholder="Банк получателя"
        aria-describedby="input-bankName"
        required
      />
      <b-form-invalid-feedback
        id="input-bankName"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div class="form__item">
      <b-input
        v-model="form.amount"
        class="form__input"
        type="number"
        placeholder="Оплачиваемая сумма"
        aria-describedby="input-sum"
        required
      />
      <b-form-invalid-feedback
        id="input-sum"
        class="form__error"
      >
        *Обязательное поле
      </b-form-invalid-feedback>
    </div>
    <div
      v-if="error"
      class="form__error"
    >
      {{ error }}
    </div>
    <div class="form__item offer">
      Продолжая процесс оплаты, вы соглашаетесь с условиями
      <a
        class="block-info__file-name"
        download
        href="https://domoteka.online/offer.pdf"
        target="_blank"
        rel="nofollow"
      >
        соглашения
      </a>
    </div>
    <b-button
      type="submit"
      class="form__button"
    >
      <beat-loader
        v-if="isLoading"
        class="loading"
        color="white"
      />
      <div v-else>
        Оплатить
      </div>
    </b-button>
  </b-form>
</template>

<script lang="ts">
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
import { Vue, Component } from 'nuxt-property-decorator'
import connecterPayment from '@/connecters/payment'
import connecterUser from '@/connecters/user'
import { serviceAddress } from '@/services/api'
import global from '@/utils/global'

@Component({
  components: {
    BeatLoader
  }
})
export default class extends Vue {
  isLoading = false
  error = ''
  form: any = {
    fio: '',
    bik: '',
    amount: '',
    ls: '',
    inn: '',
    rs: '',
    ks: '',
    receiverName: '',
    bankName: '',
    kpp: '',
    oktmo: ''
  }

  async asyncData (context) {
    if (!process.browser) { global.axios = context.$axios }
    const fias = context.query.fias_guid
    if (!fias) {
      return
    }
    const house = await serviceAddress.pullHouse({ fias, id: undefined })

    // @ts-ignore
    const bik = house?.managingOrganization?.checkingAccount?.bik
    // @ts-ignore
    const inn = house?.managingOrganization?.checkingAccount?.inn
    // @ts-ignore
    const kpp = house?.managingOrganization?.checkingAccount?.kpp
    // @ts-ignore
    const rs = house?.managingOrganization?.checkingAccount?.checkingAccount
    // @ts-ignore
    const ks = house?.managingOrganization?.checkingAccount?.correspondentAccount
    // @ts-ignore
    const receiverName = house?.managingOrganization?.checkingAccount?.receiverName
    // @ts-ignore
    const bankName = house?.managingOrganization?.checkingAccount?.bankName
    // @ts-ignore
    const oktmo = house?.managingOrganization?.checkingAccount?.oktmo
    context.redirect({
      path: '/requisite',
      query: { bik, inn, kpp, rs, ks, receiverName, bankName, oktmo }
    })
  }

  mounted () {
    this.form.fio = String(this.$route.query.fio || '')
    this.form.amount = Number(this.$route.query.amount) || ''
    this.form.ls = Number(this.$route.query.ls) || ''

    this.form.bik = Number(this.$route.query.bik) || ''
    this.form.inn = Number(this.$route.query.inn) || ''
    this.form.rs = Number(this.$route.query.rs) || ''
    this.form.ks = Number(this.$route.query.ks) || ''
    this.form.receiverName = String(this.$route.query.receiverName || '')
    this.form.bankName = String(this.$route.query.bankName || '')
    this.form.kpp = Number(this.$route.query.kpp) || ''
    this.form.oktmo = Number(this.$route.query.oktmo) || ''
  }

  async pay () {
    try {
      this.isLoading = true
      const { token, id } = await connecterUser.registration()
      this.form.userId = id
      this.form.type = 'free_reqs'
      const urlForPay = await connecterPayment.createWithRequisite({
        payment: {
          userId: id,
          type: 'free_reqs',
          fio: String(this.form.fio),
          email: String(this.form.email),
          amount: String(this.form.amount),
          ls: String(this.form.ls),

          bik: String(this.form.bik),
          inn: String(this.form.inn),
          rs: String(this.form.rs),
          ks: String(this.form.ks),
          receiverName: String(this.form.receiverName),
          bankName: String(this.form.bankName),
          kpp: String(this.form.kpp),
          oktmo: String(this.form.oktmo)
        },
        token
      })
      this.isLoading = false
      this.error = ''
      this.$router.push({
        name: 'payment',
        query: {
          link: urlForPay,
          personalAccount: this.form.ls,
          amount: this.form.amount
        }
      })
    } catch {
      this.error = 'Ошибка оплаты'
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="scss">
.loading {
  margin-top: 8px;
}

.form {
  text-align: center;
  @include bp-min($mq-tablet-min) {
    width: 400px;
    margin: 0px auto 40px;
  }

  @include bp-max($mq-mobile-max) {
    padding: 10px;
    margin: 0px auto 32px;
  }

  &__item {
    & + & {
      margin-top: 10px;
    }
  }

  &__title {
    color: #1D2937;
    padding: 0px;
    margin-bottom: 16px;
    @include bp-min($mq-tablet-min) {
      font-size: 28px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 20px;
    }
  }

  &__error {
    width: 100%;
    text-align: left;
  }

  &__button {
    margin-top: 10px;
    background: #5e5ee1;
    border-color: #5e5ee1;
  }
}
.offer {
  text-align: left;
}
</style>
