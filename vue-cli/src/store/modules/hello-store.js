


export const namespace = 'HELLO';

export const types = {
    SET_HELLO_KEY: 'setHelloKey',
    GET_HELLO_KEY: 'getHelloKey'
}

const state = {
    helloKey: "hello kEY"
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
    }
}

export const helloStore = {
    state,
    mutations,
    actions,
    namespace,
    types
}