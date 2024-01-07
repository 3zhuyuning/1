<template>


  
  
   <div class="mrdt"></div>

   <!--热门推荐-->
  <div class="background_container">
    <div class="container">
      <div class="text"><p>热门推荐</p></div>
      <el-carousel :interval="4000" type="card" height="20vw" indicator-position="outside">
        <el-carousel-item v-for="SongRankDTO in hot_song" :key="SongRankDTO.id" @click="ChangeToSong(SongRankDTO.id)">
          <el-image style="width: 100%; height: 100%;" :src="SongRankDTO.picturePath" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>



    <!--新歌首发-->
    <div class="background_container">
      <div class="container">
        <div class="text"><p>新歌首发</p></div>
        <el-carousel :interval="4000" type="card" height="20vw" indicator-position="outside">
          <el-carousel-item v-for="SongRankDTO in new_song" :key="SongRankDTO.id" @click="ChangeToSong(SongRankDTO.id)">
            <el-image style="width: 100%; height: 100%;" :src="SongRankDTO.picturePath"  />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>



  <!--歌单推荐-->
  <div class="background_container">
   <div class="container">
      <div class="text"><p>歌单推荐</p></div>
      <el-carousel :interval="4000" type="card" height="20vw" indicator-position="outside">
        <el-carousel-item v-for="SongListRankDTO in songList_list" :key="SongListRankDTO.id" @click="ChangeToList(SongListRankDTO.id)">
          <el-image style="width: 100%; height: 100%" :src="SongListRankDTO.picturePath"  />
        </el-carousel-item>
      </el-carousel>
   </div>
  </div>


  <!--每日热评-->
  <div class="container">
    <div class="text"><p>每日热评</p></div>
                <div class="show" v-for="(comment_list, id) in comment_list" :key="id" >
                    <h3 class="content_time">{{ comment_list.date }}</h3>
                    <h2 class="content_author">{{ comment_list.author }}:</h2>
                    <p class="comment_content">
                      {{ comment_list.detail }}
                    </p>
                    <div class="show_btn_container" :data-attr="starNumber1">
                        
                    </div>
                    <div class="show_divider"></div>
                </div>
                
                <div class="space"></div>
            
    </div>
    

  </template>
  
  <script setup>
  import {useRouter} from 'vue-router'
  
  import { ref, onMounted } from 'vue'; 

  import axios from 'axios';

  const router=useRouter()
  
  const new_song = ref([])

  const hot_song = ref([])

  const songList_list = ref([])

  const comment_list = ref([])

  onMounted(async() =>{

    //获取热门推荐
    try{
      const response = await axios.get("http://10.194.9.33:8080/songRank");
      hot_song.value = response.data
      
    }
    catch(error){
      console.error(error);
    }
    
    //获取新歌首发
    try{
      const response = await axios.get("http://10.194.9.33:8080/newSongs");
      new_song.value = response.data
    }
    catch(error){
      console.error(error);
    }

    //获取歌单推荐
    try{
      const response = await axios.get("http://10.194.9.33:8080/songListRank");
      songList_list.value = response.data
      
    }
    catch(error){
      console.error(error);
    }

    //获取每日热评
    try{
      const response = await axios.get("http://10.194.9.33:8080/commentRank");
      comment_list.value = response.data
      
    }
    catch(error){
      console.error(error);
    }
  })

  
  

  

  const ChangeToList = (songListId) => {
    router.push({
    name: 'songList', 
    params:{
      songListId: songListId,
    },
  });
  }

  const ChangeToSong = (songId) => {
  // 跳转到song组件，并传递参数
  router.push({
    name: 'song', 
    params:{
      songId: songId,
    },
  });
};
  


  </script>
  
  <style scoped>
  *{
    margin: 0;
    display: block;
    padding: 0;
    text-decoration: none;
}
.mrdt{
    background-image: url(E:\实验室考核-云音乐\home1\src\assets\每天单推背景.jpg);
    background-repeat:none;
    background-size: contain;
    height: 385px;
    width: 100%;
}

.hot_photo{
  width: 100%;
  height: 100%;
  background-image: url(E:\实验室考核-云音乐\home1\public\我的梓妍.jpg);
  background-position: 50% 50%;
  background-size: cover;
}

.background_container{
  background-image: url(E:\实验室考核-云音乐\home1\src\assets\background1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 98vw;
  height: 60vh;
  z-index: -1;
}
.container{
      /* background-image: url(E:\实验室考核-云音乐\home1\src\assets\background1.jpg);
      background-repeat: no-repeat;
      background-size: cover; */
      width: 80vw;
      margin-left: 10vw;
      height: 50vh;
      /* padding-bottom: 15vh; */
      padding-top: 0vh;
    }
    .text{
        text-align: center;
    }
    .text p{
        font-weight:530;
        font-size: 37px;
        margin-top: 0;
        padding-top: 50px;
        padding-bottom: 45px;
    }
    
    .el-carousel__item h3 {
      color: #0856ba;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
      width: 25vw;
      height: 20vw;
      margin-left:10vw ;
      
      margin-bottom: 20vw;
    }
    
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
      width: 25vw;
      height: 20vw;
      margin-left:10vw ;
      
      margin-bottom: 20vw;
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

.comment_content{
  height: 10vh;
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
    margin-top: 1.5vh;
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




