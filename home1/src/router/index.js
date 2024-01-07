import {createRouter, createWebHistory} from 'vue-router'
import routes from './router'    // 导入 router 目录下的 router.js
import store from '@/store';

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

//路由守卫
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		
	  if (store.getters.isAuthenticated) {
		next();
	  } 
	  else {
		// 用户未登录，跳转到登录页面或者弹出登录框
		// 例如，你可以弹出登录框：
		alert("请先登录")
	  }
	} 
	
	else {
	  next();
	}
  });

export default router;


