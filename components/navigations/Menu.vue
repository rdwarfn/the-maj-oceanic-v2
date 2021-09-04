<template>
  <VRow
    v-if="items && items.length"
    justify="space-around"
    class="flex-nowrap"
    align="center"
    no-gutters
  >
    <VCol
      v-for="item in items.slice(0, 3)"
      :key="item.id"
      cols="auto"
      class="text-center"
    >
      <VMenu
        background-color="transparent"
        close-on-click
        bottom
        offset-y
        open-on-hover
        tile
        :rounded="false"
        auto
        min-width="190"
      >
        <template #activator="{ on, attrs }">
          <VBtn
            text
            tile
            nuxt
            :to="item.to"
            :dark="isIntersecting"
            draggable="false"
            class="btn-s font-md-12"
            v-bind="attrs"
            v-on="on"
          >
            {{ item.title }}
          </VBtn>
        </template>

        <VList
          v-if="item.children.length"
          :dark="isIntersecting"
          class="py-0"
        >
          <template v-for="(child, j) in item.children">
            <VListItem
              :key="child.id"
              :to="child.to"
              dense
              nuxt
              tile
              style="letter-spacing: 2px"
            >
              <VListItemTitle class="text-center text-uppercase font-weight-bold font-md-12">
                {{ child.title }}
              </VListItemTitle>
            </VListItem>

            <VDivider
              v-if="j !== item.children.length -1"
              :key="'divider'+j"
              class="mx-3"
            />
          </template>
        </VList>
      </VMenu>
    </VCol>

    <VSpacer v-show="!isIntersecting" />

    <VCol
      v-show="!isIntersecting"
      cols="auto"
      class="text-center"
      :class="{ intersec: !isIntersecting }"
    >
      <VBtn
        class="mx-auto"
        to="/"
        replace
        exact
        text
        tile
        nuxt
      >
        <img
          class="mx-auto img-black"
          draggable="false"
          :src="require('~/assets/images/svg/tmo_main_logo_black.svg?data')"
          alt="logo-black"
          width="auto"
          height="auto"
        >
      </VBtn>
    </VCol>

    <VSpacer v-show="!isIntersecting" />

    <VCol
      v-for="item in items.slice(3,)"
      :key="item.id"
      cols="auto"
      class="text-center"
    >
      <VMenu
        background-color="transparent"
        close-on-click
        :rounded="false"
        open-on-hover
        min-width="190"
        offset-y
        bottom
        tile
        auto
      >
        <template #activator="{ on, attrs }">
          <VBtn
            text
            tile
            nuxt
            :to="item.to"
            :dark="isIntersecting"
            class="font-md-12"
            v-bind="attrs"
            v-on="{on}"
          >
            {{ item.title }}
          </VBtn>
        </template>

        <VList
          v-if="item.children.length"
          :dark="isIntersecting"
          color="transparent"
          min-width="190"
          subheader
          dense
          flat
          tile
          auto
        >
          <template v-for="(child, j) in item.children">
            <VListItem
              :key="child.id"
              :to="child.to"
              style="letter-spacing: 2px"
              dense
              nuxt
              tile
            >
              <VListItemTitle class="text-uppercase font-weight-bold font-md-12">
                {{ child.title }}
              </VListItemTitle>
            </VListItem>

            <VDivider
              v-if="j !== item.children.length -1"
              :key="'divider'+j"
              class="mx-3"
            />
          </template>
        </VList>
      </VMenu>
    </VCol>
  </VRow>
</template>

<script>
import { getNavigation } from '~/services/api'

export default {
  props: {
    isIntersecting: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      items: []
    }
  },

  mounted () {
    getNavigation()
      .then((ress) => {
        this.items = ress
      })
  }
}
</script>

<style lang="scss" scoped>
::v-deep.v-btn:not(.v-btn--round).v-size--default.btn--inquire {
  @include poly-fluid-sizing ('max-width', (960px:120px, 1440px:141px));
}

@media (max-width: 1362px) {
  .font-md-12 {
    font-size: .75rem !important;
  }
}

img.img-black {
  min-width: 10.636875rem !important;
  max-width: 10.636875rem !important;
}

.v-menu__content {
  box-shadow: unset !important;
  transform: translateX(-25px) !important;
}

.v-list {
  &.theme--dark {
    margin-top: .25rem !important;
    background: rgba(47, 46, 46, 0.6) !important;
  }
  &.theme--light {
    margin-top: 1.25rem !important;
    background: rgba(212, 212, 212, 0.6) !important;
  }
}

::v-deep .v-list-item__title, .v-list-group__items {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 600 !important;
  font-size: .8125rem !important;
}
</style>
