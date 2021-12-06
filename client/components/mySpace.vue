<template>
  <div id="myspace">
    <div class="left">
      <div>
        <i class="fas fa-user fa-3x"></i>
        <br /><br />
        <h3>{{userData.prenom}} {{userData.nom}}</h3>
      </div>
    </div>
    <div class="right">
      Name current user
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
      listEvents: [],
      
      userData:{}
    };
  },
  methods: {
    getUserName: async function () {
      const response= await axios.get("http://localhost:5000/login/who");
      this.userData=response.data;      
    },
  },
  computed: {
    nbrEvent: function () {
      return this.listEvents.length;
    },

  },
  created:function(){
    this.getUserName();
  }
};
</script>

<style scoped>
nav {
  height: 60px;
  background-color: var(--primary);
  position: relative;
  top: 0;
}
nav > .nav-content {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(-20px, -50%);
}
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