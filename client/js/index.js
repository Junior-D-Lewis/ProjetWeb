/* const Modal = window.httpVueLoader('../components/modal.vue')
 */

/* Temporaire */
const Modal = 
{ 
    template: `<a href="#id01">Ouvrir la fenêtre modale</a>

    <div id="id01" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <header class="container">
            <a href="#" class="closebtn">×</a>
            <h2>Entête de modale</h2>
          </header>
          <div class="container">
            <p>Texte dans la fenêtre modale.</p>
          </div>
          <footer class="container">
            <p>Pied de page de modale</p>
          </footer>
        </div>
      </div>
    </div>
    ` 
}
const Login = { template: '<div>bar</div>' }

const routes = [
    { path: '/register', component: Modal },
    { path: '/login', component: Login }
]

const router = new VueRouter({
    routes 
})

const app = new Vue({
    el: "#app",
    router,
    /* components: { 
        Modal
    }, */
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
    }
})