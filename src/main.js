import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NewPage from './components/NewPage'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: App,
    },
    {
        path: '/new-page',
        component: NewPage,
        props: true
    },
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
