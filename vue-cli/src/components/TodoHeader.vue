<template>
  <header>
      <!-- <h1>TODO</h1> -->
      <!-- Store 의 State 를 이용  -->
      <h1>TODOHEADER....</h1>
      <h1>{{ this.$store.state.headerText}}</h1>
  </header>
</template>

<script>
export default {
  beforeRouterEnter(to, from, next){
    
    next();
  }
}
</script>

<style scoped>
h1 {
  font-weight: 9000;
}

</style>