<template>
	<div class='home'>
		<top></top>
		<router-view></router-view>
	</div>
</template>

<script>
	import top from './top'
	export default{
		data(){
			return {}
		},
		computed:{
			isMobile:function(){
				return this.$store.state.width < 720
			}
		},
		components:{
			top,
		},
		
	}
</script>

<style>
	@media screen and (max-width:720px){
	.home{
		width:100%;
		height:100%;
	}
	}
</style>
