<template>
  <div class="sign-wrapper" :style="styles">
    <div class="signature">
      <div class="hidden-text">
        {{text}}
      </div>
      <svg width="50" height="50">
        <use xlink:href="#plus"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      styles: {type: Object, default: () => {}},
      text: {type: String, default: 'Чистим трубочиста'}
    },
  }
</script>

<style lang="scss" scoped>
.sign-wrapper{
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
  &.show{
    opacity: 1;
    transition: .3s;
  }
  .signature{
    position: relative;
    display: flex;
    justify-content: center;
    @media (width <= 860px){
      svg{
        transform: scale(0.5);
      }

    }
  }
  .hidden-text{
    position: absolute;
    width: fit-content;
    top: -110%;
    white-space: nowrap;
    padding: 8px 10px;
    background: $white;
    justify-content: center;
    border-radius: 2px;
    @include textSmall2;
    display: none;
    z-index: 2;
    &::after{
      content: '';
      display: block;
      width: 15px;
      height: 15px;
      background: $white;
      position: absolute;
      bottom: -7px;
      transform: rotate(45deg);
    }
  }
  svg{
    transition: .3s;
  }
  &:hover{
    cursor: pointer;
    svg{
      transform: rotate(45deg);
      transition: .3s;
    }
    .hidden-text{
      display: flex;
    }
  }
}
</style>