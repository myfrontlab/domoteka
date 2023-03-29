<template>
  <form
    v-if="isHaveCheckingAccount()"
    class="card"
    @submit.prevent="pay"
  >
    <div class="card__title">
      Оплата жилищно-коммунальных услуг
    </div>

    <div
      v-if="data"
      class="card__receiver-title"
    >
      Получатель:
    </div>

    <div
      v-if="data"
      class="card__receiver-value"
    >
      {{ data.receiverName }}
    </div>

    <div
      v-for="(item, index) in requisite"
      :key="index"
      class="requisite"
    >
      <div
        v-if="item.value"
        class="requisite__title"
      >
        {{ item.title }}
      </div>

      <div
        v-if="item.value"
        class="requisite__value"
      >
        {{ item.value }}
      </div>
    </div>

    <div class="field">
      <div class="field__title">
        ФИО плательщика
      </div>
      <input
        v-model="form.fio"
        class="field__input"
        type="text"
        required
      >
    </div>

    <div class="field">
      <div class="field__title">
        Лицевой счет
      </div>
      <input
        v-model="form.ls"
        class="field__input"
        type="number"
        required
      >
    </div>

    <div class="field">
      <div class="field__title">
        Сумма платежа
      </div>
      <input
        v-model="form.amount"
        class="field__input"
        type="number"
        required
      >
    </div>

    <button
      class="button"
      type="submit"
    >
      <beat-loader
        v-if="isLoading"
        class="loading"
        color="white"
      />
      <div v-else>
        ОПЛАТИТЬ
      </div>
    </button>
  </form>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop
} from 'nuxt-property-decorator'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
import {
  ICheckingAccountResponse
} from '@/types/response/checking-account'
import connecterPayment from '@/connecters/payment'
import connecterUser from '@/connecters/user'

@Component({
  components: {
    BeatLoader
  }
})
export default class RequisiteForPayBlock extends Vue {
  @Prop({
    default: () => ({
      bankName: '',
      bik: '',
      checkingAccount: '',
      correspondentAccount: '',
      inn: '',
      kpp: '',
      oktmo: '',
      receiverName: ''
    })
  }) data: ICheckingAccountResponse

  isLoading = false
  error = ''
  form: any = {
    fio: '',
    amount: '',
    ls: ''
  }

  requisite: {
      title: string,
      value: string
    }[] = []

  mounted () {
    this.requisite = [
      {
        title: 'ИНН',
        value: this.data?.inn || ''
      }, {
        title: 'Р/c',
        value: this.data?.checkingAccount || ''
      }, {
        title: 'Банк',
        value: this.data?.bankName || ''
      }, {
        title: 'БИК',
        value: this.data?.inn || ''
      }, {
        title: 'К/С',
        value: this.data?.correspondentAccount || ''
      }, {
        title: 'КПП',
        value: this.data?.kpp || ''
      }, {
        title: 'ОКТМО',
        value: this.data?.oktmo || ''
      }
    ]
  }

  async pay () {
    if (!this.isFullCheckingAccount()) {
      this.$router.push({
        path: '/requisite',
        query: {
          ...this.data,
          ...this.form
        }
      })
      return
    }

    try {
      this.isLoading = true
      const { token, id } = await connecterUser.registration()
      this.form.userId = id
      this.form.type = 'free_reqs'
      const urlForPay = await connecterPayment.createWithRequisite({
        payment: {
          userId: id,
          type: 'free_reqs',
          ...this.form,

          bik: this.data.bik,
          inn: this.data.inn,
          rs: this.data.checkingAccount,
          ks: this.data.correspondentAccount,
          receiverName: this.data.receiverName,
          bankName: this.data.bankName,
          kpp: this.data.kpp,
          oktmo: this.data.oktmo
        },
        token
      })
      this.isLoading = false
      this.error = ''
      // console.log('11url: ', urlForPay)
      this.$router.push({
        path: '/payment',
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

  isFullCheckingAccount () {
    return this.data.bik && this.data.inn &&
        this.data.correspondentAccount && this.data.correspondentAccount &&
        this.data.receiverName && this.data.bankName &&
        this.data.kpp && this.data.oktmo
  }

  isHaveCheckingAccount () {
    return this.data.bik || this.data.inn ||
        this.data.correspondentAccount || this.data.correspondentAccount ||
        this.data.receiverName || this.data.bankName ||
        this.data.kpp || this.data.oktmo
  }
}
</script>

<style scoped lang="scss">
.loading {
  margin-top: 8px;
}

.button {
  width: 100%;
  height: 64px;

  text-align: center;

  background: #D5DCEF;
  border-radius: 16px;
  margin-top: 24px;

  font-weight: 700;
  font-size: 16px;
  line-height: 32px;

  /* Main-500 */

  color: #0047FF;
}

.card {

  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #1D2937;
    margin-bottom: 24px;
  }

  &__receiver-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #4C5A6B;
  }

  &__receiver-value {
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
margin-top: 8px;
    color: #4C5A6B;
  }
}

.requisite {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: 20px;
    line-height: 32px;
    color: #4C5A6B;
    margin-top: 8px;
  }

  &__value {
    font-size: 20px;
    line-height: 32px;
    color: #4C5A6B;
  }
}

.field {
  margin-top: 24px;

  &__title {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */

    /* text/header */

    color: #1D2937;
    margin-bottom: 16px;
  }

  &__input {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;

    width: 100%;
    height: 64px;

    background: #FFFFFF;
    /* border */

    border: 1px solid #ADB9C8;
    border-radius: 16px;
  }
}

</style>
