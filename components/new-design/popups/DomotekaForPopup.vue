<template>
  <popup :is-height-fixed="true" @close="$emit('close')">
    <div class="more-popup">
      <div class="more-popup_header">
        <span class="more-popup_header header-text">Как начать работать с Домотека?</span>
        <div class="more-popup_header divider" />
        <span class="more-popup_header header-text">Готово!</span>
      </div>
      <div class="more-popup_content">
        <div class="more-popup_column">
          <div class="more-popup_content-item">
            <span class="more-popup_content-item__number">
              1
            </span>
            <img
              src="@/assets/img/more-poup-images/1.png"
              class="more-popup_content-item__img first"
              width="161"
              height="193"
            >
          </div>
          <div class="more-popup_content-item__text">
            Мы регистрируем ваш личный кабинет
          </div>
        </div>
        <div class="more-popup_column">
          <div class="more-popup_content-item">
            <span class="more-popup_content-item__number">
              2
            </span>
            <img
              src="@/assets/img/more-poup-images/2.png"
              class="more-popup_content-item__img second"
              width="133"
              height="175"
            >
          </div>
          <div class="more-popup_content-item__text">
            Загружаем данные из ГИС ЖКХ
          </div>
        </div>
        <div class="more-popup_column">
          <div class="more-popup_content-item">
            <span class="more-popup_content-item__number">
              3
            </span>
            <img
              src="@/assets/img/more-poup-images/3.png"
              class="more-popup_content-item__img third"
              width="228"
              height="228"
            >
          </div>
          <div class="more-popup_content-item__text">
            Проводим обучение
            по использованию личного кабинета
          </div>
        </div>
        <div class="more-popup_column">
          <div class="more-popup_content-item">
            <span class="more-popup_content-item__number">
              4
            </span>
            <img
              src="@/assets/img/more-poup-images/4.png"
              class="more-popup_content-item__img forth"
              width="303"
              height="227"
            >
          </div>
          <div class="more-popup_content-item__text">
            Помогаем разместить рекламные плакаты
            в вашем доме
          </div>
        </div>
      </div>
      <div class="more-popup_footer">
        <span class="more-popup_footer__title">
          Оставьте свои контакты <br>
          для подключения вашей компании к Домотеке
        </span>
        <form class="more-popup_footer__form">
          <div class="grid mb-3">
            <input
              placeholder="Фамилия Имя Отчество"
              class="new-design_input"
            >
            <input
              placeholder="Должность"
              class="new-design_input"
            >
          </div>
          <div class="grid mb-3">
            <input
              placeholder="Представляема УК"
              class="new-design_input"
            >
            <input
              placeholder="Номер телефона"
              class="new-design_input"
            >
          </div>
          <div class="grid mt-4">
            <base-button theme="light-green">
              Отправить заявку
            </base-button>
            <div class="form-img">
              <img
                src="@/assets/img/domoteka-for-images/connection-1.png"
                width="383"
                height="287"
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </popup>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'
import Popup from '~/components/UI/Popup.vue'
import ConnectionForm from '~/components/new-design/forms/ConnectionForm.vue'
import BaseButton from '~/components/UI/BaseButton.vue'

@Component({
  components: { BaseButton, ConnectionForm, Popup }
})
export default class DomotekaForPopup extends Vue {

}
</script>

<style lang="scss" scoped>
.more-popup {
  width: 100%;
  display: flex;
  height: 90%;
  flex-direction: column;
  padding: 70px 41px 21px 41px;
  &_header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &.header-text {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #292929;
    }
    &.divider{
      border-bottom: 2px dashed #88BA38;
      height: 0;
      width: 100%;
      max-width: 481px;
    }
  }

  &_column{
    width: calc(25% - 41px);
    @include bp-max($mq-desktop-min) {
      width: 100%;
    }
  }
  &_content{
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    gap: 41px;
    @include bp-max($mq-desktop-min) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  &_content-item {
    position: relative;
    display: flex;
    width: 224px;
    height: 260px;
    border: 1px solid #92B84D;
    filter: drop-shadow(0px 4px 49px rgba(0, 0, 0, 0.08));
    border-radius: 33px;
    @include bp-max($mq-desktop-min) {
      width: 100%;
    }
    &__number {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 44px; height: 44px;
      top: 13px;
      left: 14px;
      flex-shrink: 0;
      background: #92B84D;
      border-radius: 100%;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      color: #FFFFFF;
    }

    &__text {
      margin-top: 27px;
      max-width: 224px;
      display: flex;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      color: #676767;
    }

    &__img{
      position: absolute;
      right: 0;
    }
  }
  &_footer{
    margin-top: 26px;
    &__title{
      display: flex;
      justify-content: center;
      font-weight: 700;
      font-size: 30px;
      line-height: 37px;
      text-align: center;
      color: #92B84D;
    }
    &__form{
      position: relative;
      padding: 44px 106px 53px 59px;
      margin-top: 37px;
      background: #92B84D;
      border: 1px solid #92B84D;
      box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.08);
      border-radius: 33px;
      @include bp-max(1025px) {
        padding: 44px 59px 53px;
      }
    }
  }
}

.first{
  transform: translate(10px, 0);
  bottom: 2px;
}
.second{
  bottom: 22px;
  transform: translate(10px, 0);
}

.third {
  bottom: 0;
  transform: translate(49px, 0);
}
.forth {
  bottom: 0;
  transform: translate(91px, 7px);
}

.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @include bp-max($mq-tablet-medium){
    grid-template-columns: 1fr;
  }
}

.form-img{
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(125px, 61px);
  @include bp-max(1025px) {
    display: none;
  }
}
</style>
