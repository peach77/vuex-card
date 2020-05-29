<template>
  <div>
    <div  v-for="item in list" :key="item.id" class="box">
      <input type="checkbox" name="" id="">
      <h3>{{item.goodsname}}</h3>  <span>单价{{item.price}}</span> <div><button>-</button>1<button>+</button></div> <span>小计</span>
    
    </div>
    <hr>
    
 
  </div>
</template>

<script>
export default {
  name:'CartItem',
  props:['list']

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

