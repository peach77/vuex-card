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
    productIdInCart:[],
    numById:{
      
    }
}
  },
  getters:{
      list(state){   
        return state.cart.productIdInCart.map(id=>({
          ...state.products.find(res=>res.id===id),
          number:state.cart.numById[id],
          checked:true
        }))
              
      }  
  },
  mutations:{
      addToCart(state,id){
        state.products.find(res=>res.id===id).inventory--
        console.log(id);
        if(state.cart.productIdInCart.includes(id)){
          state.cart.numById[id]++
         
        }else{
          state.cart.productIdInCart.push(id)
          Vue.set(state.cart.numById,id,1)
        }
      },
      add(state,id){
        state.cart.numById[id]++ 
      },
      sub(state,id){
        state.cart.numById[id]--
      },
      del(state,id){
         state.cart.productIdInCart.splice(state.cart.productIdInCart.findIndex(res=>res===id),1)
        }
  }
 
})
export default store