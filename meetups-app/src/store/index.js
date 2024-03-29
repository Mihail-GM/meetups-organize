import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";

Vue.use(firebase)
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loadedMeetups: [
			{
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
				id: 'afajfjadfaadfa323',
				title: 'Meetup in New York',
				date: '2017-07-17'
			},
			{
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
				id: 'aadsfhbkhlk1241',
				title: 'Meetup in Paris',
				date: '2017-07-19'
			}
		],
		user: null,
	},

	mutations: {

		createMeetup(state, payload) {

			state.loadedMeetups.push(payload)
		},

		setUser(state, payload) {

			state.user = payload
		}
	},

	actions: {

		createMeetup({commit}, payload) {

			const meetup = {
				title: payload.title,
				location: payload.location,
				imageUrl: payload.imageUrl,
				description: payload.description,
				date: payload.date,
				id: 'kfdlsfjslakl12'
			}
			// Reach out to firebase and store it
			commit('createMeetup', meetup)
		},

		signUserUp({commit}, payload) {

			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
				.then(
					user => {
						const newUser = {
							id: user.uid,
							registeredMeetups: []
						}
						commit('setUser', newUser)
					}
				)
				.catch(
					error => {
						console.log(error)
					}
				)
		},

		signUserIn({commit}, payload) {

			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
				.then(
					user => {
						const newUser = {
							id: user.user.uid,
							registeredMeetups: []
						}
						commit('setUser', newUser)
					}
				)
				.catch(
					error => {
						console.log(error)
					}
				)
		}
	},

	getters: {

		loadedMeetups(state) {

			return state.loadedMeetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date
			})
		},

		featuredMeetups(state, getters) {

			return getters.loadedMeetups.slice(0, 5)
		},

		loadedMeetup(state) {

			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		},

		user (state) {
			return state.user
		}
	}
})