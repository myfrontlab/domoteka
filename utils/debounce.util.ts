export function debounce (fn, delay): any {
  let timeoutID: any = null
  return function () {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => fn(arguments), delay)
  }
}
