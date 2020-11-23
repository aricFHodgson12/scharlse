<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title design_title">ESTATES</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">ESTATES</h1>
              <p class="ql-align-center u-m-t service-page-descript">Privacy, security, and the ultimate in relaxation, Sienna Charles has hand-picked the premier luxury estates around the globe from Paris to Africa.
                <br><br>Whether traveling with your family, group of friends, or romantic getaway, we have an exquisite luxury home for every occasion and stay length, paired with the ultimate in personalized service.</p>
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
        <p class="topics__description u-m-b-l">Whether traveling with your family, group of friends, or romantic getaway, we have an exquisite luxury home for every occasion and stay length, paired with the ultimate in personalized service.</p>
      </div>      
    </section>
    <section class="services_section"> 
        <ServicesLeft :data="sectionFirstData" />
        <ServicesRight :data="sectionSecondData" />
        <ServicesLeft :data="sectionThirdData "/>
        <ServicesRight :data="sectionFourthData" />
    </section>
   
   <Frequently />
    
  </main>
</template>

<script>

import backgroundUrl from "@/assets/images/service_page_img/estates_bg.jpg";
import section1Image from "@/assets/images/service_page_img/estate_remote.jpg";
import section2Image from "@/assets/images/service_page_img/estate_section_2.jpg";
import section3Image from "@/assets/images/service_page_img/estate_section_3.jpg";
import section4Image from "@/assets/images/service_page_img/estate_section_4.jpg";

import section1MobileImage from "@/assets/images/service_page_img/estate_remote.jpg";
import section2MobileImage from "@/assets/images/service_page_img/estate_mobile_section_2.jpg";
import section3MobileImage from "@/assets/images/service_page_img/estate_mobile_section_3.jpg";
import section4MobileImage from "@/assets/images/service_page_img/food_section_4.jpg";



export default {
  name: "estates",

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
        title: "Luxury vacation rentals by Sienna Charles, from remote beach houses to city mansions"
      },
      sectionFirstData: {
        image: section1Image,
        mobile_image: section1MobileImage,
        imageTitle: "Remote vacation homes amidst nature provide peace and safety ",
        title: "REMOTE",
        subTitle: "Sometimes seclusion is the most sought-after luxury one can have. Our collection of remote estate rentals offers our clients a unique experience. Pairing the perfect secluded location high touch service you’d expect from the world’s leading lifestyle agency.",
        link: "#"
      },
      sectionSecondData: {
        image: section2Image,
        mobile_image: section2MobileImage,
        imageTitle: "Luxury beach rentals in all of the top beach destinations ",
        title: "BEACH",
        subTitle: "Imagine the most quintessential luxury beach houses in the world. From St Bart’s to Spain, Sienna Charles offers estates in all of the popular beach destinations and some that are lesser-known. We help pair you with the best restaurants, boats to fill your days, or the best private chefs to help you unwind.",
        link: "#"        
      },
      sectionThirdData: {
        image: section3Image,
        mobile_image: section3MobileImage,
        imageTitle: "Sienna Charles can find the perfect luxury townhome, city penthouse or a glamourous apartment ",
        title: "CITY",
        subTitle: "Nothing can beat the energy of a bustling city. We love finding stunning properties, whether it is a townhouse in London, a penthouse in Tokyo, or an elegant luxury apartment in Paris. If a unique city experience is what you are after, our properties will tick all the boxes.",
        link: "#"                
      },
      sectionFourthData: {
        image: section4Image,
        mobile_image: section4MobileImage,
        imageTitle: "Reconnect with nature in a natural retreat",
        title: "NATURE",
        subTitle: "Finding yourself needing to reconnect with nature? Our vast collection of luxury homes in some of the world’s most glorious natural retreats will put your mind at ease. At the same time, you take in the bounty that mother earth has to offer. Whether heli-skiing or relaxing by the fire.",
        link: "#"                        
      }
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Estate Rentals | Luxury Villa Rentals | Luxury Homes',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Luxury vacation rentals hand selected for you, anywhere in the world. From remote beach villas to city estates, it's like home, only better. Learn more here."
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
