<template>
    <v-container>
        <v-row class="mb-2">
            <v-col xs12 sm6 align="center" justify="center">
                <v-btn large router to="/meetups" class="primary"> Explore meetups</v-btn>
            </v-col>

            <v-col xs12 sm6 align="center" justify="center">
                <v-btn large router to="/meetup/new" class="primary"> Organize meetups</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-carousel>
                    <v-carousel-item
                        v-for="meetup in meetups"
                        :src="meetup.imageUrl"
                        :key="meetup.id"
                        @click="onLoadMeetup(meetup.id)">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row class="mt-2">
            <v-col xs12 align="center">
                Join our awesome meetups!
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {}
    },

    methods: {
        onLoadMeetup(id) {
            this.$router.push('/meetups/' + id)
        }
    },

    computed: {
        meetups() {
            return this.$store.getters.featuredMeetups
        }
    },
}
</script>

<style scoped>
.title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
}
</style>