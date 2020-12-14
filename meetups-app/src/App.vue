<template>
    <v-app>
        <v-navigation-drawer
            v-model="sideNav"
            absolute
            temporary
        >

            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.link"
                    router>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-card
            color="grey lighten-4"
        >
            <v-toolbar dark dense class="primary">
                <v-app-bar-nav-icon class="hidden-sm-and-up " @click="sideNav = !sideNav"></v-app-bar-nav-icon>

                <v-toolbar-title>
                    <router-link to="/" tag="span" style="cursor: pointer"> Meetup</router-link>

                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-toolbar-items class="hidden-xs-only ">
                    <v-btn
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.link"
                        class="primary">

                        <v-icon left dark class="">{{ item.icon }}</v-icon>
                        {{ item.title }}
                    </v-btn>
                </v-toolbar-items>

            </v-toolbar>
        </v-card>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    components: {},

    data: () => ({
        sideNav: false,
        menuItems: [
            {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
            {icon: 'person', title: 'Profile', link: '/profile'},
            {icon: 'face', title: 'Sign up', link: '/signup'},
            {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
    }),
};
</script>
