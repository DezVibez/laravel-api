<template>
    <div class="content">
        <AppHeader :title = "title"/>
        <main class="container mt-3">
        
            <PostsList />

        </main>
            

    </div>
</template>

<script>
    import AppHeader from "./AppHeader";
    import PostsList from "./posts/PostsList.vue"
    export default {
        name: "App",
        components: {
            AppHeader,
            PostsList
        },
        data(){
            return {
                title: "Boolpress",
            };
        },
    };
</script>