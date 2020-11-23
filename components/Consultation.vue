<template>
  <transition name="fade">
    <!-- Use v-show insteand of v-if because of activecampaign.js -->
    <div class="popup" v-show="$store.state.ConsulationPopup">
      <div class="popup__inner">
        <!-- <div class="container container--s"> -->
        <h2>SIENNA CHARLES</h2>

          <div class="container" id="become-a-member">
              <div class="klaviyo-form-X4KxK7"></div>
          </div>

        <!-- <div class="form">
            <form
              id="_form_7_"
              class="_form _form_7 _inline-form _dark"
              action="https://siennacharles.activehosted.com/proc.php"
              method="POST"
              novalidate
            >
              <div class="_form-content extra-margin">
                <div class="_form_element _x08998829 _full_width _clear">
                  <div class="form-title">
                    <h2 class="h4">It’s all about getting to know you</h2>
                  </div>
                  <p>
                    Please complete this inquiry form, telling us about you, and
                    your past journeys so we may identify if we are a fit for
                    your travel needs. If accepted, we will invite you to create
                    an account to access our proprietary technology. From there,
                    you can complete sharing all of your preferences and create
                    your first travel experience with us.
                  </p>
                </div>
                <div class="_form_element _x39428488 _full_width">
                  <input
                    name="firstname"
                    required
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div class="_form_element _x35006376 _full_width">
                  <input
                    name="lastname"
                    required
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div class="_form_element _x68928968 _full_width">
                  <input
                    name="email"
                    required
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div class="_form_element _x39645331 _full_width">
                  <input
                    name="phone"
                    required
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div class="_form_element _field11 _full_width">
                  <input
                    name="field[11]"
                    required
                    type="text"
                    value
                    placeholder="Company"
                  />
                </div>
                <div class="_form_element _field23 _full_width">
                  <input
                    type="text"
                    name="field[23]"
                    value
                    placeholder="City of Primary Residence"
                    required
                  />
                </div>
                <div class="_form_element _field24 _full_width">
                  <input
                    type="text"
                    name="field[24]"
                    value
                    placeholder="Is this request for your employer?"
                  />
                </div>
                <div>&nbsp;</div>
                <div class="form-label">Most Memorable Trip and Why</div>
                <div class="_field-wrapper">
                  <textarea name="field[19]" placeholder required></textarea>
                </div>
              </div>
              <div class="_form_element _field20 _full_width">
                <div class="form-label">Favourite Restaurant Anywhere</div>
                <div class="_field-wrapper">
                  <textarea name="field[20]" placeholder required></textarea>
                </div>
              </div>

              <div class="form-label">Flights Preference</div>
              <div
                class="input-row"
                v-if="
                  $store.state.ConsulationPopup
                    ? true
                    : page && page.template !== 'destinations'
                "
              >
                <div class="input-column">
                  <input
                    class="form--radio"
                    id="field_14Coach"
                    name="field[14]"
                    type="radio"
                    value="Coach"
                  />
                  <label for="field_14Coach">Coach</label>
                </div>
                <div class="input-column">
                  <input
                    class="form--radio"
                    id="field_14Business/First"
                    name="field[14]"
                    type="radio"
                    value="Business/First"
                  />
                  <label for="field_14Business/First">Business/First</label>
                </div>
                <div class="input-column">
                  <input
                    class="form--radio"
                    id="field_14Private"
                    name="field[14]"
                    type="radio"
                    value="Private"
                  />
                  <label for="field_14Private">Private</label>
                </div>
              </div>

              <div class="form-label">Average Trip Spend</div>
              <div
                class="input-row"
                v-if="
                  $store.state.ConsulationPopup
                    ? true
                    : page && page.template !== 'destinations'
                "
              >
                <div class="input-column">
                  <input
                    class="form--radio"
                    id="field_16$0 - $20,000"
                    name="field[16]"
                    type="radio"
                    value="$0 - $20,000"
                  />
                  <label for="field_16$0 - $20,000">$0 - $20,000</label>
                </div>
                <div class="input-column">
                  <input
                    class="form--radio"
                    id="field_16$20,000 - 50,000"
                    name="field[16]"
                    type="radio"
                    value="$20,000 - 50,000"
                  />
                  <label for="field_16$20,000 - 50,000">$20,000 - 50,000</label>
                </div>
                <div class="input-column">
                  <input
                    class="form--radio"
                    id="field_16$50,000"
                    name="field[16]"
                    type="radio"
                    value="$50,000"
                  />
                  <label for="field_16$50,000">$50,000+</label>
                </div>
              </div>

              <div class="_form_element _field18 _full_width">
                <div class="form-label top-spacing">
                  Anything Else You'd Like To Share?
                </div>
                <div class="_field-wrapper">
                  <textarea name="field[18]" placeholder></textarea>
                </div>
              </div>
              <div
                class="input-row"
                v-if="
                  $store.state.ConsulationPopup
                    ? true
                    : page && page.template !== 'destinations'
                "
              >
                <div class="input-column" style="padding-left: 0px">
                  <label class="container-checkbox">
                    Join Our Newsletter
                    <input
                      class="form--checkbox"
                      id="field_22Yes"
                      type="checkbox"
                      name="field[22][]"
                      value="Yes"
                      checked
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <input
                data-autofill="false"
                type="hidden"
                name="field[22][]"
                value="~|"
              />
              <div class="button-wrapper">
                <button
                  id="_form_7_submit"
                  class="cta submit-button"
                  type="submit"
                >
                  Submit
                </button>
              </div>

              <div class="recaptcha-text">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                and
                <a href="https://policies.google.com/terms">Terms of Service</a>
                apply.
              </div>

              <div class="_clear-element"></div>

              <div class="_form-thank-you" style="display: none"></div>
              <input name="u" type="hidden" value="7" />
              <input name="f" type="hidden" value="7" />
              <input name="s" type="hidden" />
              <input name="c" type="hidden" value="0" />
              <input name="m" type="hidden" value="0" />
              <input name="act" type="hidden" value="sub" />
              <input name="v" type="hidden" value="2" />
            </form>
          </div> -->
        <!-- </div> -->

        <div class="popup__close" @click="hidePopup">
          <img
            class="lazyload"
            data-src="~assets/images/close.png"
            alt
            height="12"
            width="12"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    hidePopup() {
      // When the popup is hidden, we want to remain at the top of the scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);

      this.$store.commit("SET_CONSULATIONPOPUP", false);
    }
  },

  computed: {
    ...mapState({
      page: state => state.pages.page
    })
  }
};
</script>

<style lang="scss">
.popup__inner {
  height: 100%;
}
#become-a-member {
      .klaviyo-form-X4KxK7 {
        p {
          font-family: "Cormorant Garamond";
          font-size: 16px;
          color: #FFF;
        }
        .kl-private-quill-wrapper-Lkqws1.kl-private-quill-wrapper-Lkqws1.kl-private-quill-wrapper-Lkqws1 .ql-editor .ql-font-lucida-sans {
          font-family: "Domaine Sans Display", sans-serif;
        }
        label {
          color: #FFF;
          font-family: "Cormorant Garamond";
          font-weight: 300;
        }
        .eGSHMQ {
          label {
            color: #FFF;
            font-family: "Cormorant Garamond", sans-serif;
            font-weight: 300;
          }
        }
        .iURvI.iURvI {
          color: #FFF !important;
        }
        input {
          background: #000;
          border: none;
          border-bottom: solid 1px #FFF;
          color: #fff;
          font-family: "Cormorant Garamond", sans-serif;
          padding: 0;
          &:focus {
            box-shadow: none;
            outline: none;
          }
        }
        input:nth-child(2) {
          border: solid 1px #FFF;
          padding: 10px;
        }
        ::placeholder {
            color: #FFF;
            font-family: "Cormorant Garamond", sans-serif;
            font-size: 1em;
        }
        .SelectorOuter__StyledOuter-sc-1bzxisr-0{
          rect {
            fill: #000;
            stroke: #FFF;
          }
        }
        .SelectorInner__StyledInner-sc-1g8mcs6-0 {
          #checkbox_on {
            fill: #FFF;
            stroke: #FFF;
          }
          polygon {
            fill: #FFF;
          }
        }
        .eGSHMQ {
          div {
            font-family: "Cormorant Garamond", sans-serif;
          }
        }
        button {
          background: #000;
          border: solid 1px #FFF;
          font-family: "Roboto", sans-serif;
          font-size: 1.83rem;
          font-weight: 300;
          width: auto;
          padding: 10px 40px;
          margin: 0 auto;
        }
      }
      p {
          a.button {
            font-family: "Cormorant Garamond", sans-serif;
            text-transform: none;
          }
      }
      //Error message box
      .dqEOHo.dqEOHo {
        background: none;
        left: 0;
        top: 2px;
      }
      .hAkfYz.hAkfYz::before,
      .hAkfYz.hAkfYz::after,
       {
        display: none;
      }
      .hAkfYz.hAkfYz {
        background: none;
        border: none;
      }
      .htnWBn.htnWBn {
        padding: 2px 0;
        text-align: left;
        font-family: "Roboto", sans-serif;
        font-size: 12px;
      }
      .eUySvI.eUySvI {
        padding-left: 5px;
      }
    }
#form-7 {
  form[id^="_form"] {
    background: #000 !important;
    color: #fff !important;
    font-family: "Cormorant Garamond" !important;
    @media screen and (max-width: 767px) {
      padding: 0;
    }
    ._form-content {
      font-family: "Cormorant Garamond" !important;
    }
    input._has_error {
      border: none;

      border-bottom: 1px solid red !important;
    }
    ._error {
      display: none !important;
    }

    input,
    input[type="email"],
    textarea {
      font-family: "Cormorant Garamond" !important;
      border: none;
      border-bottom: 1px solid #aaaaaa;
      border-radius: 0;
      color: #fff !important;
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
