<template>
  <div id="rates-and-schedule">
    <v-container tag="section" class="px-6 px-md-0 py-0">
      <div class="mx-auto" style="max-width: 790px">
        <div class="heading mx-auto text-h4 text-sm-h3 text-center font-weight-bold mb-10">Rates & Schedule</div>
        <p class="text-center text-sm-justify mb-10">
          The Maj Oceanic will sail all year round to destinations depending on seasons and winds. Typically, The Maj Oceanic sails to Komodo from May to October, the Banda / Spice Islands in October/November and in April/May and Raja Ampat from Mid-November to April. Besides, we offer tailor-made routes and voyages in remote locations, designed especially with specific places or activities.
        </p>

        <v-data-table
          :items-per-page="isMobile ? itemsPerPage : -1"
          :headers="tables.headers"
          :items="tables.schedules"
          style="background: transparent"
          class="elevation-0 mt-5 text--primary text-center"
          hide-default-header
          hide-default-footer
          :footer-props="{
            itemsPerPageOptions: [5, 7, 10, -1]
          }"
        >
          <template v-slot:header>
            <thead>
              <tr>
                <td colspan="3" class="bg-none"></td>
                <td colspan="2" class="font-weight-bold px-0 px-sm-5 px-md-8 py-sm-2">Full Charter Rates per Night (USD)</td>
              </tr>
              <tr>
                <td class="hidden-sm-and-up bg-none" colspan="2"></td>
                <td class="hidden-xs-only bg-none"></td>
                <td class="hidden-xs-only font-weight-bold">Sailing Area</td>
                <td class="font-weight-bold py-sm-2" style="width: 15%">Minimum Nights</td>
                <td class="font-weight-bold" style="width: 15%">2020</td>
                <td class="font-weight-bold" style="width: 15%">2021</td>
              </tr>
            </thead>
          </template>
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td colspan="2" class="px-0 hidden-sm-and-up">
                  <div class="text-no-wrap text-left">{{ item.headline }}</div>
                  <div class="text-no-wrap text-left">({{ item.sailing_area }})</div>
                </td>
                <td class="hidden-xs-only text-left"> {{ item.headline }} </td>
                <td class="hidden-xs-only text-left"> {{ item.sailing_area }} </td>
                <td class="px-0"> {{ item.minimum_nights }} </td>
                <td class="font-price"> {{ formatPrice(item.rates_per_night[0].price) }} </td>
                <td class="font-price"> {{ formatPrice(item.rates_per_night[1].price) }} </td>
              </tr>
            </tbody>
          </template>
          <template v-if="isMobile" v-slot:footer="{ props }">
            <v-btn class="mt-7" tile depressed outlined color="primary" @click="togglePage($event, props)">
              {{footerButton}}
            </v-btn>
          </template>
        </v-data-table>

        <div class="my-10 font-weight-regular">
          <v-row no-gutters>
            <v-col cols="5" sm="3">Full Ship Capacity</v-col>
            <v-col cols="auto" class="px-5">:</v-col>
            <v-col>6 +1 Cabins, 14 passengers</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="5" sm="3">Extra Guest</v-col>
            <v-col cols="auto" class="px-5">:</v-col>
            <v-col>Adult + 500 USD per night / Children up to 12 Y.O. + 350 USD per night</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="5" sm="3">Relocation Fee</v-col>
            <v-col cols="auto" class="px-5">:</v-col>
            <v-col>2000 USD per day</v-col>
          </v-row>
        </div>

        <div>
          <div class="font-weight-bold mb-5">Full Ship Charter Rates include:</div>
          <ul class="list pl-3">
            <li v-for="(d, i) of list_first" v-bind:key="i"> {{d}} </li>
          </ul>

          <div class="mt-5 mb-1">Water sports</div>
          <ul class="list pl-3">
            <li v-for="(d, i) of list_second" v-bind:key="i"> {{d}} </li>
          </ul>

          <div class="mt-5 mb-1">Tours and Fees</div>
          <ul class="list pl-3">
            <li v-for="(d, i) of list_three" v-bind:key="i"> {{d}} </li>
          </ul>

          <div class="mt-5 mb-1">Our package does not include:</div>
          <ul class="list pl-3">
            <li v-for="(d, i) of list_four" v-bind:key="i"> {{d}} </li>
          </ul>

          <div class="font-weight-bold mt-10 mb-4">Payment Terms and Conditions</div>
          <ul class="list pl-3">
            <li v-for="(d, i) of [
              '50% deposit is required to confirm the charter',
              'Full payment required 90 days before your departure'
            ]" v-bind:key="i"> {{d}} </li>
          </ul>

          <div class="font-weight-bold mt-10 mb-4">Cancellation Policy</div>
          <ul class="list pl-3">
            <li v-for="(d, i) of [
              '60 days or more prior to departure the first payment (Deposit of 50%) will be forfeited.',
              'Less than 60 days prior to departure 100% of the total payment will be forfeited.'
            ]" v-bind:key="i"> {{d}} </li>
          </ul>
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

  data () {
    return {
      itemsPerPage: 7,
      footerButton: 'View More',
      sailingArea: ["Raja Ampat", "Komodo", "Spice Islands/Alor"],
      tables: {
        headers: [
          { text: '', value: 'headline' },
          { text: 'Sailing Area', value: 'sailing_area', divider: false },
          { text: 'Minimum Nights', align: 'center', value: 'minimum_nights', width: 125, divider: false },
          { text: '2020', align: 'center', value: 'rates_per_night[0].price', divider: false },
          { text: '2021', align: 'center', value: 'rates_per_night[1].price', divider: false }
        ],
        schedules: [
          {
            id: 1,
            headline: 'Januari 1-10',
            sailing_area: 'Raja Ampat',
            minimum_nights: 6,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9500}]
          },
          {
            id: 2,
            headline: 'January 11–31',
            sailing_area: 'Raja Ampat',
            minimum_nights: 5,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9000}]
          },
          {
            id: 3,
            headline: 'February',
            sailing_area: 'Raja Ampat',
            minimum_nights: 5,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9000}]
          },
          {
            id: 4,
            headline: 'March',
            sailing_area: 'Raja Ampat',
            minimum_nights: 5,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9000}]
          },
          {
            id: 5,
            headline: 'April',
            sailing_area: 'Raja Ampat',
            minimum_nights: 5,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9000}]
          },
          {
            id: 6,
            headline: 'May',
            sailing_area: 'Spice Islands/Alor',
            minimum_nights: 6,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9000}]
          },
          {
            id: 7,
            headline: 'June',
            sailing_area: 'Komodo',
            minimum_nights: 3,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9500}]
          },
          {
            id: 8,
            headline: 'July',
            sailing_area: 'Komodo',
            minimum_nights: 3,
            rates_per_night: [{ year: 2020, price: null }, { year: 2021, price: 9500}]
          },
          {
            id: 9,
            headline: 'August',
            sailing_area: 'Komodo',
            minimum_nights: 3,
            rates_per_night: [{ year: 2020, price: 8500 }, { year: 2021, price: 10000}]
          },
          {
            id: 10,
            headline: 'September',
            sailing_area: 'Komodo',
            minimum_nights: 3,
            rates_per_night: [{ year: 2020, price: 8500 }, { year: 2021, price: 9500}]
          },
          {
            id: 11,
            headline: 'October',
            sailing_area: 'Komodo',
            minimum_nights: 3,
            rates_per_night: [{ year: 2020, price: 8500 }, { year: 2021, price: 9500}]
          },
          {
            id: 12,
            headline: 'November',
            sailing_area: 'Spice Islands/Alor',
            minimum_nights: 6,
            rates_per_night: [{ year: 2020, price: 8500 }, { year: 2021, price: 9500}]
          },
          {
            id: 13,
            headline: 'December 1-20',
            sailing_area: 'Raja Ampat',
            minimum_nights: 5,
            rates_per_night: [{ year: 2020, price: 9000 }, { year: 2021, price: 10500}]
          },
          {
            id: 14,
            headline: 'December 21-31',
            sailing_area: 'Raja Ampat',
            minimum_nights: 6,
            rates_per_night: [{ year: 2020, price: 9500 }, { year: 2021, price: 10500}]
          },
        ]
      },
      list_first: [
        'All gourmet Asian Fusion and Western meals and snacks',
        'Soft drinks, juices, local beer and local wine',
        '30 minutes’ trial massage or beauty treatment per person during the cruise',
        'Personal laundry',
        'Use of equipment on board : gym (exercise bike, weights, yoga mats), board games, movie library',
        'Golf Pack (including clubs, Tee, carpet and 30 complimentary bio-degradable balls)'
      ],
      list_second: [
        'Stand up paddle boards',
        'Sea kayaks',
        'Snorkeling',
        'Diving equipment',
        'Dive instructor',
        'Dive master',
        '2 tenders (2 RIB x 6M x 90HP) outboard'
      ],
      list_three: [
        'Excursions and guide fees',
        'Park entrance fees',
        'Boat clearance fees',
        'Cruise permits during the trip',
        'Fuel charges',
        'Airport transfers'
      ],
      list_four: [
        'International and domestic airfares, excess baggage fees, passports, visas or airport taxes',
        'Alcoholic beverages',
        'Spa treatments',
        'Personal expenses & crew gratuities',
        'Travel and diving insurance.',
        'Unscheduled excursions and drone usage fee'
      ]
    }
  },

  async asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  },

  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xs
    }
  },

  methods: {
    formatPrice (params) {
      if (!params) { return null }
      const price = new Intl.NumberFormat ('en', {
        maximumSignificantDigits: 3
      }).format (params);
      return price
    },
    togglePage (event, params) {
      if (this.itemsPerPage === params.itemsPerPageOptions[3]) {
        this.itemsPerPage = params.itemsPerPageOptions[1]
        this.footerButton = 'View More'
      } else {
        this.itemsPerPage = params.itemsPerPageOptions[3]
        this.footerButton = 'View Less'
      }
      // console.log(params);
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

::v-deep .v-data-table {
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    .v-data-table__wrapper > table > thead > tr > td:not(.bg-none) {
      font-size: 16px !important;
      background: #208CB2;
      color: white;
    }
    .v-data-table__wrapper > table > tbody > tr > td {
      font-size: 16px !important;
    }
  }
  @media #{map-get($display-breakpoints, 'xs-only')} {
    .v-data-table__wrapper > table > thead > tr > td:not(.bg-none) {
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