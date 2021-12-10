<template>
  <div id="home">
    <nav>
      <div class="nav-content">
        <i class="fas fa-user"></i>
        <small> {{ userData.prenom }} {{ userData.nom }} </small>
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
        :url="data.image"
        :location="data.localisation"
        :last-places="data.available_seats"
        :offer="data.offer"
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
      userData: {},
      datas: [],
    };
  },
  methods: {
    getEvents: async function () {
      const response = await axios.get("http://localhost:5000/events");
      /* console.log(response.data); */
      this.datas = response.data;
      /* console.log(this.datas) */
    },
    getUserName: async function () {
      const response = await axios.get("http://localhost:5000/login/who");
      if (response.status != 200) {
        /* router.push({ path: "/login" }); */
        /* JE SAIS PAS COMMENT FAIRE LE PUSH */
      }
      this.userData = response.data;
    },
  },
  created: function () {
    if (localStorage.getItem("login") != "yes") {
      router.push({ path: "/login", params: {} });
    }
    this.getEvents();
    this.getUserName();
  },
  mounted: function () {
    router.beforeEach((to, from, next) => {
      if (localStorage.getItem("login")) {
        next()
      } else {
        if(from.path === "/deconnexion")
        {
          console.log("Il veut se deconnecter")
          next()
        }
      }
    });
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