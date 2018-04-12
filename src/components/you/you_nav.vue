<template>
  <flexbox orient="vertical" :gutter="0">
    <flexbox-item v-for="(x,index) in nav_tabs" :key="index">
      <div class="nav_btn" :class="{ nav_active: x.checked }" v-on:click="nav_change(index)">{{ x.text }}</div>
    </flexbox-item>
  </flexbox>
</template>

<script>
  import { Flexbox, FlexboxItem, Divider } from 'vux'
  export default {
    name: "You",
    components: {
      Flexbox,
      FlexboxItem,
      Divider
    },
    data(){
      return{
        nav_tabs:[
          {
            text:'全部',
            checked:true
          },{
            text:'护肤品',
            checked:false
          },{
            text:'家庭用品',
            checked:false
          },{
            text:'厨房用品',
            checked:false
          },{
            text:'烟酒类',
            checked:false
          }
        ]
      }
    },
    methods:{
      nav_change:function(item){
        this.nav_tabs.forEach((value, index) => {
          value.checked=false
        })
        this.nav_tabs[item].checked=true
        console.log(item)
        this.$emit("nav_mag",this.nav_tabs[item])
      }
    }
  }
</script>

<style scoped>
  .nav_active{
    background:#fff !important;
    color:red;
    border-left:1px solid red;
  }
  .nav_btn{
    width:100%;
    height:3rem;
    font-size:14px;
    text-align: center;
    line-height:3rem ;
    background: #eee;
  }
</style>
