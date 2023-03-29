import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { StreamBarcodeReader } from 'vue-barcode-reader'

/**
 * @param {Context} ctx - nuxt контекст
 * @param {Inject} inject - функция добавления плагина
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (ctx: Context, inject: Inject) {
  inject('StreamBarcodeReader', {
    StreamBarcodeReader
  })
}
