<template>
  <footer class="footer u-p-b-l" :class="isLanding ? `landing` : ``">
    <div class="container">
      <div class="footer__main">
        <div class="flex u-p-t">
          <div class="flex__cell u-forty collpase_area">
            <div v-show="!isLanding">
              <div class="footer__collapse u-mobile">
                <p>MORE INFORMATION</p>
                <span class="plus footer__moreinfo" v-if="moreInfo==false" @click="moreInfo=true">+</span>
                <span class="minus footer__moreinfo" v-if="moreInfo==true" @click="moreInfo=false"></span>
              </div>
              <div v-for="(item, key) in footerLeftMenu.menuItems"
                  :key="item.id || key" class="u-half menu-item u-p-b u-mobile" v-if="moreInfo==true">
                    <nuxt-link v-if="item.internal" :to="'/' + item.link">
                      {{ item.title }}
                    </nuxt-link>                    
                    <a v-else :href="item.link" target="_blank">
                      {{ item.title }}
                    </a>

              </div>

              <div v-for="(item, key) in footerLeftMenu.menuItems"
                  :key="item.id || key" class="u-half menu-item u-p-b u-desktop">
                    <nuxt-link v-if="item.internal" :to="'/' + item.link">
                      {{ item.title }}
                    </nuxt-link>                    
                    <a v-else :href="item.link" target="_blank">
                      {{ item.title }}
                    </a>

              </div>
                <!--div class="u-mobile">
                  <a href="#" @click.prevent="showPopup">
                    BECOME<br />A MEMBER
                  </a>
                </div-->              
            </div>
          </div>

          <div class="flex__cell u-logo flex--center">
            <img
              class="lazyload"
              data-src="~assets/images/logo-footer.svg"
              alt
            />
          </div>

          <div class="flex__cell u-forty flex--right">
            <h5 class="u-right u-desktop">SIGN UP FOR OUR NEWSLETTER</h5>
            <h5 class="u-left u-mobile u-m-t">SIGN UP FOR OUR NEWSLETTER</h5>
            <div class="footer__action newsletter" v-if="!hideNewsletter">
              
              <div class="klaviyo-form-RNs8bB"></div>
              
            </div>
          </div>
        </div>
      </div>

      <div class="footer__sup">
        <div class="flex">
          <div class="flex__cell u-half u-left">
            Copyright © {{ date.getFullYear() }} Sienna Charles All right
            reserved.
          </div>

          <div class="flex__cell u-half flex--right">
            <nav>
              <ul>
                <li
                  v-for="(item, key) in footerRightMenu.menuItems"
                  :key="item.id || key"
                >
                  <nuxt-link v-if="item.internal" :to="'/' + item.link">
                    {{ item.title }}
                  </nuxt-link>

                  <a v-else :href="item.link" target="_blank">
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      menus: (state) => state.menus.menus,
    }),

    footerLeftMenu() {
      return this.menus.find((m) => m.slug === "footer-left-menu") || {};
    },

    footerRightMenu() {
      return this.menus.find((m) => m.slug === "footer-right-menu") || {};
    },
  },

  data() {
    return {
      date: new Date(),
      moreInfo: false
    };
  },

  props: {
    hideNewsletter: {
      type: Boolean,
      default: false,
    },

    isLanding: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    showNewsletterPopup() {
      let email = document.querySelector("#footer-email");
      document.body.style.overflow = "hidden";

      this.$store.commit("SET_JOINUSPOPUP", true);
      this.$store.commit("SET_JOINUSEMAIL", email.value);
      email.value = "";
    },

    showPopup() {
      document.body.style.overflow = "hidden";

      this.$store.commit("SET_CONSULATIONPOPUP", true);
    },
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit("SET_JOINUSPOPUP", true);
    }, 20000);
  },
};
</script>

<style lang="scss">
.dFAxdI.dFAxdI.dFAxdI.dFAxdI.dFAxdI.dFAxdI {
  font-family: "Cormorant Garamond",sans-serif;
  &:focus{ 
    font-family: "Cormorant Garamond",sans-serif;
  }
  &::placeholder{ 
    font-family: "Cormorant Garamond",sans-serif;
  }
  :focus{ 
    font-family: "Cormorant Garamond",sans-serif;
  }
  ::placeholder{ 
    font-family: "Cormorant Garamond",sans-serif;
  }
}
.uZdWz.uZdWz .dMHKxR.dMHKxR {
  font-family: "Cormorant Garamond",sans-serif;
}
</style>
