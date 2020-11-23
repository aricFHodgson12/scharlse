

<template>
  <section class="services" >
      
      
      <div class="services__content">
        <div class="services__content__description">
          <div class="content_parent">
            <div class="content">
              <h3>{{data.title}}</h3>
              <p class="services__content__description__sub_title">{{data.subTitle}}</p>
              <nuxt-link to="/become-a-member" class="u-desktop" title="Become a member">
                BECOME A MEMBER
              </nuxt-link>                                

            </div>
          </div>
        </div>
        <div class="services__content__overlay"></div>
      </div>
  	  <div class="services__img_area">
    		<div class="services__img u-desktop" v-bind:style="styleObj">
          <span role="img" :arial-label="data.imageTitle"></span>  
        </div>
        <div class="services__img u-mobile" :style="[{ backgroundImage: `url(${data.mobile_image})` }]">
          <span role="img" :arial-label="data.imageTitle"></span>
        </div>  
      </div>
  </section>
</template>

<script>

export default {
  name: 'services_right',
  props: {
    data: Object
  },
  computed: {
    styleObj: function () {
      return {
          'background-image': `url(${this.data.image})`,
          // 'background-size': this.cover ? 'cover': `${this.x} ${this.y}`,
          'background-repeat': 'no-repeat'
      }
    },  
  },
  mounted() {

  }  
};
</script>

