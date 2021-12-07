<template>
  <div :class="id">
    <div class="card">
      <div class="card-left">
        <img :src="url" />
      </div>
      <div class="card-right">
        <h1>{{ title }}</h1>
        <br />
        <div class="infos">
          <p>
            <img src="../img/calendar-date.png" alt="" />
            {{ date }}
          </p>
          <p>
            <img src="../img/location.png" alt="" />
            {{ location }}
          </p>
          <p>
            <img src="../img/chair.png" alt="" />
            Places restantes: {{ lastPlaces }}
          </p>
          <p>
            <img src="../img/email.png" alt="" />
            Offres: {{ offer }}
          </p>
        </div>
        <br>
        <router-link v-if="connected" :to="`/home/${id}`"> En savoir plus </router-link>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["id", "title", "url", "date", "location", "lastPlaces", "offer"],
  data() {
    return {
      
    };
  },
  computed: {
    connected: function() {
      if(localStorage.getItem('login') === "yes")
      {
        return true;
      }
      else
      {
        console.log("chaud")
        return false;
      }
    }
  },

};
</script>

<style scoped>
@media (min-width: 700px) {
  .card {
    margin: 20px;
    box-shadow: 0px 5px 10px #ccc;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 699px) {
  .card {
    margin: 20px;
    box-shadow: 0px 5px 10px #ccc;
    display: grid;
    grid-template-columns: 1fr;
  }
}
.card-left img {
  width: 100%;
  margin: auto;
  height: 100%;
  max-height: 300px;
}
.card-right {
  position: relative;
  margin: 20px;
}
.infos p {
  display: flex;
}
.infos img {
  width: 30px;
  margin: 2px 25px;
}
a {
  color: var(--first-color);
  text-decoration: none;
  font-weight: bold;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}
a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: var(--first-color);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
</style>