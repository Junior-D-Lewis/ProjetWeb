<template>
  <div class="l-form">
    <form v-on:submit.prevent="handleForm" class="form">
      <h1 class="form__title">Connexion</h1>

      <div class="form__div">
        <input
          type="text"
          v-on:input="handleEmail"
          v-model="email"
          class="form__input"
          id="email"
          placeholder=" "
        />
        <label for="" class="form__label">Email</label>
        <small id="errorMail"></small>
      </div>

      <div class="form__div">
        <input
          type="password"
          v-model="password"
          class="form__input"
          id="password"
          placeholder=" "
        />
        <label for="" class="form__label">Mot de passe</label>
      </div>

      <input type="submit" class="form__button" value="Login" />
    </form>
  </div>
</template>

<script>
module.exports = {
  component: {
    Login,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    setErrorFor(input, message) {
      input.style.color = "red";
      input.innerText = message;
    },
    setSuccessFor(input) {
      input.style.color = "green";
      input.innerText = "Good email";
    },
    isEmail(email) {
      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    handleEmail() {
      const small = window.document.getElementById("errorMail");
      if (this.isEmail(this.email)) {
        this.setSuccessFor(small);
        return true;
      } else {
        this.setErrorFor(small, "error");
        return false;
      }
    },
    async handleForm() {
      if (this.handleEmail() === true) {
        let data = { email: this.email, password: this.password };
        console.log(axios);

        const response = await axios.post("http://localhost:5000/login", data);
        console.log(response);

        if (response.status == 200)
          router.push({ path: "/home", params: data });
        else {
          /* window.alert("Authentication a echouee"); */
        }
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
:root {
  --normal-font-size: 1rem;
  --small-font-size: 0.75rem;
}

*,
::before,
::after {
  box-sizing: border-box;
}

.l-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 50px 0px;
  background-image: url("../img/cover.jpg");
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.883);
}

@media (min-width: 699px) {
  .form {
    width: 40%;
    padding: 4rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
    background-color: #f8f8f8;
  }
}
@media (max-width: 698px) {
  .form {
    width: 95%;
    padding: 4rem 1rem;
    border-radius: 1rem;
    background-color: #f8f8f8;
  }
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
