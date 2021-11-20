<template>
  <div id="modal">
    <div id="id01" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <a href="#" class="closebtn" v-on:click="verif">×</a>

          <div class="container" v-if="displayRegister">
            <Register></Register>
          </div>
          <div class="container" v-else>
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Register = window.httpVueLoader("../components/Register.vue");
const Login = window.httpVueLoader("../components/Login.vue");

module.exports = {
  components: {
    Modal,
    Register,
    Login,
  },
  data: function () {
    return {
      displayRegister: 0,
    };
  },
  methods: {
    verif() {
      if (window.location.hash === "#/register") {
        /* window.document.body.style.overflowY = "hidden"; */
        this.displayRegister = 1;
      } else if (window.location.hash === "#/login") {
       /*  window.document.body.style.overflowY = "hidden"; */
        this.displayRegister = 0;
      } /* else {
        window.document.body.style.overflowY = "auto";
      } */
    },
  },
  mounted() {
    this.verif();
  },
};
</script>

<style lang="css" scoped>
/* Décrire l'animation */
@keyframes slideDownFadeIN {
  from {
    top: -150px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}
/* Foncer l'arrière-plan de la fenêtre modale */
.modal {
  display: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.594);
  color: var(--primary);
}

/* Afficher la fenêtre modale lorsqu'elle est ciblée par un lien supprimer */
.modal:target {
  display: table;
  position: absolute;
}

/* la fenêtre modale  */
.modal-dialog {
  border-radius: 1rem;
  display: table-cell;
  vertical-align: middle;
}

/* Le contenu de la modale */
@media (min-width: 700px) {
  .modal-dialog .modal-content {
    margin: auto;
    background-color: #f3f3f3;
    position: relative;
    padding: 0;
    outline: 0;
    border: 1px #ccc solid;
    border-radius: 1rem;
    text-align: justify;
    width: 40%;

    animation-name: slideDownFadeIN;
    animation-duration: 0.5s;
  }
}

@media (max-width: 699px) {
  .modal-dialog .modal-content {
    margin: auto;
    background-color: #f3f3f3;
    position: relative;
    padding: 0px;
    outline: 0;
    border: 1px #ccc solid;
    border-radius: 1rem;
    text-align: justify;
    width: 93%;
    animation-name: slideDownFadeIN;
    animation-duration: 0.5s;
  }
}

/* Bouton servant à fermer la fenêtre modale */
.closebtn {
  text-decoration: none;
  position: absolute;
  top: 1%;
  right: 3%;
  font-size: 35px;
  font-weight: bold;
  color: var(--primary);
}

.closebtn:hover,
.closebtn:focus {
  text-decoration: none;
  cursor: pointer;
}

.container {
  padding: 2px 16px;
}
</style>