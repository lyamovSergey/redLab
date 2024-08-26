<template>
  <button @mousemove="moveBtn($event)" @mouseleave="moveToDefault($event)" class="float-btn" v-html="$t('floatbtn')"></button>
</template>

<script>
  export default {
    methods: {
      moveBtn(e){
        const gsap = this.$gsap;
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let moveX = (x / rect.width) - 0.5;
        let moveY = (y / rect.height) - 0.5;

        gsap.to('.float-btn', {
          x: moveX * 100,
          y: moveY * 100,
          duration: 0.1,
          ease: "power1.out"
        });
      },
      moveToDefault(e){
        const gsap = this.$gsap;
        gsap.to('.float-btn', {
          x: 0,
          y: 0,
          duration: 0.2,
          ease: "power1.out"
        });
      },
      startAnimation(){
        const gsap = this.$gsap;
        gsap.to('.float-btn', {
          keyframes: {
            rotate: [-15, 45, -15],
          },
          duration: 10,
          repeat: -1,
          ease: "power0",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: 'body',
            start: "30px top",  
            end: "bottom top", 
            toggleActions: "play none none reverse",
            markers: false,
            scrub: false, 
            pin: false,
          }
        });
        tl.to('.float-btn', { bottom: '-50px', width: '176px', height: '176px', duration: 0.3 })
      }
    },
    async mounted(){
      await this.$nextTick()
      this.startAnimation()
    }
  }
</script>

<style lang="scss" scoped>
.float-btn{
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 10px;
  width: 195px;
  height: 195px;
  border-radius: 50%;
  background: $purple;
  border: none;
  color: $white;
  font-family: 'TTTravels';
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s;
  &:hover{
    transition: .3s;
    bottom: 10px !important;
    width: 225px !important;
    height: 225px !important;
  }
}


</style>