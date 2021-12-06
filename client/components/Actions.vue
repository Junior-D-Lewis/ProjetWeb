<template>
  <div id="actions">
    <h1>Faire des actions</h1>

    <form v-on:submit.prevent="handleSubmit" class="form">
      <!-- titre, description , image, places, localisation -->
      <p>Slectionner ce champ pour modifier un évènememnt</p>
      <div class="form__div">
        <select class="form__input" v-model="selected">
          <option disabled value="">Please select one</option>
          <option>Titre des eveneements</option>
          <option>B</option>
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
        <textarea class="form__input" placeholder=" " v-model="description">
        </textarea>

        <label for="" class="form__label">Description</label>
      </div>

      <div class="form__div">
        <input type="text" class="form__input" placeholder=" " v-model="url" />
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

      <button type="submit" class="form__button">{{ buttonValue }}</button>
    </form>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: "",
      description: "",
      url: "",
      selected: "",
      places: "",
      localisation: "",
      date: "",
      url: "",
      /* Contient tous les evenements de la base de données */
      datas: [],
    };
  },
  methods: {
    addEvent: async function () {
      const data = {
        title: this.title,
        description: this.description,
        image: this.url,
        available_seats: this.places,
        localisation: this.localisation,
      };
      const response = await axios.post("http://localhost:5000/events", data);
    },
    modifyEvent: async function () {
      const event_id = this.datas.find((ev) => ev.title == this.nom).id;
      console.log();
      const data = {
        nom: this.title,
        description: this.description,
        image: this.url,
        available_seats: this.places,
        localisation: this.localisation,
      };

      const response = await axios.put(`http://localhost:5000/events/${event_id}`, data);
    },
    getEvents: async function () {
      const response = await axios.get("http://localhost:5000/events");
    },
  },
  computed: {
    buttonValue: function () {
      if (this.selected === "") {
        return "Ajouter cet évènement";
      } else {
        return "Modifier cet évènement";
      }
    },
    handleSubmit: function () {
      if (this.selected === "") {
        return this.addEvent();
      } else {
        return this.modifyEvent();
      }
    },
  },
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