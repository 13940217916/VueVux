<template>
    <div>
      <card>
        <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
        <div slot="content" class="card-padding">
          <p style="color:#999;font-size:12px;" @click="shop">{{ navTab }}</p>
          <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
        </div>
      </card>
    </div>
</template>

<script>
  import { Divider, Card } from 'vux'

    export default {
      name: "",
      components: {
        Card,
        Divider
      },
      props:['navTab'],
      methods:{
        shop:function(){
          alert(this.navNow)
        }
      }

    }
</script>

<style scoped>

</style>
