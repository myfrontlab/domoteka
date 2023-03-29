<template>
  <div>
    <div class="faqs">
      <faq-item
        v-for="(faq, i) in faqs"
        :key="faq.id"
        :faq="faq"
        :index="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FaqItem from '~/components/new-design/Faq/FaqItem.vue'

@Component({
  components: { FaqItem }
})
export default class extends Vue {
  @Prop() faqs!: any

  toggleOpen (index) {
    this.$emit('open', index)
  }
}
</script>

<style lang="scss">
.faqs{
  display: flex;
  flex-direction: column;
}
</style>
