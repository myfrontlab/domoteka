<template>
  <div class="card container">
    <connection-thanks-popup v-if="showClaimPopup" @close="showClaimPopup = false" />
    <div v-if="!selectedHouse.shortAddress" class="container card-title search-header">
      Найдите все услуги, доступные <br> в вашем доме
    </div>
    <div v-else class="container card-title search-header">
      Дом по ул. {{ selectedHouse.shortAddress }}
    </div>

    <div class="container__wrap-search-addresses" :class="{'selected-house-wrapper': selectedHouse.shortAddress}">
      <img
        src="@/assets/img/icon/triangle.svg"
        class="triangle"
        :class="{'selected-triangle': selectedHouse.shortAddress}"
        width="36"
        height="28"
      >
      <div v-if="!selectedHouse.shortAddress">
        <search-addresses
          title="Введите ваш адрес"
          placeholder="Например, “Уфа, Достоевского 103”"
          @select-address="openHouse"
        />
        <div class="container__search-house">
          <nuxt-link
            to="/catalog/addresses"
            class="container__link"
          >
            Найти дом в адресной книге&nbsp;
          </nuxt-link>
          <img src="@/assets/img/icon/arrow-2.svg" style="margin-top: 16px">
        </div>
      </div>
      <div v-else>
        <available-services :services="services" :mo-id="selectedHouse.managingOrganization.id" />
      </div>
    </div>
    <div v-if="!selectedHouse.shortAddress">
      <div class="container card-title second">
        <span>
          Не нашли свой дом?
        </span>
      </div>
      <p class="container card-description descr">
        Вы можете продвигать сервисы и услуги Домотеки в своём доме и иметь <br> пассивный доход, получая процент с продаж* или помочь своей УК <br>
        с подключением к сервису
      </p>
      <div class="container__claim">
        <claim @claim="showClaimPopup = true" />
      </div>
    </div>
    <div v-else>
      <div class="selected-house-info">
        <house-news v-if="outages.length" :outages="outages" :selected-house="selectedHouse" />
        <yk-news v-if="selectedHouse.posts.length" :posts="selectedHouse.posts" />
        <yk-information :yk="selectedHouse.managingOrganization" />
        <house-information :selected-house="selectedHouse" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import connecterAddress from '@/connecters/address'
import SearchAddresses from '@/components/address/SearchAddresses.vue'
import Claim from '~/components/new-design/Claim.vue'
import ConnectionThanksPopup from '~/components/new-design/popups/ConnectionThanksPopup.vue'
import AvailableServices from '~/components/new-design/house-components/AvailableServices.vue'
import HouseNews from '~/components/new-design/house-components/HouseNews.vue'
import YkNews from '~/components/new-design/house-components/YkNews.vue'
import YkInformation from '~/components/new-design/house-components/YkInformation.vue'
import HouseInformation from '~/components/new-design/house-components/HouseInformation.vue'

@Component({
  components: {
    HouseInformation,
    YkInformation,
    YkNews,
    HouseNews,
    AvailableServices,
    ConnectionThanksPopup,
    Claim,
    SearchAddresses
  }
})
export default class SearchBlock extends Vue {
  showClaimPopup: boolean = false
  addressForServices: any

  services: any = []
  outages: any = []

  @Prop() selectedHouse: any
  async openHouse (address: any) {
    const { available_services, outages } = (await connecterAddress.getOutages({
      fias: address.fiasHouse,
      stringAddress: address.fullName,
      shortAddress: address.shortAddress,
      street: address.street,
      streetFiasId: address.streetFiasId,
      housenum: address.houseNum,
      cityFiasId: address.cityFiasId
    }))
    this.services = available_services
    this.outages = outages
    this.$emit('open', address)
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  padding: 0;
}

.search-header{
  padding: 34px 45px 40px;
}

.descr{
  padding: 13px 10px 0 42px;
}

.container {
  &__claim{
    margin-top: 76px;
    padding: 0 27px 0px 27px;
    @include bp-max(1180px) {
      padding: 0 35px 5px 43px;
    }
  }
  &__description{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    color: #676767;
    padding: 0 40px;
  }

  &__wrap-search-addresses {
    position: relative;
    background: #9EC854;
    background-size: 100%;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 34px 22px 44px;
    border-radius: 0 0 33px 33px;
    @include bp-max($mq-tablet-min){
      padding: 0 34px;
      border-radius: 0;
    }
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
    font-weight: 300;
    color: #1D2937;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
      margin-top: 0;
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

  &__search-house{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  &__link {
    display: block;
    margin-top: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;

    @include bp-min($mq-tablet-min) {
      font-size: 18px;
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

.second{
  padding: 40px 10px 0 43px;
}
.triangle{
  position: absolute;
  top: 0;
  transform: translate(0, -20px);
  @include bp-max($mq-tablet-min){
    transform: translate(40px, -20px);
  }
}

.selected-triangle{
  position: absolute;
  top: 0;
  transform: translate(44px,-20px);
  @include bp-max($mq-tablet-min){
    transform: translate(84px, -20px);
  }
}

.selected-house-wrapper{
  height: 382px !important;
  padding-right: 0;
  display: flex;
  justify-content: flex-start;
  padding-left: 0;
}
</style>
<style  lang="scss">
.selected-house-info{
  padding-left: 44px;
  padding-right: 69px;
  & h2{
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    color: #292929;
    @include bp-max($mq-mobile-medium){
      font-size: 24px;
    }
  }

  & span{
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    color: #676767;
    @include bp-max($mq-mobile-medium){
      font-size: 18px;
    }
  }

  & .mutted{
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: rgba(103, 103, 103, 0.5);
    @include bp-max($mq-mobile-medium){
      font-size: 14px;
    }
  }

  & .yk{
    &-header{
      font-weight: 500;
      color: #292929;
    }
    &-description{
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      @include bp-max($mq-mobile-medium){
        font-size: 18px;
      }
    }
  }
}
</style>
