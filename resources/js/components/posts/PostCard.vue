<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle">Pubblicato il: {{ post.created_at }}</h6>
      <p class="card-text">

        {{ post.content }}
      </p>

      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsCard",
  props: {
    post: Object,
  },
  computed: {
    
  }
};
</script>