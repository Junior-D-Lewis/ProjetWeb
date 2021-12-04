<template>
  <div id="actions">
    <h1>Faire des actions</h1>

    <form v-on:submit.prevent="handleForm" class="form">
      <!-- titre, description , image, places, localisation -->
      <p>Slectionner ce champ pour modifier un évènememnt</p>
      <div class="form__div">
        <select class="form__input" v-model="handle">
          <option value="">--- Ne rien selectionner ---</option>
          <option value="">sljruo</option>
          <option value="">jkazeoi</option>
        </select>
      </div>

      <div class="form__div">
        <input
          type="text"
          class="form__input"
          placeholder=" "
          v-model="title"
        />
        <label for="" class="form__label">Titre</label>
      </div>

      <div class="form__div">
        <textarea class="form__input" placeholder=" " v-model="url"> </textarea>

        <label for="" class="form__label">Description</label>
      </div>

      <div class="form__div">
        <input type="file" class="form__input" placeholder=" " />
        <label for="" class="form__label">Image</label>
      </div>

      <div class="form__div">
        <input
          type="number"
          class="form__input"
          placeholder=" "
          v-model="places"
        />
        <label for="" class="form__label"> Places </label>
      </div>

      <div class="form__div">
        <input
          type="password"
          class="form__input"
          placeholder=" "
          v-model="localisation"
        />
        <label for="" class="form__label">Localisation</label>
      </div>

      <div class="form__div">
        <input type="date" class="form__input" placeholder=" " v-model="date" />
        <label for="" class="form__label">Date de tenue</label>
      </div>

      <input type="submit" class="form__button" value="Valider" />
    </form>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: "",
      url: "",
      handle: "",
      places: "",
      localisation: "",
      date: "",
      datas: []
    };
  },

  /* 
    Tu utilise axios pour get les data
    qu'on va mettre dans datas
  */
};
</script>

<style scoped>

.l-form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
}
.form {
  width: 40%;
  margin: auto;
  padding: 4rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}
.form__title {
  font-weight: 400;
  margin-bottom: 3rem;
}
.form__div {
  position: relative;
  height: 70px;
  margin-bottom: 1.5rem;
}
.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100%-20px);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 0;
}
small {
  position: absolute;
  bottom: 0;
}
.form__label {
  position: absolute;
  color: black;
  left: 1rem;
  top: 1rem;
  padding: 0 0.25rem;
  transition: 0.3s;
}
.form__button {
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  background-color: var(--first-color);
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}
.form__button:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
}

.form__input:focus + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  color: var(--first-color);
  font-size: var(--small-font-size);
  font-weight: 500;
  z-index: 10;
  background-color: #f3f3f3;
}

.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: var(--small-font-size);
  font-weight: 500;
  z-index: 10;
}

.form__input:focus {
  border: 1.5px solid var(--first-color);
}
</style>