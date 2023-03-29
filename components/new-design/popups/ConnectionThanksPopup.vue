<template>
  <popup @close="$emit('close')">
    <div class="thanks-popup card container">
      <span class="thanks-popup__title">
        Спасибо, ваша заявка принята.
      </span>
      <span class="thanks-popup__description">Мы свяжемся с вами в ближайшее время</span>
      <base-button class="thanks-popup__btn" @btn-click="$emit('close')">
        Вернутся на главную
      </base-button>
    </div>
  </popup>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Popup from '~/components/UI/Popup.vue'
import BaseButton from '~/components/UI/BaseButton.vue'

@Component({
  components: { BaseButton, Popup }

})
export default class ClaimThanksPopup extends Vue {
}
</script>

<style lang="scss" scoped>
.thanks-popup {
  display: flex;
  flex-direction: column;
  &__title {
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    color: #292929;
  }

  &__description {
    margin-top: 8px;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: rgba(41, 41, 41, 0.7);
  }

  &__btn{
    margin: 31px 31px 0;
  }
}

</style>
