import home from '@/views/home.vue'

import myMusic from '@/views/myMusic.vue'

import songList from '@/views/songList.vue'

import song from '@/views/song.vue'

import mySong from '@/views/mySong.vue'

import mySongList from '@/views/mySongList.vue'

import login from '@/components/login.vue';

import searchAnswer from '@/views/searchAnswer.vue'

import songAnswer from '@/views/songAnswer.vue'

import singerAnswer from '@/views/singerAnswer.vue'

import songListAnswer from '@/views/songListAnswer.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component:home,
        meta: { requiresAuth: false }
    },

    {
        name: 'login',
        path: '/components/login',
        component:login,
        meta: { requiresAuth: false }
    },

    {
        name:'songList',
        path:'/views/songList/:songListId?',
        component:songList,
        props:true,
        meta: { requiresAuth: true }, 
    },

    {
        name: 'searchAnswer',
        path: '/views/searchAnswer/:keyword?',
        component:searchAnswer,
        props:true,
        redirect:'/views/songAnswer',
        meta: { requiresAuth: true },
        children:[{
            name:'singerAnswer',
            path:'/views/singerAnswer/:keyword?',
            props:true,
            component:singerAnswer
        },

        {
            name:'songAnswer',
            path:'/views/songAnswer/:keyword?',
            props:true,
            component:songAnswer
        },

        {
            name:'songListAnswer',
            path:'/views/songListAnswer/:keyword?',
            
            component:songListAnswer
        },
        ]
    },

    {
        name:'song',
        path:'/views/song/:songId?', //在path后要加/：自定义变量名？
        component:song,
        props:true,
        meta: { requiresAuth: true }, 
    },

    {
        name:'myMusic',
        path:'/views/myMusic',
        component:myMusic,
        redirect:'/views/mySong',
        meta: { requiresAuth: true },
        children:[{
            name:'mySong',
            path:'/views/mySong',
            component:mySong
        },

        {
            name:'mySongList',
            path:'/views/mySongList',
            component:mySongList
        },
    ]
    },
    
];
export default routes
