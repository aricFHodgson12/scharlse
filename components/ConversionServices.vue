<template>
  <section v-scroll-reveal>
    <div class="container">
      <div class="flex">
        <div
          v-for="(item, key) in services.filter(s => s.mainImage)"
          :key="item.id || key"
          class="flex__cell u-third u-p-b"
        >
          <img
            v-if="item.mainImage"
            class="lazyload height-m"
            :data-src="item.mainImage.id | image('services')"
            :alt="item.alt || item.mainImage.alt"
          />

          <div class="u-p-s u-center">
            <h4>{{ item.title }}</h4>

            <p>{{ item.content }}</p>
          </div>
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
      services: state => state.services.services
    })
  }
};
</script>
