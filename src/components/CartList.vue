<template>
  <div>
     <CartItem  :list='list'/>
  </div>
</template>


<script>
import CartItem from './CartItem'
export default {
    name:'CartList',
    components:{
        CartItem
    },
    computed:{
          list(){
           return this.$store.getters.list
        }
    }
   
   
 

}
</script>

<style>

</style>