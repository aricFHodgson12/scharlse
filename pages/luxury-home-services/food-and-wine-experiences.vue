<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title content_title">FOOD &amp; WINE</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">FOOD &amp; WINE</h1>
              <p class="ql-align-center u-m-t service-page-descript">A true specialty and passion of Sienna Charles, and among our most requested services.  We started our career in fine dining and have always kept one foot in the door.  We’ve built our food and wine program to service our members at home or on-trip.</p>
            </div>                      
          </div>          
          
        </div>           
        <div class="hero__arrow">
          <img class="lazyload" data-src="~assets/images/down-arrow.svg" alt />
        </div>          
      </div>
 
    </Hero>
    <section class="topics">
      <div class="container u-mobile">
        <p class="topics__description u-m-b-l">
          A true specialty and passion of Sienna Charles, and among our most requested services.  We started our career in fine dining and have always kept one foot in the door.  We’ve built our food and wine program to service our members at home or on-trip.
        </p>
      </div>      
    </section>
    <section class="services_section"> 
        <ServicesLeft :data="sectionFirstData" />
        <ServicesRight :data="sectionSecondData"  />
        <ServicesLeft :data="sectionThirdData" />
        <ServicesRight :data="sectionFourthData" />
    </section>
   
   <Frequently />

    

    
    
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/service_page_img/food_wine_bg.jpg";
import section1Image from "@/assets/images/service_page_img/food_section_1.jpg";
import section2Image from "@/assets/images/service_page_img/food_section_2.jpg";
import section3Image from "@/assets/images/service_page_img/food_section_3.jpg";
import section4Image from "@/assets/images/service_page_img/food_section_4.jpg";
import section1MobileImage from "@/assets/images/service_page_img/food_section_1.jpg";
import section2MobileImage from "@/assets/images/service_page_img/food_section_2.jpg";
import section3MobileImage from "@/assets/images/service_page_img/food_section_3.jpg";
import section4MobileImage from "@/assets/images/service_page_img/food_section_4.jpg";



export default {
  name: "food-and-wine",

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
    Design: () => import("@/components/Design"),
    Frequently: () => import("@/components/Frequently.vue"),
    ServicesLeft: () => import("@/components/ServicesLeft"),
    ServicesRight: () => import("@/components/ServicesRight"),
  },

  data() {
    return {
      heroData: {
        image: backgroundUrl,
        title: "Sienna Charles food and wine program includes private chefs, wine curation, gourmet food procurement and private dining events"
      },
      sectionFirstData: {
        image: section1Image,
        mobile_image: section1MobileImage,
        title: "Private Chefs",
        subTitle: "We have a network of some of the most in-demand chefs at our fingertips.  Let us find the perfect chef for your event or full-time needs.",
        link: "#",
        imageTitle: "Sienna Charles has access to the most in-demand private chefs",
      },
      sectionSecondData:{
        image: section2Image,
        mobile_image: section2MobileImage,
        title: "Wine Curation",
        subTitle: "Sienna Charles works with some of the world’s top sommeliers, winemakers, and designers to help you curate an exceptional wine collection, or even build the cellar of your dreams.",
        link: "#",
        imageTitle: "SWine curation and wine cellar design is a specialty of Sienna Charles",
      },
      sectionThirdData: {
        image: section3Image,
        mobile_image: section3MobileImage,
        title: "Gourmet Food Procurement",
        subTitle: "Need A5 and abalone tomorrow for a special dinner for friends?  How about fresh fish flown in hours after being caught?  Sienna Charles can procure just about any gourmet food and wine request you require.",
        link: "#",
        imageTitle: "Sienna Charles can procure just about any gourmet food and wine request you require",
      },
      sectionFourthData: {
        image: section4Image,
        mobile_image: section4MobileImage,
        title: "Private Events",
        subTitle: "As we navigate through the new paradigm of dining at restaurants, we are constantly refining who we think is doing a good job of not only making sure our members are safe, but not sacrificing on service.",
        link: "#",
        imageTitle: "Private events designed by Sienna Charles offer quality service and safety",
      }
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Food and Wine',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.page.seoDescription
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
