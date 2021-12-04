<template>
  <div id="list">
    <h1>List of all events</h1>
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
</template>

<script>
const Card = window.httpVueLoader("../components/Card.vue");

module.exports = {
  components: {
    Card,
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
    };
  },
};
</script>

<style>
</style>