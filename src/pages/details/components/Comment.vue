<template>
  <div class="comment">
    <div class="comment-title" ref="base">
      <div class="comment-title-text">用户评论</div>
    </div>
    <div class="comment-container border-top">
      <div class="comment-info">
        <div class="comment-score"><d-star :score="5"></d-star></div>
        <div class="comment-date">2018-05-11</div>
        <div class="comment-user">n*8</div>
      </div>
      <div class="comment-content-text" ref="comment">在网上预订的联票，到园区拿身份证刷票就好了，介绍一下景区的吃饭和商场吧： 一）园区里都有直饮水，都是凉水~可以用杯子接水，若想要喝热水可以去里面的餐厅哟，我们在城堡迎宾阁旁边的餐厅接热水，他们家有好几个接水桶很方便。吃饭的话建议去迪士尼小镇吃，虽然也不便宜起码是能花园区相同的钱吃到饭，吃饱的，园区里一个卷饼65，一个热狗55，我个人吃一个饼子当中饭肯定是吃不饱的，而且我也不想大冬天喝凉水~去小镇可以随便点菜，套餐都有的~豪儿们可以在园区随意潇洒。
（二）商店：大家可以去园区商店买自己喜欢的东西和换徽章买徽章，个人觉得米奇大街的商店和迪士尼小镇的迪士尼市集较大，东西多且全，可以逛逛。</div>
      <div v-show="showComment">
        <div class="comment-folder iconfont" @click="handleMoreComment" v-show="show">&#xe609;</div>
        <div class="comment-folder iconfont" @click="handleMoreComment" v-show="!show">&#xe67c;</div>
      </div>
      <div class="comment-content-img">
        <div class="comment-content-img-wrapper">
          <div class="comment-content-img-box">
            <img src="https://imgs.qunarzz.com/piao/fusion/1805/2f/0daaa17744cf7102.jpg" class="comment-img">
          </div>
        </div>

        <div class="comment-content-img-wrapper">
          <div class="comment-content-img-box">
            <img src="https://imgs.qunarzz.com/piao/fusion/1805/2f/0daaa17744cf7102.jpg" class="comment-img">
          </div>
        </div>

        <div class="comment-content-img-wrapper">
          <div class="comment-content-img-box">
            <img src="https://imgs.qunarzz.com/piao/fusion/1805/2f/0daaa17744cf7102.jpg" class="comment-img">
          </div>
        </div>

        <div class="comment-content-img-wrapper">
          <div class="comment-content-img-box">
            <img src="https://imgs.qunarzz.com/piao/fusion/1805/2f/0daaa17744cf7102.jpg" class="comment-img">
          </div>
        </div>

        <div class="comment-content-img-wrapper">
          <div class="comment-content-img-box">
            <img src="https://imgs.qunarzz.com/piao/fusion/1805/2f/0daaa17744cf7102.jpg" class="comment-img">
          </div>
        </div>

        <div class="comment-content-img-wrapper">
          <div class="comment-content-img-box">
            <img src="https://imgs.qunarzz.com/piao/fusion/1805/2f/0daaa17744cf7102.jpg" class="comment-img">
          </div>
        </div>

        <div class="number">共9张</div>
      </div>
    </div>  

  </div>
</template>

<script>
import DStar from '@/pages/details/components/star'

export default{
  data(){
    return {
      showComment:"",
      show:"",
      commentHeight:"",
      orientation:"",
    }
  },
  components: {
    DStar
  },
  methods:{
    setOrientation(){
      if (window.orientation === 0 || window.orientation === 180) {
        this.orientation="portrait"
      }else if(window.orientation===90 || window.orientation===-90){
        this.orientation="landscape"
      }
    },
    commentHeightCalc(){
      let comment=this.$refs.comment;
      comment.style.maxHeight="";
      this.commentHeight=this.$refs.comment.clientHeight;
      if(this.commentHeight <= 200){
        comment.style.maxHeight=200+ 'px'
        this.showComment=false
      }else if(this.commentHeight > 200) {
        this.savedHeight=this.commentHeight
        comment.style.maxHeight=200 + 'px'
        this.showComment=true
        this.show=true
      }
    },
    handleMoreComment(e){
      if(this.show){
        this.show=false
        this.$refs.comment.style.maxHeight=this.savedHeight + 'px'
      }else{
        this.show=true
        this.$refs.comment.style.maxHeight=200 + 'px'
      }    
    }
  },
  watch:{
    orientation(){
      setTimeout(()=>{
        this.commentHeightCalc()
      },20)
    }
  },
  activated(){
    window.addEventListener("resize",this.setOrientation)
  },
  deactivated(){
    window.removeEventListener("resize",this.setOrientation)
  }  
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  .comment
    border-top:0.266667rem solid #f5f5f5
    .comment-title
      position:relative
      height:$height-header
      line-height:$height-header
      font-size:0.426667rem
      color:rgb(51,51,51)
      padding:0 0.266667rem
      .comment-title-text
        padding-left:0.266667rem
        &:before
          content:""
          display:block
          width:0.066667rem
          height:0.426667rem
          background:$color-background
          position:absolute
          top:0.373334rem
          left:0.266667rem  
    .comment-container
      padding:0.133334rem 0.266667rem 0.4rem 0.266667rem
      .comment-info
        height:0.8rem
        line-height:0.8rem   
        .comment-score
          float:left
        .comment-date
          float:right
          margin-left:0.133334rem  
        .comment-user
          float:right
      .comment-content-text
        line-height:0.533334rem
        font-size:0.32rem
        color:rgb(91,91,91)
        word-break:break-all
        text-align:justify
        overflow:hidden
      .comment-folder
        line-height:0.533334rem
        text-align:center
        font-size:0.426667rem
        font-weight:700
        color:rgb(91,91,91)
      .comment-content-img
        width:100%
        overflow:hidden
        padding-top:0.133334rem
        position:relative
        .comment-content-img-wrapper
          float:left
          width:33.3%
          .comment-content-img-box
            padding-right:0.133334rem
            padding-bottom:0.133334rem
            .comment-img
              width:100%
        .number
          position:absolute
          right:0
          bottom:25%
          margin-right:0.133334rem
          background:rgba(0,0,0,.5)
          color:#fff
          width:1.28rem
          height:0.533334rem
          line-height:0.533334rem
          font-size:0.32rem
          text-align:right
          border-radius:0.533333rem 0 0 0.533333rem
</style>
