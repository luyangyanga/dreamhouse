import request from '../../api/request';
import apiConfig from '../../api/apiConfig';
import * as types from '../mutations';

const register={
      state:{
          isGetMobleCode:false,
      },
      mutations:{
          [types.SUCCESS_GET_MOBILE_CODE](state){
              state.isGetMobleCode=true;
          }
      },
      actions:{
          async getSms({commit},data){
              console.log(111);
              const res= await request(apiConfig.sms,'post',data);
             if(res.status===200){
                 commit(types.SUCCESS_GET_MOBILE_CODE);
             }
          }
      }
};
export default register;