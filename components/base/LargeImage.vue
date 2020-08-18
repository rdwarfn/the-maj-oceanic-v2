<template>
  <v-row align="center" justify="center">
    <v-img
      :src="staticImage ? require(`~/assets/images/${data}`) : data"
      :lazy-src="staticImage ? require(`~/assets/images/${data}`) : data"
      :aspect-ratio="16/9"
      max-height="461px"
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
  </v-row>
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
