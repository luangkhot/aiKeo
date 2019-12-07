<template>
<div>
  
  <!-- Search-bar -->
  <search />
  
  <section class="section">
    <div class="container">  

      <!-- User Card -->
      <userCard />

    </div>
  </section>
</div>
</template>

<script>
import userCard from "../components/user-card";
import search from "../components/search";

export default {
  name: 'home',
  components: {
    userCard,
    search
  }
}
</script>
<style lang="scss" scope>

.section{
  @include mobile{
    padding: 20px;
  }
}

  
</style>
