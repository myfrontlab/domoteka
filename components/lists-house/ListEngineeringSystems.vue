<template>
  <div
    v-if="loading"
    class="list"
  >
    <b-skeleton class="list__skeleton-title" />
    <b-skeleton
      v-for="(_, index) in Array(10)"
      :key="'engineering-system-skeleton-' + index"
      class="list__skeleton-item"
    />
  </div>
  <article
    v-else-if="engineeringSystems.length"
    class="list"
  >
    <header class="list__title">
      Инжекторные системы
    </header>
    <div
      v-for="(overhaul, index) in engineeringSystems"
      :key="'engineering-system-' + index"
      class="list__item"
    >
      <div class="list__item-key">
        {{ overhaul.name }}
      </div>
      <div class="list__item-value">
        {{ overhaul.type }}
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { serviceAddress } from '@/services/api'
import { IItemDataHouse } from '@/types/item-data-house'

@Component
export default class ListEngineeringSystems extends Vue {
  engineeringSystems: IItemDataHouse[] = []
  loading: boolean = true

  mounted () {
    this.initList()
  }

  async initList () {
    const id = this.$route.params.id as string
    this.loading = true
    try {
      await serviceAddress.pullStructure({ id, fias: undefined })
      this.engineeringSystems = serviceAddress.getEngineeringSystems()
    } catch (error) {}
    this.loading = false
  }
}

</script>

<style scoped lang="scss">

</style>
