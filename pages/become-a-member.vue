<template>
  <main>
    <Hero :data="heroData" page="membership">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <div class="u-font-xl">
              <h2 class="ql-align-center content_title">BECOME <br>A MEMBER</h2>
              <p class="ql-align-center u-m-t">Becoming a Sienna Charles Member means having the world at your fingertips. Founder Jaclyn Sienna India has combed the globe 200 days per year, procuring only the best in luxury living.
                <br><br>We make the art of sublime luxury living beautiful and personal.
              </p>
            </div>                      
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">BECOME A MEMBER</h1>
              <p class="ql-align-center">Becoming a Sienna Charles Member means having the world at your fingertips. Founder Jaclyn Sienna India has combed the globe 200 days per year, procuring only the best in luxury living.
                <br><br>We make the art of sublime luxury living beautiful and personal.
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
      <div class="container u-desktop">
        <h2 class="topics__title u-m-b-l">WHAT IT MEANS TO BE A MEMBER</h2>
        <p class="topics__description u-m-b-l">
          From extraordinary private travel to sourcing your home chef and everything in between, Sienna Charles will open the door to elevated living. Our members are a closely held group of extraordinary individuals, that understand the value of relinquishing their most important requests to Sienna Charles. Thus, we limit the number of members to those whom we feel are truly a perfect fit.<br><br>
          Sienna Charles services are based entirely on your preferences. Our detailed interview of your passions, and the things that make you tick allow us to offer completely customized experiences. Once you become a member, you'll be invited to our mobile app to begin onboarding. From there we look forward to becoming an individual extension of your team. 
        </p>
      </div>

      <div class="container u-mobile">
        <h2 class="topics__title u-m-b-s">WHAT IT MEANS <br>TO BE A <br>MEMBER</h2>
        <p class="topics__description u-m-b-l">
         From extraordinary private travel to sourcing your home chef and everything in between, Sienna Charles will open the door to elevated living. Our members are a closely held group of extraordinary individuals, that understand the value of relinquishing their most important requests to Sienna Charles. Thus, we limit the number of members to those whom we feel are truly a perfect fit.<br><br>
          Sienna Charles services are based entirely on your preferences. Our detailed interview of your passions, and the things that make you tick allow us to offer completely customized experiences. Once you become a member, you'll be invited to our mobile app to begin onboarding. From there we look forward to becoming an individual extension of your team. 
        </p>
      </div>      

      <div class="articles">
        <Article :data="homeData" position="left" />
        <Article :data="awayData" position="right" />
      </div>
    </section>

    <SubmitInquery :data="submitinqueryData"/>
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/membership.jpg";
import homeImage from "@/assets/images/home.jpg";
import awayImage from "@/assets/images/away.jpg";
export default {
  name: "become-a-member",

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
    Article: () => import("@/components/Article"),
    Frequently: () => import("@/components/Frequently.vue"),
    SubmitInquery: () => import("@/components/SubmitInquery.vue")
  },

  data() {
    return {
      heroData: {
        image: backgroundUrl,
        title: ""
      },
      submitinqueryData: {
        title:"DON'T SEE WHAT YOU'RE LOOKING FOR?",
        description: "If you have a special request that does not fit the membership options above, please reach out to our team. We operate on a very personal and tailored basis and would be happy to discuss options.",
        action: {
          title: "SUBMIT INQUIRY",
          link: "../contact"
        }
      },      
      homeData: {
        image: homeImage,
        title: "AT HOME",
        subTitle: "Luxurious In-Home Concierge Services",
        mobile_subTitle: "Luxurious In-Home Concierge Services",
        content: {
          title: "AT HOME MEMBERSHIP INCLUSIONS",
          mobile_title: "AT HOME MEMBERSHIP INCLUSIONS",
          description: "The Sienna Charles At Home membership encompasses our unparalleled travel service, all while opening up our coveted black book to you; providing you with the best at-home services and providers. Private chefs, wine consultants, private entertainers, security personnel, in-home fitness and wellness experts, real estate acquisition, and just about anything you can dream of to elevate your living, we can bring directly to your door.",
          items: [
            "One fully customized & serviced travel experience",
            "10 hours per month of At Home Service",
            "Dedicated lifestyle manager",
            "Access to Sienna Charles Exclusive Experiences & Events",
            "Access to SC member portal",
            "No Engagement Fee - $1500 a Month"
          ],
          learn: "/luxury-home-services",
          join: "https://sc-client.inconstruction.website/login"
        }
      },
      awayData: {
        image: awayImage,
        title: "AWAY",
        subTitle: "Unparalleled Travel Experiences",
        mobile_subTitle: "Unparalleled Travel Experiences",
        content: {
          title: "AWAY MEMBERSHIP INCLUSIONS",
          mobile_title: "AWAY MEMBERSHIP INCLUSIONS",
          description: "For the last 12 years, Sienna Charles has been handling the travel for the world's most discerning clientele. We pride ourselves on our innate desire to create exclusive and private experiences for you and your family. Everything we recommend has been personally experienced by us, always. Our Away membership is perfect for the individual or family that wants to elevate the way they travel.",
          items: [
            "One fully customized & serviced travel experience",
            "Ability to book future travel experience",
            "Dedicated Travel Specialist",
            "Access to Sienna Charles Exclusive Experiences & Events",
            "Access to SC member portal",
            "$2500 Engagement Fee - No Monthly Fees"
          ],
          learn: "/luxury-away-services",
          join: "https://sc-client.inconstruction.website/login"
        }
      }     
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Become a Member | Sienna Charles Luxury Travel Expert',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Becoming a Sienna Charles Member means having the world at your fingertips. Learn about our At Home and Away Membership programs."
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
