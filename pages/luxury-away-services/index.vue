<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title content_title">AWAY</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">AWAY</h1>
              <p class="ql-align-center u-m-t">For the last 12 years, Sienna Charles has been handling the travel for the world’s most discerning clientele. We pride ourselves on our innate desire to create exclusive and private experiences for you and your family. Everything we recommend has been personally experienced by us, always. Our Away membership is perfect for the individual or family that wants to elevate the way they travel.</p>
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
          For the last 12 years, Sienna Charles has been handling the travel for the world’s most discerning clientele. We pride ourselves on our innate desire to create exclusive and private experiences for you and your family. Everything we recommend has been personally experienced by us, always. Our Away membership is perfect for the individual or family that wants to elevate the way they travel.
        </p>

      </div>      
    </section>

    <div>
      <Membership :data="membershipData" />
    </div>

    <div class="page_designs u-m-b-xl">
      <div>
        <Design :data="design_1" />
      </div>
      <div>
        <Design :data="design_2" />
      </div>      
    </div>

    <div class="articles u-m-t">
      <Article :data="homeData" position="right" />
    </div>

    <div>
      <SubmitInquery :data="submitinqueryData"/>
    </div>
    
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/away.jpg";
import membershipImage from "@/assets/images/away_membership_article.jpg";
import design_1_image from "@/assets/images/away_membership_design_1.jpg";
import design_2_image from "@/assets/images/away_membership_design_2.jpg";
import homeImage from "@/assets/images/home.jpg";

export default {
  name: "home",

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
    Membership: () => import("@/components/Membership"),
    Frequently: () => import("@/components/Frequently.vue"),
    SubmitInquery: () => import("@/components/SubmitInquery.vue"),
    Article: () => import("@/components/Article"),
  },

  data() {
    return {
      submitinqueryData: {
        title:"DON't SEE WHAT YOU'RE LOOKING FOR?",
        description: "For questions about becoming a Sienna Charles</br> member please inquire below.",
        action: {
          title: "SUBMIT INQUIRY",
          link: "../contact"
        }
      },
      heroData: {
        image: backgroundUrl,
        title: "Sienna Charles Away memberships include access to luxury vacation rentals, private jets, yacht and more"
      },      
      membershipData: {
        image: membershipImage,
        imageTitle: "Luxury beach rentals can be secured through Sienna Charles, the leading luxury travel group ",
        title: "MEMBERSHIP INCLUDES",
        shipList: [
          "One fully customized & serviced travel experience",
          "Ability to book future travel experiences",
          "Access to Sienna Charles exclusive experience & events",
          "Dedicated Travel Specialist",
          "Access to SC Mobile App",
        ],
        subTitle: "$2500 initiation fee",
      },
      
      design_1: {
        "title" : "",
        "description" : "Private Estates are quickly becoming the most sought after and hardest to secure</br> accommodation. With their supreme privacy and security it's easy to see why.",
        "mobile_description" : "Private Estates are quickly becoming the most sought after and hardest to secure accommodation. With their supreme privacy and security it's easy to see why.",
        "image" : design_1_image,
        "imageTitle": "Sienna Charles helps find the perfect luxury home or villa in top vacation spots "
      },
      design_2: {
        "title" : "",
        "description" : "Experience the pinnacle of travel by going where seldom few have access. Sienna Charles will</br> pair you and your family with the perfect destination to enjoy raw beauty and supreme luxury.",
        "mobile_description" : "Experience the pinnacle of travel by going where seldom few have access. Sienna Charles will pair you and your family with the perfect destination to enjoy raw beauty and supreme luxury.",
        "image" : design_2_image,
        "imageTitle":"Remote vacation spots are on the rise as vacationers look for peace and safety"
      },
      homeData: {
        image: homeImage,
        imageTitle: "Sienna Charles At Home memberships offers luxury interior and garden design, real estate acquisition and private chef procurement",
        title: "AT HOME",
        subTitle: "Premier vetted Sienna Charles services in the</br> comfort of your home.",
        mobile_subTitle: "Premier vetted Sienna Charles services in the comfort of your home.",
        action: {
          title: "LEARN MORE",
          link: "/luxury-home-services"
        },           
      }, 

    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Estates | Luxury Villas | Luxury Private Jets',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Curated and personal luxury travel services. From superyachts to luxurious prviate jets, learn why our services are second to none.'
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
