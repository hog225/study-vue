<template>
  <div>
      footer 
      <div>use mapState1 : {{ count }}</div>
      <div>use mapState2 : {{ stateCount }}</div>
      
      <button @click="addMutation(5)" type="button">mapActionTest</button>
      

  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {

  computed: {
    ...mapState('HELLO', ['count']),
    ...mapState('HELLO', {
      stateCount: state => state.count,
      //countAlias: 'stateCount'
    })
  },
  methods: {
    ...mapMutations('HELLO', {
      addMutation: 'addCount'
    }),
    ...mapActions('HELLO', {
      addAction: 'addCount'
    }),
    clickMethod: function(){
      console.log("hello")
    }
  }

}
</script>

<style>

</style>