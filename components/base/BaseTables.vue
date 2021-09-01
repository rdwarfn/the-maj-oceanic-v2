<template>
  <v-data-table
    class="text--primary justify-space-between px-6 px-md-0"
    :headers="data.headers"
    :items="data.data"
    item-key="name"
    :items-per-page="12"
    hide-default-footer
    hide-default-header
  >
    <template #header>
      <thead>
        <tr>
          <td class="text-center text-sm-left" colspan="2">
            TABLE of SPECIFICATION
          </td>
        </tr>
      </thead>
    </template>
    <template #body="{ items }">
      <tbody>
        <tr v-for="(item, index) in items" :key="index" class="hidden-xs-only">
          <td class="px-0 montserrat text-uppercase font-weight-bold py-5">
            {{ item.name }}
          </td>
          <td class="px-0 pt-sans py-5" v-html="item.value" />
        </tr>
        <tr v-for="(item, index) in items" :key="('children-' + index)" class="hidden-sm-and-up">
          <td colspan="2" class="px-0 py-5">
            <div class="montserrat text-uppercase font-weight-bold pb-5">
              {{ item.name }}
            </div>
            <div class="pt-sans" v-html="item.value" />
          </td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/variables.scss";
.theme--light.v-data-table {
  background-color: transparent !important;
  // @media #{map-get($display-breakpoints, ('xs-and-up'))} {
  // }
  padding-top: 113px !important;
  padding-bottom: 68px !important;
}

.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: unset !important;
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
