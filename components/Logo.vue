<template>
  <div class="Logo">
    <svg
      class="Logo__left"
      width="132"
      height="232"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M116 16L16 116l100 100"
        stroke="#435466"
        stroke-width="32"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      class="Logo__right"
      width="132"
      height="232"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 216l100-100L16 16"
        stroke="#435466"
        stroke-width="32"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="stylus">
.Logo
  margin-bottom 40px
  &__left,
  &__right
    display inline-block
    position relative
    overflow hidden
    transition all .2s ease-in-out
    margin 0
  &__left
    animation turnLeft 1.2s linear forwards 1s
    top 0
    left -15px
  &__right
    animation turnRight 1.2s linear forwards 1s
    top 0
    right -15px

@keyframes turnLeft
  100%
    top -30px
    left 10px

@keyframes turnRight
  100%
    top 30px
    right 10px
</style>
