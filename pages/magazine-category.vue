<template>
  <main class="u-p-t-xl">
    <div class="container">
      <h2 class="h1">VOYAGE MAGAZINE</h2>
      <h4>SUBLIME LUXURY LIVING BY SIENNA CHARLES</h4>
    </div>

    <Frequently />
  </main>
</template>

<script>
export default {
  components: {
    Frequently: () => import("@/components/Frequently.vue")
  },
};
</script>