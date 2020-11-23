<template>
  <main class="magazine u-p-t-xl">
    <div class="container">
      <div class="error__wrap">
        <div>
          <h1 v-if="error.statusCode === 404">Page not found</h1>
          <h1 v-else>An error occurred</h1>
          <nuxt-link class="button" to="/">Home page</nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("menus/getMenus");
    await this.$store.dispatch("services/getServices");
    await this.$store.dispatch("presses/getPresses");
  },

  props: ["error"]
};
</script>

<style lang="scss" scoped>
.error__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
</style>