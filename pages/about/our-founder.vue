<template>
  <main>

    <Hero :data="heroData" page="founder">
      <div class="hero__wrap ">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <p class="italic founder__word" v-html="founder_word" >
            </p>                      
            <p class="u-font-l founder__name" v-html="founder"></p>                                  
          </div>

          <div class="u-desktop">
            <p class="u-font-xl u-m-b-l italic" v-html="founder_word" >
            </p>                      
            <p class="u-font-l" v-html="founder"></p>                                  
          </div>          
          
        </div>           
        <div class="hero__arrow">
          <img class="lazyload" data-src="~assets/images/down-arrow.svg" alt />
        </div>  
      </div>
    </Hero>

    <div class="founder_topics">
      <Topics :data="topics" />
    </div>
    

    <Frequently />
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/jaclyn_portrait.jpg";
import homeImage from "@/assets/images/home.jpg";
import awayImage from "@/assets/images/away.jpg";
export default {
  name: "our-founder",
  async asyncData({ store, error, route }) {
    try {
      const page = await store.dispatch("pages/getPage", {
        slug: route.name
      });

      if (page) return { page };
      else error({ statusCode: 404 });
    } catch (err) {
      error(err);
    }
  },

  components: {
    Hero: () => import("@/components/Hero"),
    Topics: () => import("@/components/Topics"),
    Frequently: () => import("@/components/Frequently.vue"),
  },

  data() {
    return {   
      founder_word: "“I personally travel to every corner of the world to test and<br> vet the experiences I’m offering to my clients.”",
      founder: "JACLYN SIENNA INDIA <br> FOUNDER",
      topics:{
        "description": "The Sienna Charles story began in 2008 when the then New York-based Jaclyn Sienna India made it her mission to combine her passions for travel and luxury while making a point of truly understanding the wants and needs of the world’s most discerning people.<br><br>Since then, she has traveled to over 90 countries, spending over 200 days a year on the road, personally vetting, selecting and curating the finest things in life while becoming one of the foremost authorities in the luxury industry.<br><br>With an eye for the extraordinary, an appreciation for uncompromising quality, and a deep understanding of personal tastes, India has quietly unearthed extraordinary travel and lifestyle experiences. From the world’s most luxurious hotels to the most in-demand health gurus on tap, her Little Black Book of contacts extends across the globe to provide the ultimate in personal experiences and recommendations.<br><br>India believes that no adventure is beyond the imagination. That anything is possible.",
        "mobile_description": "The Sienna Charles story began in 2008 when the then New York-based Jaclyn Sienna India made it her mission to combine her passions for travel and luxury while making a point of truly understanding the wants and needs of the world’s most discerning people.<br><br>Since then, she has traveled to over 90 countries, spending over 200 days a year on the road, personally vetting, selecting and curating the finest things in life while becoming one of the foremost authorities in the luxury industry.<br><br>With an eye for the extraordinary, an appreciation for uncompromising quality, and a deep understanding of personal tastes, India has quietly unearthed extraordinary travel and lifestyle experiences. From the world’s most luxurious hotels to the most in-demand health gurus on tap, her Little Black Book of contacts extends across the globe to provide the ultimate in personal experiences and recommendations.<br><br>India believes that no adventure is beyond the imagination. That anything is possible.",
     },
     heroData:{
      image: backgroundUrl,
      title: ""
     }
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Travel Expert | Luxury Travel Advisor | Sienna Charles',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'With an eye for the extraordinary, Jaclyn Sienna India has personally traveled to 90 countries to unearth the most unique and refined luxury experiences. '
        },
        {
          name: "keywords",
          content: this.page.seoKeywords
        }
      ]
    };
  }
};
</script>
