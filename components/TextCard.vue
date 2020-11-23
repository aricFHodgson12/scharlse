<template>
  <section class="textcards">
    <div v-for="(item, key) in data" :key="key" class="textcard">
      <div class="textcard__content">
        <h5>{{key + 1}}</h5>
        <h5 v-html="item.title"></h5>
        <p v-html="item.description"></p>
        <div class="textcard__content__overlay"></div>
      </div>

    </div>

  </section>
</template>

<script>

export default {
  props: {
    data: Array
  },
  computed: {
  }  
};
</script>
