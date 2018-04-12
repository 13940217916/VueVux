<template>
    <div id="nav">
      <tabbar>
        <tabbar-item :link="item.link_to" v-for="(item,index) in nav_msg" :selected="item.checked">
          <img slot="icon" :src="item.icon_img">
          <span slot="label">{{item.nav_name}}</span>
        </tabbar-item>
      </tabbar>
    </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    data(){
      return{
        nav_msg:[
          {
            link_to:'/',
            icon_img:'../../../static/img/index.svg',
            nav_name:'首页',
            checked:true
          },
          {
            link_to:'/you',
            icon_img:'../../../static/img/you.svg',
            nav_name:'优选',
            checked:false
          },
          {
            link_to:'/car',
            icon_img:'../../../static/img/car.svg',
            nav_name:'购物车',
            checked:false
          },
          {
            link_to:'/my',
            icon_img:'../../../static/img/my.svg',
            nav_name:'我的',
            checked:false
          },
        ],
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .weui-tabbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background-color: #F7F7FA;
    left: 0;
  }
</style>
