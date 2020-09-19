<template>
  <v-container tag="section" class="d-flex flex-column justify-center px-0 px-sm-6 px-md-0 the-teams">
    <!-- <div> -->
      <div class="__caption text-no-wrap text-center text-h5 mb-3">
        {{ data.caption }}
      </div>
      <div class="__heading text-center">
        {{ data.heading }}
      </div>
      <base-carousel-three
        v-bind:data="data.data"
        text-data="status"
        heading-class="ct--heading"
        image-class="ct--image"
        hide-pagination
        static-image
      />
    <!-- </div> -->
  </v-container>
</template>

<script>
import BaseCarouselThree from '@/components/base/BaseCarouselThree.vue';
export default {
  props: {
    data: {
      caption: { type: String },
      heading: { type: String },
      data: { type: Array }
    }
  },
  components: {
    BaseCarouselThree
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
$primary: #208cb2;
$secondary: #EFE1DC;
::v-deep .__caption {
  color: $primary !important;
}
.__heading {
  font-family: 'Domine', serif !important;
  font-weight: 600;
  line-height: 41px;
  @include poly-fluid-sizing ('font-size', (375px:20px, 768px:34px));
  @include poly-fluid-sizing ('margin-bottom', (375px:20px, 768px:40px, 960px:90px));
}
::v-deep .ct--heading {
  margin-bottom: 10px;
}
::v-deep .ct--image {
  @include poly-fluid-sizing ('width', (375px:300px, 768px:200px, 960px:350px));
}
::v-deep .swiper-slide {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    width: 300px !important;
  }
  @media #{map-get($display-breakpoints, 'sm-only')} {
    width: 200px !important;
  }
  // @media #{map-get($display-breakpoints, 'md-and-up')} {
  //   width: 350px !important;
  // }
}
.the-teams {
  place-items: center;
  @include poly-fluid-sizing ('min-height', (375px:598px, 768px:450px, 1440px:711px));
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    margin-top: 80px;
  }
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    margin-top: 140px;
  }
}
</style>
