<template>
  <popup @close="$emit('close')">
    <div class="rent-popup">
      <div class="rent-popup_header">
        <span class="rent-popup_header__text">Оплата ЖКУ</span>
        <div class="rent-popup_header__navbar">
          <span class="navbar-item" :style="filling ? 'color: #92B84D' : ''" @click="!filling ? filling = !filling : true">Заполнение квитанции</span>
          <span class="navbar-item" :style="!filling ? 'color: #92B84D' : ''">Подтверждение оплаты</span>
        </div>
        <div class="rent-popup_divider" />
        <div class="rent-popup_body">
          <fill-out-form v-if="filling" @click="handleClick" />
          <confirm-form v-else :form="form" />
        </div>
      </div>
    </div>
  </popup>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Popup from '~/components/UI/Popup.vue'
import FillOutForm from '~/components/new-design/popups/popup-components/FillOutForm.vue'
import ConfirmForm from '~/components/new-design/popups/popup-components/ConfirmForm.vue'

@Component({
  components: { ConfirmForm, FillOutForm, Popup }
})
export default class RentPopup extends Vue {
  filling: boolean = true
  form: any = {}

  handleClick (form) {
    this.form = form
    this.filling = !this.filling
  }
}
</script>

<style lang="scss" scoped>
.rent-popup {
  padding: 30px 60px 0;
  @include bp-max($mq-desktop-min){
    padding: 10px;
  }
  &_header {
    display: flex;
    flex-direction: column;
    &__text {
      font-style: normal;
      font-weight: 700;
      font-size: 35px;
      line-height: 43px;
      color: #292929;
      margin-bottom: 15px;
    }
    &__navbar {
      margin-top: 10px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      @include bp-max($mq-desktop-min){
        display: flex;
        flex-direction: column;
      }
    }
  }

  &_divider {
    position: relative;
    width: 100%;
    margin: 32px 0 0px;
    &:before{
      width: 200%;
      position: absolute;
      transform: translateX(-50%);
      border-bottom: 1px solid #E7E7E7;
      content: '';
      left: 50%;
    }
  }
}

.navbar-item {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-right: 15px;
}
</style>
