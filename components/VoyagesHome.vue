<template>
  <v-sheet class="voyages" tag="section">
    <v-container class="py-0 px-6 px-md-0">
      <v-row align="center" justify="center" class="voyages--headline mx-auto text-center mb-10">
        <div
          class="text-h4 text-sm-h3 mb-8"
          v-text="data.heading"
        />
        <p>
          {{ data.text }}
        </p>
      </v-row>
      <base-tabs
        button-text="learn more"
        v-bind:data="data.tabsData"
        static-image
      >
      </base-tabs>
    </v-container>
  </v-sheet>
</template>

<script>
import baseTabs from '@/components/base/BaseTabs.vue';
export default {
  components: {
    baseTabs
  },

  props: {
    data: {
      heading: { type: String },
      text: { type: String },
      tabsData: { type: Array }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';
.voyages {
  background-color: #EFE1DC !important;
  padding-top: 50px;
  @include poly-fluid-sizing ('padding-bottom', (375px:50px, 1440px:100px));

  &--headline {
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: auto !important;
    }
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      width: 714px !important;
    }
  }
}
::v-deep .v-tabs-items {
  .theme--light.v-card {
    background-color: transparent !important;
  }
}
</style>