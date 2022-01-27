<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        Nabu
      </router-link>
      <span class="attribution">
        2022 
        <a rel="noopener noreferrer" target="blank" href="https://thinkster.io"
          >nabu.expert</a
        >. Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
