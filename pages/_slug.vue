<template>
  <Destinations v-if="page.template === 'destinations'" :page="page" />

  <DestinationsV2
    v-else-if="page.template === 'destinations-v2'"
    :page="page"
  />

  <main v-else>
    <section
      :class="`u-p-t-xxl u-p-b${page.template === 'conversion' ? '' : '-l'}`"
    >
      <div class="container">
        <div v-if="page.template === 'text'" v-html="page.content" />

        <div
          v-if="['conversion', 'services'].includes(page.template)"
          class="flex"
        >
          <div
            v-if="page.mainImage"
            class="flex__cell u-half u-p-b@tablet displayflex flex--middle"
          >
            <img
              class="lazyload"
              :data-src="page.mainImage.id | image('pages')"
              :alt="
                templateContent.alt_text
                  ? templateContent.alt_text.value
                  : page.mainImage.alt || ''
              "
            />
          </div>

          <div
            :class="[{ 'u-half': !!page.mainImage }]"
            class="flex__cell u-p-b displayflex flex--middle"
          >
            <div class="u-p u-center">
              <div v-html="page.content" />

              <BookButton
                v-if="page.ctaType === 'request-access' && page.ctaText"
                class="u-p-t-s"
                :classes="
                  page.ctaText.toLowerCase().includes('client') ? 'cta' : ''
                "
              >
                {{ page.ctaText }}
              </BookButton>

              <Newsletter v-if="page.ctaType === 'newsletter' && page.ctaText">
                {{ page.ctaText }}
              </Newsletter>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <TripFlow v-if="page.ctaType === 'request-access'" /> -->

    <ConversionServices v-if="page.template === 'conversion'" />

    <Services v-if="page.template === 'services'" :items="page.items" />

    <Frequently v-if="page.template === 'services'" />
  </main>
</template>

<script>
export default {
  async asyncData({ store, params, error }) {
    try {
      const page = await store.dispatch("pages/getPage", {
        slug: params.slug
      });

      if (page) return { page };
      error({ statusCode: 404 });
    } catch (err) {
      error(err);
    }
  },

  components: {
    BookButton: () => import("@/components/BookButton"),
    ConversionServices: () => import("@/components/ConversionServices"),
    Destinations: () => import("@/components/Destinations"),
    DestinationsV2: () => import("@/components/DestinationsV2"),
    Frequently: () => import("@/components/Frequently"),
    Newsletter: () => import("@/components/Newsletter"),
    Services: () => import("@/components/Services")
    // TripFlow: () => import("@/components/TripFlow")
  },

  computed: {
    templateContent() {
      return this.page.templateContent || {};
    }
  },

  head() {
    return {
      title: this.page.seoTitle || this.page.title,
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
      ],
      script: [
        // this.page.ctaType === "newsletter"
        //   ? {
        //       src: "/js/activecampaign-form-3.js",
        //       body: true,
        //       defer: true
        //     }
        //   : {},

        this.page.template === "destinations"
          ? {
              src: "https://siennacharles.activehosted.com/f/embed.php?id=14",
              body: true,
              defer: true
            }
          : {},

        // SCHEMA
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Service",
            serviceType: this.page.schemaServiceType,
            provider: {
              "@type": "Organization",
              name: "Sienna Charles",
              "@id": `${process.env.BASE_URL}/${this.page.slug}`
            },
            description: this.page.schemaDescription,
            serviceOutput: {
              "@type": "Thing",
              name: this.page.schemaServiceOutputName,
              "@id": `${process.env.BASE_URL}/${this.page.slug}`
            },
            url: `${process.env.BASE_URL}/${this.page.slug}`,
            "@id": `${process.env.BASE_URL}/${this.page.slug}`
          }
        }
      ]
    };
  }
};
</script>
