<template>
  <div class="l-form">
    <form v-on:submit.prevent="handleForm" class="form">
      <h1 class="form__title">Connexion</h1>

      <div class="form__div">
        <input
          type="text"
          v-on:keydown="handleEmail"
          v-model="email"
          class="form__input"
          id="email"
          placeholder=" "
        />
        <label for="" class="form__label">Email</label>
        <small>okkkkkkkkkkkk</small>
      </div>

      <div class="form__div">
        <input
          type="password"
          v-on:keydown="handlePass"
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
      text: "error",
    };
  },
  methods: {
    setErrorFor(input, message) {
      input.style.color = 'red'
      input.innerText = message
    },
    setSuccessFor(input) {
      input.style.color='green'
      input.innerText ='Good email'
    },
    isEmail(email) {
      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    handleForm() {},
    handleEmail() {
      const small = window.document.querySelector("small");
      if (this.isEmail(this.email)) {
        this.setSuccessFor(small)
      } else {
        this.setErrorFor(small,"error")
      }

    },
    handlePass() {},
  },
};
</script>
