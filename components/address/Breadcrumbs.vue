<template>
  <div
    v-if="true"
    class=""
  >
    <div
      itemscope
      itemtype="http://schema.org/Category"
      class="path-addresses"
    >
      <a
        :href="handlerClickAddress()"
        class="path-addresses__link"
      >
        Россия
      </a>
      <div
        v-for="(address, index) in arrayAddress"
        :key="'address-path-' + index"
        class="path-addresses"
      >
        <div class="path-addresses__separator">
          &nbsp;<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.08258 3.54673L1.79995 0.954118C1.56033 0.681961 1.15704 0.681961 0.917418 0.954118C0.694194 1.20766 0.694194 1.60712 0.917418 1.86066L2.80098 4L0.917418 6.13934C0.694194 6.39288 0.694194 6.79234 0.917418 7.04588C1.15704 7.31804 1.56033 7.31804 1.79995 7.04588L4.08258 4.45327C4.30581 4.19973 4.30581 3.80027 4.08258 3.54673Z" fill="#92B84D" stroke="#92B84D" stroke-width="0.5"/>
          </svg>
        </div>
        <a
          :href="handlerClickAddress(address)"
          class="path-addresses__link"
        >
          {{ address.fullName }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IAddressResponse } from '@/types/response/address'

@Component
export default class Breadcrumbs extends Vue {
  @Prop() arrayAddress!: IAddressResponse[]

  handlerClickAddress (region: IAddressResponse) {
    if (region?.id) {
      return `/catalog/addresses/${region.id}`
    } else {
      return '/catalog/addresses'
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  //position: relative;
  //padding: 24px;
  //padding-left: 40px;
  //
  //height: 80px;
  //background: #FFFFFF;
  //border-radius: 24px;

  &__img-points {
    //position: absolute;
    //left: -95px;
    //top: 2px;
    //bottom: 0px;
  }
}

.path-addresses {
  @include flex-start-end;

  &__separator {
    content: '';
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #292929;

    opacity: 0.5;
    background: none;
    border: none;
    margin-left: 4px;
    margin-right: 6px;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__link {
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #292929;
    opacity: 0.5;
    background: none;
    border: none;

    @include bp-min($mq-tablet-min) {
      font-size: 20px;
      line-height: 32px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
    }

    & + & {
      margin-top: 8px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
