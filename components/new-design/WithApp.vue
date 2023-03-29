<template>
  <div class="with-app" :class="{'selected-with-app' : selectedHouse.address}">
    <div class="with-app_header">
      <div class="block-title text-center my-mb">
        С приложением вы cможете
      </div>
    </div>
    <div class="with-app_cards">
      <div class="with-app_cards__card">
        <img
          width="416"
          height="253"
          class="with-app_cards__img"
          src="@/assets/img/with-app-images/1.png"
        >
        <div class="card-header with-header">
          <span class="green-text">
            Вызвать мастера
          </span> с гарантией на выполненные работы
        </div>
      </div>
      <div class="with-app_cards__card">
        <img
          width="416"
          height="253"
          class="with-app_cards__img"
          src="@/assets/img/with-app-images/2.png"
        >
        <div class="card-header with-header">
          <span class="green-text">
            Подать заявку на въезд гостевой машины
          </span> или быстро открыть ворота в ваш двор
        </div>
      </div>
      <div class="with-app_cards__card">
        <img
          width="416"
          height="253"
          class="with-app_cards__img"
          src="@/assets/img/with-app-images/3.png"
        >
        <div class="card-header with-header">
          <span class="green-text">
            Оперативно получать информацию
          </span> об отключениях
          и участвовать в опросах
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
@Prop() selectedHouse: any
}
</script>

<style lang="scss" scoped>
.my-mb {
  margin-bottom: 30px;
}
.with-header {
  padding: 16px 27px 10px 28px;
}
.with-app{
  width: 100%;
  margin-top: 60px;
  &_cards{
    padding-top: 41px;
    display: flex;
    flex-direction: row;
    gap: 47px;
    justify-content: center;
    @include bp-max(1300px) {
      flex-direction: column;
      align-items: center;
    }

    &__card{
      width: 33%;
      @include bp-max(1300px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &__img{
      border-radius: 33px;
      margin-bottom: 8px;
      @include bp-max($mq-mobile-medium){
        max-width: 344px;
      }
    }
  }
}

.selected-with-app{
  margin-top: 140px;
  @include bp-max(1180px){
    margin-top: 60px;
  }
}
</style>
