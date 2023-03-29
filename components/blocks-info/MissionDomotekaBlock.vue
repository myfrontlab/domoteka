<template>
  <div class="card container card_mission">
    <div class="card__title">
      Миссия Домотеки:
    </div>
    <div class="card__description">
      Сделать все услуги, которые вам нужны в квартире удобными, а управляющую компанию – другом!
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'

@Component
export default class MissionDomotekaBlock extends Vue {}
</script>

<style scoped lang="scss">
.card {
  border-radius: 24px;

  padding: 32px;
  @include bp-max($mq-tablet-min) {
    padding: 24px;
  }

  & + & {
    margin-top: 32px;
  }

  &_mission {
    background: rgba(14, 202, 179, 1);
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: #FFFFFF;

    @include bp-max($mq-tablet-min) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__description {
    margin-top: 12px;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;

    & + & {
      margin: 0px;
    }

    @include bp-max($mq-tablet-min) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
</style>
