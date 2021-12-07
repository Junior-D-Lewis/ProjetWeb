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
        <button class="delete" v-on:click="deleteEvent(id)"> Supprimer </button>
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
  methods: {
      deleteEvent:async function(id){
      const response = await axios.delete(`http://localhost:5000/events/${this.id}`);

      /* RELOAD LA PAGE */
    }
      
  }
};
</script>

<style scoped>
@media (min-width: 700px) {
  .card {
    position: relative;
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
.delete
{
    padding: 13px;
    outline: none;
    border: 1px solid red;
    border-radius: 5px;
    color: red;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: all 150ms;
}
.delete:hover
{
    border: 1px solid red;
    color: white;
    background-color: red;
}
</style>