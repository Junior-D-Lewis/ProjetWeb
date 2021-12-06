/* Load components */
const Home = window.httpVueLoader('../components/Home.vue')
const Auth = window.httpVueLoader('../components/Auth.vue')
const Login = window.httpVueLoader('../components/Login.vue');
const Register = window.httpVueLoader('../components/Register.vue');
const Card = window.httpVueLoader('../components/Card.vue')
const Focus = window.httpVueLoader('../components/FocusEvent.vue')
const mySpace = window.httpVueLoader('../components/mySpace.vue')
const Bottom = window.httpVueLoader('../components/Bottom.vue')
const Admin = window.httpVueLoader('../components/Admin.vue')
const List = window.httpVueLoader('../components/List.vue')
const Actions = window.httpVueLoader('../components/Actions.vue')
const NotFound = window.httpVueLoader('../components/NotFound.vue')

const routes = [
  { path: '/', component: Auth },
  {
    path: '/home', component: Home,
    children: [
      {
        path: ':id',
        component: Focus,
      }
    ]
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/mySpace', component: mySpace },
  {
    path: '/admin', component: Admin,
    children: [
      {
        path: 'list',
        component: List,
      },
      {
        path: 'actions',
        component: Actions,
      },
      
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  el: "#app",
  router,
  components: {
    Card, Home, Auth, Login, Focus, mySpace, Bottom, NotFound, List, Actions
  },
  data() {
    return {
      trueRoute: false
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path === '/home' || to.path[1] + to.path[2] + to.path[3] + to.path[4] === "home") {
        this.trueRoute = true
      }
      else {
        this.trueRoute = false
      }
    }
  },



})
