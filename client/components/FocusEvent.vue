<template>
  <div id="focus">
    <div class="cover"></div>
    <div class="content">
      <h2>Lrunt ratexcepturi, quae ea officiis. Eaque?</h2>
      <div class="details">
        <div class="left">
          <h3> Date : </h3>
          <h3>Secteur :</h3>
          <h3>Lieu :</h3>
        </div>
        <div class="right">
          <h3>Durée :</h3>
          <h3>Possibilité de recrutement :</h3>
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

      <button>Apply to this event</button>
    </div>
  </div>
</template>

<script>
module.exports = {
  component: {
    Focus,
  },
};
</script>

<style scoped>
.cover {
  height: 60vh;
  width: 100%;
  display: block;
  background-image: url("../img/woman.jpg");
  background-size: cover;
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
