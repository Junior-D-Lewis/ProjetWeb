<template>
  <div class="l-form">
    <form v-on:submit.prevent="handleForm" class="form">
      <h1 class="form__title">Créer un compte</h1>

      <div class="form__div">
        <input
          type="text"
          class="form__input"
          placeholder=" "
          v-on:keyup="handleNom"
          v-model="nom"
        />
        <label for="" class="form__label">Nom</label>
        <small id="errorNom"></small>
      </div>

      <div class="form__div">
        <input
          type="text"
          class="form__input"
          placeholder=" "
          v-on:keyup="handlePrenom"
          v-model="prenom"
        />
        <label for="" class="form__label">Prenom</label>
        <small id="errorPrenom"></small>
      </div>

      <div class="form__div">
        <input
          type="text"
          class="form__input"
          placeholder=" "
          v-on:keydown="handleEmail"
          v-model="email"
        />
        <label for="" class="form__label">Email</label>
        <small id="errorMail"></small>
      </div>

      <div class="form__div">
        <input
          type="text"
          class="form__input"
          placeholder=" "
          v-model="numeroPiece"
        />
        <label for="" class="form__label"
          >N° carte d'identité ou passeport</label
        >
      </div>

      <div class="form__div">
        <input
          type="password"
          class="form__input"
          placeholder=" "
          v-on:keydown="handlePassword"
          v-model="mdp"
        />
        <label for="" class="form__label">Mot de passe</label>
        <small id="errorPassword"></small>
      </div>

      <div class="form__div">
        <input
          type="password"
          class="form__input"
          placeholder=" "
          v-on:keyup="confirmPassword"
          v-model="confirmMdp"
        />
        <label for="" class="form__label">Confirmer mot de passe</label>
        <small id="confirmation"></small>
      </div>

      <input type="submit" class="form__button" value="Register" />
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
      nom: "",
      prenom: "",
      email: "",
      numeroPiece: "",
      mdp: "",
      confirmMdp: "",
    };
  },
  methods: {
    setErrorFor(input, message) {
      input.style.color = "red";
      input.innerText = message;
    },
    setSuccessFor(input, message) {
      input.style.color = "green";
      input.innerText = message;
    },
    isEmail(email) {
      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    isPassword(password) {
      const PASSWORD_REGEX =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      return PASSWORD_REGEX.test(password);
    },
    handleNom() {
      const small = window.document.getElementById("errorNom");

      if (this.nom.length <= 2) {
        this.setErrorFor(small, "Nom trop court");
                return false

      } else {
        this.setSuccessFor(small, "Nom validé");
                return true

      }
    },
    handlePrenom() {
      const small = window.document.getElementById("errorPrenom");

      if (this.prenom.length <= 2) {
        this.setErrorFor(small, "Prénom trop court");
        return false
      } else {
        this.setSuccessFor(small, "Prénom validé");
        return true
      }
    },
    handleEmail() {
      const small = window.document.getElementById("errorMail");
      if (this.isEmail(this.email)) {
        this.setSuccessFor(small, "Good mail");
                return true

      } else {
        this.setErrorFor(small, "Error");
                return false

      }
    },
    handlePassword() {
      const small = window.document.getElementById("errorPassword");
      if (this.isPassword(this.mdp)) {
        this.setSuccessFor(small, "Strong Password");
                return true

      } else {
        this.setErrorFor(small, "Error");
                return false

      }
    },
    confirmPassword() {
      const small = window.document.getElementById("confirmation");
      if (this.mdp === this.confirmMdp) {
        this.setSuccessFor(small, "Password confirmed");
                return true

      } else {
        this.setErrorFor(small, "Error");
                return false

      }
    },
    handleForm()
    {
      if( this.handleNom() && this.handlePrenom() && this.handleEmail() && this.handlePassword() && this.confirmPassword())
      {
        let data = {nom: this.nom, prenom: this.prenom, mail: this.email, numeroPiece: this.numeroPiece, password: this.mdp}
        console.log(data)
        /*
          Code backend 
        */
      }
      else
      {
        alert("Erreur détectée")
      }
    }
  },
};
</script>

<style>
/*===== VARIABLES CSS =====*/
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
  padding: 50px 0px;
}
.form {
  width: 90%;
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
  z-index: 1;
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
  margin-left: auto;
  padding: 0.75rem 2rem;
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