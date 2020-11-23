<template>
  <main>

    <Hero :data="heroData" page="main">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
              <h2 class="ql-align-center content_title" v-html="mobile_title"></h2> 
          </div>
          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center" v-html="title"></h1>        
            </div>
          </div>          
        </div>            
      </div>
    </Hero>
    <Topics :data="topics" :homeData="homeData" :awayData="awayData" :link="homeLink" />

    <div class="home_text u-desktop">
      <p><i>The company personally vets every restaurant, spa, hotel and experience before<br> offering them to clients, which partly explains a customer pool that ranges from CEOs <br> and bankers to George W. Bush and his family.</i></p>
      <span>FORBES</span>
    </div>

    <div class="home_text u-mobile">
      <p><i>The company personally vets every <br>restaurant, spa, hotel and<br> experience before offering them to </br>clients, which partly explains a <br>customer pool that ranges from <br>CEOs and bankers to George W. <br>Bush and his family.</i></p>
      <span>FORBES</span>
    </div>    

    <div class="articles u-m-b-xxl">
      <Article :data="data" position="full"/>
    </div>

    <Frequently />
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/main_bg_1.jpg";
import homeImage from "@/assets/images/home.jpg";
import awayImage from "@/assets/images/away.jpg";
import mainContentImage from "@/assets/images/main_content.jpg";
export default {
  name: "membership",

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
    SubmitInquery: () => import("@/components/SubmitInquery.vue"),
    Card: () => import("@/components/Card.vue"),
    Article: () => import("@/components/Article"),
  },

  data() {
    return {
      homeLink: {
        "title": "LEARN MORE",
        "action": "/become-a-member"
      },
      title: "THE FUTURE OF LUXURY LIFESTYLE </br> AT HOME AND AWAY.",                      
      mobile_title: "THE FUTURE</br> OF LUXURY </br>LIFESTYLE </br>AT HOME AND</br> AWAY.",                      
      topics:{
        "description": "We make the art of sublime luxury living beautiful and personal.  At Sienna Charles we have been designing exclusive</br> experiences for the world’s most discerning clientele for over a decade. Our meticulously planned travel and concierge</br> services are personally vetted and selected for their extraordinary attention to the finest details. With our eye for the</br> exceptional and a passion for uncompromising quality, our direct and personal approach blends intuitive service and</br> outstanding technology for a seamless Sienna Charles experience.",
        "mobile_description": "We make the art of sublime luxury living beautiful and personal.  At Sienna Charles we have been designing exclusive experiences for the world’s most discerning clientele for over a decade. Our meticulously planned travel and concierge services are personally vetted and selected for their extraordinary attention to the finest details. With our eye for the exceptional and a passion for uncompromising quality, our direct and personal approach blends intuitive service and outstanding technology for a seamless Sienna Charles experience.",
      },
      heroData: {
        image: backgroundUrl,
        title: "Luxury travel agent Sienna Charles offers at home and away luxury lifestyle services "
      },
      submitinqueryData: {
        title:"DON't SEE WHAT YOU'RE LOOKING FOR?",
        description: "For questions about becoming a Sienna Charles <br> member please inquire below.",
        action: {
          title: "SUBMIT INQUIRY",
          link: "../contact"
        }
      },      
      homeData: {
        image: homeImage,
        imageTitle: "Sienna Charles At Home memberships offers luxury interior and garden design, real estate acquisition and private chef procurement",
        title: "AT HOME",
        subTitle: "Premier vetted Sienna Charles services in the comfort of your home.",
        mobile_subTitle: "Premier vetted Sienna Charles services in the comfort of your home.",
        action: {
          title: 'LEARN MORE',
          link: 'luxury-home-services/'
        }

      },
      awayData: {
        image: awayImage,
        imageTitle: "Sienna Charles Away memberships provide the ultimate service for your next luxury vacation",
        title: "AWAY",
        subTitle: "Perfect for the individual or family wanting to elevate the way they travel.",
        mobile_subTitle: "Perfect for the individual or family wanting to elevate the way they travel.",
        action: {
          title: 'LEARN MORE',
          link: 'luxury-away-services'
        }

      },
      data: {
        image: mainContentImage,
        imageTitle: "Voyage by Sienna Charles is the leading luxury travel and lifestyle magazine ",
        title: "VOYAGE MAGAZINE",
        subTitle: "From our eyes to yours, we’ve hand-picked the world’s best in refined</br> luxury living.",
        mobile_subTitle: "From our eyes to yours, we’ve hand-picked the world’s best in refined luxury living.",
        action: {
          title: 'LEARN MORE',
          link: 'magazine'
        }
      } 
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Travel Agency | Sienna Charles Luxury Travel Company',
      script: [
        {
          async: true,
          crossorigin: "anonymous",
          type: "application/ld+json",
          json: {"@context":"http://schema.org","@type":"Corporation","name":"Sienna Charles","brand":["Sienna Charles"],"url":"https://siennacharles.com/","logo":"https://siennacharles.com/_nuxt/img/logo-footer.c898db0.svg","description":"Since 2008 Sienna Charles has been creating the ultimate luxury travel and luxury lifestyle experiences." ,"founder":"Sienna Charles","foundingDate":"2008","sameAs":["https://www.instagram.com/siennacharles/"]},
        },
      ],

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Ultimate luxury travel & luxury lifestyle experiences created for you. Sienna Charles provides the best in luxury villas, yacht charters, private jets and remote travel.'
        }
      ],
    };
  }
};
</script>
