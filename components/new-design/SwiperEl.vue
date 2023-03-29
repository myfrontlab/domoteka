<template>
  <div class="phones-carousel">
    <carousel-3d
      :controls-visible="true"
      :clickable="true"
      :inverse-scaling="300"
      :height="500"
      :width="250"
      :border="0"
      :space="100"
      :controls-prev-html="buttonPrev"
      :controls-next-html="buttonNext"
    >
      <slide3d :index="0">
        <img
          width="300"
          height="500"
          class="phones-carousel__img"
          alt=""
          src="@/assets/img/app-images/device1.png"
        >
      </slide3d>
      <slide3d :index="1">
        <img
          width="300"
          height="500"
          class="phones-carousel__img"
          alt=""
          src="@/assets/img/app-images/device2.png"
        >
      </slide3d>
      <slide3d :index="2">
        <img
          width="300"
          height="500"
          class="phones-carousel__img"
          alt=""
          src="@/assets/img/app-images/device3.png"
        >
      </slide3d>
    </carousel-3d>
  </div>
</template>

<script>

export default {
  name: 'SwiperExampleLoop',
  title: 'Loop mode / Infinite loop',
  data () {
    return {
      buttonPrev: '<img src="/images/icons/vector-left.svg" class="btn-prev" alt="no" />',
      buttonNext: '<img src="/images/icons/vector-right.svg" class="btn-next" alt="no" />'
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-3d-container {
  padding-left: -15px;
  padding-right: -15px;
  margin: 12px auto !important;
}

.carousel-3d-slide {
  background: transparent;
  opacity: 0.2 !important;

  &.current {
    overflow: visible;
    opacity: 1 !important;
  }
}

.phones-carousel {
  max-width: 402px;
  margin: 0 auto;
  &__img{
    object-fit: cover;
  }
}

.carousel-3d-slider {
  max-width: 292px;
}
</style>
<style>
.btn-prev {
  transform: translate(-9px, -15px);
  background: #FFFFFF;
  border-radius: 100%;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.06);
}

.btn-next {
  border-radius: 100%;
  transform: translate(8px, -14px);
  background: #FFFFFF;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.06);
}
</style>
