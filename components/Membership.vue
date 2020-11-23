<template>
  <section class="membership" >
      <div class="membership__img_area">
        <div class="membership__img" :style="{ backgroundImage: `url(${data.image})` }">
          <span role="img" :arial-label="data.imageTitle"></span>
        </div>  
      </div>
      
      <div class="membership__content">
        <div class="membership__content__description">
          <div class="content_parent">
            <div class="content">
              <h5>{{data.title}}</h5>
              <ul>
                <li v-for="(item, key) in data.shipList" :key="key"><span>{{item}}</span></li>
              </ul>
              <p class="membership__content__description__sub_title">{{data.subTitle}}</p>
              <a href="../become-a-member">JOIN NOW</a>
            </div>
          </div>
        </div>
        <div class="membership__content__overlay"></div>
      </div>
  </section>
</template>

<script>

export default {
  props: {
    data:Object
  },
  computed: {

  }  
};
</script>
