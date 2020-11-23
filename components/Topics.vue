<template>
    <section class="topics">
      <div class="container u-desktop">
        <h2 class="topics__title u-m-b-l" v-if="data.title" v-html="data.title"></h2>
        <p class="topics__description u-m-b-l" v-if="data.description" v-html="data.description"></p>

        <p class="topics__description u-m-b-l" v-if="data.description_1" v-html="data.description_1"></p>
      </div>

      <div class="container u-mobile">
        <h2 class="topics__title u-m-b-l" v-if="data.mobile_title" v-html="data.mobile_title"></h2>
        <p class="topics__description u-m-b-l"  v-if="data.mobile_description" v-html="data.mobile_description"></p>

        <p class="topics__description u-m-b-l"  v-if="data.mobile_description_1" v-html="data.mobile_description_1"></p>
      </div>      

      <div v-if="link" class="topics__link">
        <nuxt-link :to="link.action">
          {{ link.title }}
        </nuxt-link>                    
      </div>
      <div class="articles">
        <Article :data="homeData" position="left" v-if="homeData"/>
        <Article :data="awayData" position="right" v-if="awayData"/>
      </div>
    </section>

</template>

<script>

export default {
  components: {
    Article: () => import("@/components/Article"),
  },  
  props: {
    data: Object,
    homeData: Object,
    awayData: Object,
    link: Object
  },
  computed: {
  }  
};
</script>
