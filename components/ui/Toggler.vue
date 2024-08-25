<template>
  <div class="toggler">
    <button
      class="button-item"
      :class="{ active: value == item.value }"
      v-for="(item, index) in options"
      :key="index"
      @click="$emit('input', item.value)"
    >
      <span>{{ item.title }}</span>
    </button>
</div>
</template>

<script>
  export default {
    props: {
      value: { default: null },
      options: { default: [] },
    },
  }
</script>

<style lang="scss" scoped>
.toggler{
	border-radius: 34px;
	padding: 3px;
	width: 100%;
	height: 37px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: $white;
	border: 1px solid transparent;
	transition: .3s;
  .button-item {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		flex-grow: 1;
    max-width: 50%;
		padding: 0 12px;
		border-radius: 34px;
		border: none;
		background: none;
		column-gap: 4px;
		span {
			font-weight: 500;
      font-size: 14px;
      line-height: 110%;
      font-family: 'TTTravels';
			transition: 0.3s;
    }
		&:hover {
			&:not(.active) {
				span {
					color: $purple;
					transition: 0.3s;
				}
			}
		}
		&.active {
			background: $purple;
      span{
        color: $white;
      }
		}
	}
}
</style>