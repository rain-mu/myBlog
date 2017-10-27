<template>
	<div class='App'>
		<router-view v-bind:class="{'container':!isMobile}"></router-view>
	</div>
</template>

<script>
	export default{
		computed:{
			isMobile:function(){
				return this.$store.state.width < 720
			}
		}
		
		
	}
</script>

<style>
	/*only mobile extend this*/
	@media screen and (max-width:720px){
		.App{
			width:100%;
			height:100%;
		}
	}
</style>
