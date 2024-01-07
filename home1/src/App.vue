<template>
  <nav class="header">
    
      <div class="key" id="return-key"><RouterLink to="/"><el-icon v-if="back"><Back/></el-icon></RouterLink></div>
      <div id="space"></div>
      <div class="key" id="common-key" ref="show_key"><RouterLink to="/" class="btn1" id="show_btn" @click="inShow">音乐展</RouterLink></div>
      <div class="key" id="common-key" ref="my_key"><router-link to="/views/myMusic" class="btn1"  id="my_btn" @click="inMy">我的音乐</router-link></div>
      
      <el-input  v-model="searchKeyword" @keyup.enter.native="search(searchKeyword)" class="search" placeholder="搜索音乐/歌单/用户"  type="text" prefix-icon="Search"/>
      
      <div class="dl">
          <login class="btn"></login>
      </div>
      <!-- <div class="tx"><el-icon size="60"><User /></el-icon></div> -->
      
  </nav>
   <RouterView class="show" ></RouterView>
      
      
  </template>
  
  <style scoped>
  
  *{
      margin: 0;
      padding: 0;
      text-decoration:none;
      list-style: none;
      
  }
   .header{
    margin-bottom: 0%;
   }
  .header{
      height: 80px;
      background-color: #39adff;
      padding: 0;
      width: 100%;
  }
  #space{
      height: 100%;
      width: 50px;
      float: left;
  }
  .show{
    margin: 0%;
  }
  .key{
      display: flex;
      margin-left: 0px;
      margin-top: 0;
      margin-bottom:0;
      float: left;
      width: 150px;
      height: 100%;
      font-size: 20px;
      justify-content: center;
      align-items: center;
  }
  .btn1{
      display: block;
      justify-content: center;
      align-items: center;
      float: left;
      color: #d9efff;
  }
  #show_btn{
    color: v-bind(show_textColor);
  }

  #my_btn{
    color: v-bind(my_textColor);
  }

  #common-key:hover > .btn1{
      transition-duration: 1.1s;
      color: #39adff;
  }
  #common-key:hover{
      background-color: #d9efff;
      transition-duration: 1.1s;
  }
  
  .search{
      margin-top: 10px;
      margin-bottom:10px;
      margin-left: 150px;
      width: 400px;
      height: 50px;
      text-align: center;
      font-size: 15px;
      float: left;
      border: none;
      border-radius: 10px;
      outline: none;
  }
  .search:hover{
      box-shadow:0 12px 16px 0 rgba(0,0,0,0.3),0 17px 50px 0 rgba(0,0,0,0.6);
      transition-duration: 1.1s;
  }
  .dl{
      display: flex;
      background-color: #168ae3;
      margin-left: 180px;
      margin-right: 50px;
      border: none;
      margin-top: 0;
      margin-bottom:0;
      height: 100%;
      width: 150px;
      justify-content: center;
      align-items: center;
      float: left;
  }
  .dl .btn{
      font-size: 20px;
      color: #d9efff;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      background-color: rgba(0,0,0,0);
      border: none;
      width: 100%;
      height: 100%;
  }
  .tx{
      width: 100px;
      float: left;
      margin-left: 10px;
      height: 100%;
      margin-top: 10px;
  }
  .photo{
      width: 100%;
      height: 100%;
      
  }
  .dl:hover > .btn{
      color: #526d80;
      transition-duration: 0.9s;
  }
  .dl:hover{
      background-color: #74c0f6;
      transition-duration: 0.9s;
  }
  
  </style>
  
  <script setup>

  import {useRouter} from 'vue-router'

  import { useStore } from 'vuex';

  import { ref } from 'vue';

  import login from './components/login.vue';

//   import router from './router/index'

//   const view = ref('')
  const router=useRouter()

  const store = useStore();

  const searchKeyword = ref('');

  let back = ref(false);
  let show_key = ref()
  let my_key = ref()
  let show_textColor = ref("#d9efff")
  let my_textColor = ref("#d9efff")
//   const router = view.router
  

//   onLocationChange(()=>{
//     if(router.name != 'home' && router.name != 'myMusic'){
//         back = true;
//     }
//     else{
//         back = false;
//     }
//   })

//   onLocationChange(()=>{
//     if(router.name != home){
//         back = true;
//     }
//     else{
//         back = false;
//     }
//   })

  function inShow(){
    back = false
    show_key.value.style.backgroundColor = "#d9efff"
    my_key.value.style.backgroundColor = "#39adff"
    show_textColor.value = "#39adff"
    my_textColor.value = "#d9efff"
  }
  
  function inMy(){
    back= false
    my_key.value.style.backgroundColor = "#d9efff"
    show_key.value.style.backgroundColor = "#39adff"
    my_textColor.value = "#39adff"
    show_textColor.value = "#d9efff"
  }
  
  function inHome(){
    back = false
    my_key.value.style.backgroundColor = "#39adff"
    show_key.value.style.backgroundColor = "#39adff"
    show_textColor.value = "#d9efff"
    my_textColor.value = "#d9efff"
  }

  const search = (searchKeyword) => {
    store.dispatch('setKeyword', searchKeyword);
    alert(searchKeyword)
    router.push({
    name: 'searchAnswer', 
  });   
};
  </script>
  
