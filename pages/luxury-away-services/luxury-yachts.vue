<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title design_title">YACHTS</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">YACHTS</h1>
              <p class="ql-align-center u-m-t service-page-descript">
                  Experience the ultimate of privacy and freedom with a luxury yacht charter. Sienna Charles does more than source you a superyacht; we know all the details you require for a perfect trip on and offshore. Your flights, restaurants, activities, every piece - expertly handled.
                  <br><br>Whether you are looking for a vibrant yachting scene from St. Barths to Monte Carlo, Bodrum, and everything in between, or for those looking to assimilate the sea and explore lesser-known nooks and crannies of the globe. Sienna Charles will pair you and your family with the perfect mega yacht to navigate your way through.
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
            Experience the ultimate of privacy and freedom with a luxury yacht charter. Sienna Charles does more than source you a superyacht; we know all the details you require for a perfect trip on and offshore. Your flights, restaurants, activities, every piece - expertly handled.
                  <br><br>Whether you are looking for a vibrant yachting scene from St. Barths to Monte Carlo, Bodrum, and everything in between, or for those looking to assimilate the sea and explore lesser-known nooks and crannies of the globe. Sienna Charles will pair you and your family with the perfect mega yacht to navigate your way through.
        </p>
      </div>      
    </section>

    <section class="services_section"> 
        <ServicesLeft :data="sectionFirstData"  />
        <ServicesRight :data="sectionSecondData"  />
        <ServicesLeft :data="sectionThirdData"  />
        <ServicesRight :data="sectionFourthData"  />
    </section>
   
   <Frequently />

  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/service_page_img/yachts_background.jpg";
import section1Image from "@/assets/images/service_page_img/yachts_section_1.jpg";
import section2Image from "@/assets/images/service_page_img/yachts_section_2.jpg";
import section3Image from "@/assets/images/service_page_img/yachts_section_3.jpg";
import section4Image from "@/assets/images/service_page_img/yachts_section_4.jpg";
import section1MobileImage from "@/assets/images/service_page_img/yachts_section_1.jpg";
import section2MobileImage from "@/assets/images/service_page_img/yachts_section_2.jpg";
import section3MobileImage from "@/assets/images/service_page_img/yachts_section_3.jpg";
import section4MobileImage from "@/assets/images/service_page_img/yachts_section_4.jpg";



export default {
  name: "yachts",
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
        image:backgroundUrl,
        title: "Sienna Charles can help you charter a luxury yacht or plan a trip on your own superyacht"
      },
      sectionFirstData: {
        image: section1Image, 
        mobile_image: section1MobileImage,
        title: "Yacht Charter",
        subTitle: "We take each yacht rental request seriously and customize every detail based on your every preference. We will work with your private jet team, plan your favorite activities, and arrange all the best staff in the world, ensuring every boat and crew are just as unique as you. From the moment you become a Sienna Charles client until you arrive home after your trip, you never have to worry about a detail.",
        link: "#",
        imageTitle: "Book your next yacht charter through Sienna Charles to ensure every detail is taken care of"
      },
      sectionSecondData: {
        image: section2Image, 
        mobile_image: section2MobileImage,
        title: "Logistics",
        subTitle: "Whether onshore or off, you can rest assured our team will handle your every request. Since we are experts in ground handling, you’ll be dining at all the right tables, nightlife, and exploring the best the destination has to offer when you’re not at sea. We know all the best places for you to achieve the ultimate in privacy and luxury.  Whatever you prefer, we hand-select the experts, historians, divemasters, and personalities onboard and off to make each yacht charter destination come to life.",
        link: "#",
        imageTitle: "Let Sienna Charles take care of all of the logistics on your next yachting adventure"        
      },
      sectionThirdData: {
        image: section3Image, 
        mobile_image: section3MobileImage,
        title: "Dining",
        subTitle: "We carefully plan each meal with precision, whether it’s onboard, at a unique offshore location, or at the finest tables along your route. We take dining seriously. We pair you with the ultimate chef, source the finest ingredients, and set the atmosphere for every meal you have.",
        link: "#",
        imageTitle: "Experience fine dining, from private chefs to top restaurants on your next yacht charter "                
      },
      sectionFourthData: {
        image: section4Image, 
        mobile_image: section4MobileImage,
        title: "Activities",
        subTitle: "You may just want to sunbathe on the deck with a good book, or perhaps something more active like diving for secret shipwrecks. Whatever you prefer, we hand-select the experts, historians, divemasters, and personalities onboard and off to make each yacht charter destination come to life.",
        link: "#",
        imageTitle: "Sienna Charles curates custom experiences on board and off your mega yacht charter "                        
      }      
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Yachts| Superyacht Rentals | Luxury Yacht Rentals',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Sienna Charles curates personalized luxury yacht experiences for you. Sail the world in ultimate luxury through Sienna Charles. Learn more here.'
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
