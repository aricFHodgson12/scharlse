<template>
  <header class="header">
    <div
      class="header__wrap"
      itemscope
      itemtype="https://schema.org/SiteNavigationElement"
    >
      <!-- v-if not working here with nuxt generate -->
      <div class="u-mobile header__mobile" v-show="!landingPage">
        <Hamburger v-show="!hideMenu" />

        <nuxt-link to="/" v-show="!landingPage" class="mobile_logo">
          <img class="lazyload" data-src="~assets/images/logo-footer.svg" alt="Sienna Charles logo" />
        </nuxt-link>

        <!-- v-if not working here with nuxt generate -->
        <div class="hamburger-become u-mobile" v-show="!hideMenu">
          <!--a href="javascript:;" @click.prevent="showPopup">BECOME A MEMBER</a-->
          <a href="/become-a-member">BECOME A MEMBER</a>
        </div>

      </div>

      <div class="header__item">
        <!-- v-if not working here with nuxt generate -->
        <div v-show="landingPage">SIENNA CHARLES</div>


        <!-- v-if not working here with nuxt generate -->
        <nuxt-link class="u-desktop" to="/" v-show="!landingPage">
          <img class="desktop_logo"
            v-bind:src="logo_url"
            alt="Sienna Charles logo"
          />
        </nuxt-link>

        <!-- v-if not working here with nuxt generate -->

      </div>

      <!-- v-if not working here with nuxt generate -->
      <div class="header__item u-desktop" v-show="!hideMenu">
        <nav>
          <ul>
            <li
              v-for="(item, key) in topRightMenu.menuItems"
              :key="item.id || key"
              itemprop="name"
            >
              <a v-if="item.link === '#'" href="#" @click.prevent="showPopup">
                {{ item.title }}
              </a>

              <nuxt-link
                v-else-if="item.internal"
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
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <Sidebar
      :hideMenu="hideMenu"

    />      
  </header>
</template>

<script>
import { mapState } from "vuex";
import Hamburger from "@/components/Hamburger";
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Hamburger,
    Sidebar
  },

  computed: {
    ...mapState({
      menus: (state) => state.menus.menus,
    }),

    topLeftMenu() {
      return this.menus.find((m) => m.slug === "top-left-menu") || {};
    },

    topRightMenu() {
      return this.menus.find((m) => m.slug === "top-right-menu") || {};
    },
  },
  data () {
    return {
      logo_url: require('@/assets/images/logo_1.png'),
    }      
  }, 
  props: {
    hideMenu: {
      type: Boolean,
      default: false,
    },
    magazinePage: {
      type: Boolean,
      default: false,
    },
    thankyouPage: {
      type: Boolean,
      default: false,
    },
    landingPage: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    this.$nextTick(() => {
      let header = document.getElementsByTagName("header")[0];

      window.addEventListener("scroll", (e) => {
        let scrollTop = window.scrollY;

        scrollTop >= 50
          ? header.classList.add("active")
          : header.classList.remove("active");
      });
    });
  },

  methods: {
    showPopup() {
      document.body.style.overflow = "hidden";

      this.$store.commit("SET_CONSULATIONPOPUP", true);
    },
  },
};
</script>
