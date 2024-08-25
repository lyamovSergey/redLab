<template>
	<header class="header">
		<div class="container">
			<div class="header__col logo">
				<svg width="99" height="25">
					<use xlink:href="#main_logo"></use>
				</svg>
				<uiToggler class="toggler" v-model="isHouse" :options="[
					{
						title: $t('header.toggler.item1'),
						value: true,
					},
					{
						title: $t('header.toggler.item2'),
						value: false,
					},
				]"/>
			</div>
			<nav class="header__col nav">
				<a class="nav-link" v-for="i in 4" :key="i" href="#">{{
					$t(`header.nav.link${i}`)
				}}</a>
			</nav>
			<div class="header__col right-col">
				<a :href="'tel:' + $t('header.phone')" class="nav-link"
					>{{ $t("header.phone") }} <span>|</span> {{ $t("header.period") }}</a
				>
				<TheMobileMenu />
			</div>
		</div>
	</header>
</template>

<script>
export default {
  data: () => ({
    isHouse: true,
  })
};
</script>

<style lang="scss" scoped>
.header{
	position: sticky;
  top: 0;
	z-index: 10;
	&.shadow{
		background: $white;
		box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.07);
		transition: .3s;
		.toggler{
			border-color: $middle-grey;
		}
	}
}
.container {
	height: 70px;
	display: flex;
	align-items: center;
	padding-left: 54px;
	padding-right: 30px;
	justify-content: space-between;
	@media (width <= 1240px){
		padding: 0 15px;
	}
  
	
	.header__col {
		display: flex;
		align-items: center;
		column-gap: 32px;
		@media (width <= 1240px){
			column-gap: 18px;
		}
		&.nav{
			@media (width <= 1080px){
				display: none;
			}
		}
	}
	.nav-link,
	span {
		@include hoverLinkMixin;
		@include navLink;
	}
	.right-col {
		
		.nav-link {
			display: flex;
			column-gap: 15px;
			align-items: center;
			@media (width <= 1080px){
				display: none;
			}
		}
	}
  .logo{
    svg{
      min-width: 99px;
    }
  }
}
</style>