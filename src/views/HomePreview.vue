<template>
  <div class="home-my-feed"><RwvArticleList type="feed" /></div>
</template>

<script>
import RwvArticleList from "@/components/ArticleList";

export default {
  name: "rwv-home-preview",
  components: {
    RwvArticleList
  }
};
</script>
