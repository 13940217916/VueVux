<template>
  <div id="login">
    <group title="" style="margin-top: 150px">
      <x-input title="用户名:" placeholder="请输入用户名" placeholder-align="right" value="admin"></x-input>
      <x-input title="密码:" placeholder="请输入密码" placeholder-align="right" type="password" value="admin"></x-input>
    </group>
    <div style="margin-top: 20px">
      <x-button type="primary" @click.native="login" >{{msg}}</x-button>
    </div>
  </div>
</template>
<style>
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
<script>
  import {  XInput, Group, XButton, Cell } from 'vux'

  export default {
    name:'login',
    data(){
      return{
        msg:'登录'
      }
    },
    methods:{
      login:function(){
        this.$router.push('/')
      }
    },
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },

  }
</script>
