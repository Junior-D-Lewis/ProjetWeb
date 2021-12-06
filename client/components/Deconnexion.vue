<template>
  <div>
  </div>
</template>

<script>
module.exports = {
  methods:{
    deconnect:async function(){
      const response=await axios.get("http://localhost:5000/deconnexion");    
    }
  },
  created() {
    this.deconnect();
    router.push({ path: "/" });
  },
};
</script>

<style>
</style>