<template>
	<div class='headAll'>
		<div v-if='isMobile' class='head' v-bind:style="'background:url('+bg[num].position
		+') 0% 0% / 100% 100%'"  v-on:click='changePhoto()'>
			<!--<div>&npsb</div>-->
			<span class='wel' v-bind:style="'color:'+welcomeColorDelay">WELCOME</span>
		</div>
		<div v-bind:class="{'container-fluid':isMobile}">
			<ul class="nav nav-tabs">
  				<li role="presentation" v-bind:class="{'active':navActive == 'blog'}">
					<router-link to='/'>博客</router-link>
				</li>
  				<li role="presentation" v-bind:class="{'active':navActive == 'chat'}">
					<router-link to='/chat'>聊天室</router-link>
				</li>
  				<li role="presentation" v-bind:class="{'active':navActive == 'aboutMe'}">
					<router-link to="aboutMe">关于我</router-link>
				</li>
				<li role="presentation" v-bind:class="{'active':navActive == 'contactMe'}">
					<router-link to="contactMe">联系我</router-link>
				</li>
				<router-link to='#' class='write' v-if='!isMobile'>
					写一篇博客
				</router-link>
			</ul>
			
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				
				bg:this.$store.state.headPhoto,
				welcomeColorDelay:'#333333',
				num:0,
				//navActive:this.$route.name
			}
		},
		computed:{
			navActive:function(){
				return this.$route.name
			},
			isMobile:function(){
				return this.$store.state.width < 720
			}
		},
		methods:{
			changePhoto:function(){
				var vm = this
				var img = new Image()
				if(this.num  == this.bg.length - 1)this.num = 0
				img.src = this.bg[this.num+1].position
				img.onload = function(){
					
					vm.num== vm.bg.length - 1 ? void(0) : vm.num += 1
					setTimeout(function(){
						vm.welcomeColorDelay = vm.bg[vm.num].color
					},0)
				}
				
			}
		},
		/*watch:{
			$route:function(){
				this.navActive = this.$route.name
			}
		},*/
		mounted:function(){
			
		}
	}
</script>
<style>
	@media screen and (max-width:720px){
	.headAll{
		width:100%;
		height:30%;
		
	}
	.head{
		width:100%;
		height:70%;
	}
	.head:before{
		content:'.';
		display:block;
		height:0;
		clear:both;
	}
	.wel{
		display:block;
		font-size:3rem;
		margin-top:8%;
		text-align:center;
		transition:color 5s;
		font-weight:600;
		
	}

	}
	
	.head{
		height:300px;
		width:100%;
	}
	.write{
		float:right;
		display:block;
		height:42px;
		line-height:42px;
	}
</style>