<template>
  <div class="error-box">
    <div class="error-box__404">
      404
    </div>
    <h1>
      Страница не найдена!
    </h1>
    <a
      v-if="error.message === 'error from catalog'"
      href="/catalog/addresses"
    >
      Перейти в каталог
    </a>
    <a
      v-else
      href="/"
    >
      Перейти на главную
    </a>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
  mounted () {
    console.log('error: ', this.error)
  }
}
</script>

<style scoped lang="scss">
.error-box {
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__404 {
    font-size: 100px;
  }
}
</style>
