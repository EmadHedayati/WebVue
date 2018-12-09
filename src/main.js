import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import TeamPage from './components/TeamPage'
import PlayerPage from './components/PlayerPage'
import LeagueListPage from './components/LeagueListPage'
import LeaguePage from './components/LeaguePage'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/team/:id',
        component: TeamPage,
        name: 'team',
        props: true
    },
    {
        path: '/player/:id',
        component: PlayerPage,
        name: 'player',
        props: true
    },
    {
        path: '/league-list',
        component: LeagueListPage,
        name: 'leagueList',
        props: true
    },
    {
        path: '/league/:id',
        component: LeaguePage,
        name: 'league',
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
