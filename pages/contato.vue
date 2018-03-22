<template>
  <div class="Contact flex flex--centered">
    <MetaTags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
    <div>
      <h1 class="Contact__title">Contato</h1>
      <ul class="Contact__social">
        <li class="Contact__social-item">
          <nuxt-link to="/" class="arrow-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#435466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
              <line x1="20" y1="12" x2="4" y2="12"/>
              <polyline points="10 18 4 12 10 6"/>
            </svg>
          </nuxt-link>
        </li>
        <li class="Contact__social-item">
          <a href="mailto:nandomoreira.me+onedevstudio@gmail.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="entypo-email" width="46" height="46" fill="#435466">
              <g>
                <path d="M14.608 12.172c0 .84.239 1.175.864 1.175 1.393 0 2.28-1.775 2.28-4.727 0-4.512-3.288-6.672-7.393-6.672-4.223 0-8.064 2.832-8.064 8.184 0 5.112 3.36 7.896 8.52 7.896 1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744-6.768 0-10.393-3.72-10.393-9.456 0-5.784 4.201-9.72 9.985-9.72 6.024 0 9.215 3.6 9.215 8.016 0 3.744-1.175 6.6-4.871 6.6-1.681 0-2.784-.672-2.928-2.161-.432 1.656-1.584 2.161-3.145 2.161-2.088 0-3.84-1.609-3.84-4.848 0-3.264 1.537-5.28 4.297-5.28 1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057h.002zm-2.951-3.168c0-1.319-.985-1.872-1.801-1.872-.888 0-1.871.719-1.871 2.832 0 1.68.744 2.616 1.871 2.616.792 0 1.801-.504 1.801-1.896v-1.68z"/>
              </g>
            </svg>
          </a>
        </li>
        <li class="Contact__social-item">
          <a href="https://twitter.com/onedevstudioweb/" target="_blank">
            <svg aria-labelledby="twitter-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#435466">
              <title id="twitter-icon">Twitter icon</title>
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
            </svg>
          </a>
        </li>
        <li class="Contact__social-item">
          <a href="https://github.com/onedevstudio/" target="_blank">
            <svg aria-labelledby="github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#435466">
              <title id="github-icon">GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contato',
    data () {
      return {
        pageTitle: `Contato | ${this.$store.state.title}`,
        pageDescription: `Fale com a Onedev.studio | ${this.$store.state.description}`,
        pageUrl: `${this.$store.state.baseUrl}/contato`
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags')
    }
  }
</script>

<style lang="stylus">
.Contact
  &__title
    font-size 4.5rem
    line-height 1
    font-weight 900
    margin 0
    padding 0
    text-align center
    text-transform uppercase
    color #435466
  &__social
    list-style none
    text-align center
    padding 0
    margin 0
    &-item
      display inline-block
      padding .8rem
</style>
