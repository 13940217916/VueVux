<template>
  <div id="swiper">
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
  </div>
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider ,Search} from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]

  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
  }))

  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))

  export default {
    components: {
      Search,
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider
    },
    ready () {

    },
    methods: {
      onSwiperItemIndexChange (index) {
        console.log('demo item change', index)
      },
      demo06_onIndexChange (index) {
        this.demo06_index = index
      },

    },
    data () {
      return {
        demo06_list: urlList,
        demo06_index: 0,
      }
    }
  }
</script>

<style scoped>
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
</style>
