import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
// Dynamic add Component Route to the page
;(function updateRoutes(){
  const requireModule = require.context('../views/Documentation/Components',
      true,/^((?!index|\.unit\.).)*\.vue$/ )
   requireModule.keys().forEach((fileName) => {
     const prettyFileName= fileName.replace(/^\.\//, '')
     const modulePath = fileName
         .replace(/^\.\//, '')
         // Remove the file extension from the end.
         .replace(/\.\w+$/, '')
      routes.push (
          {path:`/${modulePath.toLowerCase()}`, name:`${modulePath}`, component: loadingView(prettyFileName)})
   })
})()

function loadingView(component) {
  return () => import(`@components/${component}`)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})

export default router
