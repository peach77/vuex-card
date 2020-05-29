<template>
  <div class="goods">
      <Product v-for="product in products" :key="product.id" :product='product'/>
  </div>
</template>

<script>
import Product from './Product.vue'
export default {
 name:'ProductList',
 components:{
    Product
 },
 computed:{
     products(){
         return this.$store.state.products
     }
 }

}
</script>

<style scoped>
div.goods{
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
   
}
</style>