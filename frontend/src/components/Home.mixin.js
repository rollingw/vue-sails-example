const HomeMixin = {
  created () {
    this.$store.dispatch('getProducts', this.currentPage)
  },

  data () {
    return {
      currentPage: 1
    }
  },

  watch: {
    currentPage () {
      this.$store.dispatch('getProducts', this.currentPage)
    }
  },

  i18n: {
    messages: {
      en: {
        'h3.first': 'Many products',
        'h3.second': 'Cheap products',
        'h3.third': 'Buy fast',
        'p.first': 'Our users offer many products.',
        'p.second': 'The products here are very cheap.',
        'p.third': 'Buy fast and easy here.',
        'span.first': 'by'
      },
      de: {
        'h3.first': 'Viele Produkte',
        'h3.second': 'Günstige Produkte',
        'h3.third': 'Kaufe schnell',
        'p.first': 'Unsere Kunden bieten viele Produkte.',
        'p.second': 'Die Produkte sind sehr günstig hier.',
        'p.third': 'Kaufe hier schnell und einfach.',
        'span.first': 'von'
      }
    }
  },

  computed: {
    products: {
      get () {
        return this.$store.state.Products.products.products
      }
    },

    amountOfProducts: {
      get () {
        return this.$store.state.Products.products.amountOfProducts
      }
    }
  }
}

export default HomeMixin