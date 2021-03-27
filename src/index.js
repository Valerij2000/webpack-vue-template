// JS
import './js/'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')



import store from './store/index'


// Vue components (for use in html)
Vue.component('example-component', require('./js/components/Example.vue').default)

// Vue init
const app = new Vue({
  store,
  el: '#app'
})
