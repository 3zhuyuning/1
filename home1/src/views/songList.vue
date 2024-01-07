<template>
   
<div class="container">



    <!--歌单头部-->
    <div class="header">
        <div class="photo"></div>
        <div class="title">
            <h2 id="title">华语独立乐团|将温柔塞满黄昏</h2>
            <p id="author">by 薛定谔的猫</p>
            <div class="bfl">播放量:260万</div>
            <div class="btn-container">
                <el-button id="sc" class="btn"  type="primary" :icon="FolderAdd" @click="starSongList" >{{ isStar }}</el-button>
                <el-button id="xh" class="btn"  type="primary" :icon="Star" >{{ isLike }}</el-button>
            </div>
        </div>
    </div>





    <!--歌单本体-->
    <div class="body">
        <!-- <div class="names-container">
            <p id="song" class="name">歌曲</p>
            <p id="singer" class="name">歌手</p>
            <p id="time" class="name">时长</p>
            <p id="times" class="name">播放量</p>
        </div> -->
            
        <!--歌单表格-->
        <div class="songlist">
            <el-table :data="tableData" stripe style="width: 100%" height="97.4vh" :row-class-name="tableRowClassName" header-cell-class-name="table_header">
            <el-table-column label=" " width="102px" type="index" />
            <el-table-column prop="song" label="歌曲" width="366px" />
            <el-table-column prop="singer" label="歌手" width="235px" />
            <el-table-column prop="time" label="时长" width="284px" />
            <el-table-column prop="times" label="播放量"  />
            </el-table>
        </div>




        <!--歌单评论-->
        <div class="content-container">
            <div class="user-content">
                <p id="content-title">评论</p>
                <el-input id="content-input"  v-model="my_comment" maxlength="200" placeholder="留下你自己的感受吧" show-word-limit type="textarea" :rows="15"></el-input>
                <div class="content-btn-container"><el-button type="primary" id="content-btn" @click="submitComment" >发表</el-button></div>
            </div>

            <div class="content-show-container">
                <div class="content-show-title-container">
                    <p>精彩评论</p>
                    <div class="divider"></div>
                </div>
                

                
                <!--我的评论-->
                <div class="show" v-if="flag">
                    <h3 class="content_time">2023年3月3日</h3>
                    <h2 class="content_author">你的评论：</h2>
                    <p>{{ my_comment }}</p>
                    <div class="show_btn_container" :data-attr="starNumber1">
                        <el-button  :icon="Star"  circle :dark="isDark" :plain="flag1" @click="touchStar1" />
                    </div>
                    <div class="show_divider"></div>
                </div>


                <!--精彩评论本体-->
                <!--评论1-->
                <div class="show">
                    <h3 class="content_time">2023年3月3日</h3>
                    <h2 class="content_author">薛定谔的猫：</h2>
                    <p>余华在《在细雨中呼喊》写道：“我不再装模做样地拥有很多朋友，而是回到孤单之中，
                        以真正的我开始了独自生活。”我们好像总在不断的寻求陪伴与他人的认可，太看重他人在自己生命中的参与，
                        后来才发现，其实世界是自己的，与他人毫无关系</p>
                    <div class="show_btn_container" :data-attr="starNumber1">
                        <el-button  :icon="Star"  circle :dark="isDark" :plain="flag1" @click="touchStar1" />
                    </div>
                    <div class="show_divider"></div>
                </div>


                <!--评论2-->
                <div class="show">
                    <h3 class="content_time">2023年3月3日</h3>
                    <h2 class="content_author">薛定谔的猫：</h2>
                    <p>余华在《在细雨中呼喊》写道：“我不再装模做样地拥有很多朋友，而是回到孤单之中，
                        以真正的我开始了独自生活。”我们好像总在不断的寻求陪伴与他人的认可，太看重他人在自己生命中的参与，
                        后来才发现，其实世界是自己的，与他人毫无关系</p>
                    <div class="show_btn_container" :data-attr="starNumber2">
                        <el-button  :icon="Star" circle :dark="isDark" :plain="flag2" @click="touchStar2" />
                    </div>
                    <div class="show_divider"></div>
                </div>


                <!--评论3-->
                <div class="show">
                    <h3 class="content_time">2023年3月3日</h3>
                    <h2 class="content_author">薛定谔的猫：</h2>
                    <p>余华在《在细雨中呼喊》写道：“我不再装模做样地拥有很多朋友，而是回到孤单之中，
                        以真正的我开始了独自生活。”我们好像总在不断的寻求陪伴与他人的认可，太看重他人在自己生命中的参与，
                        后来才发现，其实世界是自己的，与他人毫无关系</p>
                    <div class="show_btn_container" :data-attr="starNumber3">
                        <el-button  :icon="Star" circle :dark="isDark" :plain="flag3" @click="touchStar3" />
                    </div>
                    <div class="show_divider"></div>
                </div>
                
            </div>
        </div>

        <div class="space"></div>
    </div>
</div>

</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
}
.container{
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0%;
    background-image: url(E:\实验室考核-云音乐\home1\public\歌单背景.png);
    background-repeat: no-repeat;
    background-size: cover;
    /* display: flex;
    flex-direction: column; */
}



/*歌单头部*/
.header{
    margin-top: 0px;
    width: 100%;
    height: 250px;
    
    overflow: hidden;
}
.photo{
    margin-top: 0%;
    padding-top: 0%;
    height: 100%;
    width: 250px;
    background-image: url(E:\实验室考核-云音乐\home1\src\assets\每天单推背景.jpg);
    margin-left: 10%;
    display: block;
    float: left;
    
}
.title{
    width: 28%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
#author{
    margin-top: 5px;
    font-size: 18px;
    font-weight: 350;
    margin-left: 5%;
}
#title{
    font-size: 30px;
    font-weight: 520;
    margin-left: 5%;
    margin-top: 1%;
    margin-bottom: 20px;
    
}
.bfl{
    margin-left: 5%;
    margin-top: 15%;
}
.btn-container{
    display: flex;
    flex-direction: row;
    margin-left: 5%;
}
.btn{
    margin-top: 20px;
    font-size: 20px;
    border: none;
    display: block;
    width: 120px;
    height: 45px;
}
#xh{
    margin-left: 5.5%;
}




/*歌单本体*/
.body{
    margin-top: 20px;
    width: 100%;
}
.names-container{
    display: flex;
    flex-direction: row;
    height: auto;
}
.name{
    font-size: 20px;
    
}
#song{
    margin-right:20%;
    margin-left: 17%;
}
#singer{
    margin-right: 12%;
}
#time{
    margin-right: 15%;
}
.songlist{
    margin-top: 5vw;
    width: 80vw;
    height: 800px;
    margin-left: 10%;
}
/*在使用element plus的组件时，若修改样式失败，考虑使用::v-deep 前缀来修改样式*/
::v-deep .table_header{
    font-size: 20px;
    color: gray;
    height: 80px;
    
}
::v-deep .el-table .warning-row {
  background-image: url(E:\实验室考核-云音乐\home1\public\行图片蓝.png);
  height: 60px;
}
::v-deep .el-table .success-row {
  background-image: url(E:\实验室考核-云音乐\home1\public\行图片白.png);
  height: 60px;
}







/*歌单评论*/
.content-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0%;
    margin-top: 20vh;
}

.user-content{
    margin-left: 10%;
    margin-right: 10%;
    /* width: 500px; */
    /* height: 200px; */
}

#content-title{
    margin-left: 0;
    margin-bottom: 2%;
    font-size: 40px;
}

.content-btn-container{
    margin-left: 92.4%;
    margin-top: 10px;
}

#content-btn{
    width: 100px;
    height: 40px;
    font-size: 18px;
    
}

.content-show-container{
    margin-left: 10%;
    margin-right: 10%;
    height: 600px;
}

.content-show-container{
    margin-left: 10%;
    height: 800px;

}

.content-show-title-container{
    margin-top: 5%;
    font-size: 30px;
}

.divider{
    margin-top: 1%;
    height: 2px;
    width: 100%;
    background-color: gray;
}

.show{
    padding-top: 5vh;
    
}

.content_time{
    color: gray;
    font-weight:400;
    margin-bottom: 0.5vh;
}

.content_author{
    margin-bottom: 1.5vh;
}

.show_divider{
    margin-top: 1vh;
    height: 2px;
    width: 100%;
    background-color: #74c0f6;
}

.show_btn_container{
    padding-top: 2vh;
    margin-left: 95%;
}

.show_btn_container:after{
    content: attr(data-attr);
}

/*空余空间*/
.space{
    height: 50vh;
}
</style>


<script setup>


import { Star,FolderAdd } from '@element-plus/icons-vue'

import { ref,onMounted,reactive } from 'vue'

import { useRouter,useRoute } from 'vue-router';

import axios from "axios";


const flag = ref(false)
const route = useRoute()
const list = ref([])
const isStar = ref("收藏")
const isLike = ref("喜欢")
const my_comment = ref("aaa")
let data = reactive({
    params:route.params
})

onMounted(async()=>{
    try{
        const response = await axios.post()
        list.value = response.data
    }
    catch(error){
        console.error(error)
    }
})

let starNumber1 = ref(244)
let starNumber2 = ref(244)
let starNumber3 = ref(244)
const flag1 = ref(true)
const flag2 = ref(true)
const flag3 = ref(true)
const started = ref(false)


//发表评论
const submitComment= () => {
  axios.post('/',{Comment:my_comment})
  .then(function(response){
    if(response.data){
      alert("评论成功")
    }
    else{
      alert("评论失败")
    }
  })
  .catch(function(error){
    console.error(error)
  })

  flag.value = !flag.value
}

//收藏歌单
const starSongList = () =>{
    isStar.value = "已收藏"
    axios.post('/',{id:data.params.id})
  .then(function(response){
    if(response.data){
      alert("收藏成功")
    }
    else{
      alert("收藏失败")
    }
  })
  .catch(function(error){
    console.error(error)
  })
}

function touchStar1(){
    if(flag1.value){
        starNumber1.value += 1;
    }
    else{
        starNumber1.value -= 1;
    }
    flag1.value = !flag1.value;
    
}

function touchStar2(){
    if(flag2.value){
        starNumber2.value += 1;
    }
    else{
        starNumber2.value -= 1;
    }
    flag2.value = !flag2.value;
}

function touchStar3(){
    if(flag3.value){
        starNumber3.value += 1;
    }
    else{
        starNumber3.value -= 1;
    }
    flag3.value = !flag3.value;
}

const tableRowClassName = ({ row, rowIndex }) => {

    if (rowIndex % 2 === 0) {
      return "warning-row";
    }
    else if (rowIndex % 2 !== 0) {
      return "success-row";
    }
  
  return "";
};


const tableData = ref([])

onMounted(async()=>{
    try{
        const response = await axios.post('',{id:data.params.id},{headers: {
        'Content-Type': 'application/x-www-form-urlencoded',},})
        tableData.value = response.data
    }
    catch(error){
        console.error(error)
    }
})
</script>



