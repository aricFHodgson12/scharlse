import Vue from "vue";
import { startCase } from "lodash";

//
// Mixins
//
Vue.mixin({
  methods: {
    getHead() {
      let title = this.$route.name;

      if (title == "index" || !title) title = "The Luxury Travel Experts";

      // Capitalize title
      title = startCase(title);

      return { title };
    }
  }
});

//
// Filters
//
Vue.filter("capitalize", str => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
});

// Vue.filter("uppercase", str => {
//   if (!str) return "";
//   return str.toUpperCase();
// });

// Vue.filter("lowercase", str => {
//   if (!str) return "";
//   return str.toLowerCase();
// });

Vue.filter("slugify", str => {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
});

Vue.filter("image", (id, filter = "square") => {
  if (!id) return "";
  return `${process.env.BASE_URL}/api/v2/image/${id}/${filter}`;
});
