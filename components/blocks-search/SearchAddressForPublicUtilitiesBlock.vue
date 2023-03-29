<template>
  <div class="card container">
    <input
      id="qr-input-file"
      type="file"
      accept="image/*"
    >

    <div class="container__data">
      <div class="container__info">
        <div class="container__title">
          Оплатите коммунальные услуги по квитанции
        </div>
        <div class="container__description desktop-content">
          Если на вашей квитанции есть QR код, то зайдите на domoteka.online с вашего мобильного телефона и используйте камеру для сканирования. Чтобы перейти: наведи камеру на код.
        </div>
        <div class="container__description mobile-content">
          Если на вашей квитанции есть QR код, то используйте камеру для сканирования.
        </div>
      </div>
      <div class="container__image-wrap desktop-content">
        <img
          class="qr-code-image"
          src="@/assets/img/qr-code-store.png"
          alt="no"
        >
      </div>
    </div>

    <div class="mobile-content">
      <video
        id="v"
        :class="{'not-scanning': !isScanning }"
      />
      <button
        class="container__button mobile-content"
        @click="handlerClickScan"
      >
        <div>
          {{ isScanning ? 'Отменить' : 'Сканировать qr' }}
        </div>
      </button>
    </div>

    <div class="container__wrap-search-addresses">
      <search-addresses
        title="Начните вводить адрес, чтобы мы сами заполнили реквизиты"
        placeholder="Aдрес, начиная с города"
        @select-address="handlerClickAddress"
      />
    </div>
    <a
      href="/requisite"
      class="container__link"
    >
      Указать реквизиты самостоятельно
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
// import QrScanner from 'qr-scanner'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'

// import { StreamBarcodeReader } from 'vue-barcode-reader'
import QrScanner from 'qr-scanner'
import SearchAddresses from '@/components/address/SearchAddresses.vue'

@Component({
  components: {
    SearchAddresses,
    BeatLoader
    // StreamBarcodeReader
  }
})
export default class SearchBlock extends Vue {
  isScanning = false
  qrScanner = undefined

  mounted () {
    const videoElem = document.getElementById('v')
    // @ts-ignore
    this.qrScanner = new QrScanner(
      // @ts-ignore
      videoElem,
      (result) => {
        const receipt = this.parserReceipt(result.data)

        // let str = ''
        // for (const key in receipt) {
        //   str += '- ' + key + ' - ' + receipt[key]
        // }

        // alert(`receipt: ${str}`)
        // @ts-ignore
        this.$router.push({
          path: '/requisite',
          query: {
            fio: receipt.fio,
            amount: receipt.price,
            bik: receipt.bik,
            inn: receipt.inn,
            rs: receipt.checkingAccount,
            ls: receipt.personalAccount,
            receiverName: receipt.receiverName,
            ks: receipt.correspondentAccount,
            bankName: receipt.bankName,
            kpp: receipt.kpp,
            oktmo: receipt.oktmo
          }
        })
      }, {
        highlightScanRegion: true,
        highlightCodeOutline: true
      }
    )
  }

  handlerClickAddress (address: any) {
    window.open(`/requisite?fias_guid=${address.fiasHouse}`, '_self')
  }

  handlerClickScan () {
    if (this.isScanning) {
      // @ts-ignore
      this.qrScanner.stop()
    } else {
      // @ts-ignore
      this.qrScanner.start()
    }
    this.isScanning = !this.isScanning
  }

  public parserReceipt (content) {
    const items = content.split('|')
    const lastName = this.findValueBykey(items, 'lastName')
    const firstName = this.findValueBykey(items, 'firstName')
    const middleName = this.findValueBykey(items, 'middleName')
    let fio = ''
    if (firstName || middleName || lastName) {
      fio = lastName + ' ' + firstName + ' ' + middleName
    }
    return {
      fio,
      receiverName: this.findValueBykey(items, 'Name'),
      inn: this.findValueBykey(items, 'PayeeINN'),
      bik: this.findValueBykey(items, 'BIC'),
      checkingAccount: this.findValueBykey(items, 'PersonalAcc'),
      personalAccount: this.findValueBykey(items, 'PersAcc'),
      apartment: this.findValueBykey(items, 'Apartment'),
      price: this.findValueBykey(items, 'Sum'),
      guid: this.findValueBykey(items, 'Guid'),
      correspondentAccount: this.findValueBykey(items, 'CorrespAcc'),
      bankName: this.findValueBykey(items, 'BankName'),
      kpp: this.findValueBykey(items, 'KPP'),
      oktmo: this.findValueBykey(items, 'OKTMO'),
      lastName,
      firstName,
      middleName
    }
  }

  private findValueBykey (items: string[], key: string): string | undefined {
    key += '='
    key = key.toLowerCase()
    const lengthKey = key.length
    const item: string | undefined = items.find((item: string) => {
      return item.toLowerCase().includes(key)
    })

    if (!item) {
      return ''
    }
    return item.slice(lengthKey)
  }
}
</script>

<style lang="scss" scoped>
.not-scanning {
  width: 0px;
  height: 0px;
  margin: -20px;
  padding: 0px;
}
#v {
  width: 100%;
  background: transparent;
  border-radius: 10px;
  margin-top: 24px;
}
#qr-input-file {
  display: none
}
.loading {
  margin-top: 10px
}
.card {
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
}

.qr-code-image {
  width: 132px;
  height: 132px;
}

.container {
  &__title {
    color: #1D2937;
    font-weight: bolder;

    @include bp-min($mq-tablet-min) {
      font-size: 24px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__button {
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */

    text-transform: uppercase;

    color: #FFFFFF;
    width: 100%;
    height: 64px;
    // margin-top: 24px;
    background: #0047FF;
    border-radius: 16px;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center
  }

  &__data {
    display: flex;
  }

  &__info {
    width: 100%;
    margin-right: 24px;
  }

  &__wrap-search-addresses {
    margin-top: 16px;
  }

  &__title-search {
    margin-top: 24px;
    font-weight: 300;
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__description {
    margin-top: 8px;
    font-weight: 300;
    color: #1D2937;

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

  &__form {
    @include bp-min($mq-tablet-min) {
      margin-top: 40px;
    }

    @include bp-max($mq-mobile-max) {
      margin-top: 24px;
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
