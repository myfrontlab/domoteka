<template>
  <div class="content">
    <div
      v-if="isLoading"
      class="wrap-loading"
    >
      <clip-loader
        class="loading"
        color="blue"
      />
    </div>
    <div class="list">
      <button
        v-for="(mo, index) in managingOrganizations"
        :key="'mo-' + index"
        class="list__address-button"
        :class="{
          'list__item_select': index === indexSelect,
          'list__item_not-select': index !== indexSelect
        }"
        @click="handlerClickMo(mo)"
      >
        <div>
          <div class="">
            {{ mo.shortName }}
          </div>
          <div class="">
            {{ mo.legalAddress }}
          </div>
        </div>
        <!--<img
          v-if="address && address.isHouse"
          class="list__icon"
          src="@/assets/img/house.png"
          alt="no"
        >-->
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop
} from 'nuxt-property-decorator'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import { IManagingOrganizationResponse } from '@/types/response/managing-organization'

@Component({
  components: {
    ClipLoader
  }
})
export default class ListManagingOrganizations extends Vue {
  @Prop() managingOrganizations!: IManagingOrganizationResponse[]
  indexSelect = 0
  isFocus: boolean | 'clickList' = true
  @Prop() isLoading: boolean

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
          this.handlerClickMo(this.managingOrganizations[this.indexSelect])
          this.indexSelect = 0
          break
      }
      if (this.indexSelect < 0) {
        this.indexSelect = 0
      }
      if (this.indexSelect >= this.managingOrganizations.length) {
        this.indexSelect = this.managingOrganizations.length - 1
      }
    })
  }

  handlerClickMo (managingOrganization: IManagingOrganizationResponse) {
    // console.log('>>>>> ', managingOrganization)
    // if (address?.isHouse) {
    // window.open(`/catalog/house?fias_guid=${address.fiasHouse}`, '_self')
    // } else {
    this.$nuxt.$emit('click-item-mo', managingOrganization.shortName)
    // }
  }
}
</script>

<style scoped lang="scss">

.wrap-loading {
  width: 100%;
  display: flex;
  justify-content: center
}

.card {
  @include bp-min($mq-tablet-min) {
    margin-bottom: 40px;
  }

  @include bp-max($mq-mobile-max) {
    margin-bottom: 32px;
  }
}

.content {
  z-index: 10000;
  width: 100%;
  position: absolute;
  background: white;
  padding: 0px 16px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  box-shadow: 0 16px 32px #E3E7F1;
  left: 0;
  right: 0;
}

.list {
  // z-index: 10000;
  width: 100%;
  // position: absolute;
  // background: white;
  // padding: 16px;
  // border-bottom-left-radius: 32px;
  // border-bottom-right-radius: 32px;
  // box-shadow: 0 16px 32px #E3E7F1;
  max-height: 30vh;
  // left: 0;
  // right: 0;
  overflow: scroll;

  &__item {
    @include flex-between-end;
    margin-top: 10px;

    &_select {
      background: rgba(165, 181, 224, 0.2)
    }

    &_not-select {
      background: white
    }
  }

  &__address-button {
    @include flex-between-end;
    margin-top: 10px;
    width: 100%;
    font-weight: 300;
    font-size: 15px;
    line-height: 32px;
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    text-align: left;
    align-items: flex-start;
  }

  &__icon {
    width: 26px;
    height: 26px;
  }
}
</style>
