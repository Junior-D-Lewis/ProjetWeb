<template>
  <div id="modal">
    <div id="id01" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <a href="#" class="closebtn">×</a>

          <div class="container">
            <p>Texte dans la fenêtre modale.</p>
            <Login></Login>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const Login = window.httpVueLoader('../components/Login.vue')

module.exports = {
  data: function () {
    return {};
  },
  components: {
    Modal, Login
  },
};
</script>

<style lang="css" scoped>

h1{color: black;}

/* Décrire l'animation */
@keyframes slideDownFadeIN {
  from {
    top: -100px;
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
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.594);
}

/* Afficher la fenêtre modale lorsqu'elle est ciblée par un lien supprimer */
.modal:target {
  display: table;
  position: absolute;
}

/* la fenêtre modale  */
.modal-dialog {
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
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.container {
  padding: 2px 16px;
}
</style>