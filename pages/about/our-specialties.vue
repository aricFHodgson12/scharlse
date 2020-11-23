<template>
  <main>

    <Hero :data="heroData" page="specialties">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <div class="u-font-xl">
              <h2 class="ql-align-center">Our Specialties</h2>
            </div>                      
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">Our Specialties</h1>
            </div>                      
          </div>          
          
        </div>           
        <div class="hero__arrow">
          <img class="lazyload" data-src="~assets/images/down-arrow.svg" alt />
        </div>          
      </div>
    </Hero>

    <Topics :data="topics" />
    <div>
      <h2 class="specialties_title">OUR SPECIALTIES</h2>
      <div class="cards">
        <Card :data="card1" position="left" />
        <Card :data="card2" position="right" />
      </div>
      <div class="cards">
        <Card :data="card3" position="left" />
        <Card :data="card4" position="right" />
      </div>
      <div class="cards">
        <Card :data="card5" position="left" />
        <Card :data="card6" position="right" />
      </div>            
    </div>
    <SubmitInquery :data="submitinqueryData"/>
    <Frequently />
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/specialties_bg.jpg";
import homeImage from "@/assets/images/home.jpg";
import awayImage from "@/assets/images/away.jpg";
import cardImage_1 from "@/assets/images/specialties_card_1.jpg";
import cardImage_2 from "@/assets/images/specialties_card_2.jpg";
import cardImage_3 from "@/assets/images/specialties_card_3.jpg";
import cardImage_4 from "@/assets/images/specialties_card_4.jpg";
import cardImage_5 from "@/assets/images/specialties_card_5.jpg";
import cardImage_6 from "@/assets/images/specialties_card_6.jpg";
export default {
  name: "our-specialties",

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
    Card: () => import("@/components/Card.vue")
  },

  data() {
    return {
      card1: {
        "image": cardImage_1,
        "imageTitle": "Let Sienna Charles help you charter a luxury yacht or plan a trip on your own superyacht ",
        "title": "LUXURY YACHT CHARTER",
        "description": "Island-hopping in the Caribbean. Secluded Sicilian beaches.<br> Ancient Croatian villages. Explore some of the most beautiful<br> and remote corners of the world from your personally chartered <br>luxury yacht.",
        "mobile_description": "Island-hopping in the Caribbean. Secluded Sicilian beaches. Ancient Croatian villages. Explore some of the most beautiful and remote corners of the world from your personally chartered luxury yacht."
      },
      card2: {
        "image": cardImage_2,
        "imageTitle": "Rejuvenate with personalized wellness experiences at luxury spas and top fitness consultants",
        "title": "ULTIMATE WELLNESS",
        "description": "Remote meditation in the Himalayas. Detoxing in the Austrian <br>Alps. Mindfulness in Bali. Each of our wellness experiences is <br>personally selected for their extraordinary attention to detail.",
        "mobile_description": "Remote meditation in the Himalayas. Detoxing in the Austrian Alps. Mindfulness in Bali. Each of our wellness experiences is personally selected for their extraordinary attention to detail.",
      },
      card3: {
        "image": cardImage_3,
        "imageTitle": "Sienna Charles handpicks the finest luxury estates, extraordinary villas and luxury vacation rentals",
        "title": "EXTRAORDINARY ESTATES",
        "description": "Infinity pools. Spa rooms. Fitness centers. Private chefs. We have<br> handpicked the ultimate in luxury private villas from Greece to <br> the Caribbean.",
        "mobile_description": "Infinity pools. Spa rooms. Fitness centers. Private chefs. We have handpicked the ultimate in luxury private villas from Greece to the Caribbean."
      },
      card4: {
        "image": cardImage_4,
        "title": "PRIVATE JET HIRE",
        "imageTitle": "Travel comfortably in a private jet or charter a luxury helicopter",
        "mobile_description": "Discreet. Private. Secure. Flexible. Explore the world in luxurious comfort against a background of grand Maltese architecture, the Philippines’ long stretches of white sandy beaches, or Paris’ Michelin-star restaurants.",
        "description": "Discreet. Private. Secure. Flexible. Explore the world in luxurious<br> comfort against a background of grand Maltese architecture, the<br> Philippines’ long stretches of white sandy beaches, or Paris’<br> Michelin-star restaurants."
      },
      card5: {
        "image": cardImage_5,
        "title": "ELEVATED DINING",
        "imageTitle": "Access to fine dinning, Michelin star restaurants, wine tours and private chefs",
        "description": "Barolo wines and white truffles in the Piedmont region. Private<br> Michelin-star dining in the Basque Country. Exploring Chile’s <br>scenic vineyards on horseback. Our access to the best food and<br> wine experiences is unrivaled.",
        "mobile_description": "Barolo wines and white truffles in the Piedmont region. Private Michelin-star dining in the Basque Country. Exploring Chile’s scenic vineyards on horseback. Our access to the best food and wine experiences is unrivaled."
      },
      card6: {
        "image": cardImage_6,
        "title": "REMOTE TRAVEL",
        "imageTitle": "Visit the greatest remote vacations spots across the world with Sienna Charles", 
        "description": "Live with the bürtkitshi people of western Mongolia. Join the<br> Dani Tribe in Papua New Guinea. Listen to the sound of silence <br>from your private chalet perched on the edge of a glacier in<br> Alaska. Simply put, with Sienna Charles, anything is possible.",
        "mobile_description": "Live with the bürtkitshi people of western Mongolia. Join the Dani Tribe in Papua New Guinea. Listen to the sound of silence from your private chalet perched on the edge of a glacier in Alaska. Simply put, with Sienna Charles, anything is possible."
      },                              
      topics:{
        "description": "No matter where you are or where you are going, you should never sacrifice your standards. We will never compromise our standards either, which is why our members trust the recommendations we make. Everything we do is vetted at the highest level, allowing you and your family to relax, knowing we got it right. Thus, ensuring every aspect of your experience is at the finest level.",
        "mobile_description": "No matter where you are or where you are going, you should never sacrifice your standards. We will never compromise our standards either, which is why our members trust the recommendations we make. Everything we do is vetted at the highest level, allowing you and your family to relax, knowing we got it right. Thus, ensuring every aspect of your experience is at the finest level.",
            },
      heroData:{
        image: backgroundUrl,
        title: "Sienna Charles specialty is creating ultimate luxury escapes away at in your home, tailored just for you"
      },           
      submitinqueryData: {
        title:"DON't SEE WHAT YOU'RE LOOKING FOR?",
        description: "For questions about becoming a Sienna Charles<br> member, please inquire below.",
        action: {
          title: "SUBMIT INQUIRY",
          link: "../contact"
        }
      },      
      homeData: {
        image: homeImage,
        title: "AT HOME",
        subTitle: "Luxurious In-Honme Concierge Services",
        mobile_subTitle: "Luxurious In-Honme Concierge Services",
        content: {
          title: "AT HOME MEMBERSHIP INCLUSIONS",
          description: "The Sienna Charles At Home membership encompasses our unparalleled travel service, all while opening up our coveted black book to you; providing you with the best at home services and providers. Private chefs, wine consultants, private entertainers, security personnel, in-home fitness and wellness experts, real estate acquisition, and just about anything you can dream of to elevate your living, we can bring directly to your door.",
          items: [
            "Two fully customized & serviced travel experiences",
            "10 hours per month of At Home Services",
            "Dedicated lifestyle manager",
            "Access to Sienna Charles Exclusive Experiences & Events",
            "Access to SC mobile App",
            "No Engagement Fee - $1050 a Month"
          ],
          learn: "#",
          join: "#"
        }
      },
      awayData: {
        image: awayImage,
        title: "AWAY",
        subTitle: "Unparalleled Travel Experiences",
        mobile_subTitle: "Unparalleled Travel Experiences",
        content: {
          title: "AT HOME MEMBERSHIP INCLUSIONS",
          description: "For the last 12 years Sienna Charles has been handling the travel for the world's most discerning clientele. We pride ourselves on our innate desire to create exclusive and private experiences for you and your family. Everything we recommend has been personally experienced by us, always. Our Away membership is perfect for the individual or family that want to elevate the way they travel.",
          items: [
            "One fully customized & serviced travel experiences",
            "Ability to book future travel experiences",
            "Dedicated Travel Specialist",
            "Access to Sienna Charles Exclusive Experiences & Events",
            "Access to SC mobile App",
            "$2500 Engagement Fee - No Monthly Fees"
          ],
          learn: "#",
          join: "#"
        }
      }     
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Services | Luxury Travel | Luxury Home ',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Sienna Charles believes the luxury lifestyle should be unique and personal. Learn how we plan unique experiences that exceed your desires. Learn more here. '
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
