<template>
  <transition name="fade">
    <!-- Use v-show instead of v-if because of activecampaign.js -->
    <div class="popup popup--joinus" v-show="$store.state.JoinusPopup">
      <div class="popup__inner">
        <div class="container">
          <h2>SIGN UP</h2>

          <div class="form formDiv2">
            <form
              method="POST"
              action="https://siennacharles.activehosted.com/proc.php"
              id="_form_9_"
              class="_form _form_9 _inline-form _dark"
              novalidate
            >
              <!-- Do not delete hidden fields -->
              <input type="hidden" name="u" value="9" />
              <input type="hidden" name="f" value="9" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />

              <div class="_form-content">
                <div class="_form_element _x32423416 _full_width _clear">
                  <div class="form-title">
                    <!-- <h2>JOIN US</h2> -->
                  </div>
                </div>
                <div class="_form_element _x79731331 _full_width _clear">
                  <div
                    style="text-align:center;margin-bottom:20px;"
                  >Please select the boxes that best represent your interests, so that we may tailor your experience.</div>
                </div>
                <div class="_form_element _field17 _full_width">
                  <input data-autofill="false" type="hidden" name="field[17][]" value="~|" />
                  <div style="width:100%;text-align:left;margin: auto; ">
                    <div class="input-row">
                      <div class="input-column">
                        <label class="container-checkbox">
                          Dining
                          <input
                            class="form--checkbox"
                            id="field_17Dining"
                            type="checkbox"
                            name="field[17][]"
                            value="Dining"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="input-column">
                        <label class="container-checkbox">
                          Art & Design
                          <input
                            class="form--checkbox"
                            id="field_17Art &amp; Design"
                            type="checkbox"
                            name="field[17][]"
                            value="Art &amp; Design"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="input-column">
                        <label class="container-checkbox">
                          Skiing
                          <input
                            class="form--checkbox"
                            id="field_17Skiing"
                            type="checkbox"
                            name="field[17][]"
                            value="Skiing"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="input-column">
                        <label class="container-checkbox">
                          Wellness
                          <input
                            class="form--checkbox"
                            id="field_17Wellness"
                            type="checkbox"
                            name="field[17][]"
                            value="Wellness"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="input-column">
                        <label class="container-checkbox">
                          Yachting
                          <input
                            class="form--checkbox"
                            id="field_17Yachting"
                            type="checkbox"
                            name="field[17][]"
                            value="Yachting"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="input-column">
                        <label class="container-checkbox">
                          Adventure
                          <input
                            class="form--checkbox"
                            id="field_17Adventure"
                            type="checkbox"
                            name="field[17][]"
                            value="Adventure"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="width:300px;max-width:100%;text-align:center;margin: auto;">
                    <div class="input-row">
                      <div class="input-column" style="padding:0px;">
                        <input
                          class="form--text"
                          type="text"
                          id="joinus-email"
                          name="email"
                          placeholder="Email"
                          :value="$store.state.joinusEmail"
                          required
                        />
                      </div>
                      <div class="input-column" style="padding:0px;">
                        <div class="button-wrapper">
                          <button id="_form_9_submit" class="submit-button" type="submit">Join</button>
                          <!-- <nuxt-link class="cta" to="/thankyou">Join</nuxt-link> -->
                        </div>
                      </div>
                    </div>
                    <div class="_clear-element"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="joinus__close" @click="showPopup">
          <img class="lazyload" data-src="~assets/images/close.png" alt />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    showPopup() {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";

      this.$store.commit("SET_JOINUSPOPUP", false);
    },
  },
};
</script>
