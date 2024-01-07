<template>
    

    
    <nav class="father">
    <div id ="my-songList-container" class="container">

        <div id="my-songList-title-container" class="title-container"> 
            <p id="my-songList-title" class="title" >我的歌单</p>
        </div>

        <div class="songList">
            <el-table :data="tableData" stripe style="width: 100%" height="80vh"  header-cell-class-name="table_header" :row-class-name="tableRowClassName">
                <el-table-column width="330" />
                <el-table-column prop="name" label="歌单" width="380" />
                <el-table-column prop="number" label="曲目数" width="240" />
                <el-table-column prop="author" label="创建人" width="240" />
                <el-table-column prop="times" label="播放量" />
            </el-table>
        </div>

    </div>




    <div id="add-songList-container" class="container">

        <div id="add-songList-title-container" class="title-container">
            <p id="add-songList-title" class="title">收藏歌单</p>
        </div>

        <div class="songList">
            <el-table :data="tableData" stripe style="width: 100%" height="100vh"  header-cell-class-name="table_header" :row-class-name="tableRowClassName">
                <el-table-column width="330" />
                <el-table-column prop="name" label="歌单" width="380" />
                <el-table-column prop="number" label="曲目数" width="240" />
                <el-table-column prop="author" label="创建人" width="240" />
                <el-table-column prop="times" label="播放量" />
            </el-table>
        </div>

    </div>

    <div class="space"></div>

</nav>

  </template>

  <style scoped>
    
    .father{
        display: flex;
        flex-direction: column;
    }
    .container{
        width: 100%;
        height: 50vh;
    }
    #my-songList-container{
        margin-bottom: 30vh;
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

    .songList{
        margin-top: 1vw;
        width: 100%;
        /* height: 4380; */
        /* margin-left: 10%; */
}

    #add-songList-container{
      margin-top: 20vh;
    }
    ::v-deep .table_header{
        font-size: 20px;
        color: gray;
        height: 80px;
    }

    ::v-deep .el-table .odd-row {
        background-image: url(E:\实验室考核-云音乐\home1\public\行图片蓝.png);
        height: 10vh;
        font-size: 16px;
    }

    ::v-deep .el-table .even-row {
        background-image: url(E:\实验室考核-云音乐\home1\public\行图片白.png);
        height: 11vh;
        font-size: 16px;
    }

    .space{
        height: 20vh;
        width: 100%;
        background-color: #39adff;
        margin-top: 60vh;
    }

  </style>
  
  <script setup>

    import { reactive,ref,onMounted } from "vue"
    import axios from 'axios'
    
    const my_list = ref([])
    const star_list = ref([])

    onMounted(async()=>{

      //获取我的歌单
      try{
        const response = await axios.get('http://10.194.9.33:8080/collectSongList')
        my_list.value = response.data
      }
      catch(error){
        console.error(error)
      }

      //获取收藏歌单
      try{
        const response = await axios.get('')
        star_list.value = response.data

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
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },

    {
      name: '论如何给母猪配种',
      number: '33',
      author: '朱宇宁',
      times:'333'
    },
  ]
  </script>

