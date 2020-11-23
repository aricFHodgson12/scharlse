<template>
  <main id="destinations">
    <div class="container u-p-t-xxl">
      <div class="flex flex--middle u-center u-height-100">
        <div class="flex__cell">
          <div
            class="font-26 u-m-b destination-content"
            v-html="page.content"
          />

          <div>
            <a class="cta" href="/our-service">Discover our process</a>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <a class="cta" href="/customize-a-journey">CUSTOMIZE A JOURNEY</a>
          </div>
        </div>
      </div>
    </div>

    <section class="u-p-t-l">
      <div
        v-for="(item, key) in page.items.filter(i => i.image)"
        :key="item.id || key"
        :style="{ flexDirection: key & 1 ? 'row-reverse' : '' }"
        class="flex destination-row flex--middle u-center u-height-100"
      >
        <div class="u-half">
          <div class="u-overlay">
            <img
              class="lazyload fullblock"
              :src="item.image.id | image('background')"
              :alt="item.image.alt || item.title"
            />
          </div>
        </div>

        <div class="u-half destination-content">
          <h2 class="u-text">{{ item.title }}</h2>

          <p
            class="u-text"
            v-html="item.content"
            style="white-space: break-spaces"
          />

          <p class="u-text">
            <a class="font-roboto u-text-underline" href="/customize-a-journey">
              CUSTOMIZE THIS JOURNEY
            </a>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
#destinations .font-26 h1 {
  margin-bottom: 8rem;
}
</style>
