<template>
 <div class="l-form">
            <form action="" class="form">
                <h1 class="form__title">Crée un compte</h1>

                <div class="form__div">
                    <input type="text" class="form__input" placeholder=" ">
                    <label for="" class="form__label">Nom</label>
                </div>

                <div class="form__div">
                    <input type="text" class="form__input" placeholder=" ">
                    <label for="" class="form__label">Prenom</label>
                </div>

                <div class="form__div">
                    <input type="text" class="form__input" placeholder=" ">
                    <label for="" class="form__label">Email</label>
                </div>

                <div class="form__div">
                    <input type="text" class="form__input" placeholder=" ">
                    <label for="" class="form__label">N° carte d'identité ou passeport</label>
                </div>

                <div class="form__div">
                    <input type="password" class="form__input" placeholder=" ">
                    <label for="" class="form__label">Mot de passe</label>
                </div>

                <div class="form__div">
                    <input type="password" class="form__input" placeholder=" ">
                    <label for="" class="form__label">Confirmer mot de passe</label>
                </div>

                <input type="submit" class="form__button" value="Register">
            </form>
        </div>
</template>

<script>
module.exports = {
  component: {
    Login,
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
  height: 48px;
  margin-bottom: 1.5rem;
}
.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
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
  background-color: #F3F3F3;
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