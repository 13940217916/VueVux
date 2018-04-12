<template>
  <div id="index">
    <search_input></search_input>
    <swiper_img></swiper_img>
    <flexbox>
      <flexbox-item :span="3">
        <Vertical_nav v-on:nav_mag="accept_navMag"></Vertical_nav>
      </flexbox-item>
      <flexbox-item :span="8.75">
        <Shop_list :navTab="navMsg" ></Shop_list>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Divider } from 'vux'
  import Search_input from '../components/index/search'
  import Swiper_img from '../components/index/swiper'
  import Vertical_nav from '../components/index/vertical_nav'
  import Shop_list from '../components/index/shop_list'


  export default {
    data(){
      return{
        navMsg:''
      }
    },
    components: {
      Search_input,
      Swiper_img,
      Flexbox,
      FlexboxItem,
      Divider,
      Vertical_nav,
      Shop_list,
    },
    methods: {
      accept_navMag:function(item){
        this.navMsg = item.text
      }
    }
  }
</script>

<style scoped>

</style>
