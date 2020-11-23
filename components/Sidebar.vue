<template>
      <!-- v-if not working here with nuxt generate -->
    <div v-show="!hideMenu" class="sidebar u-desktop">
      <nav>
        <ul>
          <li
            v-for="(item, key) in topLeftMenu.menuItems"
            :key="item.id || key"
            itemprop="name"
            :class="item.title == 'Away' || item.title == 'About' || item.title == 'At Home' ? 'has-sub' : '' "
          >
            <nuxt-link
              v-if="item.internal"
              :to="'/' + item.link"
              :title="item.title"
              itemprop="url"
            >
              {{ item.title }}
            </nuxt-link>

            <a
              v-else
              :href="item.link"
              :title="item.title"
              target="_blank"
              itemprop="url"
            >
              {{ item.title }}
            </a>

            <div class="sub_menu" v-if="item.title == 'Away'">

              <div>
                <nuxt-link
                  to="/luxury-away-services/luxury-estates-luxury-villas"
                  title="Estates"
                >
                  Estates
                </nuxt-link>  
              </div>            
              <div>
                <nuxt-link
                  to="/luxury-away-services/luxury-yachts"
                  title="Yachts"
                >
                
                 Yachts
                </nuxt-link>
              </div>
              <div>
                <nuxt-link
                  to="/luxury-away-services/luxury-private-jets-and-luxury-private-planes"
                  title="Planes"
                >
                 Planes
                </nuxt-link>
              </div>                            
            </div>

            <div class="sub_menu" v-if="item.title == 'At Home'">
              <div>
                <nuxt-link
                  to="/luxury-home-services/food-and-wine-experiences"
                  title="Food & Wine"
                >
                 Food & Wine
                </nuxt-link>
              </div>
              <div>
                <nuxt-link
                  to="/luxury-home-services/at-home-wellness-and-beauty"
                  title="Wellness"
                >
                  Wellness
                </nuxt-link>  
              </div>                                      

              <div>
                <nuxt-link
                  to="/luxury-home-services/luxury-home-and-garden-design"
                  title="Design"
                >
                  Design
                </nuxt-link>  
              </div>                                      

            </div>

            <div class="sub_menu" v-if="item.title == 'About'">
              <div>
                <nuxt-link
                  to="/about/our-approach"
                  title="Our Approach"
                >
                 Our Approach
                </nuxt-link>            
              </div>

              <div>
                <nuxt-link
                  to="/about/our-specialties"
                  title="Our Specialties"
                >
                 OUR SPECIALTIES
                </nuxt-link>
              </div>

              <div>
                <nuxt-link
                  to="/about/our-founder"
                  title="Our Founder"
                >
                 Our Founder
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>  
</template>

<script>
import { mapState } from "vuex";  
export default {
  props: {
    hideMenu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      menus: (state) => state.menus.menus,
    }),

    topLeftMenu() {
      return this.menus.find((m) => m.slug === "top-left-menu") || {};
    },
  },  
  data: () => ({
  }),
  mounted() {
  }
};
</script>
