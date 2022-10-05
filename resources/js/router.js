import Vue from 'vue'
import VueRouter from 'vue-router'


//importo i componenti

import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import ContactsPage from './components/pages/ContactsPage'

//usa vue router
Vue.use(VueRouter)

//rotte con vue router

const routes = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/contacts', component: ContactsPage }
    ],
});

export default routes;