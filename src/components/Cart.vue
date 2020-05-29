<template>
  <div>
      <CartHead/>
      <CartList/>
      <CartFooter/>
  </div>
</template>

<script>
import CartHead from './CartHead'
import CartList from './CartList'
import CartFooter from './CartFooter'
export default {
    name:'Cart',
    components:{
        CartHead,
        CartList,
        CartFooter

    }
}
</script>

<style>

</style>