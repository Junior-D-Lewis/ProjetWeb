/* Load components */
const Home = window.httpVueLoader('../components/Home.vue')
const Auth = window.httpVueLoader('../components/Auth.vue')
const Login = window.httpVueLoader('../components/Login.vue');
const Register = window.httpVueLoader('../components/Register.vue');
const Card = window.httpVueLoader('../components/Card.vue')
const Focus = window.httpVueLoader('../components/FocusEvent.vue')
const mySpace = window.httpVueLoader('../components/mySpace.vue')

const routes = [
  { path: '/', component: Auth },
  {
    path: '/home', component: Home, 
  },
  {
    path: '/home/:id',
    component: Focus,
    children: [
      { path: '', component: Focus }
    ]
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/mySpace', component: mySpace}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: "#app",
  router,
  components: {
    Card, Home, Auth, Login, Focus, mySpace
  },

})
