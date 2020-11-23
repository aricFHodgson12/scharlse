<template>
  <div class="hamburger" @click="showMenuPopup">MENU</div>
</template>

<script>
export default {
  methods: {
    showMenuPopup() {
      // When the popup is shown, we want a fixed body
      document.body.style.overflow = "hidden";

      this.$store.commit("SET_MENUPOPUP", true);

      this.$nextTick(() => {
        //gsap.to(".popup--menu .popup__inner", 0.7, { x: 0 });
        this.shopPopup = true;
      });
    },
  },
};
</script>
