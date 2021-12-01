<template>
  <div id="auth">
    <header>
      <div id="header-content">
        <h2>JOIN THE COMMUNITY ...</h2>
        <!-- <a href="#id01" id="launchModal">Ouvrir la fenêtre modale</a> -->
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

    <Bottom></Bottom>
  </div>
</template>

<script>
const Bottom = window.httpVueLoader("./components/Bottom.vue");

const Register = window.httpVueLoader("./components/Register.vue");
const Login = window.httpVueLoader("./components/Login.vue");

module.exports = {
  components: {
    Auth,
    /* Modal, */
    Register,
    Login,
    Card,
    Bottom,
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
  /* methods: {
    simulateClick() {
      setTimeout(() => {
        window.document.getElementById("launchModal").click();
        console.log("dd");
      }, 100);
    },
  }, */
};
</script>

<style scoped>
header {
  color: white;
  height: 100vh;
  background-image: url("../img/cover.jpg");
  background-size: cover;
  background-blend-mode: soft-light;
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
header h2 {
  font-size: 3em;
}
#buttons {
  margin: 15px 0px;
  text-align: center;
}

#buttons button {
  font-size: 1.2em;
  color: black;
  width: 150px;
  padding: 16px 20px;
  background-color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 5px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
#buttons button:hover {
  font-weight: bold;
  background: var(--lightPrimary);
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

@media screen and (min-width: 520px) {
  #advantages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 60%;
    margin: auto;
    padding: 20px 0px;
  }
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
    width: 100%;
  }
  .part {
    width: 100%;
    margin: auto;
  }
  #divider {
    width: 20%;
  }
}
</style>