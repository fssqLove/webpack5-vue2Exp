import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'

interface ICountState{
    num:number
}

const state:ICountState={
    num:0
}

const mutations: MutationTree<ICountState> = {
    /**
     * add 计数器加
     * */ 
     add(state,val){
        state.num += val
     }
}

const actions: ActionTree<ICountState, any> = {
    /**
     * asyAdd 异步加
     * */ 
    asyAdd({commit},val){
        setTimeout(()=>{
            commit('add',val)
        },1000)
    }
}

const getters:GetterTree<ICountState, any> = {
    doubleNum(state){
        return state.num * 2
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}