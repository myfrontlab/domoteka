import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'

/**
 * @param {Context} ctx - nuxt контекст
 * @param {Inject} inject - функция добавления плагина
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (ctx: Context, inject: Inject) {
  /**
   * Форматирование даты из ISO в человеческий
   *
   * @param {string} value - дата в ISO формате
   * @param {boolean} time - нужно ли выводить время?
   * @returns {string} formattedString
   */
  function formatDate (value: string, time: boolean = false) {
    if (value) {
      const date = new Date(value.replace(/-/g, '/'))
      const day: string = date.getDate().toString().padStart(2, '0')
      const month: string = (date.getMonth() + 1).toString().padStart(2, '0')

      return day + '.' + month + '.' + date.getFullYear() + (time ? ' ' + value.split(' ')[1].substr(0, 5) : '')
    }
  }

  /**
   * Перевод числа в формат 1 000 000,00
   *
   * @param {string | number} value - число
   * @returns {string} formattedAmount
   */
  function formatAmount (value: string | number) {
    if (typeof value === 'number') { value = value.toString() }
    if (value) {
      if (value.toString().includes('.')) {
        /** округляем до сотых */
        value = parseFloat(value).toFixed(2).toString()
      }

      let result: string = ''
      const isFloat: number = value.indexOf('.')
      if (isFloat > 0) {
        result = ',' + value.substring(isFloat + 1)
        value = value.slice(0, isFloat)
      }

      if (value.length - 1 < 3) {
        return value + result
      }

      let index: number = value.length
      while (index > 0) {
        /** добавляем непереносимый пробел ($nbsp;) */
        result = '\u00A0' + value.substring(index - 3, index) + result
        index = index - 3
      }

      return result.trim()
    }
    return value
  }

  inject('formatters', {
    formatDate,
    formatAmount
  })
}
