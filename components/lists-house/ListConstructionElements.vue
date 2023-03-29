<template>
  <div
    v-if="loading"
    class="list"
  >
    <b-skeleton class="list__skeleton-title" />
    <b-skeleton
      v-for="(_, index) in Array(10)"
      :key="'construction-element-sleketon-' + index"
      class="list__skeleton-item"
    />
  </div>
  <article
    v-else-if="listConstructionElements.length"
    class="list"
  >
    <header class="list__title">
      Конструктивные элементы дома
    </header>
    <div
      v-for="(overhaul, index) in listConstructionElements"
      :key="'construction-element-' + index"
      class=""
    >
      <div
        v-if="overhaul.value"
        class="list__item"
      >
        <div class="list__item-key">
          {{ overhaul.key }}
        </div>
        <div class="list__item-value">
          {{ overhaul.value }}
        </div>
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
  listConstructionElements: IOverhaulResponse[] = []
  loading: boolean = true

  mounted () {
    this.initList()
  }

  async initList () {
    const id = this.$route.params.id
    this.loading = true
    try {
      this.listConstructionElements = await serviceAddress.pullConstructionElements({ id, fias: undefined })
    } catch (error) {}
    this.loading = false
  }
}

</script>

<style scoped lang="scss">

</style>
