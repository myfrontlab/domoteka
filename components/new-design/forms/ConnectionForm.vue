<template>
  <div class="connection">
    <div class="connection_header">
      Или оставьте свои контакты <br>
      для подключения вашего дома к Домотеке
    </div>
    <form class="card form" @submit.prevent="() => {$emit('submit-form'); sendData()}">
      <div class="grid mb-3">
        <input
          v-model="formData.fio"
          placeholder="Фамилия Имя Отчество"
          class="new-design_input"
        >
        <input
          v-model="formData.position"
          placeholder="Должность"
          class="new-design_input"
        >
      </div>
      <div class="grid">
        <input
          v-model="formData.company"
          placeholder="Представляемая УК"
          class="new-design_input"
        >
        <input
          v-model="formData.phone"
          placeholder="Номер телефона"
          class="new-design_input"
        >
      </div>
      <div class="grid mt-4">
        <base-button>
          Отправить заявку
        </base-button>
        <div class="connection_img">
          <img
            src="@/assets/img/domoteka-for-images/connection-1.png"
            width="387"
            height="274"
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import BaseButton from '~/components/UI/BaseButton.vue'

@Component({
  components: { BaseButton }
})
export default class extends Vue {
  formData = {
    fio: '',
    position: '',
    company: '',
    phone: ''
  }

  sendData () {
    axios.post('https://domoteka.online/api/web/contact/mo', this.formData)
  }
}
</script>

<style lang="scss" scoped>
.form{
  width: 100%;
  max-width: 1061px;
  position: absolute;
  padding: 44px 59px 53px;
  box-shadow: 0 4px 49px rgba(0, 0, 0, 0.08);
  transform: translate(0, -120px);
  &:before{
    content: '';
    position: absolute;
    left: -10px;
    right: -10px;
    bottom: -10px;
    top: -10px;
    //background: rgba(146, 184, 77, 0.25);
    border: 10px solid rgba(146, 184, 77, 0.25);
    border-radius: 33px;
    pointer-events: none;
    z-index: 1;
  }
}

.connection{
  position: relative;
  @include bp-max(1400px){
    max-width: 800px;
    margin: 0 auto;
  }
  &_header{
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 163px;
    @include bp-max($mq-tablet-medium){
      margin-bottom: 133px;
    }
  }
  &_img{
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(156px, 46px);
    z-index: 5;
    @include bp-max(1300px) {
      display: none;
    }
  }
}

.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @include bp-max($mq-tablet-medium){
    grid-template-columns: 1fr;
  }
}
</style>
