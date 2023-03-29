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
          :link-click="linkUrl"
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
export default class InfoCompany extends Vue {
  data = {
    title: 'Для управляющей компании',
    descriptions: [
      'Ваши жильцы хотят получить онлайн-доступ к жилищно-коммунальным услугам и чату дома в мобильном приложении.',
      'Бесплатно подключайтесь к ДОМОТЕКЕ, чтобы систематизировать сбор показаний приборов учета и оказание ЖКУ. Мгновенная оплата счетов, чат дома, график плановых выплат – все на единой платформе и в мобильном приложении.'
    ],
    img: require('@/assets/img/business-3d-man.png')
  }

  services = [
    {
      text: 'График плановых работ',
      img: require('@/assets/img/services/calender-front-color.png')
    }, {
      text: 'Обращение жильцов',
      img: require('@/assets/img/services/heart_front_color.png')
    },
    {
      text: 'Сбор показаний приборов учета',
      img: require('@/assets/img/services/tool-front-color.png')
    },
    // {
    //   text: 'Договоры с подрядчиками',
    //   img: require('@/assets/img/services/folder-front-color.png')
    // },
    {
      text: 'Управления придомовыми территориями',
      img: require('@/assets/img/services/crow-front-color.png')
    }, {
      text: 'Формирование и рассылка счетов на оплату ЖКУ',
      img: require('@/assets/img/services/file-text-front-color.png')
    }, {
      text: 'Чат дома',
      img: require('@/assets/img/services/chat-bubble-front-color.png')
    }
  ]

  linkUrl = process.env.LINK_ADMIN + '/register'
}

</script>
