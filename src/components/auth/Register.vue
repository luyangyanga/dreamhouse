<template>
   <div class='register color-blue'>
       <div class="main">
      <i class="ion iconfont icon-jiantou1-copy-copy-copy-copy"></i>
      <p class="title">使用手机号注册</p>
       <group >
           <x-input  placeholder="请输入手机号码" v-model="form.phone">
             <x-button slot="label" mini class="add86">+86</x-button> 
           </x-input>
           <x-input placeholder="请输入验证码" v-model="form.verify_code">
              <x-button slot="right"  mini v-if="!successfullGetCode" @click.native="getCode()" class="add86 btn-left">获取验证码</x-button>
              <x-button slot="right"  mini v-if="successfullGetCode" disabled class="add86 btn-left">{{count}}s</x-button>
           </x-input>
           <x-input placeholder="请设置密码" v-model="form.password"></x-input>
       </group>
         <p class="tips">密码格式为6-16位,不允许有空格</p>
         <p class="regComp">
             <span>完成并登陆</span>
             <i class="ion iconfont icon-jiantouyou"></i>
         </p>
       </div>
        
   </div>
</template>
<script>
import {Group,XInput,XButton} from 'vux';
export default {
   components:{Group,XInput,XButton},
   data(){
       return{
           successfullGetCode:false,
           addressData:ChinaAddressV2Data,
           count:60,
           form:{
               phone:'',
               verify_code:'',
               password:''
           }
       }
   }

}
</script>
<style scoped>
.main{
    padding-left:0;
    width:90%;
    margin:0 auto;
}
  .icon-jiantou1-copy-copy-copy-copy{
      margin-top:40px;
      display:inline-block;
      font-size:26px;
      color:aliceblue;
  }
  div.vux-x-input.weui-cell{
      padding-left:0;
      color:white;
      margin:0 auto;
      background-color:#09717c;
      border-bottom:1px solid #85b8bc;
      padding-right:0;
      height:61px;
  }
   .add86{
       color:teal;
       margin-right:30px;
       padding-left:8px;
       padding-right:8px;
       font-size:9px;
       } 
  .add86.btn-left{
      margin-right:0;
  }
   div.vux-x-input.weui-cell::before{
       border:none;
   }
   .title{
  text-align:left;
  margin-bottom:44px;
  font-size:30px;
  color:white;
}
.tips{
    font-size:9px;
    color:snow;
    margin-top:15px;
    margin-bottom:38px;
}
.regComp{
    text-align:right;
    color:white;
    font-size:17px;
}
  
</style>
