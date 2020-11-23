<template>
  <section class="frequently" v-scroll-reveal>
    <div class="container">
      <h5 class="line-title">
        <span>frequently seen on</span>
      </h5>

      <div class="flex flex--center flex--middle">
        <div
          v-for="(press, key) in presses.slice(0, 6)"
          :key="press.id || key"
          class="flex__cell u-sixth"
        >
          <a :href="press.link" target="_blank">
            <img
              v-if="press.mainImage"
              class="lazyload"
              :data-src="press.mainImage.id | image('presses')"
              :alt="press.mainImage.alt"
              width="100%"
            />
          </a>
        </div>
      </div>

      <div class="flex flex--center flex--middle">
        <div
          v-for="(press, key) in presses.slice(6, 12)"
          :key="press.id || key"
          class="flex__cell u-sixth"
        >
          <a :href="press.link" target="_blank">
            <img
              v-if="press.mainImage"
              class="lazyload"
              :data-src="press.mainImage.id | image('presses')"
              :alt="press.mainImage.alt"
              width="100%"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      presses: state => state.presses.presses
    })
  }
};
</script>
