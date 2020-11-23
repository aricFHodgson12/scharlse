<template>
  <main>
    <section class="u-full-height u-p-t-xl" :style="{ backgroundImage: `url(${contactBg})` }">
      <div class="container container--s">
        <h1 class="u-center">Contact</h1>

        <div class="form" id="contact">
          <div class="klaviyo-form-YsvTwZ"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import contactBg from "@/assets/images/contact-bg.jpg";

export default {
  head() {
    return {
      // title: this.page.seoTitle || this.page.title,
      title: 'Contact Us | Sienna Charles Luxury Travel Expert',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Have an inquiry? Contact Sienna Charles"
        }
      ]
    };
  },
  data() {
    return { contactBg, option: ["Vendor", "Press", "Employment", "General"] };
  },
};
</script>

<style lang="scss">
    #contact {
      .klaviyo-form-YsvTwZ {
        font-size: 2.5rem;
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
        //Dropdown
        .bwefac.bwefac {
          background-color: transparent;
          border: none;
          border-bottom: solid 1px #FFF;
          padding: 0;
          input {
            border-bottom: none;
            padding: 0;
            &:focus {
              border: none;
              outline: none;
            }
          }
        }
        //Dropdown active state
        .eoFBIC.eoFBIC {
          background-color: transparent;
          border: none;
          padding: 0;
        }
        .iDZmBq.iDZmBq,.hIKwle.hIKwle {
          font-family: "Cormorant Garamond", sans-serif;
        }
        .iURvI.iURvI {
          color: #FFF !important;
        }
        .dMHKxR.dMHKxR {
          background-color: transparent;
        }
        //Phone Input
        .cDkZaI.cDkZaI.cDkZaI.cDkZaI.cDkZaI.cDkZaI {
          background-color: transparent;
          border: none;
        }
        .eQTeba.eQTeba.eQTeba.eQTeba.eQTeba.eQTeba {
          background-color: transparent;
          border: none;
          border-bottom: solid 1px #FFF;
        }
        .ipGUng.ipGUng.ipGUng.ipGUng.ipGUng.ipGUng {
          border-bottom: none;
        }
        input {
          background: transparent;
          border: none;
          border-bottom: solid 1px #FFF;
          color: #fff;
          font-family: "Cormorant Garamond", sans-serif;
          padding: 0;
          &:focus {
            box-shadow: none;
            outline: none;
          }
          &:last-child {
            &:first-child {
              border: solid 1px red;
              height: 20rem;
              padding: 6px;
            }
          }
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
        box-shadow: none;
      }
      .hAkfYz.hAkfYz {
        background: none;
        border: none;
        box-shadow: none;
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
      .kgtZbf.kgtZbf {
          &:nth-child(5) {
            input {
              border: solid 1px #FFF;
              padding: 6px;
            }
          }
        }
    }
</style>
