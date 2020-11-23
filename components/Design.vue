<template>
  <section>
    <div class="design">
      <h2 class="design__title u-desktop content_title">{{data.title}}</h2>
      <h2 class="design__title u-mobile content_title">{{data.mobile_title}}</h2>
      <p class="design__description u-desktop" v-html="data.description"></p>
      <p class="design__description u-mobile" v-html="data.mobile_description"></p>
      <div class="design__background" :style="{ backgroundImage: `url(${data.image})` }">
        <span role="img" :arial-label="data.imageTitle"></span>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    data: Object,
  },
  computed: {
  }  
};
</script>
