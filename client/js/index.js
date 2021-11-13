
<<<<<<< Updated upstream
const Register = window.httpVueLoader('../components/Register.vue')
const Login = window.httpVueLoader('../components/Login.vue')
const Modal = window.httpVueLoader('./components/Modal.vue')

const routes = [
  { path: '/register', component: Modal },
=======
const Register = window.httpVueLoader('./components/Register.vue')
const Modal = window.httpVueLoader('./components/Modal.vue')

const routes = [
  { path: '/register', component: Register },
>>>>>>> Stashed changes
  { path: '/login', component: Modal }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
<<<<<<< Updated upstream
  el: "#app",
  router,
  data: {
    advantages: [
=======
    el: "#app",
    router,

    data: {
        advantages: [
            {
                url: "./img/scissors.png",
                title: "Utilité et utilité",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!"
            },
            {
                url: "./img/scissors.png",
                title: "Utilité et utilité",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!"
            },
            {
                url: "./img/scissors.png",
                title: "Utilité et utilité",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!"
            }
        ]
    }, 
    methods: {
      simulateClick()
>>>>>>> Stashed changes
      {
        url: "./img/scissors.png",
        title: "Utilité et utilité",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!"
      },
      {
        url: "./img/scissors.png",
        title: "Utilité et utilité",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!"
      },
      {
        url: "./img/scissors.png",
        title: "Utilité et utilité",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!"
      }
    ]
  },
  methods: {
    simulateClick() {
      setTimeout(() => {
        window.document.getElementById("launchModal").click()
      }, 100);
    },
  }
})
