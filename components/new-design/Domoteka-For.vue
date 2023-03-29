<template>
  <div class="for">
    <connection-thanks-popup v-if="showConnectionPopup" @close="showConnectionPopup = false" />
    <domoteka-for-popup v-if="showMorePopup" @close="showMorePopup = false"/>
    <div class="card-title white-text">
      Домотека для:
    </div>
    <div class="for_tab">
      <section class="search-nav">
        <nav class="nav-tabs nav-tabs__custom">
          <ul>
            <li>
              <input id="yk_&_tsg" v-model="tabIndex" :value="1" type="radio">
              <label class="nav-link" for="yk_&_tsg">УК и ТЖС</label>
            </li>
            <li>
              <input id="profi" v-model="tabIndex" :value="2" type="radio">
              <label class="nav-link" for="profi">Профи</label>
            </li>
          </ul>
        </nav>
        <div>
          <yk-tsg v-if="tabIndex === 1" />
          <profi v-if="tabIndex === 2" />
        </div>
      </section>
    </div>
    <base-button theme="white" @btn-click="showMorePopup = true">
      Узнать подробнее
    </base-button>
    <div class="for__connection">
      <connection-form @submit-form="showConnectionPopup = true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import YkTsg from '~/components/new-design/table-components/Yk-Tsg.vue'
import Profi from '~/components/new-design/table-components/Profi.vue'
import ConnectionForm from '~/components/new-design/forms/ConnectionForm.vue'
import BaseButton from '~/components/UI/BaseButton.vue'
import ConnectionThanksPopup from '~/components/new-design/popups/ConnectionThanksPopup.vue'
import DomotekaForPopup from '~/components/new-design/popups/DomotekaForPopup.vue'

@Component({
  components: { DomotekaForPopup, ConnectionThanksPopup, BaseButton, ConnectionForm, Profi, YkTsg }
})
export default class extends Vue {
  tabIndex: number = 1
  showConnectionPopup: boolean = false
  showMorePopup: boolean = false
}
</script>

<style lang="scss" scoped>

.for{
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include bp-max($mq-tablet-medium){
    margin-bottom: 120px;
  }

  &_tab{
    margin-top: 45px;
    @include bp-max($mq-desktop-min){
      display: flex;
      flex: 0 0 83.3333%;
      max-width: 83.3333%;
    }
    @include bp-max(868px){
      flex: 1;
      max-width: 100%;
      margin: 0 auto;
    }
  }

  &__connection{
    width: 100%;
    max-width: 1061px;
  }
}

.nav-tabs__custom {
  margin-left: 45px;
  display: table;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 0px;
  position: relative;
  width: 100%;
  @include bp-max(868px){
    width: auto;
  }
  ul {
    list-style: none;
    padding: 0; margin: 0;
    display: flex;
    gap: 10px;
    width: 100%;
    li {
      width: 227px;
      margin-right: -5px;
      background: transparent;
      @include bp-max(868px){
        width: 157px;
      }
      @include bp-max(600px){
        width: 117px;
      }
      &:first-child label {
        border-left: none;
      }
    }
  }
  input[type="radio"] {
    display: none;
  }
  .nav-link {
    width: 100%;
    color: rgba(255, 255, 255, 0.55);
    font-style: normal;
    display: flex;
    justify-content: center;
    padding: 28px 53px;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    height: 72px;
    margin-bottom: 33px;
    background-color: transparent;
    border: none;
    border-radius: 33px 33px 0 0;
    text-align: center;
    position: relative;
    z-index: 1;
    transition: .3s;
    cursor: pointer;
    @include bp-max(868px){
      font-size: 14px;
    }
    &:focus,
    &:hover {
      background-color: #FFFFFF;
      color: #92B84D;
    }
  }
  input[type="radio"]:checked + .nav-link {
    color: #92B84D;
    background-color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.08);
    border-radius: 33px 33px 0 0;
    @include bp-max(868px){
      font-size: 14px;
      transform: translate(0, 27px);
    }
  }
}
.nav-tabs{
  position: relative;
  z-index: 1;
}

</style>
