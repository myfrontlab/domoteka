<template>
  <div class="modal-shadow" @mousedown.self="$emit('close')">
    <transition name="drop" appear>
      <div class="modal-frame" style="display: inline-block;" :class="{'h-95':isHeightFixed}">
        <div class="modal-header">
          <button type="button" class="close" @click="$emit('close')">
            ×
          </button>
        </div>
        <div class="popup__body">
          <div class="popup__body__content">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop() title!: string
  @Prop() isHeightFixed!: boolean

  mounted () {
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        this.$emit('close')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.drop-enter-active {
  transition: transform 200ms linear;
}
.drop-enter-to {
  transform: translateY(0);
}
.drop-enter {
  transform: translateY(-100px);
}
.modal-shadow {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0; top: 0;
  height: 100%; width: 100%;
  background: rgba(0,0,0,.75);
  z-index: 9999;
}
.modal-frame {
  position: relative;
  border-radius: 33px;
  width: fit-content;
  max-width: 90%;
  max-height: 95%;
  background: #FFFFFF;
  box-shadow: 0 4px 49px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    height: 12px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 25px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #93b84d33;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    overflow-y: auto;
  }
  .modal-header {
    position: relative;
    .close {
      cursor: pointer;
      width: 30px; height: 30px;
      background: none;
      border: none;
      font-size: 30px;
      font-weight: 400;
      color: rgba(17,58,89,.6);
      position: absolute;
      right: 39px; top: 37px;
      padding: 0;
      &:focus {
        outline: none;
      }
    }
  }
}

.modal-title {
  font-size: 22px;
  line-height: 1.27;
  color: #214D70;
  margin: 0;
}

.modal-body {
  padding: 16px 0;
}
.popup {
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,.05);
  display: none;
  max-width: 600px;
  padding: 0;
  width: 90%;
  &__header {
    background: #e9f0f1;
    color: rgba(32,53,56,.9);
    line-height: 24px;
    font-size: 22px;
    margin: 0;
    padding: 16px 40px 16px 10px;
    @media (min-width: 576px) {
      & {
        padding: 24px 64px 24px 25px;
      }
    }
  }
  &__body {
    padding: 20px 10px 16px;
    width: 100%;
    @media (min-width: 576px) {
      & {
        padding: 20px 25px 16px;
      }
    }

    &__content {

      display: flex;
      flex-wrap: wrap;
      padding: 19px 6px 43px 5px;
    }
  }
}

.h-95 {
  height: 95%;
}
</style>
