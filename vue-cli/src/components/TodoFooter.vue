<template>
  <div>
      footer 
      <div>use mapState1 : {{ count }}</div>
      <div>use mapState2 : {{ stateCount }}</div>
      
      <button @click="this.addCount" type="button">mapActionTest</button>
      

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {

  computed: {
    ...mapState('HELLO', ['count']),
    ...mapState('HELLO', {
      stateCount: state => state.count,
      //countAlias: 'stateCount'
    })
  },
  methods: {
    ...mapActions('HELLO', ['addCount']),
    clickMethod: function(){
      console.log("hello")
    }
  }

}
</script>

<style>

</style>