<template>
  <div>
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToDo">
      <button v-on:click="addToDo">add</button>
      
  </div>
</template>

<script>
export default {
    data: function(){
            return {
                newTodoItem: ''
            }
        },
    methods: {
        addToDo: function(){
            // console.log(this.newTodoItem)
            // localStorage.setItem(this.newTodoItem, this.newTodoItem)
            this.$store.commit("addOnItem", {
                item: this.newTodoItem
            })
            this.newTodoItem = '';
        }
    }
    
    
}
</script>

<style>

</style>