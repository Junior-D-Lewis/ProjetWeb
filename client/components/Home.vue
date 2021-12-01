<template>
  <div id="home">
    <nav>
      <div class="nav-content">
        <i class="fas fa-user"></i>
        <small> Name current user </small>
      </div>
    </nav>
    <div class="cards">
      <Card
        title="Le titre"
        date="12/23/21"
        url="../img/woman.jpg"
        location="France"
        last-places=32
        offer="Yes"
      ></Card>
      <Card
        title="Le titre"
        date="12/23/21"
        url="../img/brand.png"
        location="France"
        last-places="32"
        offer="Yes"
      ></Card>
      <Card
        title="Le titre"
        date="12/23/21"
        url="../img/brand.png"
        location="France"
        last-places=32
        offer="Yes"
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
};
</script>

<style scoped>
#home
{
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