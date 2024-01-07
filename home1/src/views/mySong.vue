<template>
    <div class="container">

        <div id="my-songList-title-container" class="title-container"> 
            <p id="my-songList-title" class="title" >曲库音乐</p>
        </div>

        <div class="songlist">
            <el-table :data="tableData" stripe style="width: 100%" height="97.4vh" :row-class-name="tableRowClassName" header-cell-class-name="table_header">
            <el-table-column label=" " width="102px" type="index" />
            <el-table-column prop="song" label="歌曲" width="366px" />
            <el-table-column prop="singer" label="歌手" width="235px" />
            <el-table-column prop="time" label="时长" width="284px" />
            <el-table-column prop="times" label="播放量"  />
            </el-table>
        </div>
        <div class="update-header-container">
          <div id="upMusic-title-container" class="title-container" > 
            <p id="my-songList-title" class="title" >我的上传</p>
          </div>
            
        
        </div>
        
        

        <div class="songlist">
            <el-table :data="tableData" stripe style="width: 100%" height="97.4vh" :row-class-name="tableRowClassName" header-cell-class-name="table_header">
            <el-table-column label=" " width="102px" type="index" />
            <el-table-column prop="song" label="歌曲" width="366px" />
            <el-table-column prop="singer" label="歌手" width="235px" />
            <el-table-column prop="time" label="时长" width="284px" />
            <el-table-column prop="times" label="播放量"  />
            </el-table>
        </div>

        <div class="space"></div>
    </div>
  </template>

  <style scoped>

    .container{
        display: flex;
        flex-direction: column;
    }

    #my-songList-container{
        margin-bottom: 30vh;
    }

    .update-header-container{
      width: 80vw;
      height: 20vh;
      display: flex;
    }

    .upload-demo{
      margin-left: 0vw;
      margin-top: 3vh;
    }

    #upMusic-title-container{
      display: flex;
    }
    
    .title-container{
        width:20vw;
        height: 10vh;
        background-image: url(E:\实验室考核-云音乐\home1\public\行图片蓝.png);
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .title{
        
        font-size: 40px;
        margin-left: 3vw;
        color: #9ad5ff;
    }
    .songlist{
        margin-top: 1vw;
        width: 80vw;
        height: 800px;
        margin-left: 11.5%;
        margin-bottom: 20vh;
    }

    ::v-deep .table_header{
        font-size: 20px;
        color: gray;
        height: 80px;
    }

    ::v-deep .el-table .odd-row {
        background-image: url(E:\实验室考核-云音乐\home1\public\行图片蓝.png);
        height: 60px;
    }

    ::v-deep .el-table .even-row {
        background-image: url(E:\实验室考核-云音乐\home1\public\行图片白.png);
        height: 60px;
    }

    .space{
        height: 20vh;
        width: 100%;
        background-color: #39adff;
        margin-top: 5vh;
    }
        
  </style>
  
  <script  setup lang>
import { ref,onMounted } from 'vue'

import { ElMessage, ElMessageBox, affixProps } from 'element-plus'

import axios from 'axios';


// const fileList = ref<UploadUserFile[]>([
//   {
//     name: 'element-plus-logo.svg',
//     url: 'https://element-plus.org/images/element-plus-logo.svg',
//   },
//   {
//     name: 'element-plus-logo2.svg',
//     url: 'https://element-plus.org/images/element-plus-logo.svg',
//   },
// ])


const public_list = ref([])
const update_list = ref([])

onMounted(async() => {

  //获取曲库歌单
  try{
    const response = await axios.get('')
    public_list.value = response.data
  }
  catch(error){
    console.error(error)
  }

  //获取上传歌单
  try{
    const response = await axios.get('')
    update_list.value = response.data
  }
  catch(error){
    console.error(error)
  }

})





const tableRowClassName = ({ row, rowIndex }) => {

if (rowIndex % 2 === 0) {
  return "odd-row";
}
else if (rowIndex % 2 !== 0) {
  return "even-row";
}

return "";
};

  const tableData = [
  {
    Number:'1',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'2',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'3',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'4',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'5',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'6',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'7',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'8',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'9',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'10',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'11',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'12',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'1',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'2',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'3',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
  {
    Number:'4',
    song: '阴天快乐',
    singer: '陈奕迅',
    time: '04:20',
    times:'102.3万'
  },
]
  </script>
