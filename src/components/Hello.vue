<template>
	<div>
		<div>{{data}}</div>
		<input type='text' v-model='text'>
		<input type='button' v-on:click='change'>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				text:'',
				data:this.$store.state.count,
			}
		},
		methods:{
			change:function(){
				this.data = this.text
				this.$emit('change',this.text)
			}
		}
	}
</script>