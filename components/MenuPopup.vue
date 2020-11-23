<template>
  <transition name="fade">
    <div class="popup popup--menu" v-if="$store.state.MenuPopup">
      <div class="popup__inner" :class="{ 'popup--active': MenuPopup }">
        <div class="popup__close" @click="hidePopup">
          <img class="lazyload" data-src="~assets/images/close.png" alt />
        </div>

        <div class="popup__nav">
          <ul>
            <li class="top">
              <a :href="url">SIGN IN</a>
            </li>

            <li class="top u-p-b-xl">
              <!--a href="#" @click.prevent="showPopup">BECOME A MEMBER</a-->
              <nuxt-link
                to="/become-a-member"
                title="BECOME A MEMBER"
                @click.native="handlerLink"
              >
               BECOME A MEMBER
              </nuxt-link>

            </li>

            <li class="hilight">
              <nuxt-link
                to="/luxury-away-services"
                title="AWAY"
                @click.native="handlerLink"
              >
               AWAY
              </nuxt-link>

              <div class="popup__sub" v-if="sub_away">
                <nuxt-link
                  to="/luxury-away-services/luxury-estates-luxury-villas"
                  title="Estates"
                  @click.native="handlerLink"
                >
                 Estates
                </nuxt-link>
                <nuxt-link
                  to="/luxury-away-services/luxury-yachts"
                  title="Yachts"
                  @click.native="handlerLink"
                >
                  Yachts
                </nuxt-link>
                <nuxt-link
                  to="/luxury-away-services/luxury-private-jets-and-luxury-private-planes"
                  title="Planes"
                  @click.native="handlerLink"
                >
                  PLANES
                </nuxt-link>                
              </div>
            </li>

            <li class="hilight">
              <nuxt-link
                to="/luxury-home-services"
                title="AT HOME"
                @click.native="handlerLink"
              >
               AT HOME
              </nuxt-link>

              <div class="popup__sub" v-if="sub_home">               
                <nuxt-link
                  to="/luxury-home-services/food-and-wine-experiences"
                  title="Food & Wine"
                  @click.native="handlerLink"
                >
                 Food & Wine
                </nuxt-link>
                <nuxt-link
                  to="/luxury-home-services/at-home-wellness-and-beauty"
                  title="Wellness"
                  @click.native="handlerLink"
                >
                  Wellness
                </nuxt-link>      

                <nuxt-link
                  to="/luxury-home-services/luxury-home-and-garden-design"
                  title="Design"
                  @click.native="handlerLink"
                >
                  Design
                </nuxt-link>                                  
              </div>              
            </li>

            <li class="hilight">
              <nuxt-link
                to="/about/our-approach"
                title="ABOUT"
                @click.native="handlerLink"
              >
               ABOUT
              </nuxt-link>

              <div class="popup__sub" v-if="sub_about">

                <nuxt-link
                  to="/about/our-approach"
                  title="our-approach"
                  @click.native="handlerLink"
                >
                 OUR APPROACH
                </nuxt-link>

                <nuxt-link
                  to="/about/our-specialties"
                  title="our-specialties"
                  @click.native="handlerLink"
                >
                 OUR SPECIALTIES
                </nuxt-link>                

                <nuxt-link
                  to="/about/our-founder"
                  title="our-founder"
                  @click.native="handlerLink"
                >
                  OUR FOUNDER
                </nuxt-link>              
              </div>              
            </li>

            <li class="hilight">
              <nuxt-link to="/magazine" @click="hidePopup">VOYAGE MAGAZINE</nuxt-link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      url: process.env.CLIENT_PORTAL_URL,
      sub_away: true,
      sub_home: true,
      sub_about: true
    };
  },

  computed: {
    ...mapState({
      MenuPopup: "MenuPopup"
    })
  },

  methods: {
    handlerLink() {
      var that = this;
      setTimeout(function(){ that.hidePopup() }, 1000);

      
    },
    hidePopup() {
      // When the popup is hidden, we want to remain at the top of the scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.top = "";

      this.$nextTick(() => {
        this.$store.commit("SET_MENUPOPUP", false);
        // gsap.to(".popup--menu .popup__inner", 0.7, {
        //   x: "-100%",
        //   onComplete: () => {
        //     this.$store.commit("SET_MENUPOPUP", false);
        //   },
        // });
      });
    },

    showPopup() {
      document.body.style.overflow = "hidden";
      document.body.style.top = `-${window.scrollY}px`;

      this.$store.commit("SET_CONSULATIONPOPUP", true);
    },

    showNewsletterPopup() {
      document.body.style.overflow = "hidden";
      document.body.style.top = `-${window.scrollY}px`;

      this.$store.commit("SET_JOINUSPOPUP", true);
    },
  },
};
</script>
