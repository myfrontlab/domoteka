<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 px-0 px-md-3">
          <div class="content">
            <!--<div class="content__blocks-search">
              <search-address-for-public-utilities-block class="public-utilities" />
              <search-address-for-services-block class="services-block" />
              <search-managing-organization-block class="organization-block" />
            </div>
            <div class="content__block-info">
              <info-domoteka-block />
            </div>-->
            <div class="public-utilities">
              <search-address-for-public-utilities-block />
            </div>
            <div class="services-block">
              <search-address-for-services-block />
            </div>
            <div class="organization-block">
              <search-managing-organization-block />
            </div>
            <div class="domoteka-block">
              <mission-domoteka-block />
              <div class="wrap-info-domoteka-block">
                <info-domoteka-block />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-reviews">
      <div class="container">
        <div class="row">
          <div class="col-12 px-0 px-md-3">
            <reviews-block />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 px-0 px-md-3">
          <div class="wrap-news-block">
            <news-block />
          </div>
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
import MissionDomotekaBlock from '@/components/blocks-info/MissionDomotekaBlock.vue'
import InfoFunctionsBlock from '@/components/blocks-info/InfoFunctionsBlock.vue'
import NewsBlock from '@/components/news/NewsBlock.vue'
import ListAddresses from '@/components/address/ListAddresses.vue'
import ReviewsBlock from '@/components/blocks-info/ReviewsBlock.vue'

@Component({
  components: {
    SearchAddressForPublicUtilitiesBlock,
    SearchAddressForServicesBlock,
    SearchManagingOrganizationBlock,
    InfoDomotekaBlock,
    InfoFunctionsBlock,
    NewsBlock,
    ListAddresses,
    ReviewsBlock,
    MissionDomotekaBlock
  }
})
export default class Index extends Vue {
  mounted () {
    //
  }
}
</script>

<style scoped lang="scss">

.public-utilities {
  grid-area: search1;
}

.services-block {
  grid-area: search2;
}

.organization-block {
  grid-area: search3;
}

.domoteka-block {
  grid-area: info;
}

.content {
  // display: flex;
  display: grid;
  grid-template-areas: "search1 info"
                        "search2 info"
                        "search3 info";
  grid-gap: 32px;
  width: 100%;

  @include bp-min($mq-tablet-min) {
    grid-template-columns: 60%;
  }

  @include bp-max($mq-tablet-min) {
    flex-wrap: wrap;
    padding: 0px 8px;
    grid-template-areas: "search1"
                        "info"
                        "search2"
                        "search3";
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

.wrap-reviews {
  margin-top: 48px;
  background: #DCE0EA;

  @include bp-max($mq-tablet-min) {
    margin-top: 32px;
  }
}

.wrap-news-block {
  margin-top: 48px;
  margin-bottom: 40px;
}

.wrap-info-domoteka-block {
  margin-top: 32px;
}
</style>
