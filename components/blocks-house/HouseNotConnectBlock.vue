<template>
  <info-block
    title-button="Отправить обращение"
    :link-click="glueMailLink"
    title="Ваша управляющая компания не подключена к системе Домотека"
    :organization-name="managingOrganization.shortName"
    :descriptions="descriptions"
    :img="require('@/assets/img/business-3d-astonished-man.png')"
    :have-decorative-image="false"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop
} from 'nuxt-property-decorator'
import { IHouseResponse } from '@/types/response/house'
import { IManagingOrganizationResponse } from '@/types/response/managing-organization'
import InfoBlock from '@/components/blocks-info/InfoBlock.vue'

@Component({
  components: {
    InfoBlock
  }
})
export default class HouseNotConnectBlock extends Vue {
  @Prop() house: IHouseResponse
  @Prop() managingOrganization: IManagingOrganizationResponse

  descriptions = [
    'Увы, ваша управляющая организация ещё не подключилась к системе. Поэтому мы не сможем показать вам сведения о начислениях, новости об отключениях и прочую информацию от УК.',
    'Но это легко исправить! Работа в системе Домотека бесплатна для управляющих организаций и удобна для жителей: мгновенная оплата задолженностей, чат дома, опросы, заявки в УК, управление доступом во двор – всё это делается в удобном мобильном приложении для жителей.',
    'Помогите улучшить качество коммунальных услуг для вас и ваших соседей: направьте запрос на подключение в вашу УК как житель дома.'
  ]

  get glueMailLink () {
    return `mailto:support@domoteka.online?body=${encodeURIComponent(this.generateConnectionApplication())}&subject=Заявление`
  }

  generateConnectionApplication () {
    return `Директору управляющей компании ${this.managingOrganization?.shortName} ${this.managingOrganization?.manager}
      от _______, проживающего по адресу:
      ${this.house?.fullAddress}, кв. ___.
      Я проживаю и являюсь собственником квартиры, по адресу: ${this.house?.fullAddress} кв. ___, расположенной в многоквартирном доме, который находится под управлением Вашей компании.
      Прошу Вас подключиться к бесплатной информационной системе "Домотека" с целью повышения качества предоставляемых услуг.
      Регистрация в системе проводится по адресу:   https://partner.domoteka.online/
      Процесс внедрения занимает 1 день.`
  }
}
</script>

<style scoped lang="scss">

</style>
