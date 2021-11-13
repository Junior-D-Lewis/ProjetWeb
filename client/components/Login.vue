<template>
 <div class="l-form">
            <form action="" class="form">
                <h1 class="form__title">Connexion</h1>

                <div class="form__div">
                    <input type="text" class="form__input" placeholder=" ">
                    <label for="" class="form__label">Email</label>
                </div>

                <div class="form__div">
                    <input type="password" class="form__input" placeholder=" ">
                    <label for="" class="form__label">Mot de passe</label>
                </div>       

                <input type="submit" class="form__button" value="Login">
            </form>
        </div>
</template>

<script>
module.exports = {
  component: {
    Register,
  },
};
</script>