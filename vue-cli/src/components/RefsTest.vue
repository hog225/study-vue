<template>
    <div>
        <h1>Refs Test!!</h1>
        <a>{{ message }}</a>
        <button ref="myButton" @click="clickedButton">Click Me</button>
    </div>
  
</template>

<script>
export default {
    data: 
        function(){
            return {
                message: 'Hello World'
            }
        }
        
    ,
    methods: {
        clickedButton: function() {
            console.log(this.$refs)
            this.$refs.myButton.innerText = this.message;
        }
    }

}
</script>

<style>

</style>