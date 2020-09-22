<template>
  <v-sheet class="slide-y-transition">
    <v-skeleton-loader tile type="image" v-if="!data">
    </v-skeleton-loader>
    <v-img
      v-else
      :src="staticImage ? require(`~/assets/images/${data}`) : data"
      :lazy-src="staticImage ? require(`~/assets/images/${data}`) : data"
      :aspect-ratio="16/9"
      max-height="460"
    >
      <template v-slot:placeholder>
        <v-row
          align="center"
          justify="center"
          class="fill-height ma-0"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          />
        </v-row>
      </template>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  name: 'largeImage',

  props: {
    data: {
      type: String,
    },
    staticImage: {
      type: Boolean,
      default: false
    }
  }
}
</script>
