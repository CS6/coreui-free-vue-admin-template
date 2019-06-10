// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjo-PiSUJlZxFZEP9bxWrDZQwTzc-BJtM",
  authDomain: "docker-console.firebaseapp.com",
  databaseURL: "https://docker-console.firebaseio.com",
  projectId: "docker-console",
  storageBucket: "docker-console.appspot.com",
  messagingSenderId: "850453417660",
  appId: "1:850453417660:web:b50f9c7067ed91a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// todo
// cssVars()

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

main: (function (global) {
  global.firebase = firebase; // 前端console偵錯

  firebase.auth().getRedirectResult().then(function (result) {
    var user = result.user;
    if (!user) signIn();
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

    if (errorCode === 'auth/account-exists-with-different-credential') {
      alert('You have already signed up with a different auth provider for that email.');
    } else {
      console.error(error);
    }
  });

  var url = "URL_HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      console.log(uid); // 使用者登入後的uid在此
      location = `${url}?uid=${uid}`;
    } else signIn();
  });

  function signIn() { // 登入
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    provider.setCustomParameters({ prompt: 'select_account' });
    firebase.auth().signInWithRedirect(provider);
  }

  function signOut() { // 登出
    firebase.auth().signOut();
  }
})(window);