<template>
  <div
    v-if="loading"
    class="list"
  >
    <b-skeleton class="list__skeleton-title" />
    <b-skeleton
      v-for="(_, index) in Array(10)"
      :key="'overhaul-skeleton-' + index"
      class="list__skeleton-item"
    />
  </div>
  <article
    v-else-if="listOverhaul.length"
    class="list"
  >
    <header class="list__title">
      Капитальный ремонт
    </header>
    <div
      v-for="(overhaul, index) in listOverhaul"
      :key="'overhaul-' + index"
      class="list__item"
    >
      <div class="list__item-key">
        {{ overhaul.service }}
      </div>
      <div class="list__item-value">
        {{ overhaul.year }}
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { IOverhaulResponse } from '@/types/response/overhaul'
import { serviceAddress } from '@/services/api'

@Component
export default class ListOverhaul extends Vue {
  listOverhaul: IOverhaulResponse[] = []
  loading: boolean = true

  mounted () {
    this.initList()
  }

  async initList () {
    const id = this.$route.params.id as string
    this.loading = true
    try {
      this.listOverhaul = await serviceAddress.pullOverhaul({ id, fias: undefined })
    } catch (error) {}
    this.loading = false
  }
}

</script>

<style scoped lang="scss">

</style>
