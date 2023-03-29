import { NuxtOptions } from '@nuxt/types/config'
import ModulesConfig from './modules.config'

// @ts-ignore
export default interface Config extends NuxtOptions {
  modules: ModulesConfig
  buildModules: ModulesConfig
}
