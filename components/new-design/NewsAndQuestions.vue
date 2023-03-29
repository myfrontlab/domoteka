<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <questions />
      </div>
      <div class="col-12 col-lg-6">
        <news />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Questions from '~/components/new-design/table-components/Questions.vue'
import News from '~/components/new-design/table-components/News.vue'

@Component({
  components: { News, Questions }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
.container{
  margin-top: 67px;
  @include bp-max($mq-tablet-small){
    margin-bottom: 40px;
  }
}
.row{
  @include bp-max($mq-tablet-small){
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
