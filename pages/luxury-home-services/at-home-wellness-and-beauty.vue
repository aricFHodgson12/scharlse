<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title content_title">WELLNESS</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">WELLNESS</h1>
              <p class="ql-align-center u-m-t service-page-descript">Wellness comes in many forms, and we pride ourselves on our ability to deliver the absolute best service providers in their respective fields to our members.  How are we able to do this?  We’ve spent years vetting doctors, aestheticians, personal trainers, and numerous health professionals on ourselves to provide this unique service.  And the best part, you don’t even have to leave your home.</p>
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
          Wellness comes in many forms, and we pride ourselves on our ability to deliver the absolute best service providers in their respective fields to our members.  How are we able to do this?  We’ve spent years vetting doctors, aestheticians, personal trainers, and numerous health professionals on ourselves to provide this unique service.  And the best part, you don’t even have to leave your home.
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
import backgroundUrl from "@/assets/images/service_page_img/wellness_background.jpg";
import section1Image from "@/assets/images/service_page_img/wellness_section_1.jpg";
import section2Image from "@/assets/images/service_page_img/wellness_section_2.jpg";
import section3Image from "@/assets/images/service_page_img/wellness_section_3.jpg";
import section4Image from "@/assets/images/service_page_img/wellness_section_4.jpg";
import section1MobileImage from "@/assets/images/service_page_img/wellness_section_1.jpg";
import section2MobileImage from "@/assets/images/service_page_img/wellness_section_2.jpg";
import section3MobileImage from "@/assets/images/service_page_img/wellness_section_3.jpg";
import section4MobileImage from "@/assets/images/service_page_img/wellness_section_4.jpg";



export default {
  name: "wellness",

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
        title: "Rejuvenate with personalized wellness experiences at luxury spas and luxury retreats"
      },
      sectionFirstData: {
        image: section1Image,
        mobile_image: section1MobileImage,
        title: "Beauty",
        subTitle: "In-home manicurists, stylists, facialists, and beyond, we’ve been able to guide our members back into their normal beauty routines in the comfort of their own homes.",
        link: "#",
        imageTitle: "Beauty services at home, from in-home manicurists, stylists, facialists, and beyond",
      },
      sectionSecondData:{
        image: section2Image,
        mobile_image: section2MobileImage,
        title: "Health",
        subTitle: "Our network of health providers is one of our most coveted assets.  More now than ever, our members are looking to elevate their health, and we have been there to help them achieve this with a remarkable roster of the world’s top doctors and naturopaths.",
        link: "#",
        imageTitle: "Sienna Charles has a roster of the world’s top doctors and naturopaths",
      },      
      sectionThirdData: {
        image: section3Image,
        mobile_image: section3MobileImage,
        title: "Fitness",
        subTitle: "Perhaps you’re looking to build a home gym, or only have three weeks to get in shape for a film, Sienna Charles knows exactly who to call to get the job done.",
        link: "#",
        imageTitle: "Modern luxury home gyms support our ever-growing focus on wellness",
      },      
      sectionFourthData: {
        image: section4Image,
        mobile_image: section4MobileImage,
        title: "Spa",
        subTitle: "Whether you are a wellness seeker looking for a premier architecture and design firm to build a custom sanctuary in your estate or just looking for on-call pedigreed health professionals, we have the top providers to guide your wellness journey.",
        link: "#",
        imageTitle: "Sienna Charles can help you build a luxury home spa or book you premier services in top spas",
      }
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Beauty Services, Luxury  Home Spas & Wellness | Sienna Charles',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "We’ve spent years vetting beauty and wellness providers, from luxury home spas to services. Let Sienna Charles help infuse wellness into your life."
        },
        {
          name: "keywords",
          content: "luxury home spa, luxury interior design, wellness"
        }
      ]
    };
  }
};
</script>
