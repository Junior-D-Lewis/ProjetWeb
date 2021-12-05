<template>
  <div id="home">
    <nav>
      <div class="nav-content">
        <i class="fas fa-user"></i>
        <small> {{userData.prenom}} {{userData.nom}} </small>
      </div>
    </nav>
    <router-view></router-view>
    <div class="cards">
      <!-- Do a v-for -->
      <Card
        v-for="data in datas"
        :key="data.id"
        :id="data.id"
        :title="data.title"
        :date="data.date"
        :url="data.url"
        :location="data.location"
        :last-places="data.lastPlaces"
        :offer="data.yes"
      ></Card>
    </div>
  </div>
</template>

<script>
const Card = window.httpVueLoader("../components/Card.vue");

module.exports = {
  components: {
    Card,
  },
  data() {
    return {
      userData:{},
      datas: [
        {
          id: 1,
          title: "Sale",
          date: "12/23/21",
          url: "../img/brand.png",
          location: "France",
          lastPlaces: "32",
          duree: "1.60 heures",
          secteur: "Informatique",
          offer: "Yes",
        },
        {
          id: 2,
          title: "Aurel",
          date: "12/23/21",
          url: "../img/brand.png",
          location: "Choisy",
          lastPlaces: "32",
          duree: "2 heures",
          secteur: "Télécoms",
          offer: "Yes",
        },
        {
          id: 3,
          title: "wow",
          date: "12/23/21",
          url: "../img/brand.png",
          location: "Hour",
          lastPlaces: "32",
          duree: "3 heures",
          secteur: "Vente",
          offer: "Yes",
        },
      ],
    };
  },
  methods: {
    getEvents: async function () {
      const response = await axios.get("http://localhost:5000/events");
      console.log(response.data);
      /* Tu vas integrer ca a this.datas quand tu seras pret */
    },
    getUserName: async function () {
      const response = await axios.get("http://localhost:5000/login/who");
      this.userData = response.data;
    },
  },
  created: function () {
    this.getEvents();
    this.getUserName();
  },
};
</script>

<style scoped>
#home {
  background-color: #f8f8f8;
}
nav {
  height: 60px;
  background-color: var(--primary);
  position: relative;
}
nav > .nav-content {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(-20px, -50%);
}
@media (min-width: 699px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 699px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>