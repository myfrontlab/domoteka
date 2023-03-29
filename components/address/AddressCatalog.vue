<template>
  <div
    v-if="!loading"
    class="catalog"
  >
    <header class="catalog__title">
      {{ title }}
    </header>
    <div
      v-if="type === 'house'"
      class="catalog__wrap"
    >
      <div
        v-for="(house, index) in addresses"
        :key="'house-' + index"
        class="catalog__item"
      >
        <div class="catalog__links">
          <button
            class="catalog__link"
            @click="handlerClickHouse(house)"
          >
            {{ house.houseNumber }}
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="catalog__wrap"
    >
      <div
        v-for="(regions, index) of addresses"
        :key="'regions-' + index"
        class="catalog__item"
      >
        <div class="catalog__letter">
          {{ index }}
        </div>
        <div class="catalog__links">
          <a
            v-for="(region, index2) in regions"
            :key="'region-' + index2"
            class="catalog__link"
            :href="handlerClickAddress(region)"
          >
            {{ region.fullName }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="catalog"
  >
    <b-skeleton-wrapper>
      <b-skeleton
        class="catalog__title"
        width="30%"
        height="48px"
      />
      <div class="catalog__wrap">
        <div class="catalog__item">
          <div class="catalog__links">
            <b-skeleton
              v-for="(_, index) in Array(10)"
              :key="'skeleton-housse-' + index"
              width="250px"
              height="25px"
              class="catalog__skeleton"
            />
          </div>
        </div>
      </div>
    </b-skeleton-wrapper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IAddressResponse } from '@/types/response/address'
import { IHouseResponse } from '@/types/response/house'
import { TypeAddress } from '@/types/enum-address'
// import { serviceAddress } from '@/services/api'

@Component
export default class AddressCatalog extends Vue {
  @Prop({
    default: []
  }) addresses!: IAddressResponse[] | IHouseResponse[]

  @Prop() type!: TypeAddress

  @Prop() loading!: boolean
  @Prop() title!: string

  showHouse: any = {}

  handlerClickAddress (region: IAddressResponse) {
    if (region?.id) {
      return `/catalog/addresses/${region.id}`
    } else {
      return '/catalog/addresses'
    }
  }

  handlerClickHouse (house: IHouseResponse) {
    window.open(`/catalog/house/${house.id}`, '_self')
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  color: #000000;
  margin-bottom: 40px;

  @include bp-max($mq-mobile-max) {
    padding: 0 16px 0;
  }

  &__title {
    font-size: 35px;
    font-weight: 700;
    color: #292929;
    //line-height: 64px;
    margin-bottom: 40px
  }

  &__wrap {
    @include bp-min($mq-mobile-medium) {
      column-count: 2;
    }

    @include bp-min($mq-tablet-small) {
      column-count: 2;
    }
  }

  &__item {
    break-inside: avoid;
    display: flex;
    flex-direction: row;
    //background: red;

    & + & {
      //margin-top: 24px;
      margin-top: 60px;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__letter {
    min-width: 50px;
    color: #92B84D;
    font-weight: 800;
    @include bp-min($mq-tablet-min) {
      font-size: 40px;
      line-height: 32px;
      //position: relative;
      //top: 0px;
    }

    @include bp-max($mq-mobile-max) {
      font-size: 16px;
      line-height: 24px;
      //top: 0;
    }
  }

  &__link {
    font-size: 20px;
    line-height: 32px;
    background: none;
    border: none;
    color: #292929;
    font-weight: 600;

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

  &__skeleton {
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #000000;

    & + & {
      margin-top: 8px;
    }
  }
}
</style>
