<template>
  <div id="auth">
    <header>
      <div id="header-content">
        <h2>REGOIGNEZ LA COMMUNAUTÉ</h2>
        <a href="#id01" id="launchModal">Ouvrir la fenêtre modale</a>
        <div id="buttons">
          <router-link to="/register">
            <button>Register</button>
          </router-link>
          <router-link to="/login" id="login">
            <button>Login</button>
          </router-link>
        </div>
      </div>
    </header>

    <main>
      <h2>AVANTAGES</h2>
      <span id="divider"></span>

      <div id="advantages">
        <div class="part" v-for="advantage in advantages" :key="advantage.id">
          <img :src="advantage.url" />
          <h4>{{ advantage.title }}</h4>
          <p>{{ advantage.text }}</p>
        </div>
      </div>
    </main>

    <footer>
      <div id="bottom">
        <span>
          &copy; <a href="https://www.efrei.fr/">EFREI PARIS</a> Students
          project 2021
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
const Register = window.httpVueLoader("./components/Register.vue");
const Login = window.httpVueLoader("./components/Login.vue");
const Modal = window.httpVueLoader("./components/Modal.vue");

module.exports = {
  components: {
    Auth,
    Modal,
    Register,
    Login,
  },

  data() {
    return {
      advantages: [
        {
          id: 1,
          url: "../img/scissors.png",
          title: "Utilité et utilité",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!",
        },
        {
          id: 2,
          url: "../img/scissors.png",
          title: "Utilité et utilité",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!",
        },
        {
          id: 3,
          url: "../img/scissors.png",
          title: "Utilité et utilité",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa eveniet alias!",
        },
      ],
    };
  },
  methods: {
    simulateClick() {
      setTimeout(() => {
        window.document.getElementById("launchModal").click();
        console.log("dd");
      }, 100);
    },
  },
};
</script>

<style scoped>
header {
  color: white;
  height: 100vh;
  background-image: url("../img/cover.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.77);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#buttons {
  margin: 15px 0px;
  text-align: center;
}

#buttons button {
  color: black;
  width: 130px;
  padding: 15px 20px;
  background-color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 15px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
#buttons button:hover {
  color: white;
  background: transparent;
}
#launchModal {
  visibility: hidden;
}
/* For phones */
@media screen and (max-width: 520px) {
  header {
    text-align: center;
  }
  #buttons {
    margin: 25px 0px;
    text-align: center;
  }
}
/* -------------------------------------- Main ------------ ------------------------------ */
main {
  padding: 40px 0px;
  text-align: center;
}
main h2 {
  padding: 25px 0px;
}
#divider {
  width: 5%;
  margin: auto;
  height: 2px;
  background-color: var(--primary);
  display: block;
}
#advantages {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 60%;
  margin: auto;
  padding: 20px 0px;
}
.part {
  width: 50%;
  margin: auto;
}
.part img {
  width: 50px;
  margin: 15px 0px;
}
@media screen and (max-width: 520px) {
  #advantages {
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
  }
  .part {
    width: 90%;
    margin: auto;
  }
  #divider {
    width: 20%;
  }
}
/* -------------------------------------- Footer ------------ ------------------------------ */

#bottom {
  background-color: var(--primary);
  padding: 28px 0px;
  text-align: center;
}
</style>