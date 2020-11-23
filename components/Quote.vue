<template>
  <section class="quote" v-scroll-reveal>
    <div class="container">
      <h3 v-if="templateContent.quote">
        {{ templateContent.quote.value }}
      </h3>

      <h5 class="line-title">
        <span v-if="templateContent.author">
          {{ templateContent.author.value }}
        </span>
      </h5>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      page: state => state.pages.page
    }),

    templateContent() {
      return this.page.templateContent || {};
    }
  }
};
</script>
