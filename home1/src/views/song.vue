<template>
  
  <div class="container">
    <!--音乐-->
    <div class="background-container" :style="{ backgroundImage:'url('+ backgroundImage +')' }"></div><!--作为背景，与播放器容器平行-->


    <div class="song-container">


      <div class="title-container">
        <h1 class="song-name">{{ songName }}</h1>
        <h3 class="song-author">by {{ singer }}{{ userId }}</h3>
      </div>

      <div class="circle-container">
        <div class="song-photo" :style="{ backgroundImage:'url('+ backgroundImage +')' }"></div>
      </div>

      <div class="control">

        <el-slider v-model="progress" :max="100" @change="updateProgress" :show-tooltip="false" bar-color="#6A6A6"></el-slider>
        <el-slider v-model="volume"  :show-tooltip="false"   @change="updateVolume" />
        
        <button class="btn" id="back-btn"><Back></Back></button>

        <button @click="togglePlayPause" class="btn" id="play-btn">
          <VideoPause v-if="isPlaying" />
          <VideoPlay v-else="isPlaying"/>
        </button>

        <button class="btn" id="next-btn"><Right></Right></button>

      </div>
      
    </div>


    <!--评论区-->
    <div class="comment-container">
      <div class="user-content">
                <p id="content-title">评论</p>
                <el-input id="content-input"  v-model="my_comment"  maxlength="200" placeholder="留下你自己的感受吧" show-word-limit type="textarea" :rows="6"></el-input>
                <div class="content-btn-container"><el-button type="primary" id="content-btn" @click="submitComment" >发表</el-button></div>
            </div>

            <div class="content-show-container">
                <div class="content-show-title-container">
                    <p>精彩评论</p>
                    <div class="divider"></div>
                </div>
                
                <div class="show" v-if="isCommenting" >
                    <h3 class="content_time">2023年3月3日</h3>
                    <h2 class="content_author">你的评论：</h2>
                    <p class="content-text">
                        {{ my_comment }}
                    </p>
                    <div class="show_btn_container" :data-attr="starNumber">
                        <el-button type="primary" :icon="Star" circle :dark="isDark" plain @click="touchStar" />
                    </div>
                    <div class="show_divider"></div>
                </div>
                

                <!--精彩评论本体-->
                <!--评论-->
                <div class="text"><p>每日热评</p></div>
                <div class="show" v-for="(comment_list, id) in comment_list" :key="id" >
                    <h3 class="content_time">{{ comment_list.createDate }}</h3>
                    <h2 class="content_author">{{ comment_list.userId }}：</h2>
                    <p class="content">
                      {{ comment_list.detail }}
                    </p>
                    <div class="show_btn_container" :data-attr="starNumber1">
                        
                    </div>
                    <div class="show_divider"></div>
                </div>


                <!--评论2-->
                <!-- <div class="show">
                    <h3 class="content_time">2023年3月3日</h3>
                    <h2 class="content_author">薛定谔的猫：</h2>
                    <p class="content-text">余华在《在细雨中呼喊》写道：“我不再装模做样地拥有很多朋友，而是回到孤单之中，
                        以真正的我开始了独自生活。”我们好像总在不断的寻求陪伴与他人的认可，太看重他人在自己生命中的参与，
                        后来才发现，其实世界是自己的，与他人毫无关系</p>
                    <div class="show_btn_container" :data-attr="starNumber">
                        <el-button type="primary" :icon="Star" circle :dark="isDark" plain @click="touchStar" />
                    </div>
                    <div class="show_divider"></div>
                </div> -->


                <!--评论3-->
                <!-- <div class="show">
                    <h3 class="content_time">2023年3月3日</h3>
                    <h2 class="content_author">薛定谔的猫：</h2>
                    <p class="content-text">余华在《在细雨中呼喊》写道：“我不再装模做样地拥有很多朋友，而是回到孤单之中，
                        以真正的我开始了独自生活。”我们好像总在不断的寻求陪伴与他人的认可，太看重他人在自己生命中的参与，
                        后来才发现，其实世界是自己的，与他人毫无关系</p>
                    <div class="show_btn_container" :data-attr="starNumber">
                        <el-button type="primary" :icon="Star" circle :dark="isDark" plain @click="touchStar" />
                    </div>
                    <div class="show_divider"></div>
                </div> -->
                
            </div>
    </div>

  </div>

</template>

<script setup="props">

import { VideoPlay, VideoPause, Back, Right } from '@element-plus/icons-vue'
import { Star,FolderAdd } from '@element-plus/icons-vue'
import { ref, onMounted,reactive,onBeforeUnmount } from 'vue';
import { Howl } from 'howler';
import { ElSlider, alertEffects } from 'element-plus';
import { useRouter,useRoute } from 'vue-router';
import axios from 'axios';
import { useStore } from 'vuex';
const store = useStore();

const userId = ref(store.state.userId);

const route = useRoute();
let data=reactive({
    params: route.params //语法为params: route.params，传过来的为一个对象,以该变量为例子，应调用为data.params.songId
})


const audioSrc = ref('https://sodagroup-cloudmusic.oss-cn-guangzhou.aliyuncs.com/musicResource/b796eeac-0ae2-4509-b244-bc3b2e6fa505.mp3');

const sound = ref(null);
const isPlaying = ref(false);
const progress = ref(0);
const songName = ref("阴天快乐")
const singer = ref("")
const backgroundImage = ref('');
const my_comment = ref('')
const isCommenting = ref(false)
const comment_list = ref([])
const volume = ref(50);

//控制音乐播放或暂停
const togglePlayPause = () => {
  if (isPlaying.value) {
    sound.value.pause();
  } 
  else {
    sound.value.play();
  }
  isPlaying.value = !isPlaying.value;
  
};

//控制音量
const updateVolume = () => {
  if (sound.value) {
    sound.value.volume(volume.value / 100);
  }
};

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

  isCommenting.value = !isCommenting.value
}


//更新进度条
const updateProgress = () => {
  if (sound.value) {
    const duration = sound.value.duration();
    const seekTime = (duration / 100) * progress.value;
    sound.value.seek(seekTime);
  }
};

//给计时器存名字
let intervalId;

onMounted(async() => {

  //获取歌曲资源
  try{
    const response = await axios.post('http://10.194.9.33/songPlay',{id:data.params.songId},{headers: {
        'Content-Type': 'application/x-www-form-urlencoded',}})
    songName.value = response.data.name
    singer.value = response.data.singer
    audioSrc.value = response.data.songPath
    backgroundImage.value = response.data.picturePath
  }
  catch(error){
    console.error(error)
  }

  //获取精彩评论
  try{
    const response = await axios.post('http://10.194.9.33:8080/selectComment',{songId:data.params.songId},{headers: {
        'Content-Type': 'application/x-www-form-urlencoded',}})
    comment_list.value = response.data

  }
  catch(error){
    console.error(error)
  }
  


  sound.value = new Howl({
    src: [audioSrc.value],
    autoplay: false,
    loop: false,
    volume: volume.value / 100,
  });

  sound.value.on('end', () => {
    isPlaying.value = false;
  });

  // 模拟 timeupdate 的功能
  intervalId = setInterval(() => {
    if (sound.value && isPlaying.value) {
      const currentTime = sound.value.seek();
      const duration = sound.value.duration();
      progress.value = (currentTime / duration) * 100;
    }
  }, 500);
});

onBeforeUnmount(() => {
  // 在组件销毁前清除计时器
  clearInterval(intervalId);
});

</script>




<style scoped>

.container{
  display: flex;
  height: 100%;
  width: 100%;

}

/*音乐*/
.song-container{
  width: 50%;
  height: 96vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  
}

.background-container{
  background-image: url(E:\实验室考核-云音乐\home1\public\R-C.jpg);
  filter: blur(10px); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;
  overflow: hidden;
  width: 50%;
  height: 96vh;
  position: absolute;
}

.title-container{
  width: 100%;
  margin-top: 3vh;
  height: 10vh;
  display: flex;
  flex-direction: column;
  /* text-align: center;
  align-items: center; */
}

.song-name{
  padding-left: 15vw;
  font-size: 45px;
  font-weight: 530;
  width: 20vw;
  text-align: center;
  display: flex;
  justify-content: center;

}

.song-author{
  margin-top: 0vh;
  margin-left:33vw
}

.circle-container{
  margin-top: 5vh;
  margin-left: 11vw;
  height: 26vw;
  width: 26vw;
  background-image: url(E:\实验室考核-云音乐\home1\public\唱片.png);
  z-index: 10;
  background-size: cover;
  border: none;
  padding:0;
  background-position: 50 50;

}

.song-photo{
  background-image:url(E:\实验室考核-云音乐\home1\public\R-C.jpg);
  background-size: cover;
  background-position: 50% 50%;
  margin-left: 3.6vw;
  margin-top: 6.6vh;
  border-radius: 9.5vw;
  z-index: 11;
  height: 19vw;
  width: 19vw;
  
}

.control{
  margin-top: 15vh;
  margin-left: 6vw;
  z-index: 2;
}

.btn{
  
  width: 4vw;
  height: 9vh;
  padding: 0;
  background-color: transparent;
  border: none;
}

#back-btn{
  margin-left: 9vw;
}

#play-btn{
  margin-left: 3vw;
  margin-right: 3vw;
}

/* #next-btn{
  margin-left: 3vw;
} */


/*滑动条*/
:deep(.el-slider__bar) {
  background-color: rgb(212, 204, 204);
}

/* 滑块颜色 */
:deep(.el-slider__button) {
  border: 3.5px solid #cbd2da;
  opacity: 0.6;
  background-color: #FFFFFF;
  margin-left: 5px;
}

/* :deep(.el-slider__marks-text) {
  font-weight: 400;
  color: #696262;
  font-size: 17px;
} */

:deep(.el-slider) {
  width: 36vw;
  height: 3vh; 
  position: relative;
  /* top: -14px;
  left: 2px;  */
}

:deep(.el-slider__runway){
    background-color:rgba(122, 118, 118, 0.53);
    
}

/*评论区*/
.comment-container{
  width: 50%;
  display: flex;
  border-radius:20px;
  flex-direction: column;
}

.user-content{
    margin-left: 10%;
    margin-right: 10%;
    /* width: 500px; */
    /* height: 200px; */
}

#content-title{
    margin-left: 0;
    margin-top: 4%;
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

.content{
  height: 10vh;
}

.content-show-container{
    margin-left: 10%;
    margin-right: 5%;
    height: 30vh;
}

.content-show-container{
    margin-left: 10%;
    height: 70vh;

}

.content-show-title-container{
    margin-top: 0%;
    font-size: 28px;
}

.divider{
    margin-top: 1%;
    height: 2px;
    width: 100%;
    background-color: gray;
}

.show{
    padding-top: 1vh;
    
}

.content_time{
    color: gray;
    font-weight:400;
    margin-bottom: 0.5vh;
}

.content_author{
    margin-bottom: 1.5vh;
}

/* .content-text{
  
} */

.show_divider{
    margin-top: 1vh;
    height: 2px;
    width: 100%;
    background-color: #74c0f6;
}

.show_btn_container{
    padding-top: 0vh;
    margin-left: 95%;
}

.show_btn_container:after{
    content: attr(data-attr);
}
</style>


  



