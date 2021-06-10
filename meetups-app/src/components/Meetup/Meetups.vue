<template>
    <v-container>
        <v-row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
            <v-col xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info">
                    <v-container fluid>
                        <v-row no-gutters justify="space-between">
                            <v-col
                                cols="12"
                                xs="5"
                                sm="4"
                                md="2"
                                class="py-3"
                            >
                                <v-img
                                    :src="meetup.imageUrl"
                                    size="200"
                                ></v-img>
                            </v-col>

                            <v-col
                                cols="12"
                                xs="6"
                                sm="7"
                                md="10"
                                class="d-flex flex-column align-lg-end"
                            >
                                <v-card-title primary-title>
                                    <div>
                                        <h5 class="white--text mb-0">My Meetup</h5>
                                        <div>17th July 2017</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn :to="'/meetups/' + meetup.id">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Meetups",

    computed: {
        meetups() {
            return this.$store.getters.loadedMeetups
        }
    }
}
</script>

<style scoped>

</style>