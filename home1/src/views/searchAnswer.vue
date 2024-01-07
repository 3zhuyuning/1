<template>

<div class="header_space">
    <div class="keyword_container">
        {{ data }}
    </div>
</div>

<div class="big-btn-container">

    <div class="btn-container" id="song-btn-container" ref="song_btn" ><RouterLink :to="{ name: 'songAnswer', params: { keyword: data } }" class="btn" @click="touchSong">歌曲</RouterLink></div>

    <div class="btn-container" id="singer-btn-container" ref="singer_btn"><RouterLink :to="{ name: 'singerAnswer', params: { keyword: data } }" class="btn" @click="touchSinger">歌手</RouterLink></div>

    <div class="btn-container" id="songList-btn-container" ref="songList_btn"><RouterLink :to="{ name: 'songListAnswer', params: { keyword: data } }" class="btn" @click="touchSongList">歌单</RouterLink></div>

</div>

<RouterView class="show"></RouterView>

</template>



<script setup="props">

import { ref,reactive,onMounted } from "vue"

import { RouterLink, RouterView } from 'vue-router';

import { useRouter,useRoute } from 'vue-router';

import { useStore } from 'vuex';
const store = useStore();

const data = store.getters.getKeyword;




const song_btn = ref()
const songList_btn = ref()
const singer_btn = ref()

function touchSong(){
    song_btn.value.style.backgroundColor = "#39adff"
    songList_btn.value.style.backgroundColor = "#9ad5ff"
    singer_btn.value.style.backgroundColor = "#9ad5ff"
    
}

function touchSongList(){
    songList_btn.value.style.backgroundColor = "#39adff"
    song_btn.value.style.backgroundColor = "#9ad5ff"
    singer_btn.value.style.backgroundColor = "#9ad5ff"
}

function touchSinger(){
    singer_btn.value.style.backgroundColor = "#39adff"
    song_btn.value.style.backgroundColor = "#9ad5ff"
    songList_btn.value.style.backgroundColor = "#9ad5ff"
}

</script>



<style scoped>

.header_space{
    height: 30vh;
    width: 98.1vw;
    background-color: #63a7d8;
}

.keyword_container{
    margin-top: 10vh;
    height: 8vh;
    width: 40vw;
    background-color: white;
    float: left;
    margin-left: 30.5vw;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 25px;
}

.big-btn-container{
    width: 33vw;
    display: flex;
    height: 8vh;
    margin-left: 34vw;
    background-color: #9ad5ff;
    border-radius: 6px;
}

.btn-container{
    text-decoration: none;
    /* border-radius: 6px; */
    width: 11vw;
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

