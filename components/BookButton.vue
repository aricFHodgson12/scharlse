<template>
  <div>
    <button :class="` ${classes}`" href="#" @click="showPopup">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: "",
    },
  },

  methods: {
    showPopup() {
      // When the popup is shown, we want a fixed body
      document.body.style.overflow = "hidden";
      document.body.style.top = `-${window.scrollY}px`;

      this.$store.commit("SET_CONSULATIONPOPUP", true);
    },
  },
};
</script>
