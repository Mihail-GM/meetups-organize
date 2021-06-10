<template>
    <v-container>
        <v-row>
            <v-col xs="12"
                   sm="6"
                   offset-sm="3">

                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignUp">
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            name="email"
                                            label="Mail"
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            name="password"
                                            label="Password"
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            required></v-text-field>
                                    </v-col>
                                </v-row>



                                <v-row>
                                    <v-col>
                                        <v-btn type="submit" class="primary">Sign up</v-btn>
                                    </v-col>
                                </v-row>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Signup",

    data() {
        return {
            email: '',
            password: ''
        }
    },

    computed: {

        user() {
            return this.$store.getters.user
        }
    },

    watch: {

        user(value) {
            if (value !== null && value !== undefined) {
                this.$router.push('/')
            }
        }
    },

    methods: {

        onSignUp() {
            this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        }
    }
}
</script>

<style scoped>

</style>