import * as func from '@/utils/func'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = func.local.get() || {
  event: [],
  count: 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
