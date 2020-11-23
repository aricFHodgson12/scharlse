<template>
  <section class="hero" :class="page" :style="img_section_style">
    <span role="img" :arial-label="data.title"></span>
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    },
    "page": {
      type: String,
      default: ""
    }
  },
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
  mounted() {
    this.$nextTick(() => {
      let hero = document.getElementsByClassName("hero")[0];

      window.addEventListener("scroll", e => {
        let scrollTop = window.scrollY;

        // hero.style.backgroundPosition = `100% -${scrollTop / 10}px`;
      });
    });
  },
  computed: {
      img_section_style: function(){
          var bgImg= this.data.image;
          return {
              "background-image": 'url('+bgImg+')',
          }
      },
  }  
};
</script>
