<template>
	<section class="rooms-section">
		<div class="text-block" ref="textBlock">
			<h2 class="title">{{ $t("how_we_clean.title") }}</h2>
			<p class="text">{{ $t("how_we_clean.text") }}</p>
		</div>
    <div class="aside-wrapper">
      <aside class="aside">
        <h3 class="title">{{ $t("how_we_clean.title") }}</h3>
        <button
          class="nav-btn"
          :class="{ active: showRoomDetail == i }"
          @mouseenter="setActiveRoom(i)"
          @click="showDetailRoom(i)"
          v-for="i in 4"
          :key="i"
        >
          {{ $t(`rooms.room${i}.title`) }}
        </button>
      </aside>
    </div>
    <div class="image-block" ref="imageBlock">
      <div class="img-wrapper">
        <div class="hidden-nav">
          <button
            class="nav-btn"
            :class="{ active: showRoomDetail == i }"
            @click="showMobileRoom(i)"
            v-for="i in 4"
            :key="i"
          >
            {{ $t(`rooms.room${i}.title`) }}
          </button>
        </div>
        
        <uiMyImage v-for="i in 4" :key="i" class="myImage" :data-index="i" :class="{hidden: i != 1}" :path="'interier'" :name="`room${i}`">
          <uiSignature
            v-for="(item, indx) in roomsData[i - 1]"
            :key="indx"
            :class="{ show: isShowSinatures }"
            :styles="item.style"
            :text="$t(item.text)"
          />
        </uiMyImage>
      </div>
    </div>
	</section>
</template>

<script>
export default {
  data: () => ({
    activeRoom: 1,
    showRoomDetail: 1,
		showSignatures: false,
    roomsData: [
      [
        {
          text: 'rooms.room1.signature1',
          style: { top: '30%', left: '30%' },
        },
        {
          text: 'rooms.room1.signature2',
          style: { top: '54%', left: '23%' },
        },
        {
          text: 'rooms.room1.signature5',
          style: { top: '88%', left: '25%' },
        },
        {
          text: 'rooms.room1.signature3',
          style: { top: '58%', left: '42%' },
        },
        {
          text: 'rooms.room1.signature4',
          style: { top: '72%', left: '52%' },
        },
        {
          text: 'rooms.room1.signature7',
          style: { top: '61%', left: '76%' },
        },
        {
          text: 'rooms.room1.signature6',
          style: { top: '46%', left: '58%' },
        },
      ],
      [
        {
          text: 'rooms.room2.signature1',
          style: { top: '30%', left: '30%' },
        },
        {
          text: 'rooms.room2.signature2',
          style: { top: '85%', left: '60%' },
        },
        {
          text: 'rooms.room2.signature3',
          style: { top: '88%', left: '32%' },
        },
        {
          text: 'rooms.room2.signature4',
          style: { top: '50%', left: '65%' },
        },
        {
          text: 'rooms.room2.signature5',
          style: { top: '78%', left: '77%' },
        },
      ],
      [
        {
          text: 'rooms.room1.signature1',
          style: { top: '30%', left: '30%' },
        },
        {
          text: 'rooms.room1.signature2',
          style: { top: '54%', left: '23%' },
        },
        {
          text: 'rooms.room1.signature5',
          style: { top: '88%', left: '25%' },
        },
        {
          text: 'rooms.room1.signature3',
          style: { top: '58%', left: '42%' },
        },
        {
          text: 'rooms.room1.signature4',
          style: { top: '72%', left: '52%' },
        },
        {
          text: 'rooms.room1.signature7',
          style: { top: '61%', left: '76%' },
        },
        {
          text: 'rooms.room1.signature6',
          style: { top: '46%', left: '58%' },
        },
      ],
      [
        {
          text: 'rooms.room2.signature1',
          style: { top: '30%', left: '30%' },
        },
        {
          text: 'rooms.room2.signature2',
          style: { top: '85%', left: '60%' },
        },
        {
          text: 'rooms.room2.signature3',
          style: { top: '88%', left: '32%' },
        },
        {
          text: 'rooms.room2.signature4',
          style: { top: '50%', left: '65%' },
        },
        {
          text: 'rooms.room2.signature5',
          style: { top: '78%', left: '77%' },
        },
      ],
    ],
  }),
  methods: {
    scrollAnimation(){
      const gsap = this.$gsap;
      let imageBlock = this.$refs.imageBlock;
      this.$ScrollTrigger.matchMedia({
        "(min-width: 1300px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.rooms-section',
              start: "top 5px",  
              end: "bottom top", 
              toggleActions: "play none none reverse",
              markers: false,
              scrub: false, 
              pin: false,
              onToggle: (self) => {
                if(!self.isActive) this.showSignatures = false
              },
            }
          });
    
          tl
            .to(".header",{ top: '-70px', duration: 0.1 })
            .to('.float-btn', { 'margin-bottom': '-200px' , duration: 0.3 })
            .to(".text-block",{ 'margin-top': '-300px', opacity: 0, duration: 0.3 })
            .to(".image-block",{ height: '100vh', top: 0, duration: 0.3 })
            .to(".image-block",{ 
              x: function(el){
                const rect = this._targets[0].getBoundingClientRect();
                return window.innerWidth - rect.right
              }, 
              duration: 0.3 
            })
            .to(".aside-wrapper",{ 
              width: () => {
                let imgWidth = imageBlock.getBoundingClientRect().width
                return `${window.innerWidth - imgWidth}px`
              }, 
              duration: 0.3 
            })
        },
        "(max-width: 1299px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.rooms-section',
              start: "top 20px",  
              end: "bottom top", 
              toggleActions: "play none none reverse",
              markers: false,
              scrub: false, 
              pin: false,
              onToggle: (self) => {
                if(!self.isActive) {
                  this.showSignatures = false
                  
                }
              },
            }
          });
    
          tl
            .to(".header",{ top: '-70px', duration: 0.1 })
            .to('.float-btn', { 'margin-bottom': '-200px' , duration: 0.3 })
            .to(".text-block",{ 'margin-top': '-300px', opacity: 0, duration: 0.3 })
            .fromTo(".hidden-nav",{ y: -50, duration: 0.3 }, { y: 0, duration: 0.3 })
        }
      })

    },
    showDetailRoom(roomNum){
      this.showRoomDetail = roomNum;
      this.showSignatures = true
    },
    setActiveRoom(roomNum) {
      this.showSignatures = false;
      if(roomNum == this.activeRoom) return
			
			const gsap = this.$gsap;
			let nextImage = document.querySelector(`.myImage[data-index="${roomNum}"]`);
			let currentImage = document.querySelector(`.myImage[data-index="${this.activeRoom}"]`);  
      
			gsap.to(
				nextImage,
				{
					width: "100%",
					duration: 0.5,
					ease: "power2.out",
					onComplete: function () {
						nextImage.classList.remove("hidden");
						currentImage.classList.add("hidden");
						currentImage.removeAttribute("style");
					},
				}
			);
			this.activeRoom = roomNum;
		},
    async showMobileRoom(roomNum){
      this.setActiveRoom(roomNum)
      this.showDetailRoom(roomNum)
    }
  },
  async mounted(){
    await this.$nextTick()
    this.scrollAnimation()
  },
  computed: {
		isShowSinatures() {
			return this.showSignatures;
		},
	},
};
</script>

<style lang="scss" scoped>
.rooms-section{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (width <= 1299px){
    justify-content: center;
  }
}
.text-block {
	display: flex;
	justify-content: space-between;
	max-width: 1094px;
	width: 100%;
	margin: 0 auto;
  padding: 149px 15px 52px 15px;
  @media (width <= 860px){
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
	.title {
		@include title2;
    @media (width <= 860px){
      text-align: center;
    }
	}
	.text {
		max-width: 414px;
    @media (width <= 860px){
      text-align: center;
    }
	}
}
.image-block{
  margin: 0 auto;
  height: 630px;
  max-height: none !important;
  max-width: none !important;
  left: auto !important;
  overflow: hidden;
  @media (width <= 1299px){
    height: auto;
    max-height: 100vh;
  }
  .img-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .myImage {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    &.hidden{
      width: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  :deep(img){
    height: 100%;
    width: auto;
    object-fit: cover;
    @media (width <= 1299px){
      height: auto;
      max-width: 100vw;
      max-height: 100vh;
    }
  }
  .hidden-nav{
    position: absolute;
    z-index: 9;
    width: 100%;
    height: 50px;
    display: none;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    background: rgba($color: $purple, $alpha: 0.5);
    @media (width <= 1299px){
      display: flex;
    }
    .nav-btn{
      padding: 0;
      background: none;
      border: none;
      @include navLink;
      color: $white;
      &.active{
        color: $purple-dark;
      }
    }
  }
}
.aside-wrapper{
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: $purple;
  width: 0px;
}
.aside {
  width: 100%;
  height: 100%;
  padding: 35px 0 35px 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 22px;
  width: 375px;
  @media (width <= 1360px){
    padding-left: 15px;
  }
  .title {
    position: absolute;
    top: 35px;
    left: 53px;
    color: $white;
    @include navLink;
    white-space: nowrap;
    @media (width <= 1360px){
      left: 15px;
    }
  }
  .nav-btn {
    @include link;
    padding: 0;
    background: none;
    border: none;
    text-align: left;
    color: $white;
    opacity: 0.7;
    transition: 0.3s;
    font-style: normal;
    display: flex;
    align-items: center;
    width: fit-content;

    @media (width <= 1380px){
      font-size: 32px;
    }
    &::before {
      content: "→";
      display: inline-block;
      overflow: hidden;
      width: 0;
      transition: 0.3s;
    }
    &:hover {
      transform: skewX(-15deg);
      transform-origin: bottom left;
      transition: 0.3s;
      opacity: 1;
    }
    &.active {
      transform: skewX(-15deg);
      transform-origin: bottom left;
      transition: 0.3s;
      opacity: 1;
      &:before {
        width: 55px;
        transition: 0.3s;
      }
    }
  }
}


</style>