<template>
  <main class="how-we-plan">
    <section class="u-p-t-xxl u-p-b">
      <div class="container">
        <div class="flex">
          <div class="flex__cell u-half u-p-b@tablet displayflex flex--middle">
            <img
              v-if="page.mainImage"
              class="lazyload fullblock"
              :data-src="page.mainImage.id | image('pages')"
              :alt="
                page.mainImage.alt ||
                  'Sienna Charles creates the ultimate luxury escapes, from fine hotels and resorts to personal chefs'
              "
            />
          </div>

          <div class="flex__cell u-half u-p-b flex flex--middle">
            <div class="u-p u-center">
              <div v-html="page.content" class="u-p-b" />

              <BookButton classes="cta">BECOME A MEMBER</BookButton>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <TripFlow />

    <Services />

    <Frequently />
  </main>
</template>

<script>
export default {
  async asyncData({ store, error, route }) {
    try {
      const page = await store.dispatch("pages/getPage", { slug: route.name });

      if (page) return { page };
      else error({ statusCode: 404 });
    } catch (err) {
      error(err);
    }
  },

  metaInfo() {
    return {
      title: "services",

      meta: [
        {
          name: "description",
          content: "Connect and follow"
        }
      ]
    };
  },

  components: {
    Frequently: () => import("@/components/Frequently"),
    Services: () => import("@/components/Services"),
    TripFlow: () => import("@/components/TripFlow"),
    BookButton: () => import("@/components/BookButton")
  },

  computed: {
    templateContent() {
      return this.page.templateContent || {};
    }
  },

  head() {
    return {
      title: this.page.seoTitle || this.page.title, // "Our Luxury Travel & Experience Services",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.page.seoDescription // "From fine dinning, ultimate wellness and super yachts to private jets, luxury estates and remote travel. No adventure is beyond the imagination at Sienna Charles."
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
