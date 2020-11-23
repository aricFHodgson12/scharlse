<template>
  <main id="customize-journey">
    <div class="container u-p-t-xxl">
        <div class="flex flex--middle u-center u-height-100">
          <div class="flex__cell">
                <div class="klaviyo-form-RGE7VK"></div>
                <p>Prefer to speak with us directly? <a class="button" href="/appointment/">Schedule a call here</a></p>
          </div>
        </div>
    </div>
  </main>
</template>

<script>

export default {

    methods: {

      showPopup() {
        document.body.style.overflow = "hidden";
        document.body.style.top = `-${window.scrollY}px`;

        this.$store.commit("SET_CONSULATIONPOPUP", true);
      },
  }
};
</script>

<style lang="scss">
    #customize-journey {
      .klaviyo-form {
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
</style>
