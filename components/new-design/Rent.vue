<template>
  <div class="card container card_rent">
    <rent-popup v-if="showRentPopup" @close="showRentPopup = false" />
    <div class="card_rent__header card-header">
      Оплатить квартплату
    </div>
    <div class="card_rent__description card-description  pt-4">
      В веб-версии сервиса возможна оплата только по квитанции. Загрузите приложение на смартфон, чтобы иметь возможность получать и оплачивать счета ЖКУ, подавать показания счётчиков и общаться в чате вашего дома
    </div>
    <base-button class="card_rent__btn" @btn-click="showRentPopup = true">
      Оплатить по квитанции
    </base-button>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'
import BaseButton from '~/components/UI/BaseButton.vue'
import RentPopup from '~/components/new-design/popups/RentPopup.vue'

@Component({
  components: { RentPopup, BaseButton }
})
export default class MissionDomotekaBlock extends Vue {
  showRentPopup: boolean = false
}
</script>

<style scoped lang="scss">
.my-mt{
  @include bp-max(1180px){
    margin-top: 30px;
  }
}
.card {
  border-radius: 32px;
  min-height: 0;
  max-height: 380px;
  height: 380px;
  width: 100%;
  @media (max-width: 767.98px) {
    padding: 24px;
    border-radius: 0;
  }

  & + & {
    @include bp-max(1180px){
      margin-top: 32px;
    }
  }

  &_rent{
    padding:32px 45px 55px 39px;
    @media (min-width: 768px) {
    }
    &__description{
      margin-bottom: 20px;
    }
    &__btn{
      min-height: 52px;
      @include bp-min(1180px){

      }
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
</style>
