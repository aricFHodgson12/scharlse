<template>
  <section class="tripflow" v-scroll-reveal>
    <div class="container">
      <div class="flex">
        <div
          v-for="(item, key) in services.filter(s => !s.mainImage)"
          :key="item.id || key"
          class="flex__cell u-third"
        >
          <div class="tripflow__item">
            <div class="tripflow__item__number">{{ key + 1 }}</div>

            <h3>{{ item.title }}</h3>

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
