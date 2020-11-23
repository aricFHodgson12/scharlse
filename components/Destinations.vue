<template>
  <main id="destinations">
    <section
      v-if="page.mainImage"
      class="u-full-page u-bg-full"
      :style="{
        backgroundImage: `url(${getBgImgUrl(page.mainImage.id)})`
      }"
    >
      <div class="container">
        <div class="flex flex--middle u-center u-height-100">
          <div class="flex__cell">
            <div
              class="font-26 u-m-b-l destination-content"
              v-html="page.content"
            />

            <a
              class="font-roboto u-text-underline"
              href="javascript:;"
              @click="showPopup"
            >
              {{ page.ctaText }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="u-full-page destination-slider">
      <swiper class="swiper" :options="swiperOptions" ref="mySwiper">
        <swiper-slide
          v-for="(item, key) in page.items.filter(i => i.image)"
          :key="key"
          :style="{
            backgroundImage: `url(${getBgImgUrl(item.image.id)})`
          }"
        >
          <div class="container">
            <div
              class="flex u-center flex--center flex--middle"
              style="height: 100%"
            >
              <div class="felx__cell">
                <h2 class="h1 font-roboto u-m-b">{{ item.title }}</h2>

                <div class="font-26 destination-content u-m-b-l">
                  <span
                    v-for="(word, key) in splitSentence(item.content)"
                    :key="key"
                  >
                    <p v-if="key % 2 == 0">
                      {{ word }}
                    </p>
                  </span>
                </div>

                <a
                  class="font-roboto u-text-underline"
                  href="#"
                  @click.prevent="scrollBot"
                >
                  CUSTOMIZE THIS TRIP
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-button-prev" id="slider-prev" slot="button-prev" />
        <div class="swiper-button-next" id="slider-next" slot="button-next" />
      </swiper>
    </section>

    <section class="destination-slider" id="slideBot">
      <div class="swiper-small-pagination-wrap u-p-l-l u-p-r-l">
        <swiper class="swiper" :options="swiperOption2" ref="smallSwiper">
          <swiper-slide
            v-for="(item, key) in page.items.filter(i => i.image)"
            :key="key"
            class="small"
          >
            <div
              ref="smallImage"
              class="swiper-small-pagination"
              :class="key == 0 ? 'active' : ''"
              @click="activeSlider($event.target)"
              :data-index="key"
            >
              <img
                :src="item.image.id | image('background')"
                :alt="item.image.alt"
              />
            </div>
          </swiper-slide>
        </swiper>

        <div
          class="swiper-button-prev small-slider"
          id="small-slider-prev"
          slot="button-prev"
        />

        <div
          class="swiper-button-next small-slider"
          id="small-slider-next"
          slot="button-next"
        />
      </div>
    </section>

    <div class="container">
      <div id="form-14" class="form _form_14" />
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  props: {
    page: {
      type: Object,
      default: () => {}
    }
  },

  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      newSwiper: {},
      swiperOptions: {
        slidesPerView: 1,
        speed: 1000,
        effect: "fade",
        navigation: {
          nextEl: "#slider-next",
          prevEl: "#slider-prev"
        },
        on: {
          slideChange: () => {
            const smallImages = this.$refs.smallImage.map(x =>
              x.classList.remove("active")
            );
            this.$refs.smallImage[this.newSwiper.realIndex].classList.add(
              "active"
            );
          }
        }
      },
      swiperOption2: {
        speed: 1000,

        navigation: {
          nextEl: "#small-slider-next",
          prevEl: "#small-slider-prev"
        },

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 480px

          // when window width is >= 640px
          768: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        }
      }
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.newSwiper = this.$refs.mySwiper.$swiper;

      if (this.$route.query.destination) {
        const index = this.page.items.findIndex(i =>
          this.$options.filters
            .slugify(i.title)
            .includes(this.$route.query.destination)
        );

        this.newSwiper.slideTo(index);
      }
    });
  },

  methods: {
    activeSlider(elem) {
      const smallImages = this.$refs.smallImage.map(x =>
        x.classList.remove("active")
      );

      elem.classList.add("active");

      this.newSwiper.slideTo(elem.getAttribute("data-index"));
    },

    getBgImgUrl(id) {
      return `${process.env.BASE_URL}/api/v2/image/${id}/background`;
    },

    showPopup() {
      document.body.style.overflow = "hidden";
      document.body.style.top = `-${window.scrollY}px`;

      this.$store.commit("SET_CONSULATIONPOPUP", true);
    },

    scrollBot() {
      document.getElementById("form").scrollIntoView({ behavior: "smooth" });
    },

    splitSentence(word) {
      return word.split("\n");
    }
  }
};
</script>

<style lang="scss">
#destinations .font-26 h1 {
  margin-bottom: 8rem;
}

#form-14 {
  form[id^="_form"] {
    background: #000 !important;
    color: #fff !important;
    font-family: "Cormorant Garamond";
    @media screen and (max-width: 767px) {
      padding: 0;
    }
    ._has_error {
      border: none;
      border-bottom: 1px solid red !important;
    }

    ._error {
      display: none !important;
    }
    input[type="text"],
    input[type="email"] {
      border: none;
      border-bottom: 1px solid #aaaaaa;
      border-radius: 0;
    }
    ._row._checkbox-radio {
      display: inline-block;
      margin-right: 4rem;
      input[type="radio"],
      input[type="checkbox"] {
        display: none !important;
      }
      input[type="radio"] + span label,
      input[type="checkbox"] + span label {
        padding-left: 25px;
        position: relative;
        cursor: pointer;
        @media screen and (max-width: 767px) {
          padding-left: 40px;
        }
      }
      input[type="radio"] + span label:before {
        content: "";
        /* create custom radiobutton appearance */
        display: inline-block;
        width: 2.2rem;
        height: 2.2rem;
        padding: 0.3rem;
        margin-right: 0.5rem;
        /* background-color only for content */
        background-clip: content-box;
        border: 1px solid #bbbbbb;
        background-color: transparent;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 6px;
        @media screen and (max-width: 767px) {
          top: 0;
        }
      }

      input[type="checkbox"] + span label:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        height: 2.5rem;
        width: 2.5rem;
        background-color: transparent;
        border: 1px solid #fff;
        transform: translateY(-50%);
      }
      input[type="checkbox"] + span label:after {
        content: "";
        position: absolute;
        display: none;
        left: 0.9rem;
        top: 1.3rem;
        width: 0.7rem;
        height: 1.3rem;
        border: solid white;
        border-width: 0 0.3rem 0.3rem 0;
        transform: rotate(45deg);
        @media screen and (max-width: 767px) {
          top: 0.5rem;
        }
      }

      input[type="checkbox"]:checked ~ span label:after {
        display: block;
      }
      input[type="radio"]:checked + span label:before {
        background-color: #dbdcde;
      }
      span label {
        display: inline-flex;
        align-items: center;
      }
    }

    ._form_element * {
      font-size: 16px !important;
    }

    ._form-title {
      font-size: 26px !important;
      text-transform: uppercase;
      text-align: center;
      font-family: "Domaine Sans Display";
      font-weight: 200;
    }

    ._form-content {
      // display: grid;

      ._form_element {
        input[type="text"] {
          color: #fff !important;
        }

        ._form-label {
          font-family: "Cormorant Garamond";
          margin-top: 4rem;
        }

        ._field-wrapper input[data-name*="destination"] {
          border: 1px solid #aaaaaa;
          &._has_error {
            border: 1px solid red !important;
          }
        }
      }

      ._button-wrapper {
        text-align: center;
        margin-top: 4rem;

        button {
          padding: 10px 16rem !important;
          @media screen and (max-width: 767px) {
            padding: 10px 0 !important;
          }
        }
      }
    }
  }
}
</style>
