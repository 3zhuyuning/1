<template>
<nav class="container">
    <div class="header">
        <div class="username-container">
            <p class="username">我的音乐</p>
        </div>
    </div>
    <div class="big-btn-container">

        <div class="btn-container" id="song-btn-container" ref="mySong_btn" ><RouterLink to="/views/mySong" class="btn" @click="touchMySong">歌曲</RouterLink></div>

        <div class="btn-container" id="songList-btn-container" ref="mySongList_btn"><RouterLink to="/views/mySongList" class="btn" @click="touchMySongList">歌单</RouterLink></div>

    </div>
</nav>
    
<RouterView class="show"></RouterView>
    
    
  
</template>


<script setup>

import { RouterLink, RouterView } from 'vue-router';

import { ref } from 'vue';

import { useStore } from 'vuex';

// Define a ref for userId
const userId = ref(null);

// Access the Vuex store
const store = useStore();

const mySong_btn = ref()
const mySongList_btn = ref()

function touchMySong(){
    mySong_btn.value.style.backgroundColor = "#39adff"
    mySongList_btn.value.style.backgroundColor = "#9ad5ff"
}

function touchMySongList(){
    mySongList_btn.value.style.backgroundColor = "#39adff"
    mySong_btn.value.style.backgroundColor = "#9ad5ff"
}


</script>


<style scoped>

.header{
    padding: 0%;
    margin: 0%;
    border: none;
    width: 100%;
    height: 40vh;
    background-color: #9ad5ff;
    z-index: -1;
    display: flex;
}

.username-container{
    margin: 0%;
    height: auto;
    width: auto;
    margin-top: 20vh;
    margin-left: 26vw;
    font-size: 40px;
}

.big-btn-container{
    width: 20vw;
    display: flex;
    height: 8vh;
    margin-left: 40vw;
    background-color: #9ad5ff;
    border-radius: 6px;
}

.btn-container{
    text-decoration: none;
    border-radius: 6px;
    width: 10vw;
    height: 8vh;
    font-size: 30px;
    /* background-color: #9ad5ff; */
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    text-decoration: none;
    color: aliceblue;
}

#song-btn-container{
    background-color: #39adff;
}

.btn-container:hover{
    background-color: #39adff;
}
.btn{
    text-decoration: none;
    color: aliceblue;
}

.show{
    margin-top: 5vh;
}

</style>

