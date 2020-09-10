<template>
  <v-data-table
    class="text--primary justify-space-between"
    v-bind:headers="data.headers"
    v-bind:items="data.data"
    item-key="name"
    :items-per-page="12"
  />
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
            value: ""
          },
          {
            name: "Hull",
            value: ""
          },
          {
            name: "Cabins | guests | no of crew",
            value: "7| |"
          },
          {
            name: "Max. cruising speed",
            value: "12 knots"
          },
          {
            name: "Engine model",
            value: "Yanmar marine diesel 6AYM-WST 659HP/1900RPM (sea water cooling) 5 blade bronze propellers"
          },
          {
            name: "Generator",
            value: "Yanmar marine diesel 6AYM-WST 659HP/1900RPM (sea water cooling) 5 blade bronze propellers"
          },
          {
            name: "Navigation",
            value: "Garmin Aquamap 1252"
          },
          {
            name: "Sports Area / Platform",
            value: "35 m2"
          },
          {
            name: "Watersports Equipment",
            value: "6 Paddle board,\n6 Sea Kayaks,\nFishing Gear,\nComplete diving equipment,\nComplete Snorkeling equipment"
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>