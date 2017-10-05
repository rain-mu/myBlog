<template>
	<div v-on:click='cli'>
		<transition name='slide-fade' mode='out-in'>
		<div v-if='seen'>
			asdasdasdadsad
		</div>
		</transition>
		<transition name='slide-fade' mode='out-in'>
		<div v-if='!seen'>
			ffffffffffffffffff
		</div>
		</transition>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				width:document.documentElement.clientWidth,
				height:document.documentElement.clientHeight,
				seen:true
			}
		},
		methods:{
			cli:function(){
				this.seen = !this.seen
			}
		}
		
	}
</script>

<style>
	
</style>
