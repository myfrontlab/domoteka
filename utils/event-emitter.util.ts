/** отправка и прослушивание событий */
export default class EventEmitterUtil<EventNames extends string = string> {
  /** @member {Record<string, Function[]>} _eventPool - пул колбэков для событий */
  private _eventPool: { [event: string]: ((data?: any) => void)[] } = {}

  /** добавляем слушателя события */
  public $on (eventName: EventNames, callback: (data?: any) => void) {
    if (!this._eventPool[eventName]) {
      this._eventPool[eventName] = []
    }

    this._eventPool[eventName].push(callback)
  }

  /** добавляем слушателя событий, который удаляется после первого раза */
  public $once (eventName: EventNames, callback: (data?: any) => void) {
    const eventCallback = () => {
      callback()
      this.$off(eventName, eventCallback)
    }
    this.$on(eventName, eventCallback)
  }

  /** вызываем все обработчики события */
  public $emit (eventName: EventNames, data?: any) {
    this._eventPool[eventName]?.forEach(callback => callback(data))
  }

  /** удаляем слушателя события */
  public $off (eventName: EventNames, callback: (data?: any) => void) {
    const callbackList = this._eventPool[eventName]
    const callbackIndex = callbackList.indexOf(callback)
    if (~callbackIndex) {
      return
    }

    this._eventPool[eventName] = callbackList.splice(callbackList.indexOf(callback), 1)
  }
}
