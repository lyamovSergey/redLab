<template>
	<main class="main">
		<section class="main-section section">
			<div class="left-col">
				<uiMyImage :path="'mainSection'" :name="'main'" />
			</div>
			<div class="right-col">
				<h1 class="title">{{ $t("mainTitle") }}</h1>
				<span class="text">{{ $t("mainText") }}</span>
			</div>
		</section>
		<section class="card-section section">
			<uiCard
				v-for="i in 4"
				:key="i"
				:content="$t(`cards.card${i}`)"
				:imgPath="`card${i}`"
				:imgName="'image'"
			/>
		</section>
		<Rooms />
		<TheFeedbackButton />
	</main>
</template>

<script>
export default {
	data: () => ({}),
	methods: {
    scrollAnimation(){
      const gsap = this.$gsap;
			let cards = document.querySelectorAll('.card');
      
      gsap.fromTo(cards, 
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 90%",
            toggleActions: "play pause resume reverse",
            markers: false,
          }
        }
      );
    }
	},
  async mounted(){
    await this.$nextTick()
    this.scrollAnimation()
		console.log('1::: ', 1);
  }
};
</script>

<style lang="scss" scoped>
.main {
	display: flex;
	flex-direction: column;
}
.section{
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
.main-section {
	display: flex;
	margin-top: -70px;
	@media (width <= 860px){
		position: relative;
	}
	
	.left-col {
		width: 50%;
		:deep(img) {
			width: 100%;
		}
		@media (width <= 860px){
			width: 100%;
		}
	}
	.right-col {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		row-gap: 30px;
		@media (width <= 860px){
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			margin: auto;
			height: fit-content;
			width: fit-content;
			top: -20%;
			right: -20%;
			background: rgba($color: $white, $alpha: .7);
			padding: 24px 32px;
			border-radius: 8px;
		}
		
		@media (width <= 600px){
			top: 0;
			right: 0;
		}
		@media (width <= 480px){
			row-gap: 12px;
			padding: 16px 18px;
		}
		.title {
			@include title1;
			max-width: 380px;
			@media (width <= 1300px){
				font-size: 56px;
			}
			@media (width <= 600px){
				font-size: 48px;
				max-width: 300px;
				text-align: center;
			}
			@media (width <= 480px){
				font-size: 32px;
			}
			@media (width <= 380px){
				max-width: 280px;
			}
		}
		.text {
			max-width: 380px;
			@media (width <= 600px){
				max-width: 300px;
				text-align: center;
			}
			@media (width <= 380px){
				max-width: 280px;
			}
		}
	}
}
.card-section {
	margin-top: 73px;
	padding: 0 60px;
	display: flex;
	column-gap: 40px;
  justify-content: center;
	@media (width <= 1300px){
		padding: 0 15px;
		column-gap: 0;
		width: 100%;
		justify-content: space-between;
	}
	@media (width <= 768px){
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 16px;
		row-gap: 16px;
	}
	
}
</style>