<template>
  <main>

    <Hero :data="heroData" page="main">
      <div class="hero__wrap">
        <div class="container--s u-center">
          <!--p v-html="page.content" class="u-font-xl" /-->
          <div class="u-mobile">
              <h1 class="ql-align-center" v-html="mobile_title"></h1> 
          </div>
          <div class="u-desktop">
            <div class="u-font-xl">
              <h1 class="ql-align-center" v-html="title"></h1>        
            </div>
          </div>          
        </div>            
      </div>
    </Hero>
    <div class="official">
      <p>This Cookie Policy explains how Sienna Charles ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our websites at https://www.siennacharles.com, ("Websites"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
      <p>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. </p>
      <h2>What are cookies?</h2>
      <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      <p>Cookies set by the website owner (in this case, Sienna Charles, LLC) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>

      <h2>Why do we use cookies?</h2>
      <p>We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.</p>
      <p>The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</p>

      <h2>How can I control cookies?</h2>
      <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
      <p>The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.</p>
      <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com.</p>
      <p>The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</p>
    </div>
  </main>
</template>

<script>
import backgroundUrl from "@/assets/images/main_bg.jpg";
import homeImage from "@/assets/images/home.jpg";
import awayImage from "@/assets/images/away.jpg";
import mainContentImage from "@/assets/images/main_content.jpg";
export default {
  name: "cookies-policy",

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
    Card: () => import("@/components/Card.vue"),
    Article: () => import("@/components/Article"),
  },

  data() {
    return {
      homeLink: {
        "title": "LEARN MORE",
        "action": "#"
      },
      title: "Cookies Policy",                      
      mobile_title: "Cookies Policy",                      
      topics:{
        "description": "Fill with content",
        "mobile_description": "Fill with content",
      },
      heroData: {
        image: backgroundUrl,
        title: ""
      },
      submitinqueryData: {
        title:"DON't SEE WHAT YOU'RE LOOKING FOR?",
        description: "For questions about becoming a Sienna Charles <br> member please inquire below.",
        action: {
          title: "SUBMIT INQUIRY",
          link: "#/contact"
        }
      },       
    };
  },

  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Cookies Policy ',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.page.seoDescription
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
