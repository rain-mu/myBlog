<template>
	<div class='blog'>
		<ul class='blogUl'>
			<li class='blogLi' v-for='x in blogContent'>
				<div class='blogContent'>
					<p class='blogTitle'>{{x.title}}<span>{{x.time}}</span></p>
					
					<span class='blogAbstract'>{{x.content}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		computed:{
			blogContent:function(){
				return this.$store.state.blogContent
			}
		}
	}
</script>
<style>
	@media screen and (max-width:720px){
		.blog{
			height:100%;
		}
		.blogUl{
			height:100%;
			padding-left:0;
			margin-top:8%;
		}
		.blogContent{
			
			
		}
		.blogLi{
			height:20%;
			
		}
		.blogTitle{
			font-size:130%;
			font-weight:500;
			width:95%;
			border-bottom:1px solid #c7ede9;
			padding-left:2%;
			padding-bottom:1%;
			
			position:relative;
		}
		.blogTitle span{
			font-size:50%;
			position:absolute;
			bottom:10%;
			right:3%;
			color:#d0d0d0;
		}
		.blogAbstract{
			color:#3c3c3c;
			font-size:90%;
			padding-left:2%;
		}
		/*.blogHr{
			margin-top:0;
			margin-bottom:5%;
		}*/
		
	}
</style>