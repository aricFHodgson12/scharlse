<template>
  <div class="card u-zoom">
    <nuxt-link prefetch :to="to">
      <div :class="`u-${size}`">
        <img
          class="u-zoom__item"
          v-if="imageId"
          :src="imageId | image(`${imageSize}`)"
          :alt="title"
          width="100%"
          height="100%"
        />
      </div>

      <h5 class="h4" v-if="!magazinePage">{{ title }}</h5>

      <h4 v-if="magazinePage">{{ title }}</h4>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    imageId: {
      type: [String, Number]
    },
    title: {
      type: String,
      default: ""
    },
    imageSize: {
      type: String,
      default: "square_medium"
    },
    to: {
      type: [String, Object],
      default: "/"
    },
    size: {
      type: String,
      default: "square"
    },
    magazinePage: {
      type: Boolean,
      default: false
    }
  }
};
</script>
