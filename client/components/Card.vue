<template>
  <div>
    <div class="card">
      <div class="card-left">
        <img :src="url"/>
      </div>
      <div class="card-right">
        <h1> {{title}} </h1>
        <br /><br />
        <div class="infos">
          <p>
            <img src="../img/calendar-date.png" alt="" />
            {{date}}
          </p>
          <p>
            <img src="../img/location.png" alt="" />
            {{location}}
          </p>
          <p>
            <img src="../img/chair.png" alt="" />
            Places restantes: {{lastPlaces}}
          </p>
          <p>
            <img src="../img/email.png" alt="" />
            Offres: {{offer}}
          </p>
        </div>
        <button>Voir plus</button>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  components: {
    Card,
  },
  props: ['title', 'url', 'date', 'location', 'lastPlaces', 'offer'],
  data() {
    return {
      events: [
        {
          id: 1,
          url: "../img/cover.jpg",
          date: "15/12/2021",
          location: "Villejuif",
          lastPlaces: 12,
          offer: false,
        },
        {
          id: 2,
          title: "Titre de l'évènement",
          url: "../img/cover.jpg",
          date: "15/12/2021",
          location: "Villejuif",
          lastPlaces: 12,
          offer: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (min-width: 700px) {
  .card {
    margin: 20px;
    box-shadow: 0px 5px 10px #ccc;
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
  height: 100%;
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
  margin: 0px 25px;
}
button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 0.75rem 2rem;
  outline: none;
  border: none;
  background-color: var(--first-color);
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}
</style>