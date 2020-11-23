<template>
  <section class="article" v-bind:class="{ article_full: position == 'full' }">
      <div  v-bind:class="classObject"  :style="{ backgroundImage: `url(${data.image})` }">
        <span role="img" :arial-label="data.imageTitle"></span>
        <div class="article__texts">
          <h2 class="content_title">{{data.title}}</h2>

          <p class="u-m-t u-desktop" v-html="data.subTitle"></p>        
          <p class="u-m-t u-mobile" v-html="data.mobile_subTitle"></p>        
          <h5 v-if="data.action">
            <nuxt-link :to="data.action.link">
              {{ data.action.title }}
            </nuxt-link>                                
          </h5>
        </div>        
      </div>
      <div class="article__content" v-if="data.content">
        <h5 class="u-m-t u-desktop">{{data.content.title}}</h5>
        <h5 class="u-m-t u-mobile">{{data.content.mobile_title}}</h5>
        <p v-html="data.content.description"></p>
        <ul class="u-m-t">
          <li
            v-for="(item, key) in data.content.items"
            :key="key"
          ><span>{{item}}</span></li>
        </ul>
        <div class="u-m-t article__links" >
            <nuxt-link :to="data.content.learn" v-if="data.content.learn">
              LEARN MORE
            </nuxt-link>

            <a href="#" v-if="data.content.join" @click="joinnow"> JOIN NOW </a>
                             
        </div>
        <div class="article__content__overlay"></div>
      </div>

  </section>
</template>

<script>

export default {
  props: {
    data: Object,
    position:String
  },
  methods:{
    joinnow() {
      this.$store.commit("SET_CONSULATIONPOPUP", true);
    }
  },
  computed: {
    classObject: function () {
      return {
        "article__background article__left": this.position === "left" ,
        "article__background article__right": this.position === "right" ,
        "article__background article__full": this.position === "full" ,
      }
    }
  }  
};
</script>
