<template>
  <main>
    <Hero :data="heroData">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <h2 class="ql-align-center hero_title design_title">AT HOME</h2>
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">AT HOME</h1>
              <p class="ql-align-center u-m-t">The Sienna Charles At Home membership encompasses our unparalleled travel service, all while opening up our coveted black book to you, providing you with the best at-home services and providers.  Private chefs, wine consultants, private entertainers, security personnel, in-home fitness and wellness experts, real estate acquisition, and just about anything you can dream of to elevate your living, we can bring directly to your door.</p>
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
          The Sienna Charles At Home membership encompasses our unparalleled travel service, all while opening up our coveted black book to you, providing you with the best at-home services and providers. Private chefs, wine consultants, private entertainers, security personnel, in-home fitness and wellness experts, real estate acquisition, and just about anything you can dream of to elevate your living, we can bring directly to your door.
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
      <Article :data="awayData" position="right" />
    </div>

    <div>
      <SubmitInquery :data="submitinqueryData"/>
    </div>
    
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/home-bg.jpg";
import homeImage from "@/assets/images/home.jpg";
import membershipImage from "@/assets/images/white_pillar.jpg";
import design_1_image from "@/assets/images/home_private_dining_opt1.jpg";
import design_2_image from "@/assets/images/membership_design_2.jpg";
import awayImage from "@/assets/images/away.jpg";

export default {
  name: "at-home",

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
        title:"DON'T SEE WHAT YOU'RE LOOKING FOR?",
        description: "For questions about becoming a Sienna Charles<br> member, please inquire below.",
        action: {
          title: "SUBMIT INQUIRY",
          link: "../contact"
        }
      },
      heroData: {
        image: backgroundUrl,
        title: "At Home services include private chefs, wine consultants, security personnel, in-home fitness experts, real estate acquisition and more",
      },
      membershipImage,
      design_1: {
        "title" : "",
        "imageTitle": "Luxury interior design is just one of Sienna Charles' many At Home membership offerings ",
        "mobile_title" : "",
        "description" : "Expertly crafted menu with the finest ingredients, all serviced to your home without<br> you ever having to do a thing.",
        "mobile_description" : "Expertly crafted menu with the finest ingredients, all serviced to your home without you ever having to do a thing.",
        "image" : design_1_image,
      },
      design_2: {
        "title" : "",
        "imageTitle": "Sienna Charles has top consultants for wine cellars, gardens and interior design",
        "mobile_title" : "",
        "description" : "Elevate your home with Sienna Charles top consultants for wine cellars, gardens, <br> interior design ~ any aspect of your home you desire refined.",
        "mobile_description" : "Elevate your home with Sienna Charles top consultants for wine cellars, gardens, interior design ~ any aspect of your home you desire refined.",
        "image" : design_2_image,
      },
      awayData: {
        image: awayImage,
        imageTitle: "Sienna Charles Away memberships provide the ultimate service for your next luxury vacation ",
        title: "AWAY",
        subTitle: "Perfect for the individual or family wanting to <br>elevate the way they travel.",
        mobile_subTitle: "Perfect for the individual or family wanting to elevate the way they travel.",
        action: {
          title: "LEARN MORE",
          link: "/luxury-away-services"
        },           
      }, 
      membershipData: {
        image: membershipImage,
        imageTitle: "Sienna Charles can help you book private entertainers, wine consultants and wellness experts all in the comfort of your home ",
        title: "MEMBERSHIP INCLUDES",
        shipList: [
          "One fully customized & serviced trip",
          "10 hours per month of SC at home services",
          "Dedicated Lifestyle Manager",
          "Access to Sienna Charles Exclusive Experiences & Events",
          "Access to SC mobile App",
        ],
        subTitle: "$1500 monthly fee",
      }
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Luxury Home Design | Private Dining | Wine and Wine Cellars',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Refined and elegant home services. We bring world-class  private chefs, wine consultants, and more, right to your door. Learn more here.'
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
