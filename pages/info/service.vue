<template>
  <div class="container">
    <div class="row">
      <div class="col-12 px-0 px-md-3">
        <info-block
          title-button="ПОДКЛЮЧИТЬСЯ К ДОМОТЕКЕ"
          :title="data.title"
          :descriptions="data.descriptions"
          :img="data.img"
          :have-decorative-image="true"
          link-click="https://domoteka.online/register"
        />
        <services-block :services="services" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InfoBlock from '@/components/blocks-info/InfoBlock.vue'
import ServicesBlock from '@/components/blocks-info/ServicesBlock.vue'

@Component({
  components: {
    InfoBlock,
    ServicesBlock
  }
})
export default class InfoService extends Vue {
  data = {
    title: 'Для сервисов',
    descriptions: [
      'Расскажите о своих услугах тем, кто находится рядом с вами!',
      'Направьте рекламу на потенциальных пользователей ваших услуг: доставляйте продукты в соседние дома, сформируйте клиентскую базу среди соседей и создайте свою сеть профессиональных контактов в шаговой доступности от дома. И все это в несколько кликов в приложении ДОМОТЕКА.'
    ],
    img: require('@/assets/img/business-3d-girl.png')
  }

  services = [
    {
      text: 'Открыли кофейню или пекарню?',
      img: require('@/assets/img/services/tea-cup-front-color.png')
    }, {
      text: 'Делаете маникюр или окрашивание на дому?',
      img: require('@/assets/img/services/star-front-color.png')
    }, {
      text: 'Занимаетесь мелким ремонтом, уборкой?',
      img: require('@/assets/img/services/tool-front-color.png')
    }
  ]
}

</script>
