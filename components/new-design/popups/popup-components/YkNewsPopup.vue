<template>
  <Popup @close="$emit('close')">
    <div class="news-popup">
      <span class="news-popup_main_header">{{ popupItem.name }}</span>
      <span class="news-popup_main_date">{{ $formatters.formatDate(popupItem.date) }}</span>
      <span class="news-popup_main_description">{{ popupItem.text }}</span>
    </div>
  </Popup>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Popup from '~/components/UI/Popup.vue'

@Component({
  components: {
    Popup
  }
})
export default class NewsPopup extends Vue {
  @Prop() popupItem: any

  mounted () {
    console.log(this.popupItem)
  }
}
</script>

<style lang="scss" scoped>
.news-popup {
  display: flex;
  flex-direction: column;
  padding: 50px 90px 10px 90px;
  &_item{
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
    max-width: 615px;
  }

  &_main{
    &_header{
      cursor: pointer;
      font-weight: 700;
      font-size: 21px;
      line-height: 26px;
      color: #292929;
      margin-bottom: 11px;
    }

    &_date{
      margin-top: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #92B84D;
      margin-bottom: 31px;
    }

    &_description{
      font-weight: 500;
      font-size: 16px;
      line-height: 145%;
      color: #676767;
    }
  }
}
</style>
