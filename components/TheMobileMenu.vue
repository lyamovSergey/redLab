<template>
	<div class="mobile-menu">
		<button class="menu-btn" @click="showMenu = !showMenu" :class="{cross: showMenu}">
			<span></span>
			<span></span>
		</button>
		<div class="menu" :class="{show: showMenu}">
			<div class="nav-wrapper">
				<a class="nav-link" v-for="i in 4" :key="i" href="#">{{
					$t(`header.nav.link${i}`)
				}}</a>
				<a :href="'tel:' + $t('header.phone')" class="nav-link"
					>{{ $t("header.phone") }} <span>|</span> {{ $t("header.period") }}</a
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		showMenu: false
	})
};
</script>

<style lang="scss" scoped>
.mobile-menu{
	z-index: 20;
	position: relative;
}
.menu-btn {
	width: 32px;
	height: 32px;
	display: flex;
	flex-direction: column;
	padding: 0 5px;
	justify-content: center;
	row-gap: 8px;
	background: none;
	border: none;
	z-index: 19;
	position: relative;
	span {
		display: flex;
		width: 100%;
		height: 2px;
		background: $black;
		transform-origin: center;
		transition: .3s;
	}
	&.cross{
		@media (width <= 1080px){
			span {
				transition: .3s;
				&:nth-child(1) {
					margin-bottom: -5px;
					transform: rotate(45deg);
					transition: transform .3s .3s ease, margin .3s;
				}
	
				&:nth-child(2) {
					margin-top: -5px;
					transform: rotate(-45deg);
					transition: transform .3s .3s ease, margin .3s;
				}
			}
		}
	}
}
.menu{
	position: fixed;
	height: 100dvh;
	right: 0;
	top: 0;
	overflow: hidden;
	width: 0;
	transition: .3s;
	z-index: 12;
	background: $white;
	&.show{
		@media (width <= 1080px){
			width: 320px;
			transition: .3s;
			box-shadow: -1px 0px 20px 1px $black;
		}
		@media (width <= 380px){
			width: 100%;
		}
	}
	.nav-wrapper{
		min-width: 320px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 15px;
		row-gap: 32px;
	}
}
</style>