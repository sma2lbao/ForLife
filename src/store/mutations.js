import {
  SIGNIN,
  SIGNOUT,
  TOGGLEMENU
} from './types.js'

export default {
  [SIGNIN] (state) {
    state.isLogin = true;
  },
  [SIGNOUT] (state) {
    state.isLogin = false;
  },
  [TOGGLEMENU] (state) {
    state.showMenu = !state.showMenu;
  }
}
