
export const metaTitle = {
  computed: {
    metaTitle () {
      if (this.item.title) {
        return this.item.title
      }
      return 'The MAJ Oceanic'
    }
  }
}

export const metaDescription = {
  computed: {
    metaDescription () {
      if (this.item.intro && this.item.intro.description) {
        return this.item.intro.description
      }
      return ''
    }
  }
}

export const addHero = {
  methods: {
    // eslint-disable-next-line camelcase
    addHero ({ page_key, data }) {
      this.$store.commit('heros/add', {
        page_key, data
      })
    }
  }
}
