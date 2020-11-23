<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title design_title">PRIVATE AVIATION</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">PRIVATE AVIATION</h1>
              <p class="ql-align-center u-m-t service-page-descript">
                  Flying private offers significant advantages to commercial flights, allowing us to truly customize your experience during transport as much as the destination. Avoid the unsanitary lines, restrictive flight times, and time-consuming layovers. Instead, relax in a luxurious seat with your favorite catered meal and a glass of wine heading straight to your destination on your own schedule.
              </p>
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
          Flying private offers significant advantages to commercial flights, allowing us to truly customize your experience during transport as much as the destination. Avoid the unsanitary lines, restrictive flight times, and time-consuming layovers. Instead, relax in a luxurious seat with your favorite catered meal and a glass of wine heading straight to your destination on your own schedule.
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
import backgroundUrl from "@/assets/images/service_page_img/aviation_hero.jpg";
import section1Image from "@/assets/images/service_page_img/aviation_section_1.jpg";
import section2Image from "@/assets/images/service_page_img/aviation_section_2.jpg";
import section3Image from "@/assets/images/service_page_img/aviation_section_3.jpg";
import section4Image from "@/assets/images/service_page_img/aviation_section_4.jpg";
import section1MobileImage from "@/assets/images/service_page_img/aviation_section_1.jpg";
import section2MobileImage from "@/assets/images/service_page_img/aviation_section_2.jpg";
import section3MobileImage from "@/assets/images/service_page_img/aviation_section_3.jpg";
import section4MobileImage from "@/assets/images/service_page_img/aviation_section_4.jpg";



export default {
  name: "private-aviation",
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
        title: "Sienna Charles [private jets, luxury plane and custom helicopter partners have what you need"
      },
      sectionFirstData: {
        image: section1Image,
        mobile_image: section1MobileImage,
        title: "Private Jet Charter",
        subTitle: "Sienna Charles handles all aspects of securing a private jet for your trip, working with the best brokers so no detail is left unchecked. Our partners have a variety of plane sizes and options to meet whatever needs you may have.",
        link: "#",
        imageTitle: "Design companies are taking private jets to the next level with bespoke interiors "
      },
      sectionSecondData: {
        image: section2Image,
        mobile_image: section2MobileImage,
        title: "Logistics",
        subTitle: "For those who own their own plane, we work directly with your pilot to map the logistics of the flight. Reducing your need to stress the logistics and ensuring everything is seamless for you to enjoy the journey.",
        link: "#",
        imageTitle: "Let Sienna Charles plan your trip from the private jet to the beach house destination"
      },      
      sectionThirdData: {
        image: section3Image,
        mobile_image: section3MobileImage,
        title: "Interiors",
        subTitle: "We recognize your desire for customization, which is why we are called on by members who are looking to redo their plane’s interior.  We work with several renowned designers who will deliver a fresh landscape to your home in the sky.",
        link: "#",
        imageTitle: "Today's latest custom jets resemble luxury penthouses  "
      },            
      sectionFourthData: {
        image: section4Image,
        mobile_image: section4MobileImage,
        title: "Destinations",
        subTitle: "When our members fly private, it allows us to be in our most creative state.  The destination possibilities now become endless.  With the ability to be agile in the air, our private jet trips maximize your time on the trip, excluding the things that waste time.  You’ll see more, and experience more with private jet travel.",
        link: "#",
        imageTitle: "Destination possibilities for private jet trips are endless "
      },
    };
  },

  head() {
    return {
      title: 'Luxury Private Jets | Luxury Private Planes | Private Jet ',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Ascend into luxury with Sienna Charles. Our private planes and private jets prove you world-class aviation experience. Fly with us here.'
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
