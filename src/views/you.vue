<template>
  <div id="you">
    <v-search></v-search>
    <flexbox>
      <flexbox-item :span="3">
        <v-nav></v-nav>
      </flexbox-item>
      <flexbox-item :span="8.75">

      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Divider } from 'vux'
  import You_nav from '../components/you/you_nav'
  import Search_bar from '../components/index/search'


    export default {
      name: "You",
      components:{
        'v-nav':You_nav,
        'v-search':Search_bar,
        Flexbox,
        FlexboxItem,
        Divider,
      },
      data(){
        return{
          shopList:[
            {
              url:'../../static/img/a.jpg',
              text:'聚美优品，我为自己代言',
              cont:'玉兰油OLAY护肤套装新生塑颜礼盒9件套化妆品套装(大红瓶面霜+活能水+眼霜',
              money:438
            },
            {
              url:'../../static/img/b.jpg',
              text:'聚美优品，我为自己代言',
              cont:'玉兰油OLAY护肤套装新生塑颜礼盒9件套化妆品套装(大红瓶面霜+活能水+眼霜',
              money:410
            },
            {
              url:'../../static/img/c.jpg',
              text:'聚美优品，我为自己代言',
              cont:'玉兰油OLAY护肤套装新生塑颜礼盒9件套化妆品套装(大红瓶面霜+活能水+眼霜',
              money:300
            },
            {
              url:'../../static/img/d.jpg',
              text:'聚美优品，我为自己代言',
              cont:'玉兰油OLAY护肤套装新生塑颜礼盒9件套化妆品套装(大红瓶面霜+活能水+眼霜',
              money:266
            },
            {
              url:'../../static/img/e.jpg',
              text:'聚美优品，我为自己代言',
              cont:'欧诗漫OSM化妆品套装营养美肤晶彩无暇补水保湿护肤品套装女（洗面奶+爽肤水',
              money:135
            },
          ]
        }
      }
    }
</script>

<style scoped>

</style>
