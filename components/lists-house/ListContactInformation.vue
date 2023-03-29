<template>
  <article
    v-if="Object.keys(managingOrganization).length"
    class="list"
  >
    <div class="block__title">
      Информация об УК
    </div>
    <div class="name">
      {{ managingOrganization.shortName }}
    </div>
    <div
      v-if="managingOrganization.phone"
      class="list__item"
    >
      <div class="list__item-key">
        Телефон:
      </div>
      <div class="list__item-value">
        {{ managingOrganization.phone }}
      </div>
    </div>
    <div
      v-if="managingOrganization.legalAddress "
      class="list__item"
    >
      <div class="list__item-key">
        Юр. Адрес:
      </div>
      <div class="list__item-value">
        {{ managingOrganization.legalAddress }}
      </div>
    </div>
    <div
      v-if="managingOrganization.postalAddress "
      class="list__item"
    >
      <div class="list__item-key">
        Почтовый адрес:
      </div>
      <div class="list__item-value">
        {{ managingOrganization.postalAddress }}
      </div>
    </div>
    <div
      v-if="managingOrganization.dispatcherAddress "
      class="list__item"
    >
      <div class="list__item-key">
        Адрес диспетчерской:
      </div>
      <div class="list__item-value">
        {{ managingOrganization.dispatcherAddress }}
      </div>
    </div>
    <div
      v-if="managingOrganization.dispatcherPhone"
      class="list__item"
    >
      <div class="list__item-key">
        Телефон диспетчерской:
      </div>
      <div class="list__item-value">
        {{ managingOrganization.dispatcherPhone }}
      </div>
    </div>
    <div
      v-if="managingOrganization.dispatcherWorkTime"
      class="list__item"
    >
      <div class="list__item-key">
        Часы работы диспетческой:
      </div>
      <div class="list__item-value">
        {{ managingOrganization.dispatcherWorkTime }}
      </div>
    </div>
    <div
      v-if="managingOrganization.email"
      class="list__item"
    >
      <div class="list__item-key">
        Электронная почта:
      </div>
      <div class="list__item-value">
        {{ managingOrganization.email }}
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ListOverhaul extends Vue {
  @Prop({
    default: []
  }) managingOrganization!: any
}

</script>

<style scoped lang="scss">
.list {
  background: #fff;
  @media (min-width: 768px) {
    border-radius: 24px;
  }
  padding: 40px;
  .block__title {
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 20px;
    color: #292929;
    padding: 0;
  }
  .name {
    color: #292929;
    font-size: 21px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 20px;
  }
  &__item {
    justify-content: flex-start;
    color: #676767;
    @media (max-width:600px) {
      flex-direction: column;
    }
    gap: 10px;
    &-key {
      width: fit-content;
      white-space: nowrap;
      max-width: 300px;
    }
    &-value {
      text-align: justify;
      font-weight: 700;
    }
  }
}
</style>
