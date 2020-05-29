<template>
  <div>
     <CartItem v-for="item in list" :key="item.id" :list='list'/>
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