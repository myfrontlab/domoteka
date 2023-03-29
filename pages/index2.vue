<template>
  <div class="container">
    <div class="row">
      <div class="col-12 px-0 px-md-3">
        <div class="content">
          <div class="content__blocks-search">
            <search-address-for-public-utilities-block />
            <search-address-for-services-block />
            <search-managing-organization-block />
          </div>
          <div class="content__block-info">
            <info-domoteka-block />
          </div>
        </div>
        <div class="wrap-news-block">
          <news-block />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'

import SearchAddressForPublicUtilitiesBlock from '@/components/blocks-search/SearchAddressForPublicUtilitiesBlock.vue'
import SearchAddressForServicesBlock from '@/components/blocks-search/SearchAddressForServicesBlock.vue'
import SearchManagingOrganizationBlock from '@/components/blocks-search/SearchManagingOrganizationBlock.vue'
import InfoDomotekaBlock from '@/components/blocks-info/InfoDomotekaBlock.vue'
import InfoFunctionsBlock from '@/components/blocks-info/InfoFunctionsBlock.vue'
import NewsBlock from '@/components/news/NewsBlock.vue'
import ListAddresses from '@/components/address/ListAddresses.vue'

@Component({
  components: {
    SearchAddressForPublicUtilitiesBlock,
    SearchAddressForServicesBlock,
    SearchManagingOrganizationBlock,
    InfoDomotekaBlock,
    InfoFunctionsBlock,
    NewsBlock,
    ListAddresses
  }
})
export default class Index extends Vue {
  mounted () {
    //
  }
}
</script>

<style scoped lang="scss">

.content {
  display: flex;
  width: 100%;

  @include bp-max($mq-tablet-min) {
    flex-wrap: wrap;
  }

  &__blocks-search {
    width: 60%;

    @include bp-max($mq-tablet-min) {
      width: 100%;
    }
  }

  &__block-info {
    width: 45%;
    display: flex;
    margin-left: 36px;

    @include bp-max($mq-tablet-min) {
      width: 100%;
      margin: 32px 0px 0px;
    }
  }
}

.wrap-news-block {
  margin-top: 48px;
  margin-bottom: 40px;
}
</style>
