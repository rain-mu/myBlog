export default{
	changeWidth:function(state,e){
		state.width = e
	},
	changeHeadPhoto:function(state){
		var bg = state.headPhoto
		bg[5] = bg[0]
		for(var i = 0;i<5;i++){
				bg[i] = bg[i+1]
				console.log(bg[0].position)
		}
	}
}