<template>
  <div>
    <TheHeader :class="{shadow: shadow}"/>
      <nuxt />
    <SvgSprite/>
  </div>
  
</template>

<script>

export default {
  data: () => ({
    shadow: false
  }),
 mounted(){
  this.shadow = window.scrollY > 5;
  window.addEventListener('scroll', (event) => {
    this.shadow = window.scrollY > 5;
  })
 }
}
</script>

<style lang="scss" scoped>

</style>