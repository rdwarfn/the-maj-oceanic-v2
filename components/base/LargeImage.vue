<template>
  <v-row no-gutters class="container px-0" align="center" justify="center">
    <client-only>
      <v-img
        :src="staticImage ? require(`~/assets/images/${data}`) : data"
        :lazy-src="staticImage ? require(`~/assets/images/${data}`) : data"
        :aspect-ratio="16/9"
        max-height="347"
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
    </client-only>
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
