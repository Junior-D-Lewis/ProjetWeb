<template>
  <div id="focus">
    <div class="cover">
      <img :src="search.url" alt="" />
    </div>
    <div class="content">
      <h1>{{ search.title }}</h1>
      <div class="details">
        <div class="left">
          <h3>
            Date : <span>{{ search.date }}</span>
          </h3>
          <h3>
            Secteur : <span>{{ search.secteur }}</span>
          </h3>
          <h3>
            Lieu : <span>{{ search.location }}</span>
          </h3>
        </div>
        <div class="right">
          <h3>
            Places : <span>{{ search.lastPlaces }}</span> restantes
          </h3>
          <h3>
            Durée : <span>{{ search.duree }}</span>
          </h3>
          <h3>
            Possibilité de recrutement : <span>{{ search.offer }}</span>
          </h3>
        </div>
      </div>
      <hr />
      <div class="decription">
        <h3>lorzkjfnrn ozini zrn zen iezn rnz</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          maxime, reprehenderit voluptas alias quod et debitis consequuntur sunt
          distinctio in a facere magnam aut excepturi nulla deleniti dicta autem
          dolores!
        </p>
        <h3>lorzkjfnrn ozini zrn zen iezn rnz</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          maxime, reprehenderit voluptas alias quod et debitis consequuntur sunt
          distinctio in a facere magnam aut excepturi nulla deleniti dicta autem
          dolores!
        </p>
      </div>

      <button v-on:click="apply(search.id)">Apply to this event</button>
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
      id: "",
      tt: "",
      datas: [
        {
          id: 1,
          title: "Sale",
          date: "12/23/21",
          url: "../img/brand.png",
          location: "France",
          lastPlaces: "32",
          duree: "2 heures",
          secteur: "Informatique",
          offer: "Yes",
        },
        {
          id: 2,
          title: "Aurel",
          date: "12/23/21",
          url: "../img/brand.png",
          location: "CHoisy",
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
          duree: "2 heures",
          secteur: "Vente",
          offer: "Yes",
        },
      ],
    };
  },
  methods: {
    apply: function(e) {
      const reponse =axios.post("http://localhost:5000/participation",{event_id:e});
    }
  },
  computed: {
    search: function () {
      return this.datas.find((element) => element.id == this.$route.params.id);
    },
  },
  watch: {
    $route(to, from) {
      /* console.log(this.id); */
      this.id = this.$route.params.id;
    },
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style scoped>
@media (min-width: 699px) {
  .cover img {
    width: 100%;
    height: 600px;
  }
  .content {
    padding: 30px 0px;
    width: 55%;
    margin: auto;
  }
  .details {
    padding: 20px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 698px) {
  .cover img {
    width: 100%;
    height: 500px;
  }
  .content {
    text-align: center;
    width: 96%;
    margin: auto;
  }
  .details {
    grid-template-columns: 1fr;
  }
}
span {
  color: var(--primary);
}
hr {
  margin: 20px 0px;
}
button {
  margin: 15px 0px;
  width: 100%;
  padding: 14px;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 5px;
  background-color: inherit;
  cursor: pointer;
  transition: all 200ms;
}
button:hover {
  background-color: var(--primary);
  color: white;
}
</style>
