<template>
  <div>
    
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
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
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
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
.modal-dialog .modal-content {
  margin: auto;
  background-color: #f3f3f3;
  position: relative;
  padding: 0;
  outline: 0;
  border: 1px #777 solid;
  text-align: justify;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  animation-name: slideDownFadeIN;
  animation-duration: 0.5s;
}

/* Bouton servant à fermer la fenêtre modale */
.closebtn {
  text-decoration: none;
  float: right;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
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

header {
  background-color: #5cb85c;
  font-size: 25px;
  color: white;
}

footer {
  background-color: #5cb85c;
  font-size: 20px;
  color: white;
}
</style>