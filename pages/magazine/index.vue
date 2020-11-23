<template>
  <main class="u-p-t-xl magazine">
    <div class="container container--xl">
      <div class="u-p-b">
        <div class="flex" v-if="articles">
          <div class="flex__cell u-half u-p-b">
            <div class="slider u-sticky">
              <div
                class="u-zoom"
                v-for="article in articles.slice(0, 1)"
                :key="article.index"
              >
                <MagazineArticleLarge
                  :title="article.title"
                  :image-id="article.mainImage ? article.mainImage.id : ''"
                  :content="`${article.content.slice(0, 100)}...`"
                  :to="{
                    name: 'magazine-slug',
                    params: { slug: article.slug }
                  }"
                  :magazinePage="true"
                />
              </div>
            </div>
          </div>

          <div class="flex__cell u-half">
            <div class="flex flex">
              <div
                class="flex__cell u-half u-p-b"
                v-for="article in articles.slice(1)"
                :key="article.index"
              >
                <MagazineArticle
                  :title="article.title"
                  :image-id="article.mainImage ? article.mainImage.id : ''"
                  :to="{
                    name: 'magazine-slug',
                    params: { slug: article.slug }
                  }"
                  :magazinePage="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "magazine",

  head() {
    return {
      title: "Luxury Travel Magazine | Voyage | Sienna Charles",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Leading luxury lifestyle and travel magazine, Voyage, shares the latest in luxury lifestyle and travel news, from boutique hotels to superyacht charters and more."
        }
      ]
    };
  },

  async asyncData({ store, error }) {
    try {
      // Load articles
      await store.dispatch("articles/getArticles");
    } catch (err) {
      error(err);
    }
  },

  components: {
    MagazineArticle: () => import("@/components/MagazineArticle"),
    MagazineArticleLarge: () => import("@/components/MagazineArticleLarge")
  },

  computed: {
    ...mapState({
      articles: state => state.articles.articles
    })
  }
};
</script>
