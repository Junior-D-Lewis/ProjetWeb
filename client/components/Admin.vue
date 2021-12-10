<template>
  <div id="admin">
    <div class="welcome">
      <h1>WELCOME Mrs. ADMIN</h1>
    </div>
    <div class="routes">
      <router-link class="list" to="/admin/list">
        Liste des évènements
      </router-link>
      <router-link class="action" to="/admin/actions">
        Effectuer une action
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  created: function () {
    if (localStorage.getItem("isAdmin") != "yes") {
      router.push({ path: "/login", params: {} });
    }
  },
};
</script>

<style scoped>
#admin {
  text-align: center;
}
.welcome {
  padding: 30px 0px;
}
.routes {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px 0px;
}
a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}
.list {
  padding: 25px;
  background-color: var(--lightPrimary);
}
.action {
  padding: 25px;
  background-color: var(--input-color);
}
</style>