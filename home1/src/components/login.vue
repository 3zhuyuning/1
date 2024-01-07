<template>
    <button text @click="touchLogin" class="btn" >
      {{ login_btn }}
    </button>
    
    <el-dialog v-model="dialogFormVisible"  top="20vh" width="50%" center >
      <template #header>
        <div class="title">Welcome</div>
      </template>
      
      <nav class="slider">
        <a class="block1" href="#" ref="block1" @click="touchBlock1"><p>Login</p></a>
        <a class="block2" href="#" ref="block2" @click = touchBlock2><p>Register</p></a>
      </nav>  
      
      <el-form :model="user" ref="userForm" >

          <el-input v-model="user.name" autocomplete="off" placeholder="Username" input-style/>
      
          <el-input v-model="user.password" autocomplete="off"  type="password" placeholder="Password"  />
        
      </el-form>

      <template #footer height="50px">
        <div class="btn-container">
        <span class="dialog-footer">
          <el-button type="submit" @click="submitForm" class="login-btn" size="large" >
            {{btnContent}}
          </el-button>
        </span>
      </div>
      </template>
    
    </el-dialog>
  </template>
  








  <script setup>
  
  import { reactive, ref } from 'vue'

  import axios from 'axios';

  import { useStore } from 'vuex';

  
  const store = useStore();
  let dialogFormVisible = ref(false)
  let btnContent = ref("Enjoy now!")
  let login_btn = ref('登录')
  const userId = ref(0)

  const user = reactive({
    name:'',
    password:'',
  })


// const rules = {
//   name: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
//   password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
// };
  
  const block1 = ref()
  const block2 = ref()

  function touchLogin(){
    if(login_btn.value === '登录'){
      dialogFormVisible.value = true
    }
    else{
      alert("你已登录")
    }
  }
  
  function touchBlock2(event){
    block2.value.style.backgroundColor = "#65bff6"
    block1.value.style.backgroundColor = "#adc2d6"
    btnContent.value = "Touch to Register"
  }

  function touchBlock1(event){
    block2.value.style.backgroundColor = "#adc2d6"
    block1.value.style.backgroundColor = "#65bff6"
    btnContent.value = "Enjoy now!"
  }

  //因为使用async异步函数，所以使用的是try()catch()结构
  const submitForm = async () => {
  try {
    // 发送 POST 请求到后端
    if(btnContent.value === "Enjoy now!"){
      //在async函数中，写法为const response = await axios.post(url,对象,config) response为后端回复
      const response = await axios.post('http://10.194.9.33:8080/user/login', {
      name: user.name,
      password: user.password,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // 请求成功的处理逻辑
    if (response.data) {
      alert('登录成功！')
      login_btn.value = user.name
      userId.value = response.data
      store.dispatch('updateUserId', userId);
      store.commit('setAuthentication', true);
      dialogFormVisible.value = false
    }
    else{
      alert('用户或密码错误')
    }
    // 清空表单数据
    user.value = {
      name: '',
      password: '',
    };
    user.name = '';
    user.password = '';
    }
    else{
      const response = await axios.post('http://10.194.9.33:8080/user/register', {
      name: user.name,
      password: user.password,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // 请求成功的处理逻辑
    if (response.data) {
      alert('注册成功！')
      
    }
    else{
      alert('格式不规范')
    }
    // 清空表单数据
    user.value = {
      name: '',
      password: '',
    };
    user.name = '';
    user.password = '';
    }
  } 
  catch (error) {
    // 请求失败的处理逻辑
    console.error(error);
  }
};


  
  </script>









  <style scoped>
  .title{
  font-size: 40px;
  text-align: center;
  color: #65bff6;
  margin-bottom: 0;
}
.slider{
  display: flex;
  border-radius: 8px;
  width: 50%;
  text-align: center;
  height: 70px;
  margin-left: 25%;
  background-color: #adc2d6;
  margin-bottom: 60px;
}
.slider a{
  border-radius: 8px;
  display: block;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  float: left;
  width: 50%;
  height: 100%;
}
.block1{
  background-color: #65bff6;
}

  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  .btn{
    font-size: 20px;
    color: #eff1f1;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
  }
  .btn:hover{
    color: #3da2ea;
    transition-duration: 0.9s;
    background-color: rgba(63, 61, 61, 0)
  }
  .login-btn{
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 20px;
    margin-top: 0%;
    background-color: #65bff6;
    color: rgb(255, 255, 255);
  }
  .el-input{
    display: block;
    width: 300px;
    margin-bottom:15px;
    height: 45px;
    margin-right:35px;
    left: 17.5%;
    color: #65bff6;
    margin-top: 20px;
  }
.el-input>>>.el-input__inner{  /*使用/deep/或>>>穿透样式去修改el的组件*/ 
    width: 500px;
    height: 40px;
}



  </style>
  