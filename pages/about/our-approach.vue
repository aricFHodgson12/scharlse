<template>
  <main>

    <Hero :data="heroData" page="our_approach">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
            <div class="u-font-xl">
              <h1 class="ql-align-center">Our Approach</h1>
            </div>                      
          </div>

          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center">Our Approach</h1>
              <p class="ql-align-center u-m-t">
                We believe that luxury is personal. That each person has a vision of how they want to live their life</br> and the experiences they seek to help bring them closer to fulfilling their vision. We understand</br> and use that passion to drive us to thoughtfully create experiences for you.
              </p>
            </div>                      
          </div>          
          
        </div>           
        <div class="hero__arrow">
          <img class="lazyload" data-src="~assets/images/down-arrow.svg" alt />
        </div>          
      </div>
    </Hero>

    <Topics :data="topics" />
    <TextCard :data="cards" />
    <MobileCard :data="mobileArticles" />    
    <SubmitInquery :data="submitinqueryData"/>
    <Frequently />
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/our_approach_bg.jpg";
import mobileArticle_1 from "@/assets/images/mobile_article_1.png";
import mobileArticle_2 from "@/assets/images/mobile_article_2.png";
import mobileArticle_3 from "@/assets/images/mobile_article_3.png";


export default {
  name: "approach",

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
    TextCard: () => import("@/components/TextCard"),
    Frequently: () => import("@/components/Frequently.vue"),
    SubmitInquery: () => import("@/components/SubmitInquery.vue"),
    MobileCard: () => import("@/components/MobileCard.vue"),
  },

  data() {
    return {                        
      topics:{
        // "title": "WHAT IT MEANS TO BE A MEMBER",
        // "mobile_title": "WHAT IT MEANS </br>TO BE A </br>MEMBER",
        "mobile_description": "We believe that luxury is personal. That each person has a vision of how they want to live their life and the experiences they seek to help bring them closer to fulfilling their vision. We understand and use that passion to drive us to thoughtfully create experiences for you.</br></br>Our values are quality, and efficiency and we will not sacrifice on taste, ever. There is no other company that carefully blends personalized service and technology. We have built custom systems that we pair with a deep understanding allowing us to service the most discerning clients.</br></br>For the last 12 years, we have been providing our members with unparalleled custom experiences.  Our candor, and ability to anticipate your needs has always been how we approach relationships.  Whether we are assisting with travel services or vetting the perfect private chef for your family, Sienna Charles revels in the details.  We operate as a true extension of your team at home, or abroad",
        "description": "Our values are quality, and efficiency and we will not sacrifice on taste, ever. There is no other company that carefully blends</br> personalized service and technology. We have built custom systems that we pair with a deep understanding allowing us to</br> service the most discerning clients.<br><br>For the last 12 years we have been providing our members with unparalleled custom experiences.  Our candor, and ability to</br> anticipate your needs has always been how we approach relationships.  Whether we are assisting with travel services or vetting the perfect private chef for your family, Sienna Charles revels in the details.  We operate as a true extension of your team at home, or abroad.",

      },
      heroData: {
        image: backgroundUrl,
        title: "For 12 years Sienna Charles has been providing members with unparalleled custom luxury travel and lifestyle  experiences"
      },
      submitinqueryData: {
        title:"DON't SEE WHAT YOU'RE LOOKING FOR?",
        description: "For questions about becoming a Sienna Charles</br> member, please inquire below.",
        action: {
          title: "SUBMIT INQUIRY",
          link: "../contact"
        }
      },
      mobileArticles:{
        header : {
          title: "Service through technology",
          description: "At Sienna Charles, we’ve always put service first. Our penchant for classic high-touch service has been paramount since day one.  The Sienna Charles member portal allows us to service our members in that classic way, all while increasing efficiency and saving you precious time.</br></br>Now as a Sienna Charles Member, you’ll have access to the finest in luxury lifestyle living at your fingertips.</br>We will continually strive to deliver personalized experiences, with seamless technology."
        },
        content : 
        [
          {
            title: "Itineraries",
            description: "View all of your custom trip itineraries in your portal.",
            background: mobileArticle_1,
            imageTitle: "Sienna Charles offers luxury services through the latest technology"
          },
          {
            title: "VOYAGE MAGAZINE",
            description: "Members will receive exclusive Voyage Magazine content delivered inside the portal.",          
            background: mobileArticle_2,
            imageTitle: "Explore luxury travel and luxury lifestyle content through the Sienna Charles app"
          },
          {
            title: "BOOKING",
            description: "Members can view current, or book all of their future AWAY or AT HOME requests inside the portal.",                    
            background: mobileArticle_3,
            imageTitle: "Book and view your luxury services through the Sienna Charles app"
          }                
        ],        
      },
      cards: [
      {
        title: "UNDERSTANDING </br>WHO YOU ARE",
        description: "In order for us to be successful, it is imperative we understand what makes you tick. From the passions that drive you, like family, art, adventure, or a combination of them all, to the finest of details like what flowers you want when you arrive on your yacht. We gather this information upfront, so every journey with us is as faultlessly seamless as the next."
      },
      {
        title: "ORGANIZING YOUR</br> EXPERIENCE",
        description: "Ultimately individual. Enduringly unique. At Sienna Charles, we personally create every experience around you and your needs. Your preferences are paired with our Little Black Book of the finest experiences and recommendations money can buy. We excel at finding the sublime. We are obsessed with service and efficiency, so you don’t have to be."
      },
      {
        title: "DELIVERY",
        description: "Meticulously planned. Expertly delivered to your personal account, available via your app. We’ve assembled a perfectly tailored experience for you and your family to create lasting memories. Our team will be at your disposal for anything you may need during your trip. Sit back and relax. Your journey begins here."
      },
      ]
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Sienna Charles | Luxury Travel Company | Luxury Home Design',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Sienna Charles has been designing experiences for the world’s most discerning clientele for over a decade. Learn how we provide the most luxurious experiences.'
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
