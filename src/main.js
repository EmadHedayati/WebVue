import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import TeamPage from './components/TeamPage'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/team',
        component: TeamPage,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: routes
})

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
