<template>
   <div>
      <group>
            <cell title="更换头像">
                <img src="../../assets/img/avatar_03.png" alt="" class="avatar">
            </cell>
      </group>
      <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/img/home.png">
        <span slot="label" class="navbar">首页</span>
      </tabbar-item>

      <tabbar-item>
        <img slot="icon" src="../../assets/img/timer.png">
        <span slot="label" class="navbar">行程</span>
      </tabbar-item>

      <tabbar-item  link="">
       <img slot="icon" src="../../assets/img/personl.png">
        <span slot="label" class="navbar">我的</span>
      </tabbar-item>
    </tabbar>
   </div>
</template>
<script>
import { Tabbar, TabbarItem,XButton,Cell,XInput,Group} from 'vux';
export default {
    components: {
    Tabbar,
    TabbarItem,
    XButton,
    Cell,
    XInput,
    Group
  }
}
</script>
<style>
  a:-webkit-any-link{
    text-decoration:none;
  }
  div.weui-tabbar::before{
    border-top: 1px solid white;   
  }
  div.weui-tabbar{
      background-color:white;
  }
  span.navbar{
      margin-bottom:0;
  }
  p.weui-tabbar__label{
    line-height:20px;
    margin-top:0;
    margin-bottom:0;
  }
  .avatar{
      width:66px;
  }
</style>
