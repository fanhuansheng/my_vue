<template>
    <div>
        <div style="width: 100vw">
            <div>这份黑龙江省0000</div>
            <div style="width: 100vw;overflow:scroll" @touchmove="touchmove">
                <ul class="flexScroll"  style="display:flex;width:800px" >
                    <li class="flex_left" v-for="(item,index) in 10" :key="index">{{item}}--滑动</li>
                </ul>
            </div>
            <div>
                <li class="scroll" v-for="(item,index) in 10" :key="index">{{item}}------xiajfdsljf------</li>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){},
    methods:{
      touchmove(e){
        console.log('touchmove',e)
        if(e.preventDefault){
          e.preventDefault();
        }else{
          window.event.returnValue == false;
        }
      }

    }
}
</script>
<style lang="less" scoped>
.flex_left{
    width: 100px;
    height: 30px;
    border: 1px solid;
}
.scroll{
    height: 80px;
    background: red;
}
</style>
