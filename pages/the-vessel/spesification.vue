<template>
  <div id="spesification">
    <v-container tag="section" class="spesific--master px-6 px-md-0">
      <base-card-text-image
        v-bind:data="data.card_text_image[0]"
        static-image
      />
    </v-container>

    <deck-spesification
      v-bind:data="data.decks_spesification"
      static-image
    />

    <!-- <v-container class="my-16 __bg--secondary" fluid>
      <v-container class="px-4 px-md-0 px-lg-0">
        <base-tabs :default="{dataTab}">
            <client-only>
              <v-card max-height="389" color="transparent" flat>
                <v-img
                  v-bind:src="require('~/assets/images/'+ dataTab.image)"
                  v-bind:lazy-src="require('~/assets/images/'+ dataTab.image)"
                  class="transparent mx-auto mt-15"
                  max-height="224"
                  contain
                ></v-img>
                <v-card-text
                  class="text--primary mt-10"
                  v-text="dataTab.text"
                />
              </v-card>
            </client-only>
          </template>
        </base-tabs>
      </v-container>
    </v-container> -->

    <v-container>
      <base-tables />
    </v-container>
  </div>
</template>

<script>
const components = {
  BaseTabs: () => import('@/components/base/BaseTabs.vue'),
  BaseTables: () => import('@/components/base/BaseTables.vue'),
  BaseCardTextImage: () => import('@/components/base/BaseCardTextImage.vue'),
  DeckSpesification: () => import('@/components/DeckSpesification.vue')
}

export default {
  layout: 'main',

  components,

  async asyncData ({ $content }) {
    const data = await $content ('pages/spesification').fetch();
    return { data }
  },

  mounted () {
    if (this.$data && this.$data.data.hero) {
      this.addHeros({ page_key: this.$route.name, data: this.$data.data.hero });
      this.addBreadcrumb ({
        text: 'spesification',
        href: this.$route.path
      });
    }
  },

  destroyed () {
    this.removeBreadcrumb('spesification');
  },

  methods: {
    addHeros ({ page_key, data }) {
      this.$store.commit('heros/add', { page_key, data });
    },
    addBreadcrumb ({ text, href }) {
      this.$store.commit('breadcrumbs/add', {
        text, href
      });
    },
    removeBreadcrumb(params) {
      const callback = (args) => args.text === params;
      this.$store.commit('breadcrumbs/remove', callback);
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary: #208cb2;
  $secondary: #EFE1DC;

  .__tab {
    min-height: 527px !important;
  }

  .__bg--secondary {
    background: $secondary !important;
  }

  .spesific--master {
    margin-bottom: 100px !important;
  }

  ::v-deep .__bg--transparent {
    background: transparent !important;
  }

  // ::v-deep .__tabs--img {
    // @include poly-fluid-sizing('max-width', (375px:323px, 600px:580px, 1024px: 800px, 1440px: 920px));
  // }
</style>