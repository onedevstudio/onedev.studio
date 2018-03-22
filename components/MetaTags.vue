<template>
  <span v-if="false"></span>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'MetaTags',
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      },
      ogType: {
        type: String,
        default: 'profile'
      }
    },
    computed: {
      ...mapState({
        pageTitle: state => state.title,
        baseUrl: state => state.baseUrl,
        imageShare: state => state.imageShare,
        pageDescription: state => state.description
      })
    },
    head () {
      return {
        title: this.title || this.pageTitle,
        meta: [
          { hid: 'og:type', property: 'og:type', content: this.ogType },
          { hid: 'og:title', property: 'og:title', content: this.title || this.pageTitle },
          { hid: 'og:description', property: 'og:description', content: this.description || this.pageDescription },
          { hid: 'og:url', property: 'og:url', content: this.url || this.baseUrl },
          { hid: 'og:image', property: 'og:image', content: this.image || this.imageShare },
          { hid: 'description', name: 'description', content: this.description || this.pageDescription },
          { hid: 'twitter:title', name: 'twitter:title', content: this.title || this.pageTitle },
          { hid: 'twitter:description', name: 'twitter:description', content: this.description || this.pageDescription },
          { hid: 'twitter:image', name: 'twitter:image', content: this.image || this.imageShare },
          { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.title || this.pageTitle }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: this.url || this.baseUrl }
        ]
      }
    }
  }
</script>
