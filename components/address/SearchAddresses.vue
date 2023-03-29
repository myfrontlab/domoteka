<template>
  <div class="a">
    <div class="title">
      {{ title }}
    </div>
    <base-input-search
      ref="inputSearch"
      v-model="inputAddress"
      :placeholder="placeholder"
    />
    <div class="wrap-list-addresses">
      <list-addresses
        v-if="inputAddress && isFocus"
        ref="listAddresses"
        :addresses="listAddresses"
        @click="handlerClickAddress"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Watch,
  Prop
} from 'nuxt-property-decorator'
import { debounce } from '@/utils/debounce.util'
import ListAddresses from '@/components/address/ListAddresses.vue'
import BaseInputSearch from '@/components/BaseInputSearch.vue'
import { IAddressHouse } from '@/types/response/address'
import { serviceDadata } from '@/services/web'
@Component({
  components: {
    BaseInputSearch,
    ListAddresses
  }
})
export default class SearchAddresses extends Vue {
  @Prop() placeholder: string
  @Prop() title: string
  inputAddress: string = ''
  listAddresses: IAddressHouse[] = []
  pullAddressesWithDebounce
  isFocus: boolean = false
  mounted () {
    window.addEventListener('click', (event) => {
      const coordInputSearch = (this.$refs.inputSearch as any)?.$el.getBoundingClientRect()
      const coordListAddresses = (this.$refs.listAddresses as any)?.$el.getBoundingClientRect()
      const isClickIn = coord => (
        coord &&
        event.x > coord.x &&
        event.x < coord.x + coord.width &&
        event.y > coord.y &&
        event.y < coord.y + coord.height)
      this.isFocus = isClickIn(coordInputSearch) ||
                     isClickIn(coordListAddresses)
    })
    this.$nuxt.$on('click-item-address', (text: string) => {
      this.inputAddress = text
    })
    this.$nuxt.$on('select-address', (address: any) => {
      this.$emit('select-address', address)
    })
    this.pullAddressesWithDebounce = debounce(async () => {
      this.listAddresses = await serviceDadata.pullAddresses(this.inputAddress)
    }, 400)
  }

  handlerClickAddress (address: IAddressHouse) {
    if (address.isHouse) {
      this.$emit('select-address', address)
    } else {
      this.inputAddress = address.fullName
    }
  }

  @Watch('inputAddress')
  changeInputAddress () {
    this.pullAddressesWithDebounce()
  }
}
</script>

<style scoped lang="scss">
.wrap-list-addresses {
  position: relative;
}
.title {
  font-style: normal;
  font-weight: 500;
  color: #DBF5AB;
  margin-bottom: 11px;
  @include bp-min($mq-tablet-min) {
    font-size: 18px;
    line-height: 22px;
  }
  @include bp-max($mq-mobile-max) {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
