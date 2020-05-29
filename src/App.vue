<template>
  <div id="app">
    <HelloWorld />
    <ProductList/>
     <hr>
      <hr>
    <Cart/>
   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductList,
    Cart
  }
}
</script>

<style>

</style>
