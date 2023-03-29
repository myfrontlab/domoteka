// @ts-ignore
import DefaultConfig from './environments/config/nuxt.config.main'

const defaultConf = new DefaultConfig()
const config: DefaultConfig = {
  ...defaultConf,
  env: {
    ...defaultConf.env,
    DADATA_TOKEN: '0a20eb3ede0c3e843ec5afcc93b666d76c8e01ca'
  }
}

export default config
