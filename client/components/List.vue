<template>
  <div id="list">
    <div class="top">
      <h1>List of all events</h1>
      <input
        type="text"
        v-model="inputFilter"
        placeholder="Rechercher par nom ..."
      />
    </div>
    <div id="cardadmin">
      <Card-admin
        v-for="event in filteredEvents"
        v-bind:key="event.id"
        :id="event.id"
        :title="event.title"
        :date="event.date"
        :url="event.url"
        :location="event.location"
        :last-places="event.lastPlaces"
        :offer="event.yes"
      ></Card-admin>
    </div>
  </div>
</template>

<script>
const CardAdmin = window.httpVueLoader("../components/CardAdmin.vue");

module.exports = {
  components: {
    CardAdmin,
  },
  data() {
    return {
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
      inputFilter: "",
    };
  },
  computed: {
    filteredEvents() {
      return this.datas.filter((element) => {
        return element.title.match(this.inputFilter);
      });
    },
  },
};
</script>

<style scoped>
#cardadmin
{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
input {
  padding: 15px;
  width: 96%;
  margin: auto;
  outline: none;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
}
input:focus {
  color: var(--first-color);
  font-size: var(--small-font-size);
}
@media (min-width: 700px) {
  .top {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 699px) {
  .top {
    grid-template-columns: 1fr;
  }
}
</style>