import vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import headPhotoPattern from './headPhoto'
import blogContent from './blogContent'

vue.use(vuex)

const state = {
	width:320,
	headPhoto:headPhotoPattern,
	blogContent:blogContent
}

export default new vuex.Store({
	state,
	mutations
})