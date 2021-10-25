import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import Utils from "./utils/until.js"
import store from './utils/websocketStore.js'
Vue.config.productionTip = false
Vue.use(ElementUI);
App.mpType = 'app'
store.dispatch('WEBSOCKET_INIT', "ws://127.0.0.1:5500/ws");
Vue.prototype.$Utils = Utils
window.store=store
const app = new Vue({
	...App
})
app.$mount()
