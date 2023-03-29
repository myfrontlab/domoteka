<template>
  <div>
    <div class="title">
      {{ title }}
    </div>
    <base-input-search
      ref="inputSearch"
      v-model="inputMo"
      :placeholder="placeholder"
    />
    <div class="wrap-list-addresses">
      <list-managing-organizations
        v-if="inputMo && isFocus"
        :is-loading="isLoading"
        ref="listMo"
        :managing-organizations="listMo"
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
import ListManagingOrganizations from '@/components/managing-organization/ListManagingOrganization.vue'
import BaseInputSearch from '@/components/BaseInputSearch.vue'
import searchManagingOrganization from '@/connecters/managing-organization/search-managing-organization'
import { IManagingOrganizationResponse } from '@/types/response/managing-organization'

@Component({
  components: {
    BaseInputSearch,
    ListManagingOrganizations
  }
})
export default class SearchManagingOrganizations extends Vue {
  @Prop() placeholder: string
  @Prop() title: string

  inputMo: string = ''
  listMo: IManagingOrganizationResponse[] = []
  pullMoWithDebounce
  isFocus: boolean = false
  isLoading: boolean = false

  mounted () {
    window.addEventListener('click', (event) => {
      const coordInputSearch = (this.$refs.inputSearch as any)?.$el.getBoundingClientRect()
      const coordListMo = (this.$refs.listMo as any)?.$el.getBoundingClientRect()

      const isClickIn = coord => (
        coord &&
        event.x > coord.x &&
        event.x < coord.x + coord.width &&
        event.y > coord.y &&
        event.y < coord.y + coord.height)
      this.isFocus = isClickIn(coordInputSearch) ||
                     isClickIn(coordListMo)
    })

    this.$nuxt.$on('click-item-mo', (text: string) => {
      this.inputMo = text
    })
    this.pullMoWithDebounce = debounce(async () => {
      this.isLoading = true
      try {
        this.listMo = await searchManagingOrganization(this.inputMo)
      } catch {}
      this.isLoading = false
    }, 400)
  }

  @Watch('inputMo')
  changeInputMo () {
    this.pullMoWithDebounce()
  }
}
</script>

<style scoped lang="scss">
.wrap-list-addresses {
  position: relative;
  // overflow-y: scroll;
}
.title {
  font-weight: 500;
  color: #1D2937;
  margin-bottom: 16px;

  @include bp-min($mq-tablet-min) {
    font-size: 24px;
    line-height: 32px;
  }

  @include bp-max($mq-mobile-max) {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
