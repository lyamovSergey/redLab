<template>
	<div class="card">
    <h3 class="title">{{content.title}}</h3>
    <uiMyImage class="card-img" :path="imgPath" :name="imgName" />
    <div class="hidden-block">
      <p>{{content.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		content: { type: Object, default: () => {} },
		imgPath: { type: String, require: true },
		imgName: { type: String, require: true },
	},
};
</script>

<style lang="scss" scoped>
.card {
	width: 300px;
	height: 328px;
	padding: 20px;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  border-radius: 8px;
  background: $light-grey;
  position: relative;
  overflow: hidden;
  @media (width <= 1300px){
    width: 280px;
    height: 308px;
  }
  @media (width <= 1180px){
    width: 24%;
    height: 280px;
  }
  @media (width <= 768px){
    width: 40%;
  }
  @media (width <= 540px){
    width: 48%;
	}
  @media (width <= 440px){
    width: 300px;
    height: 328px;
  }
  .title{
    @include subtitle;
    text-align: center;
    max-width: 220px;
    @media (width <= 860px){
      font-size: 18px;
    }
    @media (width <= 440px){
      font-size: 24px;
    }
  }
  .card-img{
    :deep(img){
      width: 100%;
    }
  }

  .hidden-block{
    position: absolute;
    width: 100%;
    height: 100%;
    background: $purple;
    top: 0;
    left: 0;
    padding: 30px;
    opacity: 0;
    transition: .3s;
    @media (width <= 1140px){
      padding: 15px;
    }
    @media (width <= 991px){
      display: flex;
      align-items: center;
    }
    p{
      color: $white;
      @include textSmall;
      @media (width <= 991px){
        @include textSmall2;
      }
    }
  }
	&:hover {
		cursor: pointer;
    .hidden-block{
      opacity: 1;
    }
	}
}
</style>