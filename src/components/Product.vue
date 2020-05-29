<template>  
     <div class="product">
            <h3>{{product.goodsname}}</h3>
          <span>价格：￥{{product.price}}</span><br/>
          <span>库存：{{product.inventory}}</span><br/>
          <button @click="addToCart(product.id)" >添加到购物车</button>
     </div>
  
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name:'Product',
    props:['product'],
    methods:{
        // addToCart(id){
        //    this.$store.commit('addToCart',id)
        // }
        ...mapMutations({
             addToCart:'addToCart'
        })  
    }
}
</script>

<style scoped>
div.product{
    text-align: center;
    width: 300px;
    border: 1px solid black;
   
   
}
</style>>

