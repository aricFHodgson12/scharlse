<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title content_title">HOME SERVICES</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">HOME SERVICES</h1>
              <p class="ql-align-center u-m-t service-page-descript">The relationship we have with our members has always relied heavily on our keen design sensibility.  We strive to understand your vision in every area, including your home.  Our network of interior designers will help you achieve your desired aesthetic.</p>
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
         The relationship we have with our members has always relied heavily on our keen design sensibility.  We strive to understand your vision in every area, including your home.  Our network of interior designers will help you achieve your desired aesthetic.
        </p>
      </div>      
    </section>
    <section class="services_section"> 
        <ServicesLeft :data="sectionFirstData" />
        <ServicesRight :data="sectionSecondData"  />
        <ServicesLeft :data="sectionThirdData" />
    </section>
   
   <Frequently />
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/service_page_img/home_services_background.jpg";
import section1Image from "@/assets/images/service_page_img/home_section_1.jpg";
import section2Image from "@/assets/images/service_page_img/home_section_2.jpg";
import section3Image from "@/assets/images/service_page_img/home_section_3.jpg";
import section1MobileImage from "@/assets/images/service_page_img/home_section_1.jpg";
import section2MobileImage from "@/assets/images/service_page_img/home_section_2.jpg";
import section3MobileImage from "@/assets/images/service_page_img/home_section_3.jpg";



export default {
  name: "home-services",
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
      heroData:{
        image: backgroundUrl,
        title: "Sienna Charles home services include interior design, garden design and luxury home real estate "
      },
      sectionFirstData: {
        image: section1Image,
        mobile_image: section1MobileImage,
        title: "Interior Design",
        subTitle: "Home is the center of our universe, and personalization is the key to making the home a place of your passions. Sienna Charles works with several premier designers to bring your passions to life, at home.",
        link: "#",
        imageTitle: "Sienna Charles works with several premier designer to bring your luxury interior design visions to life",
      },      

      sectionSecondData:{
        image: section2Image,
        mobile_image: section2MobileImage,
        title: "Garden",
        subTitle: "Over the last year many of our members have invested heavily in the buildout of their outdoor living areas.  Sienna Charles takes the guesswork out of who to hire to accomplish your very own Versailles garden.  In addition, we can assist with building a fully sustainable produce source in your outdoor space as well.",
        link: "#",
        imageTitle: "We work with experts in garden design and luxury outdoor living area designs ",
      },       
      sectionThirdData: {
        image: section3Image,
        mobile_image: section3MobileImage,
        title: "Real Estate Acquisition",
        subTitle: "We’ve teamed up with the world’s leading real estate professionals to offer our members the best listings on and off the market.  Allow us to pair you with the perfect advisor for your next home purchase in the states or internationally.",
        link: "#",
        imageTitle: "Sienna Charles pair you with the real estate professionals to find your next luxury home ",
      },        
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Interior Design, Gardens & Real Estate | Sienna Charles',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Our discerning eye for luxury design turns your architecture dreams into reality. Learn how our interior designers can help you achieve your  goals."
        },
        {
          name: "keywords",
          content: "luxury interior designs, garden design, luxury real estate"
        }
      ]
    };
  }
};
</script>
