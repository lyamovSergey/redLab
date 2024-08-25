<template>
	<div>
			<slot/>
			<picture class="img">
				<source type="image/webp" :srcset="`${getWebp} 1x, ${getWebp2x} 2x`" />
				<source type="image/png" :srcset="`${getPng} 1x, ${getPng2x} 2x`" />
				<img :style="styles" :src="getPng" :srcset="`${getPng2x} 2x`" :alt="alt || name" />
			</picture>
	</div>
</template>

<script>
export default {
	props: {
		name: { type: String, require: true },
		path: { type: String, require: true },
		alt: { type: String, default: "" },
    styles: { type: Object, default: () => {} }
	},
	computed: {
		getWebp() {
			const requireImage = require.context("@/assets/img/", true, /\.(webp)$/);
			return requireImage(`./${this.path}/webp/${this.name}@1x.webp`);
		},
		getWebp2x() {
			const requireImage = require.context("@/assets/img/", true, /\.(webp)$/);
			return requireImage(`./${this.path}/webp/${this.name}@2x.webp`);
		},
		getPng() {
			const requireImage = require.context("@/assets/img/", true, /\.(png)$/);
			return requireImage(`./${this.path}/${this.name}@1x.png`);
		},
		getPng2x() {
			const requireImage = require.context("@/assets/img/", true, /\.(png)$/);
			return requireImage(`./${this.path}/${this.name}@2x.png`);
		},
	},
};
</script>

<style lang="scss" scoped>
.img{
  width: auto;
  height: auto;
  max-width: 100%;
	// max-height: 100%;
}
</style>