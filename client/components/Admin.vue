<template>
  <div>
    <div id="app">
      <div class="content">
        <p class="subtitle"><strong>Vue.js</strong> Component</p>
        <h1 class="title">Accordion</h1>
        <hr />
        <p>
          A Vue accordion component using styles provided by the Bulma CSS
          framework.
        </p>
        <section class="section">
          <h3>Single Active Item</h3>
          <p>Only one accordion item's details will be displayed at a time.</p>
          <accordion id="accordion-example-1" :content="example1"></accordion>
        </section>
        <section class="section">
          <h3>Multiple Active Items</h3>
          <p>
            Add the <code>multiple</code> attribute to allow more than one
            accordion item's details to be showing.
          </p>
          <accordion
            id="accordion-example-2"
            :content="example2"
            multiple="multiple"
          ></accordion>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
};
</script>

<style>
</style>