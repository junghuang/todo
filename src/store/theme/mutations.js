import * as func from '@/utils/func'

export default {
  SWITCHTHEME (states, obj) {
    states.theme = obj.theme
    func.themeLocal.set(states)
  }
}
