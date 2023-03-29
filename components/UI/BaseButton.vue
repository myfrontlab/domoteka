<template>
  <button :class="btnClasses" @click="$emit('btn-click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    theme: {
      type: String,
      default: 'green',
      validation: (val) => {
        return ['green', 'white', 'light-green'].includes(val)
      }
    }
  },
  computed: {
    btnClasses () {
      return `new-design_btn-${this.theme}`
    }
  }
}
</script>

<style lang="scss" scoped>
.new-design {
  &_btn-green {
    background: #92B84D;
    box-shadow: 0px 5px 9px rgba(136, 186, 56, 0.5);
    border-radius: 8px;
    border: none;
    height: 52px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }

  &_btn-white {
    color: #92B84D;
    box-shadow: 0 5px 9px rgba(108, 147, 45, 0.5);
    border-radius: 8px;
    height: 52px;
    padding: 10px 20px;
    background: #FFFFFF;
    border: none;
    margin: 20px 0 68px;
    width: 368px;
  }
  &_btn-light-green {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #3E501E;
    background: #D1ECA0;
    box-shadow: 0 5px 9px rgba(136, 186, 56, 0.5);
    border-radius: 8px;
    height: 52px;
    padding: 10px 20px;
    border: none;
    font-weight: 700;
  }
}
</style>
