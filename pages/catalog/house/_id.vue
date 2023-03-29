<template>
  <div class="container">
    <div class="row px-0 px-lg-4 m-0">
      <div class="col-lg-8 col-12 px-0 pr-lg-4">
        <div v-if="!$fetchState">
          <b-skeleton class="skeleton-address" />
          <b-skeleton class="skeleton-company" />
        </div>
        <div
          v-else-if="showMO.id"
          class="company-container"
          itemscope
          itemtype="http://schema.org/Organization"
        >
          <div class="company-container__content">
            <div
              itemprop="name"
              class="text-company"
            >
              {{ showMO.shortName }}
            </div>
            <div class="connected">
              <img
                class="connected__image"
                src="@/assets/img/connected.png"
                alt="no"
              >
              <div class="connected__text">
                Подключена к системе Домотека
              </div>
            </div>
            <!--<mobile-app-info-block :short-name="showMO.shortName" />-->
            <news-house-block :posts="posts" />
            <outages-house-block :outages="outages" />
            <list-houses
              v-if="showMO.systemSite"
              :houses="showMO.houses"
            />
            <disclosure-information-block :disclosuries="disclosuries" />
            <list-contact-information :managing-organization="showMO" />
            <list-general-information-house />
          </div>
          <div class="company-container__other">
            <div class="wrap-requisite-for-pay-block">
              <requisite-for-pay-block :data="checkingAccount" />
            </div>
            <div class="wrap-info-domoteka-block desktop-content">
              <info-domoteka-block />
            </div>
          </div>
        </div>
        <div
          v-else-if="showHouse"
          itemscope
          itemtype="http://schema.org/Organization"
        >
          <HouseNotConnectBlock
            :house="showHouse"
            :managing-organization="managingOrganization"
          />
          <news-house-block :posts="posts" />
          <disclosure-information-block :disclosuries="disclosuries" />
          <list-contact-information :managing-organization="managingOrganization" />
          <list-general-information-house />
          <list-construction-elements />
          <list-engineering-systems />
          <list-overhaul />
        </div>
      </div>
      <div class="col-lg-4 col-12 px-0 pl-lg-4 d-flex flex-column gap-40">
        <rent class="rent w-100" />
        <info-domoteka-block class="w-100 my-0 mx-auto" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InfoCompanyBlock from '@/components/blocks-house/InfoCompanyBlock.vue'
import MobileAppInfoBlock from '@/components/blocks-house/MobileAppInfoBlock.vue'
import ListGeneralInformationHouse from '@/components/lists-house/ListGeneralInformationHouse.vue'
import ListConstructionElements from '@/components/lists-house/ListConstructionElements.vue'
import ListEngineeringSystems from '@/components/lists-house/ListEngineeringSystems.vue'
import ListOverhaul from '@/components/lists-house/ListOverhaul.vue'
import DisclosureInformationBlock from '@/components/blocks-house/DisclosureInformationBlock.vue'
import NewsHouseBlock from '@/components/blocks-house/NewsHouseBlock.vue'
import global from '@/utils/global'
import OutagesHouseBlock from '@/components/blocks-house/OutagesHouseBlock.vue'
import ListContactInformation from '@/components/lists-house/ListContactInformation.vue'
import ListHouses from '@/components/lists-house/ListHouses.vue'
import getManagingOrganization from '@/connecters/managing-organization/get-managing-organization'
import { serviceAddress } from '@/services/api'
import HouseNotConnectBlock from '@/components/blocks-house/HouseNotConnectBlock.vue'
import RequisiteForPayBlock from '@/components/managing-organization/RequisiteForPayBlock.vue'
import InfoDomotekaBlock from '@/components/blocks-info/InfoDomotekaBlock.vue'
import Rent from '~/components/new-design/Rent.vue'

@Component({
  components: {
    ListContactInformation,
    OutagesHouseBlock,
    DisclosureInformationBlock,
    ListOverhaul,
    ListConstructionElements,
    ListGeneralInformationHouse,
    InfoCompanyBlock,
    Rent,
    NewsHouseBlock,
    MobileAppInfoBlock,
    ListEngineeringSystems,
    ListHouses,
    HouseNotConnectBlock,
    RequisiteForPayBlock,
    InfoDomotekaBlock
  }
})
export default class Company extends Vue {
  showHouse: any = {}
  showMO: any = {}
  managingOrganization: any = {}
  outages: any[] = []
  posts: any[] = []
  disclosuries: any[] = []
  checkingAccount: any = {}

  async asyncData (context) {
    if (!process.browser) { global.axios = context.$axios }

    const fias = context.query.fias_guid
    if (fias) {
      const house = await serviceAddress.pullHouse({ fias, id: undefined })
      if (!house) {
        context.redirect(`/catalog/addresses?fias_guid=${fias}`)
      }
      // @ts-ignore
      context.redirect(`/catalog/house/${house.id}`)
      return
    }

    const id: string | null = context.params.id
    if (!id) {
      // @ts-ignore
      context.app.$nuxt.error({ statusCode: 404, message: 'error' })
      return
    }
    const house = serviceAddress.pullHouse({ id, fias: undefined })
    if (!house) {
      context.redirect(`/catalog/addresses/${id}`)
    }
  }

  async fetch () {
    if (!process.browser) { global.axios = this.$axios }
    await this.initDataHouse()
  }

  async initDataHouse () {
    // @ts-ignore
    const id: string | null = this.$route.params.id
    if (!id) {
      this.$nuxt.error({ statusCode: 404, message: 'error' })
      return
    }
    this.showHouse = await serviceAddress.pullHouse({ id, fias: undefined })

    this.managingOrganization = this.showHouse.managingOrganization

    const systemSite = this.showHouse.managingOrganization.systemSite
    if (systemSite) {
      await getManagingOrganization(systemSite).then((response) => {
        this.showMO = response

        this.checkingAccount = {
          ...this.showMO.checkingAccount
        }
        if (!this.checkingAccount.receiverName) {
          this.checkingAccount.receiverName = this.showMO?.shortName
        }
        if (!this.checkingAccount.kpp) {
          this.checkingAccount.kpp = this.showMO?.kpp
        }
        if (!this.checkingAccount.inn) {
          this.checkingAccount.inn = this.showMO?.inn
        }
        if (!this.checkingAccount.oktmo) {
          this.checkingAccount.oktmo = this.showMO?.oktmo
        }
      }).catch(() => {
        this.$nuxt.error({ statusCode: 404, message: 'error' })
      })
      this.disclosuries = this.showMO?.disclosure_categories || []
      this.posts = this.showMO?.posts || []
      this.outages = this.showMO?.outages || []
    } else {
      this.disclosuries = this.managingOrganization?.disclosureCategories || []
      this.posts = this.showHouse?.posts || []
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  @include bp-min(1200px) {
    min-height: 1000px;
  }
}

.wrap-info-domoteka-block {
  margin-top: 40px;

}

.text-address {
  font-weight: 300;
  color: #000000;

  @include bp-min($mq-tablet-min) {
    font-size: 20px;
    line-height: 32px;
  }

  @include bp-max($mq-mobile-max) {
    font-size: 16px;
    line-height: 24px;
    padding: 0 16px 0
  }
}
.text-company {
  font-weight: normal;
  margin-bottom: 32px;

  color: #1D2937;

  @include bp-min($mq-tablet-min) {
    width: 100%;
    font-size: 32px;
    line-height: 48px;
  }

  @include bp-max($mq-mobile-max) {
    width: 100%;
    font-size: 28px;
    line-height: 32px;
    padding: 0 16px 0
  }
}
.company-container {
  display: grid;
  margin: 40px 0px;
  position: relative;
  grid-gap: 40px;
  grid-template-areas: "contentt other";

  @include bp-max($mq-tablet-min) {
    grid-template-areas: "other"
                          "contentt";
    padding: 0px 8px;
  }

  @include bp-min($mq-tablet-min) {
    grid-template-columns: 1fr 0fr;
  }

  &__content {
    width: 100%;
    grid-area: contentt;
  }

  &__other {
    grid-area: other;
    width: 526px;
    @include bp-max($mq-tablet-min) {
      width: 100%;
    }
  }
}
.connected {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  @include bp-max($mq-mobile-max) {
    padding: 0 16px 0
  }

  &__image {
    width: 28.58px;
    height: 22.01px;
    margin-right: 16px;
  }

  &__text {
    font-weight: 300;
    color: #000000;
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
.skeleton-address {
  @include bp-min($mq-tablet-min) {
    height: 20px;
    width: 40vw;
  }

  @include bp-max($mq-mobile-max) {
    height: 16px;
    width: 40vw;
    margin-left: 16px;
  }
}
.skeleton-company {
  @include bp-min($mq-tablet-min) {
    height: 32px;
    width: 40vw;
    margin-bottom: 40px;
  }

  @include bp-max($mq-mobile-max) {
    height: 28px;
    width: 40vw;
    margin-left: 16px;
    margin-bottom: 32px;
  }
}

.w-100 {
  width: 100%;
}

.gap-40 {
  gap: 40px;
}

.rent {
  min-height: 0;
  max-height: 500px;
  height: fit-content;
}
</style>
