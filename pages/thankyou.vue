<template>
  <div>
    <div class="u-height-100vh">
      <div class="container">
        <div class="flex flex--middle u-height-100">
          <div class="flex__cell">
            <h1 class="u-center">Thank you for your {{ formName }}</h1>
            <h3 class="u-center" v-show="!isNewsletter">We will get back to you shortly.</h3>
            <div class="u-center">
              <nuxt-link to="/">Back to home page</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Thank you",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Thank you",
        },
      ],
    };
  },
  computed: {
    formName() {
      return this.$route.query.form == "newsletter" ? "Subscribing" : "REQUEST";
    },

    isNewsletter() {
      return this.$route.query.form == "newsletter";
    },
  },
};
</script>
