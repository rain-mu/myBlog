import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import home from '@/components/home/home'
import top from '@/components/home/top'
import blog from '@/components/blog/blog'
import chat from '@/components/chat/chat'
import aboutMe from '@/components/aboutMe/aboutMe'
import contactMe from '@/components/contactMe/contactMe'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component:App,
	  
	  children:[
		{
		  path:'',
		  name:'home',
		  component:home,
		  
		  children:[
			{
			  path:'/',
			  name:'blog',
			  component:blog
		    },
			{
			  path:'/chat',
			  name:'chat',
			  component:chat
			},
			{
			  path:'/aboutMe',
			  name:'aboutMe',
			  component:aboutMe
			},
			{
			  path:'/contactMe',
			  name:'contactMe',
			  component:contactMe
			}
		  ]
		},
		]
    }
  ]
})
