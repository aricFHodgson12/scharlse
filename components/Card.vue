<template>
  <section class="card">
      <div  v-bind:class="classObject"  :style="{ backgroundImage: `url(${data.image})` }">
        <span role="img" :arial-label="data.imageTitle"></span>
      </div>
      <div class="card__content u-desktop">
        <h5>{{data.title}}</h5>
        <p v-html="data.description"></p>
      </div>
      <div class="card__content u-mobile">
        <h5>{{data.title}}</h5>
        <p v-html="data.mobile_description"></p>
      </div>      
  </section>
</template>

<script>

export default {
  props: {
    data: Object,
    position:String
  },
  computed: {
    classObject: function () {
      return {
        "card__background card__left": this.position === "left" ,
        "card__background card__right": this.position === "right" ,
      }
    }
  }  
};
</script>
