<template>
    <div>
        <h1>LodashTest</h1>
        <a> test keyBy: {{ getMemberNameList() }} </a><br />
        <a> test Assign: {{ setConfig() }} </a>
        <a> console merge test: {{ mergeTest() }}</a>
    </div>  
</template>

<script>
import * as _ from 'lodash';
export default {
    data: () =>{
        return {
            member: [
                {name: 'mem1', age: 40 },
                {name: 'mem2', age: 11 },
            ],
            config: {
                method: 'GET',
                url: "https://localhost:8089",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-type': 'application/json'
                }
            }
        }

    },
    methods: {
        getMemberNameList: function(){
            return _.keyBy(this.member, 'name')
        },
        setConfig: function(){
            return _.assignIn(this.config.headers, {
                'Content-type': 'application/text',
                'X-TYPE-RE': 'app'
            
            })
        },
        setTest: function(){
            return 
        },
        mergeTest: function(){

            let reqConfig = {
                headers: {
                    'power': 'power',
                    'man':'man'
                }
            }

            let newConfig = {
                
            }

            let mergedConfig = _.merge(reqConfig,newConfig)
            console.log(mergedConfig);




        }
    }

}
</script>

<style>

</style>