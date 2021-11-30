<template>
  <div id="myspace">
    <div class="left">
      <div>
        <i class="fas fa-user fa-3x"></i>
        <br /><br />
        <h3>Name current user</h3>
      </div>
    </div>
    <div class="right">
      <h2>Vous avez souscris à {{ nbrEvent }} évènement</h2>
      <br />
      <hr />
      <br />
      <div class="event">
        <h3>Titre de l'évènement</h3>
        <p>10/12/2021</p>
        <p>54 Rue dedede Paris , France</p>
        <button class="close">X</button>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      nbrEvent: 0,
    };
  },
  computed: {
    /* Je vais verifier le tableau des elements 
        Tableau contenant les leements que le current user a selectionné
        Ensuite, agir sur le nbrEvent
         */
  },
};
</script>

<style scoped>
.event {
  border: 1px solid transparent;
  box-shadow: 0px 5px 10px #ccc;
  position: relative;
  padding: 20px;
}
button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  outline: none;
  background-color: inherit;
  color: red;
  font-weight: bold;
  cursor: pointer;
}
@media (min-width: 700px) {
  #myspace {
    display: grid;
    grid-template-columns: 25% 75%;
  }
  .left {
    border-right: 1px solid #ccc;
    background-color: var(--primary);
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .right {
    padding: 20px;
  }
  hr {
    background-color: #ccc;
    height: 1px;
    border: none;
  }
}
@media (max-width: 699px) {
  #myspace {
    grid-template-columns: 1fr;
  }
  .left {
    border-right: 1px solid #ccc;
    background-color: var(--primary);
    height: 30vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .right {
    text-align: center;
    padding: 6px;
  }
  hr {
    background-color: #ccc;
    height: 1px;
    border: none;
  }
}
</style>