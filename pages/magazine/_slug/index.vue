  <template>
  <main class="u-p-t-xl">
    <div class="container container--xl">
      <div class="flex u-p-t u-m-b-xl">
        <div class="flex__cell u-third">
          <div class="u-sticky" v-scroll-reveal>
            <div style="max-width: 480px; margin: 0 auto 60px auto">
              <h1 class="u-text">{{ article.title }}</h1>

              <div class="u-text u-a-link" v-html="article.content"></div>

              <!-- SHARE NETWORKS -->
              <div class="share-network">
                SHARE THIS ARTICLE

                <span class="share-network__dash">-</span>

                <span v-for="(n, index) in networks">
                  <share-network
                    :network="n.network"
                    :url="n.url"
                    :title="n.title"
                    :description="n.description"
                    :quote="n.quote"
                    :hashtags="n.hashtags"
                  >
                    {{ n.network | capitalize }}
                  </share-network>

                  <span
                    v-if="index < networks.length - 1"
                    class="share-network__divider"
                  >
                    |
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex__cell u-third-two">
          <div class="flex flex--l">
            <div
              class="flex__cell u-p-b-l"
              :class="
                index % 5 == 0 ||
                (index == article.images.length - 1 && index % 2 !== 0)
                  ? ''
                  : 'u-half'
              "
              v-scroll-reveal
              v-for="(articleImage, index) in article.images"
              :key="index"
              :style="{
                paddingBottom: index + 1 === article.images.length ? 0 : '',
              }"
            >
              <div
                :class="
                  index % 5 == 0 ||
                  (index == article.images.length - 1 && index % 2 !== 0)
                    ? 'u-rectangle'
                    : 'u-square'
                "
              >
                <img
                  class="lazyload"
                  :data-src="
                    articleImage.image.id
                      | image(
                        index % 5 == 0 ||
                          (index == article.images.length - 1 &&
                            index % 2 !== 0)
                          ? 'rectangle'
                          : 'square_large'
                      )
                  "
                  :alt="articleImage.alt"
                />
              </div>

              <div class="article-image__description">
                {{ articleImage.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        v-scroll-reveal
        class="u-border-top u-border-bottom u-p-s u-m-b-l u-center u-p-b-l2 u-p-t-l"
      >
        <div class="container">
          <h3 class="u-p-b font-domain">
            Sienna Charles offers a variety of luxury services<br />to curate
            your ideal experience
          </h3>
          <nuxt-link to="/become-a-member" class="cta u-mobile-block"
            >learn more</nuxt-link
          >
        </div>
      </section>

      <section v-scroll-reveal>
        <div class>
          <h2 class="line-title">
            <span>FURTHER READING</span>
          </h2>

          <div class="flex">
            <div
              v-for="(article, index) in furtherArticle.slice(0, 3)"
              :key="index"
              class="flex__cell u-p-b"
              :class="index == 0 ? `u-half` : `u-quarter`"
            >
              <MagazineArticle
                :size="index == 0 ? `rectangle` : `square`"
                :imageSize="index == 0 ? `rectangle` : `square`"
                :title="article.title"
                :image-id="article.mainImage ? article.mainImage.id : ''"
                :to="{ name: 'magazine-slug', params: { slug: article.slug } }"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: this.metaDetail.title,
      keywords: this.article.seoKeywords,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.metaDetail.description,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Article",
            headline: this.article.headline,
            author: this.article.author,
            publisher: this.article.publisher,
            datePublished: this.article.createdAt,
            dateModified: this.article.updatedAt,
            image: this.article.images.map(
              (i) => process.env.BASE_URL + i.image.filePath
            ),
          },
        },
      ],
    };
  },

  components: {
    MagazineArticle: () => import("@/components/MagazineArticle"),
  },

  async asyncData({ store, params, error }) {
    try {
      // Load article in ssr
      const article = await store.dispatch("articles/getArticle", params.slug);
      const categories = article.categories || [];

      // Load related articles
      await store.dispatch("articles/getArticles", {
        "categories.id": categories.map((c) => c.id),
      });

      var metaDetail = {

      };

      switch (params.slug){
        case "the-best-remote-travel":
           metaDetail.title = "Best Remote Luxury Travel | Traveling Off The Grid | Voyage";
           metaDetail.description = "The benefits of remote travel go beyond social distancing. Traveling off the grid encourages unplugging, learning about new cultures and connecting with nature.";
        break;
        case "instagramers-vs-fine-dining":
           metaDetail.title = "Instagramers vs Fine Dining  | Exclusive Experiences | Voyage";
           metaDetail.description = "As restaurants opt for brand recognition over brand loyalty & social media influencers snap countless photos, fine dining loses its sense of exclusivity.";        
        break;
        case "luxury-spas-of-the-future":
           metaDetail.title = "Luxury Spas of the Future | Innovative Wellness | Voyage";
           metaDetail.description = "Innovative luxury spas lead to ultimate relaxation experiences. Learn how luxury spas resorts are changing, from Japanese gardens, Ketra lighting, and more.";                
        break;
        case "luxury-private-plane-design":
           metaDetail.title = "Luxury Private Plane & Custom Jet Design Trends | Voyage";
           metaDetail.description = "Private jet charter business is booming, so now might be the time to invest in your own custom private plane. Luxury jet design trends and possibilities are endless.";                        
        break;
        case "why-luxury-hotels-are-dead":
           metaDetail.title = "Why Luxury Hotels Are Dead | Voyage";
           metaDetail.description = "The pandemic has accelerated the demise of luxury hotels & the future of luxury travel for ultra-high-net-worth travelers must change to ensure personal, tailored service remains intact.";                                
        break;
        case "food-for-thought":
           metaDetail.title = "Food for Thought | Fine Dining Take Out | Voyage";
           metaDetail.description = "Michelin-star take out? Yes, please. Coronavirus has forced our favorite fine dining restaurants to dish up innovative ways to bring their luxury experiences into our private homes.";                                        
        break;
        case "away-from-home":
           metaDetail.title = "Home Away From Home | Coronavirus and Luxury Real Estate | Voyage";
           metaDetail.description = "Across the world luxury real estate is booming so now is the time to explore purchasing your dream trophy home or a extraordinary luxury vacation home.";                                        
        break;        
        case "superyacht-2020-trends":
           metaDetail.title = "Superyacht Life | Latest Luxury Yacht Design Trends | Voyage";
           metaDetail.description = "Luxury yacht designs are constantly evolving. Our favorite 2020 yacht trends include modular layouts, wellness areas and eco-friendly friendly ‘zero-impact’ vessels.";                                                
        break;
        case "high-flyer-aston-martin-custom-helicopters":
           metaDetail.title = "High Flyer | Aston Martin Custom Helicopter Revealed | Voyage";
           metaDetail.description = "Fly in luxury with Aston Martin. Aston Martin raises the bar by partnering with Airbus Corporate Helicopter to launch a luxury custom helicopter line.";                                                        
        break;
        case "the-shift-in-service":
           metaDetail.title = "How Luxury Changes in a Pandemic | Voyage";
           metaDetail.description = "The pandemic has inspired the luxury industry to provide personalized, high-touch experiences and I hope that customer focus is here to stay. Moving forward I plan to always ask for things corona-style.";                                                                
        break;
        case "hiring-a-private-chef":
           metaDetail.title = "Learn How to Hire A Private Chef | Voyage";
           metaDetail.description = "The private executive chef is a gourmand’s best friend. Learn about the joys having a private chef can bring you.";
        break;
        case "trends-in-luxury-interior-design":
           metaDetail.title = "Top Luxury Interior Design Trends | Voyage";
           metaDetail.description = "Today, tomorrow, and forever, luxury interior design is a study in excellence. Learn about the latest trends in luxury interior design.";
        break;        
        case "building-the-ultimate-wine-cellar":
           metaDetail.title = "Building a Luxury Wine Cellar at Home | Voyage";
           metaDetail.description = "Your wine cellar should be a marriage of form and function. Learn about building the ultimate luxurious wine cellar here.";        
        break;

      }
      return {
         metaDetail
      }

    } catch (err) {
      error(err);
    }
  },

  computed: {
    ...mapState({
      articles: (state) => state.articles.articles,
      article: (state) => state.articles.article,
    }),

    furtherArticle() {
      return this.articles.filter((c) => c.slug !== this.article.slug);
    },

    networks() {
      return ["Linkedin", "Twitter", "Email"].map((network) => {
        return {
          network,
          url: "https://siennacharles.com" + this.$route.path,
          title: this.article.seoTitle, // Email, Twitter, Facebook
          description: this.article.seoDescription, // Email, Facebook
          hashtags: this.article.seoKeywords, // A list of comma-separated hashtags (Twitter and Facebook)
          // quote: "", // Facebook quote (Facebook only)
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.share-network {
  margin-top: 6rem;
  text-transform: uppercase;
  font-family: "Roboto";
  font-size: 11px;
  font-weight: 400;

  &__dash {
    margin: 0 1rem;
  }

  &__divider {
    margin: 0 0.5rem;
  }

  a {
    cursor: pointer;
  }
}

.article-image__description {
  font-size: 11px;
  margin-top: 1rem;
}
</style>
