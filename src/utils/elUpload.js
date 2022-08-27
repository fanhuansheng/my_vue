import ElementUI from 'element-ui';

const {Upload} = ElementUI

export default {

  extends: Upload, // 引入被即将被继承的组件
  propsData: {
    headers: {
      type: Object,
      default:()=>{
        console.log(this)
        return {
          token: '0000',
          type: '3333',
          name: 'Upload'
        }
      }

    },
  }
}
