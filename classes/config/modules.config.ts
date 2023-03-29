import { NuxtOptionsModule } from '@nuxt/types/config/module'

export default class ModulesConfig extends Array<NuxtOptionsModule> {
  constructor (array: NuxtOptionsModule[]) {
    super()

    this.push(...array)
  }

  add (module: NuxtOptionsModule): ModulesConfig {
    const moduleName: string = typeof module === 'string' ? module : module[0]
    const index = this.findIndex(item => typeof item === 'string' ? item === moduleName : item[0] === moduleName)

    if (~index) {
      this.splice(index, 1)
    }

    this.push(module)
    return this
  }
}
