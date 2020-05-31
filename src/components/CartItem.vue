<template>
  <div>
    <div  v-for="item in list" :key="item.id" class="box">
      <input type="checkbox" :checked='item.checked' >
      <h3>{{item.goodsname}}</h3>  <span>单价{{item.price}}</span> <div><button @click="jian(item.id)">-</button>{{item.number}}<button @click="jia(item.id)">+</button></div> <span>小计{{item.price*item.number}}</span><button @click="del(item.id)">删除</button>
    
    </div>
    <hr>
    
 
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name:'CartItem',
  props:['list'],
  mounted () {
    console.log(this.list);
    
  },
  methods:{
    ...mapMutations({jia:'add',jian:'sub',del:'del'} ),
   
 
  }

}
</script>

<style scoped>
div.box{
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
</style>

