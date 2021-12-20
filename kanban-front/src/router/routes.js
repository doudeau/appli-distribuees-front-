import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Developers from '../components/Developers.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path:'/developers',
        component: Developers
    }
]

export default new VueRouter({
    routes
  })
  