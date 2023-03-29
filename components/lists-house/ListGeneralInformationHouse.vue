<template>
  <div
    v-if="isLoading"
    class="list"
  >
    <b-skeleton class="list__skeleton-title" />
    <b-skeleton
      v-for="(_, index) in Array(10)"
      :key="'general-info-skeleton-' + index"
      class="list__skeleton-item"
    />
  </div>
  <article
    v-else-if="generalData.length"
    class="list"
  >
    <header class="block__title">
      Сведения о доме
    </header>
    <header class="list__title">
      Общая информация
    </header>
    <div
      v-for="(item, index) in generalData"
      :key="'general-info-' + index"
      class=""
    >
      <div
        v-if="item.type"
        class="list__item"
      >
        <div class="list__item-key">
          {{ item.name }}
        </div>
        <div class="list__item-value">
          {{ item.type }}
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { serviceAddress } from '@/services/api'
import { IItemDataHouse } from '@/types/item-data-house'

@Component
export default class ListGeneralInformationHouse extends Vue {
  generalData: IItemDataHouse[] = []
  isLoading: boolean = false

  async mounted () {
    if (!process.browser) { global.axios = this.$axios }
    this.isLoading = true
    try {
      const id = this.$route.params.id as string
      await serviceAddress.pullStructure({ id, fias: undefined })
      this.generalData = serviceAddress.getGeneraglData()
    } catch (error) {}

    this.isLoading = false
  }
}

</script>

<style scoped lang="scss">

</style>
