<template>
  <div><h3>{{list.goodsname}}</h3>
  <span>{{list.price}}</span>{{list}}</div>
</template>

<script>
export default {
  name:'CartItem',
  props:['list']

}
</script>

<style>

</style>