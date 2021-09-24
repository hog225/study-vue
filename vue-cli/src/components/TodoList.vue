<template>
  <div>
      <ul>
          <li v-for="(todoitem, index) in this.$store.state.todoItems" v-bind:key="todoitem">
              
            <input type="checkbox" class="checkBtn" 
            v-on:click="setChecked(todoitem.item, checked)" v-model="todoitem.checked">
              
              <!-- <input type="checkbox" class="checkBtn" v-on:click="toggleComp"> -->
              {{ todoitem.item }} {{todoitem.checked}}
              <button v-on:click="deleteTodo(todoitem, index)">Del</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
   
    data: function() {
        return {
            todoItems: [],
            checked: true,
        }
    },
     // 라이프 사이클 훅 
    // created: function() {
    //     if (localStorage.length > 0)
    //     {
    //         for (let i=0; i < localStorage.length; i++){
    //             if (localStorage.key(i) != "loglevel:webpack-dev-server")
    //                 this.todoItems.push(localStorage.key(i))
    //         }
    //     }
    // },
    methods:{
        deleteTodo: function(todoitem, index) {
            console.log(todoitem, index)
            this.$store.commit("deleteOnItem",{
                item: todoitem,
                index: index
            })

        },
        isChecked: function(item) {
            item ? "checked":""
        },
        setChecked: function(item, checked){
            this.$store.commit("toggleChecked", {
                item, checked
            })
        }
        // toggleCom: function(){
        //     console.log('toogle  ')
        // }
    }
}
</script>

<style>

.checkBtn {
    margin: 0;
    padding: 0;
    width: 10%;
}
</style>