<template>
 <div class="color-blue login color-white">
  <i class="ion iconfont icon-shachu-xue"></i>
  <p class="title color-white">
    欢迎来到梦托邦
  </p>
  <x-button class="wechat"> <i class="ion iconfont icon-changyonglogo28"></i>使用微信号登录</x-button>
  <x-button>手机号登录</x-button>
  <p class="center">
    <router-link to="register">没有账号?点击注册</router-link>
  </p>
 </div>
</template>

<script>
import {XButton} from 'vux';
export default {
  components: {
    XButton,
  },
  }
 
</script>

<style scoped>

.title{
  text-align:left;
  margin-left:26px;
  margin-bottom:50px;
  font-size:30px;
}
.icon-shachu-xue{
  margin-top:40px;
  font-size:17px;
  font-weight:bold;
  display:inline-block;
  margin-left:25px;
  margin-bottom:40px;
  }
.weui-btn{
  width:90%;border-radius:35px;
  border:1px solid #85b8bc;
  color:white;
  background-color:rgba(255,255,255,0);
  }
 a{text-decoration: none;color:aliceblue;}
.icon-changyonglogo28{
  font-size:20px;
}

</style>

