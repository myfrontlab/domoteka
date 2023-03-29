<template>
  <div class="list">
    <button
      v-for="(address, index) in addresses"
      :key="'address-' + index"
      class="list__address-button"
      :class="{
        'list__item_select': index === indexSelect,
        'list__item_not-select': index !== indexSelect
      }"
      @click="handlerClickAddress(address)"
    >
      <div class="list__btn-wrap">
        <div>
          {{ address.fullName }}
        </div>
        <img
          v-if="address && address.isHouse"
          class="list__icon"
          src="@/assets/img/house.svg"
          alt="no"
        >
      </div>
      <div class="divider" />
    </button>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop
} from 'nuxt-property-decorator'
import { IAddressHouse } from '@/types/response/address'
// import { serviceAddress } from '@/services/api'
@Component
export default class ListAddresses extends Vue {
  @Prop() addresses!: IAddressHouse[]
  indexSelect = 0
  isFocus: boolean | 'clickList' = true
  showHouse: any = {}
  mounted () {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 40: // click up arrow
          this.indexSelect += 1
          break
        case 38: // click arrow to down
          this.indexSelect -= 1
          break
        case 13: // enter
          this.handlerClickAddress(this.addresses[this.indexSelect])
          this.indexSelect = 0
          break
      }
      if (this.indexSelect < 0) {
        this.indexSelect = 0
      }
      if (this.indexSelect >= this.addresses.length) {
        this.indexSelect = this.addresses.length - 1
      }
    })
  }

  handlerClickAddress (address: IAddressHouse) {
    this.$emit('click', address)
    // if (address?.isHouse) {
    //   // window.open(`/catalog/house?fias_guid=${address.fiasHouse}`, '_self')
    //   this.$nuxt.$emit('select-address', address)
    // } else {
    //   this.$nuxt.$emit('click-item-address', address.fullName)
    // }
  }
}
</script>

<style scoped lang="scss">
.card {
  @include bp-min($mq-tablet-min) {
    margin-bottom: 40px;
  }
  @include bp-max($mq-mobile-max) {
    margin-bottom: 32px;
  }
}
.list {
  z-index: 10000;
  width: 100%;
  position: absolute;
  background: white;
  //padding: 16px;
  border-radius: 12px;
  box-shadow: 0 16px 32px #E3E7F1;
  left: 0;
  right: 0;
  &__item {
    @include flex-between-end;
    &_select {
      background: rgba(146, 184, 77, 0.15);
    }
    &_not-select {
      background: white
    }
  }

  &__address-button:last-child .divider {
    display: none;
  }

  &__btn-wrap{
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 10px 25px;
    justify-content: space-between;
    &:hover{
      background: rgba(146, 184, 77, 0.15);
    }
  }

  &__address-button {
    @include flex-between-end;
    width: 100%;
    font-weight: 300;
    font-size: 15px;
    line-height: 32px;
    height: 52px;
    outline: none;
    border: none;
    text-align: left;
    padding: 0;
    @include bp-max($mq-tablet-small){
      height: fit-content;
    }
  }
  &__icon {
    width: 26px;
    height: 26px;
  }
}
.divider{
  display: flex;
  border-bottom: 1px solid rgba(158, 200, 85, 0.4);
  position: relative;
  height: 1px;
  width: 100%;
  left: 0;
}
</style>
