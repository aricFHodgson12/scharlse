<template>
  <section v-scroll-reveal>
    <div class="container u-p-b">
      <div class="flex flex--xl">
        <div
          v-for="(item, key) in items"
          :key="item.id || key"
          class="flex__cell u-half u-p-b"
        >
          <div class="u-rectangle">
            <img
              v-if="item.image"
              class="lazyload"
              :data-src="item.image.id | image('page_items')"
              :alt="item.image.alt"
            />
          </div>

          <h2 class="u-p-t-s u-mobile-t-center">{{ item.title }}</h2>

          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
