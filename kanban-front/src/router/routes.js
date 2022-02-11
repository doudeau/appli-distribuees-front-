import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Developers from '../components/Developers.vue'
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path:'/developers',
        component: Developers
    },
    {
        path:'/tasks',
        component: Tasks
    },
    {
        path:'/addTask',
        component: AddTask
    }
]

export default new VueRouter({
    routes
  })
  