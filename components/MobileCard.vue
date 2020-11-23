<template>
  <section class="mobilecards">
    <div class="mobilecards__title">
      <h2 v-html="data.header.title"></h2>
      <p v-html="data.header.description"></p>
    </div>
    <div class="mobilecards__content">
      <div v-for="(item, key) in data.content" :key="key" class="mobilecards__content__item">
        <div class="mobilecards__content__item__content">
          <img :src="item.background" :alt="item.imageTitle" />
          <h5>{{item.title}}</h5>
          <p>{{item.description}}</p>
          <div class="textcard__content__overlay"></div>
        </div>
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