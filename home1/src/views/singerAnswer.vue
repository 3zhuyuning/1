<template>
    <div class="number_container">
        <p>已为你搜索到{{number}}个相关歌手</p>
    </div>

    <div class="singer_container_container">

        <div class="singer_container" id="singer1">
            <div class="singer1_photo"></div>
            <div class="singer1_name"> {{ singer1_name }} </div>
        </div>

        <div class="singer_container" id="singer2">
            <div class="singer2_photo"></div>
            <div class="singer2_name">{{ singer2_name }}</div>
        </div>

        <div class="singer_container" id="singer3">
            <div class="singer3_photo"></div>
            <div class="singer3_name">{{ singer3_name }}</div>
        </div>

        <div class="singer_container" id="singer4">
            <div class="singer4_photo"></div>
            <div class="singer4_name">{{ singer4_name }}</div>
        </div>

    </div>

    <div class="singer_container_container" id="container2">
        <div class="singer_container" id="singer1">
            <div class="singer1_photo"></div>
            <div class="singer1_name"> {{ singer1_name }} </div>
        </div>
    </div>

    <div class="space"></div>
</template>



<script setup>

import { ref,reactive,onMounted } from "vue"
import{ useRoute,useRouter } from "vue-router"
import axios from "axios";

const route = useRoute()
let data = reactive({
    params:route.params
})

const number = ref(0)
const singer1_name = ref("陈奕迅")
const singer2_name = ref("陈奕迅")
const singer3_name = ref("陈奕迅")
const singer4_name = ref("陈奕迅")

onMounted(async()=>{
    try{
        const response = await axios.post('http://10.194.9.33:8080/selectSongByNameLike',{name:data.params.keyword},{headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },})
      number.value = response.data.total
    }
    catch(error){
        console.error(error)
    }
})

</script>



<style scoped>
.number_container{
    height: 5vh;
    width: 98.1vw;
    margin-top: 3vh;
    margin-bottom: 2vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: gray;
}

/*第一列*/
.singer_container_container{
    display: flex;
    width: 98.1vw;
    height: 40vh;
    /* background-color: aqua; */
}

.singer_container{
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 18vw;
    /* background-color: antiquewhite; */
    margin-left: 7vw;
}

#singer1{
    margin-left: 10vw;
}
.singer1_photo{
    background-image: url(E:\实验室考核-云音乐\home1\public\R-C.jpg);
    width: 15vw;
    height: 18vw;
    background-position: 50% 50%;
    background-size: cover;
}
.singer1_name{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vw;
    width: 15vw;
    font-size: 20px;
}

/*第一列第二个歌手*/
.singer2_photo{
    background-image: url(E:\实验室考核-云音乐\home1\public\R-C.jpg);
    width: 15vw;
    height: 18vw;
    background-position: 50% 50%;
    background-size: cover;
}
.singer2_name{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vw;
    width: 15vw;
    font-size: 20px;
}

/*第一列第三个歌手*/
.singer3_photo{
    background-image: url(E:\实验室考核-云音乐\home1\public\R-C.jpg);
    width: 15vw;
    height: 18vw;
    background-position: 50% 50%;
    background-size: cover;
}
.singer3_name{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vw;
    width: 15vw;
    font-size: 20px;
}

/*第一列第四个歌手*/
.singer4_photo{
    background-image: url(E:\实验室考核-云音乐\home1\public\R-C.jpg);
    width: 15vw;
    height: 18vw;
    background-position: 50% 50%;
    background-size: cover;
}
.singer4_name{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vw;
    width: 15vw;
    font-size: 20px;
}

/*底部空余空间*/
.space{
    height: 20vh;
    margin-top: 10vh;
    width: 98.1vw;
    background-color: #39adff;
}
</style>

