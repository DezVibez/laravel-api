<template>
    <section id="posts-list">
        <h2>
            Posts
        </h2>
        <ul v-if="posts.length">
            <li v-for="post in posts" :key="post.id">
                {{post.title}}
            </li>
        </ul>
        <h5 v-else> Nessun Post </h5>
    </section>
</template>

<script>

    export default {
        name: "PostsList",
        data(){
            return{ 
                posts: [],
            }; 
        },
    };


</script>