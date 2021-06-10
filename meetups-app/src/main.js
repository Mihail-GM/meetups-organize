import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(firebase)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),

	created() {
		firebase.initializeApp({
			apiKey: "AIzaSyBH8MVqR-oCMq07FrkREWk7a2346IewJuc",
			authDomain: "vue-meetups-1b0f5.firebaseapp.com",
			projectId: "vue-meetups-1b0f5",
			storageBucket: "vue-meetups-1b0f5.appspot.com",
			messagingSenderId: "930430090032",
			appId: "1:930430090032:web:1e6f65a7ff9a733d88a6f5",
			measurementId: "G-Q8KR6NBP0W"
		})
	}
}).$mount('#app')
