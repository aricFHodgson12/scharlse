<template>
  <div>
    <!-- <Joinus /> -->

    <MenuPopup />

    <Consultation />

    <Header
      :hideMenu="hideMenu"
      :thankyouPage="thankyouPage"
      :landingPage="isLanding"
    />
    <Nuxt />

    <!-- <div class="g-recaptcha" :data-sitekey="sitekey" data-size="invisible" /> -->

    <Footer :isLanding="hideMenu" :hideNewsletter="hideNewsletter" />
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("menus/getMenus");
    await this.$store.dispatch("services/getServices");
    await this.$store.dispatch("presses/getPresses");
  },

  head() {
    return {
      ...this.getHead(),
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' }
      ],
      script: [
        // {
        //   src: "https://www.google.com/recaptcha/api.js",
        //   async: true,
        //   defer: true
        // },
        // Not used anymore (simple embed):
        // {
        //   src: "/js/activecampaign-form-7.js",
        //   body: true
        // },
        {
          src:
            "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SvQEZw",
          body: true,
          defer: true
        },
        // {
        //   src: "https://siennacharles.activehosted.com/f/embed.php?id=7",
        //   body: true,
        //   defer: true
        // },
        {
          src: "/js/sleeknote.js",
          body: true,
          defer: true
        }
        // {
        //   src: "/js/activecampaign-form-9.js",
        //   body: true,
        //   defer: true
        // }
      ],
      bodyAttrs: {
        class:
          this.$store.state.ConsulationPopup ||
          this.$store.state.MenuPopup
          // this.$store.state.JoinusPopup ||
          // this.$store.state.joinusEmail
          //   ? "m-open"
          //   : ""
      }
    };
  },

  data() {
    return {
      // sitekey: process.env.SITE_KEY,
      cases: [
        "luxury-lifestyle-report-sign-up",
        // "luxury-homes-and-estates",
        // "luxury-yacht-experiences",
        // "private-jet-experiences",
        "become-a-client",
        "apply-for-membership",
        "brochure"
      ]
    };
  },

  components: {
    Header: () => import("@/components/Header"),

    Footer: () => import("@/components/Footer"),
    Consultation: () => import("@/components/Consultation"),
    //Joinus: () => import("@/components/Joinus"),
    MenuPopup: () => import("@/components/MenuPopup")
  },

  computed: {
    path() {
      return this.$route.path.replace(/\//g, '')
    },

    hideMenu() {
      return this.cases.includes(this.path);
    },

    hideNewsletter() {
      const cases = ["luxury-lifestyle-report-sign-up", "brochure"];
      return cases.includes(this.path);
    },

    isLanding() {
      return this.cases.includes(this.path);
    },

    thankyouPage() {
      const cases = ["thankyou"];
      return cases.includes(this.path);
    }
  }
};
</script>
