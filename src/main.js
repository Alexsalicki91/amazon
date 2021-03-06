


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
/* eslint-disable no-new */
//import the hello component
import Hello from './components/Hello'
//import the about component
import About from './components/About'

import Manners from './components/Manners'
import Tabloo from './components/Tabloo'
import Paul from './components/Paul'
import Euroservice from './components/Euroservice'

//define your routes
const routes = [
	//route for the home route of the webpage
	{ path: '/', component: Hello },
	//route for the about route of the webpage
	{ path: '/about', component: About },

	//route for the about route of the webpage
	{ path: '/projects/manners', component: Manners },

//route for the tabloo route of the webpage
{ path: '/projects/tabloo', component:Tabloo },

//route for the paul route of the webpage
{ path: '/projects/euroservice', component: Euroservice },

//route for the euroservice route of the webpage
{ path: '/projects/paul', component: Paul },
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
	//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the vue instance
  router
}).$mount('#app')//mount the router on the app

//typical import

import {TweenMax, Power2, TimelineLite} from "gsap";
