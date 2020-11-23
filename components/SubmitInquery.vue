<template>
  <section class="submitinquery u-center u-p-t-xl" v-scroll-reveal>
    <h5 class="submitinquery__title" v-html="data.title"></h5>
    <p class="u-p-t-s submitinquery__description" v-html="data.description"></p>
    <p class="u-p-t-s u-p-b-l submitinquery__action"><a :href="data.action.link">{{data.action.title}}</a></p>
  </section>
</template>

<script>

export default {
  props: {
    data: Object,
  },  
};
</script>