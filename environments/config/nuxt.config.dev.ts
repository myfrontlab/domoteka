// @ts-ignore
import DefaultConfig from './environments/config/nuxt.config.main'

const defaultConf = new DefaultConfig()
const config: DefaultConfig = {
  ...defaultConf,
  env: {
    ...defaultConf.env,
    DADATA_TOKEN: '001514d5eec241fbd3742c049fbaa44ddc2002ec',
    LINK_ADMIN: 'https://partner.dev.domoteka.online',
    DEV_MODE: true
  },
  sentry: {
    ...defaultConf.sentry,
    config: {
      ...defaultConf.sentry.config,
      environment: 'development'
    }
  }
}

export default config
