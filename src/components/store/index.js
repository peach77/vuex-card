import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
   products: [{
       id:1,
       price:3900,
       goodsname:'接吻猫高跟鞋',
       inventory:20
   },
   {
    id:2,
    price:123,
    goodsname:'王小毒帆布鞋',
    inventory:5
},{
    id:3,
    price:1200,
    goodsname:'耳机',
    inventory:4
}],
cart:{
    productIdInCart:[1,2],
    numById:{
        2:10,
        3:5
    }
}
  },
  getters:{
      list(state){   
        return state.cart.productIdInCart.map(id=>state.products.find(res=>res.id===id))  
      }
  },
  mutations:{
      addToCart(state,id){
        state.products.find(res=>res.id===id).inventory--
      }
  }
 
})
export default store