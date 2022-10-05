<template>
    <div class="content">
        <AppHeader :title = "title"/>
        <main class="container mt-3">
        
            <!-- <HomePage/> -->
            <ContactsPage/>
        </main>
            

    </div>
</template>

<script>
    import AppHeader from "./AppHeader";
   // import HomePage from "./pages/HomePage.vue"
    import ContactsPage from "./pages/ContactsPage.vue"
    export default {
        name: "App",
        components: {
            AppHeader,
            //HomePage,
            ContactsPage
        },
        data(){
            return {
                title: "Boolpress",
            };
        },
    };
</script>