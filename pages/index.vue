<template>
  <section>
    <div class="container px-0">
      <div class="landing-section1-grid">
        <search-address-for-services-block class="service" :selected-house="selectedHouse" :class="{'fit-content-height': selectedHouse.shortAddress}" @open="toogleOpen" />
        <rent class="rent" />
        <info-domoteka-block class="info" />
      </div>
      <div class="row no-m">
        <div class="col-12">
          <with-app :selected-house="selectedHouse" />
        </div>
      </div>
    </div>
    <!--    <div class="container">-->
    <!--      <div class="row no-m_first-group">-->
    <!--        <div class="col-lg-7">-->
    <!--          -->
    <!--        </div>-->
    <!--        <div class="col-lg-5">-->
    <!--          <div class="wrap-info-domoteka-block">-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <div class="wrap-domoteka-for disp-none">
      <div class="container">
        <div class="row no-m">
          <div class="col-12">
            <domoteka-for />
          </div>
        </div>
      </div>
    </div>
    <div class="container disp-none">
      <div class="row no-m">
        <div class="col-12 px-0 px-md-3">
          <reviews-domoteka />
        </div>
      </div>
    </div>
    <news-and-questions />
  </section>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'

import SearchAddressForPublicUtilitiesBlock from '@/components/blocks-search/SearchAddressForPublicUtilitiesBlock.vue'
import SearchAddressForServicesBlock from '@/components/new-design/SearchAddressForServicesBlock.vue'
import SearchManagingOrganizationBlock from '@/components/blocks-search/SearchManagingOrganizationBlock.vue'
import InfoDomotekaBlock from '@/components/blocks-info/InfoDomotekaBlock.vue'
import InfoFunctionsBlock from '@/components/blocks-info/InfoFunctionsBlock.vue'
import NewsBlock from '@/components/news/NewsBlock.vue'
import ListAddresses from '@/components/address/ListAddresses.vue'
import ReviewsBlock from '@/components/blocks-info/ReviewsBlock.vue'
import Rent from '~/components/new-design/Rent.vue'
import WithApp from '~/components/new-design/WithApp.vue'
import DomotekaFor from '~/components/new-design/Domoteka-For.vue'
import ReviewsDomoteka from '~/components/new-design/ReviewsDomoteka.vue'
import NewsAndQuestions from '~/components/new-design/NewsAndQuestions.vue'
import { serviceAddress } from '~/services/api'

@Component({
  components: {
    NewsAndQuestions,
    ReviewsDomoteka,
    DomotekaFor,
    WithApp,
    Rent,
    SearchAddressForPublicUtilitiesBlock,
    SearchAddressForServicesBlock,
    SearchManagingOrganizationBlock,
    InfoDomotekaBlock,
    InfoFunctionsBlock,
    NewsBlock,
    ListAddresses,
    ReviewsBlock
  }
})
export default class Index extends Vue {
  selectedHouse: any = {
    address: null
  }

  async toogleOpen (address) {
    const fias = address.fiasHouse
    const stringAddress = address.fullName
    const shortAddress = address.shortAddress
    const street = address.street
    const streetFiasId = address.streetFiasId
    const housenum = address.houseNum
    const cityFiasId = address.cityFiasId
    await serviceAddress.getHouse({ fias, stringAddress, shortAddress, street, streetFiasId, housenum, cityFiasId })
      .then((r) => {
        this.selectedHouse = r
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
}
</script>

<style scoped lang="scss">
.landing-section1-grid{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 463px;
  grid-template-rows: auto 1fr;
  grid-template-areas: "service rent"
                       "service info";
  grid-column-gap: 31px;
  grid-row-gap: 36px;
  @include bp-max(1330px){
    grid-template-columns: 706px 463px;
  }
  @include bp-max(1180px){
    grid-template-areas: "service"
                          "rent"
                           "info";
    grid-template-columns: 100%;
  }
  .service{
    grid-area: service;
    max-width: 806px;
    max-height: 1142px;
    padding-bottom: 49px;
    @include bp-max(1330px){
      max-width: 656px;
    }
    @include bp-max(1180px){
      max-width: 100%;
      max-height: fit-content;
    }
  }
  .rent {
    grid-area: rent;
    max-width: 463px;
    max-height: 380px;
    @include bp-max(1180px){
      max-width: 100%;
    }

  }

  .info{
    grid-area: info;
    max-width: 463px;
    @include bp-max(1180px){
      max-width: 100%;
    }
  }

}
.no-m{
  @include bp-max(1330px){
    margin-left: 0;
    margin-right: 0;
  }
  &_first-group{
    //gap: 50px;
    @include bp-max($mq-tablet-small){
      gap: 20px;
    }
  }
}

.no-p{
  @include bp-max($mq-tablet-small) {
    padding: 0;
  }
}

.wrap-domoteka-for {
  margin-top: 151px;
  background: #92B84D;
  margin-bottom: 200px;
}

.disp-none{
  @include bp-max($mq-tablet-min) {
    display: none;
  }
}

.wrap-news-block {
  margin-top: 48px;
  margin-bottom: 40px;
}

.wrap-info-domoteka-block {
  margin-top: 32px;
}
.left-part{
  width: 60%;
  max-width: 806px;
}
.right-part{
  width: 40%;
  max-width: 463px;
}
.fit-content-height{
  max-height: fit-content !important;
  max-width: 90%;
}
</style>
