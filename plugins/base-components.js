import Vue from 'vue';
import tHeading from '~/components/base/Heading.vue';
import tLargeImage from '~/components/base/LargeImage.vue';
import tCarousel from '~/components/base/Carousel.vue';

const components = {
  tHeading,
  tLargeImage,
  tCarousel
}

Object.entries(components)
  .forEach(([
    name,
    component
  ]) => {
    Vue.component(name, component)
  }
);
