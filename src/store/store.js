import {createStore} from 'redux';

function Reducer(state= {count:0}, action){
    if(action.type==='Inc'){
        return {count: state.count + action.payload}
    }

    if(action.type==='Dec'){
        return {count: state.count - action.payload}
    }
    return state
}

const store = createStore(Reducer)
export default store