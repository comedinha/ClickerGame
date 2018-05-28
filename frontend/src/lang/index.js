import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

import ptbr from './pt-br'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'portuguese',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('portuguese').create(ptbr)
  ]
})
