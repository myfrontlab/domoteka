<template>
  <div class="services">
    <popup v-if="isPopupShown" @close="close()">
      <div v-if="!isSubmitted" class="service-popup">
        <h1>Оформление заявки</h1>
        <div class="d-flex row mb-4">
          <div class="col-md-6 col-12 mb-4 mb-md-0">
            <p class="input-label">
              Услуга:
            </p>
            <div class="w-100 input-form select-form">
              <div role="button" class="d-flex gap-20" @click="isListShown = !isListShown">
                <img :src="chosenService.icon ? chosenService.icon : require('@/assets/img/house.png')" alt="" height="60" width="60">
                <div class="d-flex flex-column justify-content-center">
                  <p class="m-0 p-0 select-form__text py-1">
                    Наименование: <span>{{ chosenService.name }}</span>
                  </p>
                  <p v-if="chosenService.price" class="m-0 p-0 select-form__text py-1">
                    Стоимость: <span>{{ chosenService.price }} ₽ в час</span>
                  </p>
                </div>
                <img
                  src="~/assets/img/icon/green_arrow_down.svg"
                  class="d-none d-sm-block"
                  style="position:absolute; right: 35px; bottom: 35px;"
                  height="5.5"
                  width="11"
                  alt=""
                >
              </div>
              <div class="select-form__list" :class="{'height': isListShown}">
                <div v-for="(service, i) in services" :key="i + Date.now()" class="d-flex select-item" :class="service.id === chosenService.id ? 'chosen' : ''" @click="handleServiceClick(service)">
                  <div class="d-flex w-100 justify-content-between align-items-center pt-3">
                    <p class="select-item__name">
                      {{ service.name }}
                    </p>
                    <p v-if="service.price" class="select-item__text">
                      {{ service.price }} ₽ в час
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <p class="input-label">
              Номер телефона:
            </p>
            <input type="text" class="w-100 input-form" placeholder="Введите контактный номер телефона">
          </div>
        </div>
        <div class="mb-4">
          <p class="input-label">
            Описание:
          </p>
          <textarea type="text" class="w-100 input_description input-form" placeholder="Введите описание заявки" />
        </div>
        <p class="mb-4 attention-text">
          <span>Внимание!</span> Итоговая стоимость заявки будет определена мастером по результату осмотра
          с учетом минимальной стоимости работ - <span>1500 ₽</span>
        </p>
        <base-button theme="green" class="services_btn" @click.native="submitApplication()">
          Оформить заявку
        </base-button>
      </div>
      <div v-else class="service-popup app-popup d-flex flex-row">
        <div>
          <img class="d-none d-lg-block" src="~/assets/img/app-images/device1.png" height="700" alt="">
        </div>
        <div class="d-flex flex-column app-popup__text">
          <h2>Для подтверждения заявки<br> воспользуйтесь приложением</h2>
          <p>Регистрация в приложении займет не более минуты,<br> после чего вам будут доступны:</p>
          <ul>
            <li> <img src="~/assets/img/icon/green_check.svg" alt=""> Подача показаний счетчиков</li>
            <li> <img src="~/assets/img/icon/green_check.svg" alt=""> Получение и оплата счетов ЖКУ</li>
            <li> <img src="~/assets/img/icon/green_check.svg" alt=""> Оповещения об отключениях</li>
            <li> <img src="~/assets/img/icon/green_check.svg" alt=""> Новости вашего дома и района</li>
            <li> <img src="~/assets/img/icon/green_check.svg" alt=""> Чат вашего дома</li>
            <li> <img src="~/assets/img/icon/green_check.svg" alt=""> Голосования среди жителей</li>
          </ul>
          <div class="d-none d-md-flex app-popup__qr align-items-center">
            <img src="~/assets/img/qr_mock.png" alt="">
            <p>Для установки<br> приложения наведите<br> камеру вашего<br> телефона на QR код</p>
          </div>
          <div class="d-flex d-md-none app-popup__stores justify-content-center">
            <base-button theme="green" class="services_btn">
              Перейти к приложению
            </base-button>
          </div>
        </div>
      </div>
    </popup>
    <h2 class="services__title pt-4 pt-md-0" style="position: sticky; left: 0;">
      Доступные услуги
    </h2>
    <div v-if="services.length" class="services__row">
      <div v-for="(service, i) in services" :key="i + Date.now()" class="services__card" @click="handleServiceChoice(service)">
        <img
          :src="service.icon ? service.icon : require('@/assets/img/house.png')"
          class="services__img"
          width="126"
          height="121"
        >
        <div class="services__card-text">
          <span class="services__name">{{ service.name }}</span>
          <span v-if="service.price" class="services__price">{{ service.price }} ₽ в час</span>
        </div>
      </div>
    </div>
    <div v-else class="services__row d-flex pl-5 pr-3">
      <div class="empty_service d-md-block d-none">
        <img src="~/assets/img/icon/circle_with_right_arrow.svg" alt="">
      </div>
      <div class="empty_text p-0 pt-md-5 pl-md-5">
        <h2>В вашем доме пока нет доступных услуг</h2>
        <h3 class="mt-3">
          Мы работаем над тем, чтобы в вашем доме появились услуги
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import Popup from '~/components/UI/Popup.vue'
import BaseButton from '~/components/UI/BaseButton.vue'
@Component({
  components: { Popup, BaseButton }
})
export default class AvailableServices extends Vue {
  @Prop() services: any
  @Prop() moId: number

  @Prop() adr: any

  chosenService = undefined
  isPopupShown = false
  isListShown = false
  isSubmitted = false

  handleServiceChoice (service: any) {
    this.isPopupShown = true
    this.chosenService = service
  }

  handleServiceClick (service: any) {
    this.chosenService = service
    this.isListShown = false
  }

  submitApplication () {
    this.isSubmitted = true
  }

  close () {
    this.isPopupShown = false
    this.isSubmitted = false
  }
}
</script>

<style lang="scss" scoped>
.services{
  overflow-x: scroll;
  overflow-y: visible;
  &::-webkit-scrollbar {
    height: 12px;
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
    margin: 0 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff43;
    border-radius: 5px;
  }
  padding-bottom: 30px;
  &__title {
    padding-left: 44px;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    margin-bottom: 32px;
    color: #FFFFFF;
    z-index: 1;
  }

  &__row{
    display: flex;
    flex-direction: row;
    column-gap: 13px;
    z-index: 9999;
    background: transparent;
  }

  &__card{
    background: #FFFFFF;
    box-shadow: 0px 4px 49px 0px #00000014;
    border-radius: 19px;
    padding: 11px 11px 9px;
    min-width: 148px;
    display: grid;
    grid-template-columns: 1fr;
    transition: all 0.1s ease-in-out;
    &:last-child{
      margin-right: 30px;
    }
    &:first-child{
      margin-left: 44px;
    }

    &-text{
      display: flex;
      flex-direction: column;
    }
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  &__name{
    margin: 9px 0 3px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #292929;
    @media (max-width: 992px) {
      font-size: 15px;
    }
    @media (max-width: 500px) {
      font-size: 12px
    }
  }

  &__price{
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #292929;
    opacity: 0.6;
    @media (max-width: 992px) {
      font-size: 13px;
    }
    @media (max-width: 500px) {
      font-size: 10px
    }
  }

  &__img{
    border-radius: 13px;
  }
}

h1 {
  font-size: 35px;
  font-weight: 700;
  line-height: 43px;
  color:#292929;
  margin-bottom: 28px;
  @media (max-width: 992px) {
      font-size: 20px;
    }
}

.service-popup {
  width: 100%;
  display: flex;
  overflow: auto;
  height: 90%;
  flex-direction: column;
  padding: 30px;
  @media (max-width: 992px) {
    padding: 0 30px;
  }

  .input-label {
    color: #676767;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    @media (max-width: 992px) {
      font-size: 15px;
    }
    @media (max-width: 500px) {
      font-size: 12px
    }
  }

  .attention-text {
    width: 65%;
    color: #676767;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    span {
      font-weight: 700;
    }
    @media (max-width: 992px) {
      font-size: 13px;
    }
    @media (max-width: 500px) {
      font-size: 10px
    }
  }
}

.w-100 {
  width: 100%;
}

.input-form {
  height: 80px;
  border-radius: 12px;
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
  padding: 30px 25px;
}

.input_description {
  min-height: 118px;
  padding-top: 17px;
  resize: none;
}

.services_btn {
  max-width: 462px;
}

.select-form {
  padding: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  img {
    object-fit: cover;
    border-radius: 6px;
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #292929;
    span {
      font-weight: 700;
    }
    @media (max-width: 992px) {
      font-size: 13px;
    }
    @media (max-width: 500px) {
      font-size: 10px
    }
  }
  &__list {
    width: 105%;
    margin-top: 10px;
    max-height: 0px;
    transition: all 0.3s ease-in-out;
    overflow-y: auto;
    border-radius: 12px;
    z-index: 100;
    position: relative;
    box-shadow: 0px 4px 29px 0px #0000001A;
    &::-webkit-scrollbar {
        height: 12px;
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 5px;
        background: #fff;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #93b84d33;
        border-radius: 5px;
        border: 3px solid #fff;
      }
    transform: translateX(-10px);
  }
}

.select-item {
  padding: 17px 25px;
  background: #fff;
  height: 52px;
  transition: background 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background: #EFF5E5;
  }
  &__name {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #292929;
    @media (max-width: 992px) {
      font-size: 13px;
    }
    @media (max-width: 500px) {
      font-size: 10px
    }
  }
  &__text {
    color: #29292999;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    @media (max-width: 992px) {
      font-size: 13px;
    }
    @media (max-width: 500px) {
      font-size: 10px
    }
  }
  border-top: 1px solid #9EC85566;
  border-bottom: 1px solid #9EC85566;
  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }
}

.chosen {
  background: #EFF5E5;
}
.gap-20 {
  gap: 20px;
}

.height {
  transition: all 0.3s ease-in-out;
  max-height: 350px;
}

.empty_service {
  width: 148px;
  height: 217px;
  border: 2px dashed #FFFFFF80;;
  border-radius: 19px;
  position: relative;
  img {
    width: 125px;
    height: 36px;
    position: absolute;
    left: 40%;
    top: 25%;
  }
}

.empty_text {
  h2,h3 {
    color: #fff;
  }
  h3 {
    width: 70%;
    line-height: 30px;
  }
}

.app-popup {
  &__text {
    @media (min-width: 992px) {
      padding-left: 50px;
    }
    padding-top: 40px;
    h2 {
      color:#292929;
      font-size: 35px;
      font-weight: 700;
      line-height: 43px;
      margin-bottom: 34px;
      @media (max-width: 500px) {
        font-size: 25px;
        line-height: 25px;
        margin-bottom: 20px;
      }
    }
    p {
      color: #676767;
      font-size: 21px;
      font-weight: 400;
      line-height: 30px;
      margin-bottom: 30px;
      @media (max-width: 500px) {
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 15px;
      }
    }
    ul {
      padding: 0;
      list-style: none;
      li {
        color: #92B84D;
        font-size: 21px;
        font-weight: 700;
        line-height: 42px;
        display: flex;
        align-items: center;
        gap: 12px;
        @media (max-width: 500px) {
          font-size: 14px;
          line-height: 35px;
        }
      }
    }
  }
  &__qr {
    gap: 28px;
    p {
      color: #92B84D;
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      @media (max-width: 500px) {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
}
</style>
