// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// <script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
// <script>
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvOMN38yY608mvf56qM7zp4VFDpg9sGRk",
  authDomain: "workshoptest-a5697.firebaseapp.com",
  databaseURL: "https://workshoptest-a5697.firebaseio.com",
  projectId: "workshoptest-a5697",
  storageBucket: "workshoptest-a5697.appspot.com",
  messagingSenderId: "729359862464"
};
firebase.initializeApp(config);
// </script>

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
