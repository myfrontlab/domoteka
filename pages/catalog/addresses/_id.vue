<template>
  <div class="container">
    <div class="content">
      <div class="row flex-shrink-0 flex-grow-0 justify-content-between">
        <div class="col-7 flex-shrink-0">
          <div class="wrap-address-catalog card">
            <breadcrumbs :array-address="pathAddresses" />
            <br>
            <address-catalog
              v-if="addressesFound"
              :addresses="addresses"
              :type="typeAddress"
              :title="title"
              :loading="!$fetchState"
            />
            <div v-else class="not-found-address">
              Ничего не найдено!
            </div>
          </div>
        </div>
        <!-- /.col-8 -->
        <div class="col-5 flex-shrink-0 flex-grow-0">
          <div class="wrap-info-domoteka-block">
            <info-domoteka-block />
          </div>
        </div>
        <!-- /.col-4 -->
      </div>
      <!-- /.row -->
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'
import AddressCatalog from '@/components/address/AddressCatalog.vue'
import InfoStoresAppBlock from '@/components/blocks-info/InfoStoresAppBlock.vue'
import Breadcrumbs from '@/components/address/Breadcrumbs.vue'
import {
  IAddressResponse
} from '@/types/response/address'
import { serviceAddress } from '@/services/api'
import { serviceDadata } from '@/services/web'
import { TypeAddress } from '@/types/enum-address'
import global from '@/utils/global'
import { IHouseResponse } from '@/types/response/house'
import InfoDomotekaBlock from '@/components/blocks-info/InfoDomotekaBlock.vue'
import '~/assets/scss/new-design/styles.scss'

@Component({
  components: {
    AddressCatalog,
    InfoStoresAppBlock,
    Breadcrumbs,
    InfoDomotekaBlock
  }
})
export default class Catalog extends Vue {
  inputAddress: string = ''

  addressesFound = true
  isUseUpperFias = false

  pathAddresses: IAddressResponse[] = []
  addresses: IAddressResponse[] | IHouseResponse[] = []
  typeAddress: TypeAddress = TypeAddress.Region
  title: string = ''

  async fetch () {
    if (!process.browser) { global.axios = this.$axios }
    await this.pullData()

    this.typeAddress = serviceAddress.getTypeChildrenAddress()
    this.title = this.getTitleByType(this.typeAddress)
    this.pathAddresses = serviceAddress.getPathAddresses()
  }

  mounted () {
    document.title = 'Домотека Россия '
    this.pathAddresses.forEach((p) => { document.title += ' ' + p.fullName })

    if (this.isUseUpperFias) {
      alert('Дом не найден! Попробуйте воспользоваться каталогом.')
    }
  }

  async pullData () {
    this.addressesFound = true
    const id = this.$route.params.id || ''
    let fias = this.$route.query.fias_guid || ''
    if (Array.isArray(fias)) { fias = '' }
    if (!id && !fias) {
      this.addresses = await serviceAddress.pullRegions()
    } else {
      await this.pullAddresses(id, fias)
      if (serviceAddress.getTypeChildrenAddress() === TypeAddress.House) {
        this.addresses = serviceAddress.getChildrenHouses()
        this.addresses.sort((a, b) => +a.houseNumber - +b.houseNumber)
      } else {
        this.addresses = serviceAddress.getChildrenAddresses()
      }
      if (!Object.keys(this.addresses).length) {
        this.addressesFound = false
      }
    }
  }

  async pullAddresses (id: string | undefined, fias: string | undefined) {
    try {
      const address = await serviceAddress.pullAddressByFias({ id, fias })
      if (fias) {
        this.$router.replace(`/catalog/addresses/${address.id}`)
      }
    } catch (error) {
      let upperFias
      try {
        upperFias = await serviceDadata.pullFiasToUpperLevel(fias || id || '')
      } catch {
        this.$nuxt.error({ statusCode: 404, message: 'error from catalog' })
        return
      }
      if (!upperFias) {
        this.$nuxt.error({ statusCode: 404, message: 'error from catalog' })
      }
      this.isUseUpperFias = true
      await this.pullAddresses(undefined, upperFias)
    }
  }

  getTitleByType (type: TypeAddress) {
    switch (type) {
      case TypeAddress.Region:
        return 'Выберите регион'
      case TypeAddress.City:
        return 'Выберите город'
      case TypeAddress.Street:
        return 'Выберите улицу'
      case TypeAddress.House:
        return 'Выберите дом'
      default:
        return 'Выберите регион'
    }
  }
}
</script>

<style scoped lang="scss">
.row{
  @include bp-max($mq-tablet-small){
    margin-left: 0;
    margin-right: 0;
  }
}

.content {
  margin: 40px 0px;

  display: grid;
  grid-template-areas: "catalog info";
  @include bp-max($mq-tablet-min) {
    grid-template-areas: "catalog"
                        "info";
    padding: 0px 8px;
    margin: 32px 0px;
  }

  .wrap-address-catalog {
    // width: 100px;
    grid-area: catalog;
  }

  .wrap-info-domoteka-block {
    // margin-left: 36px;
    width: 526px;
    grid-area: info;

    @include bp-max($mq-tablet-min) {
      width: 100%;
      margin-bottom: 32px;
    }
    @include bp-min($mq-tablet-min) {
      margin-left: 32px;
    }
  }
}

.not-found-address {
  font-weight: normal;
  font-size: 48px;
  line-height: 64px;

  color: #1D2937;
}
</style>
