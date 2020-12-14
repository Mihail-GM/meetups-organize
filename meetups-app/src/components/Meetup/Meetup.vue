<template>
    <v-container>
        <v-row>
            <v-col>

                <v-card class="mt-10"
                        elevation="9">
                    <v-card-title>
                        <h6 class="primary--text">{{ meetup.title }}</h6>
                    </v-card-title>

                    <v-img
                        :src="meetup.imageUrl"
                        height="400">

                    </v-img>

                    <v-card-text>
                        <div class="info--text">{{ meetup.date }}g - Where it takes place</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda at deserunt
                            dolorum eius esse eum, expedita hic illo ipsum magni, nobis, odio odit quaerat quibusdam
                            quis
                            rem veritatis voluptas!
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Meetup",

    props: ['id'],

    computed: {
        meetup() {
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>

<style scoped>

</style>