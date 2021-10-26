


export const namespace = 'HELLO';

export const types = {
    SET_HELLO_KEY: 'setHelloKey',
    GET_HELLO_KEY: 'getHelloKey',
    ADD_COUNT: 'addCount'
}

const state = {
    helloKey: "hello kEY",
    count: 0
}

const mutations = {
    [types.SET_HELLO_KEY](state, payload) {
        state.helloKey = payload
    }
}

const actions = {
     [types.GET_HELLO_KEY]({commit}) {
         console.log(commit)
        return new Promise();
    },
    [types.ADD_COUNT]() {
        state.count = state.count + 1;
    },

}

export const helloStore = {
    state,
    mutations,
    actions,
    namespace,
    types
}