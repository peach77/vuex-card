<template>
  <div v-if="$store.getters.list.length>0">
      <CartHead/>
      <CartList/>
      <CartFooter/>
     
  </div>
  <div v-else>
   <Empty/>
   </div>
</template>

<script>
import CartHead from './CartHead'
import CartList from './CartList'
import CartFooter from './CartFooter'
import Empty from './Empty'
export default {
    name:'Cart',
    components:{
        CartHead,
        CartList,
        CartFooter,
        Empty,

    },
    created () {
        console.log(this.$store.getters.list.length);
        
    },
}
</script>

<style>

</style>