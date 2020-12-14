<template>
    <v-container>
        <v-row>
            <v-col>
                <h1> Create a new Meetup</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col xs="12">
                <v-form
                    ref="form"
                    @submit.prevent="onCreateMeetup"
                    lazy-validation
                >
                    <v-text-field
                        v-model="title"
                        :counter="10"
                        label="Title"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="location"
                        label="Location"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="imageUrl"
                        label="Image URL"
                        required
                    ></v-text-field>

                    <img :src="imageUrl" height="150">

                    <v-textarea
                        name="description"
                        label="Description"
                        hint="Hint text"
                        multi-line
                        v-model="description"
                        required
                    ></v-textarea>

                    <v-btn
                        :disabled="!formIsValid"
                        color="success"
                        class="mr-4"
                        type="submit">
                        Create Meetup
                    </v-btn>

                </v-form>
            </v-col>
        </v-row>
    </v-container>


</template>

<script>
export default {
    name: "CreateMeetup",
    data() {
        return {
            title: '',
            location: '',
            imageUrl: '',
            description: ''
        }
    },
    computed: {
        formIsValid() {
            return this.title !== '' &&
                this.location !== '' &&
                this.imageUrl !== '' &&
                this.description !== ''
        }
    },
    methods: {
        onCreateMeetup() {
            if (!this.formIsValid) {
                return
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                description: this.description,
                date: new Date()
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>

<style scoped>

</style>