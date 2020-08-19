<template>
  <div :class="sectionPading">
    <v-container tag="section">
      <tHeading
        class="mx-auto"
        caption-justify="center"
        caption-class="__caption"
        heading-justify="center"
        heading-class="text-center"
        text-justify="center"
        text-class="text-center"
        v-bind:data="{
          caption: data.caption,
          heading: data.heading,
          text: data.text,
          list: data.list
        }"
      />
        <tLargeImage
          class="mt-8"
          static-image
          :data="data.image"
        />
    </v-container>

    <v-row class="container mx-auto my-sm-16" align="center" justify="center">
      <tmg-icon-divider />
    </v-row>

    <v-container tag="section" class="my-16">
      <t-card-text-image
        :data="data.card_text_image[0]"
        v-bind:img-aspect-ratio="undefined"
        static-image
      />
    </v-container>

    <v-container
      tag="section"
      class="my-16"
    >
      <t-card-text-image
        :data="data.card_text_image[1]"
        v-bind:img-aspect-ratio="undefined"
        reverse
        static-image
      />
    </v-container>
  </div>
</template>

<script>
import TmgIconDivider from '@/assets/images/svg/divider_tmg.svg?inline';
const components = {
  TmgIconDivider,
  tHeading: () => import('@/components/base/Heading.vue'),
  tLargeImage: () => import('@/components/base/LargeImage.vue'),
  tCardTextImage: () => import('@/components/base/CardTextImage.vue'),
}
export default {
  layout: 'main',

  components,

  data () {
    return {
      isReverse: true
    }
  },

  async asyncData ({ $content, params }) {
    const data = await $content('the-cabins', params.slug).fetch()
    return { data }
  },

  computed: {
    sectionPading () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'px-7';
        case 'sm': return 'px-4';
        default: break;
      }
    },
  },

  methods: {
    toogleReverse () {
      this.isReverse = !this.isReverse
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #208cb2;
::v-deep .__caption {
  color: $primary !important;
}
</style>