<template>
  <v-data-table
    class="text--primary justify-space-between"
    v-bind:headers="data.headers"
    v-bind:items="data.data"
    item-key="name"
    :items-per-page="12"
    hide-default-footer
    hide-default-header
  >
    <template #header>
      <thead class="thead--spesification">
        <tr>
          <td class="text-center text-sm-left" colspan="2">TABLE of SPESIFICATION</td>
        </tr>
      </thead>
    </template>
    <template #body="{ items }">
      <tbody>
        <tr class="hidden-xs-only" v-for="item in items" :key="item.name">
          <td class="montserrat text-uppercase font-weight-bold py-5">
            {{item.name}}
          </td>
          <td class="pt-sans py-5" v-html="item.value">
          </td>
        </tr>
        <tr class="hidden-sm-and-up" v-for="item in items" :key="item.name">
          <td colspan="2" class="py-5">
            <div class="montserrat text-uppercase font-weight-bold pb-5"> {{item.name}} </div>
            <div class="pt-sans" v-html="item.value"></div>
          </td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'Tables',

  data () {
    return {
      data: {
        "headers": [
          {
            text: "Table Of Spesification",
            align: "start",
            value: "name",
          },
          {
            text: "",
            value: "value",
            sortable: false
          }
        ],
        "data": [
          {
            name: "Build",
            value: "Bira, Sulawesi, Indonesia in 20019"
          },
          {
            name: "Type",
            value: "Traditional gaft-rigged timber phinisi (teak wood)"
          },
          {
            name: "Length (Total)",
            value: "45 m /147 ft"
          },
          {
            name: "Beam",
            value: "10.5 m / 34 ft"
          },
          {
            name: "Draft",
            value: "3.52 m / 11.5 ft"
          },
          {
            name: "no. of cabinS | GUESTS | crew",
            value: "6+1 | 14 | 12"
          },
          {
            name: "cruising speed",
            value: "17 knot (max.) / 12 knot (avg.) / 9 knot (min.)"
          },
          {
            name: "Engine model",
            value: "Yanmar marine diesel 6AYM-WST 659HP/1900RPM (sea water cooling) 5 blade bronze propellers"
          },
          {
            name: "Navigation",
            value: "Garmin Aquamap 1252"
          },
          {
            name: "life raft",
            value: "type YZF-A capacity of 25 persons"
          },
          {
            name: "Watersports Equipment",
            value: "6 Paddle board,<br/>6 Sea Kayaks,<br/>Fishing Gear,<br/>Complete diving equipment,<br/>Complete Snorkeling equipment"
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
.theme--light.v-data-table {
  @media #{map-get($display-breakpoints, ('sm-and-up'))} {
    background-color: transparent !important;
  }
  padding-top: 113px !important;
  padding-bottom: 68px !important;
}

::v-deep .v-data-table__wrapper > table > thead > tr > td  {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 14px !important;
  line-height: 16px;
  letter-spacing: 3px !important;
  font-weight: 700 !important;
  padding-bottom: 56px !important;
}

.montserrat {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 11px !important;
  line-height: 13px;
  letter-spacing: 3px !important;
  white-space: nowrap !important;
  width: 50% !important;
}

.pt-sans {
  font-family: 'PT Sans', sans-serif !important;
  font-size: 16px !important;
  line-height: 21px !important;
  color: #5A5A5A !important;
}
</style>