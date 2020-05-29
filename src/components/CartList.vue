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
    created () {
        console.log(this.list);
        
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