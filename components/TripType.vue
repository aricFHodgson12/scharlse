<template>
  <section class="triptype" v-scroll-reveal>
    <div class="container">
      <div class="flex">
        <div class="flex__cell u-half">
          <div class="u-sticky u-p-b u-height-100" style="padding: 0">
            <div>
              <img
                v-if="page.mainImage"
                class="lazyload"
                :data-src="page.mainImage.id | image('index_page')"
                :alt="
                  page.mainImage.alt ||
                    'Leading luxury travel company, Sienna Charles, provides personalized luxury experiences'
                "
              />
            </div>
          </div>
        </div>

        <div class="flex__cell u-half displayflex flex--middle">
          <ul v-if="templateContent.items">
            <li v-scroll-reveal>
              <em v-if="templateContent.items_description">
                {{ templateContent.items_description.value }}
              </em>
            </li>

            <li
              v-for="(item, key) in templateContent.items"
              :key="key"
              v-scroll-reveal
            >
              <h2 v-if="item.title" :class="key ? '' : 'u-p-t-s'">
                {{ item.title.value }}
              </h2>

              <p v-if="item.content">
                {{ item.content.value }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="triptype__link">
        <nuxt-link to="/our-service" class="button">Learn more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      page: state => state.pages.page
    }),

    templateContent() {
      return this.page.templateContent || {};
    }
  }
};
</script>
