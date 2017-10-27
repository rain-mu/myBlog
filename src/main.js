import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false


const vm = new Vue({
  router,
  store,
 
}).$mount('#app')

vm.$store.commit('changeWidth',document.documentElement.clientWidth)

var app = document.getElementById('app')
app.style.height = document.documentElement.clientHeight.toString() + 'px'