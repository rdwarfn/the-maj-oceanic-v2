<template>
  <div id="rates-and-schedule">
    <v-container tag="section" class="px-6 px-md-0 py-0">
      <div class="mx-auto" style="max-width: 790px">
        <div
          class="heading mx-auto text-h4 text-sm-h3 text-center font-weight-bold mb-10"
          v-html="data.intro.heading"
        />
        <div
          class="text-center text-sm-justify mb-10"
          v-html="data.intro.description"
        />

        <v-data-table
          :items-per-page="$vuetify.breakpoint.mobile ? itemsPerPage : -1"
          :headers="data.table_full_chapter.headers"
          :items="data.table_full_chapter.data"
          style="background: transparent"
          class="elevation-0 mt-5 text--primary text-center"
          :footer-props="{
            itemsPerPageOptions: [5, 7, 10, -1]
          }"
          item-key="headline"
          hide-default-footer
          hide-default-header
        >
          <template #header="{props: {headers}}">
            <thead>
              <tr>
                <th colspan="3" class="bg-none" />
                <th colspan="2" class="font-weight-bold px-0 px-sm-5 px-md-8 py-sm-2">
                  {{ headers[0].text }}
                </th>
              </tr>
              <tr>
                <th class="hidden-sm-and-up bg-none" colspan="2" />
                <th class="hidden-xs-only bg-none" />
                <th class="hidden-xs-only font-weight-bold">
                  {{ headers[1].text }}
                </th>
                <th class="font-weight-bold py-sm-2" style="width: 15%">
                  {{ headers[2].text }}
                </th>
                <th class="font-weight-bold" style="width: 15%">
                  {{ headers[3].text }}
                </th>
                <th class="font-weight-bold" style="width: 15%">
                  {{ headers[4].text }}
                </th>
              </tr>
            </thead>
          </template>
          <template #body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td colspan="2" class="px-0 hidden-sm-and-up">
                  <div class="text-no-wrap text-left">
                    {{ item.headline }}
                  </div>
                  <div class="text-no-wrap text-left">
                    ({{ item.sailing_area }})
                  </div>
                </td>
                <td class="hidden-xs-only text-left">
                  {{ item.headline }}
                </td>
                <td class="hidden-xs-only text-left">
                  {{ item.sailing_area }}
                </td>
                <td class="px-0">
                  {{ item.minimum_nights }}
                </td>
                <td class="font-price">
                  {{ formatPrice(item.rates_per_night[0].price) }}
                </td>
                <td class="font-price">
                  {{ formatPrice(item.rates_per_night[1].price) }}
                </td>
              </tr>
            </tbody>
          </template>
          <template v-if="$vuetify.breakpoint.mobile" #footer="{ props }">
            <v-btn
              class="mt-7"
              tile
              depressed
              outlined
              color="primary"
              @click.prevent="togglePage(props)"
            >
              {{ footerButton }}
            </v-btn>
          </template>
        </v-data-table>

        <div class="my-10 font-weight-regular">
          <v-row no-gutters>
            <v-col cols="5" sm="3">
              Full Ship Capacity
            </v-col>
            <v-col cols="auto" class="px-5">
              :
            </v-col>
            <v-col>{{ data.table_full_chapter.ship_capacity }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="5" sm="3">
              Extra Guest
            </v-col>
            <v-col cols="auto" class="px-5">
              :
            </v-col>
            <v-col>{{ data.table_full_chapter.extra_guest }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="5" sm="3">
              Relocation Fee
            </v-col>
            <v-col cols="auto" class="px-5">
              :
            </v-col>
            <v-col>{{ data.table_full_chapter.relocation_fee }}</v-col>
          </v-row>
        </div>

        <div>
          <template v-for="(item, idx) in data.charter_rate_includes">
            <div :key="idx">
              <div v-html="item.name" />
              <ul class="list pl-3">
                <li v-for="(d, i) of item.data" :key="i">
                  {{ d.text }}
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'main',

  meta: {
    breadcrumbs: [
      {
        to: '/',
        replace: true,
        text: 'Home'
      },
      {
        to: '/rates-and-schedule',
        text: 'Rates & Schedule'
      }
    ]
  },

  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/pages/rates-and-schedule')
    return {
      data
    }
  },

  // head() {
  //   return {
  //     title: this.data.header && this.data.header.title || 'Rates & Schedule - The MAJ Oceanic',
  //     meta: [
  //       // meta primary
  //       {
  //         hid: this.meta_primary.title.hid,
  //         name: this.meta_primary.title.name,
  //         content: this.meta_primary.title.content
  //       },
  //       {
  //         hid: this.meta_primary.description.hid,
  //         name: this.meta_primary.description.name,
  //         content: this.meta_primary.description.content
  //       },
  //       {
  //         hid: this.meta_primary.keywords.hid,
  //         name: this.meta_primary.keywords.name,
  //         content: this.meta_primary.keywords.content
  //       },
  //       // meta faceboook
  //       {
  //         hid: 'article:publisher',
  //         name: 'article:publisher',
  //         property: 'article:publisher',
  //         content: 'https://www.facebook.com/themajoceanic/',
  //       },
  //       {
  //         hid: 'article:modified_time',
  //         property: 'article:modified_time',
  //         content: this.data.updatedAt
  //       },
  //       {
  //         hid: this.meta_facebook.url.hid,
  //         name: this.meta_facebook.url.name,
  //         property: this.meta_facebook.url.property,
  //         content: this.meta_facebook.url.content
  //       },
  //       {
  //         hid: this.meta_facebook.title.hid,
  //         name: this.meta_facebook.title.name,
  //         property: this.meta_facebook.title.property,
  //         content: this.meta_facebook.title.content
  //       },
  //       {
  //         hid: this.meta_facebook.description.hid,
  //         name: this.meta_facebook.description.name,
  //         property: this.meta_facebook.description.property,
  //         content: this.meta_facebook.description.content
  //       },
  //       {
  //         hid: this.meta_facebook.image.hid,
  //         name: this.meta_facebook.image.name,
  //         property: this.meta_facebook.image.property,
  //         content: this.meta_facebook.image.content
  //       },
  //       // meta twitter
  //       {
  //         hid: 'twitter:card',
  //         name: 'twitter:card',
  //         property: 'twitter:card',
  //         content: 'summary_large_image'
  //       },
  //       {
  //         hid: 'twitter:creator',
  //         name: 'twitter:creator',
  //         property: 'twitter:creator',
  //         content: '@themajoceanic'
  //       },
  //       {
  //         hid: 'twitter:site',
  //         name: 'twitter:site',
  //         property: 'twitter:site',
  //         content: '@themajoceanic'
  //       },
  //       {
  //         hid: this.meta_twitter.url.hid,
  //         name: this.meta_twitter.url.name,
  //         property: this.meta_twitter.url.property,
  //         content: this.meta_twitter.url.content
  //       },
  //       {
  //         hid: this.meta_twitter.title.hid,
  //         name: this.meta_twitter.title.name,
  //         property: this.meta_twitter.title.property,
  //         content: this.meta_twitter.title.content
  //       },
  //       {
  //         hid: this.meta_twitter.description.hid,
  //         name: this.meta_twitter.description.name,
  //         property: this.meta_twitter.description.property,
  //         content: this.meta_twitter.description.content
  //       },
  //       {
  //         hid: this.meta_twitter.image.hid,
  //         name: this.meta_twitter.image.name,
  //         property: this.meta_twitter.image.property,
  //         content: this.meta_twitter.image.content
  //       }
  //     ],
  //   }
  // },

  data () {
    return {
      itemsPerPage: 7,
      footerButton: 'View More'
    }
  },

  computed: {
    meta_primary () {
      return this.data.header && this.data.header.seo_meta_tag.meta_primary
    },
    meta_facebook () {
      return this.data.header && this.data.header.seo_meta_tag.meta_facebook
    },
    meta_twitter () {
      return this.data.header && this.data.header.seo_meta_tag.meta_twitter
    }
  },

  methods: {
    formatPrice (params) {
      if (!params) { return null }
      const price = new Intl.NumberFormat('en', {
        maximumSignificantDigits: 3
      }).format(params)
      return price
    },
    togglePage (params) {
      if (this.itemsPerPage === params.itemsPerPageOptions[3]) {
        this.itemsPerPage = params.itemsPerPageOptions[1]
        this.footerButton = 'View More'
      } else {
        this.itemsPerPage = params.itemsPerPageOptions[3]
        this.footerButton = 'View Less'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
.heading {
  margin-top: 34px;
  margin-bottom: 25px;
}
.v-application--is-ltr .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  text-align: center !important;
}
::v-deep .v-data-table > .v-data-table__wrapper > table  {
  border-spacing: 1.5px !important;
}
.font-price {
  padding: 0 !important;
  font-weight: 600 !important;
  font-feature-settings: 'pnum' on, 'lnum' on !important;
}

#rates-and-schedule {
  @include poly-fluid-sizing ('padding-top', (375px:34px, 768px:67px, 1440px:93px));
  @include poly-fluid-sizing ('padding-bottom', (375px:75px, 768px:80px, 1440px:100px));
}

.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: unset !important;
}
::v-deep .v-data-table {
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    .v-data-table__wrapper > table > thead > tr > th:not(.bg-none) {
      font-size: 16px !important;
      background: #208CB2;
      color: white;
    }
    .v-data-table__wrapper > table > tbody > tr > td {
      font-size: 16px !important;
    }
  }
  @media #{map-get($display-breakpoints, 'xs-only')} {
    .v-data-table__wrapper > table > thead > tr > th:not(.bg-none) {
      font-size: 12px !important;
      background: #208CB2;
      color: white;
    }
    .v-data-footer {
      padding: 0 !important;
      justify-content: flex-start;
      &__select {
        margin: 0 !important;
      }
      &__pagination {
        margin: 0 13px;
      }
    }
  }
}

.list {
  list-style-type: disc !important;
}
</style>
