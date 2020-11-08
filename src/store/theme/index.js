import * as func from '@/utils/func'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = func.themeLocal.get() || {
  theme: 'blue'
}

export default {
  state,
  actions,
  mutations,
  getters
}
