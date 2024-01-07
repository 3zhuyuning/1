<template>
    <div class="number_container">
        <p>已为你搜索到{{number}}个相关歌曲</p>
    </div>

    <div class="songList">
            <el-table :data="tableData" stripe style="width: 100%" height="80vh"  header-cell-class-name="table_header" :row-class-name="tableRowClassName">
                <el-table-column width="170" />
                <el-table-column  prop="id" width="160" />
                <el-table-column prop="name" label="歌曲" width="380" />
                <el-table-column prop="singer" label="歌手" width="240" />
                
                <el-table-column prop="collectNums" label="播放量" />
            </el-table>
    </div>

    <div class="space"></div>
</template>



<script setup>

import { affixProps } from 'element-plus';
import { ref, onMounted,reactive } from 'vue';

import { useRouter,useRoute } from 'vue-router';

import axios from 'axios'

const route = useRoute();
let data = reactive({
    params: route.params 
})

const number = ref(0)

const tableRowClassName = ({ row, rowIndex }) => {

if (rowIndex % 2 === 0) {
  return "warning-row";
}
else if (rowIndex % 2 !== 0) {
  return "success-row";
}

return "";
};

const tableData = ref()

onMounted(async()=>{
  try{
    const response = await axios.post('http://10.194.9.33:8080/selectSongByNameLike',{name:data.params.keyword},{headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },})
      number.value = response.data.total
      tableData.value = response.data.songDTOS
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

.space{
    height: 20vh;
    margin-top: 10vh;
    width: 98.1vw;
    background-color: #39adff;
}

</style>

