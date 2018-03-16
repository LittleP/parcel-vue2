/**
 * Created by little_prince on 18/3/16.
 */

const state = {
    status: false
};


const mutations = {
    show: state => {state.status = true;},
    hide: state => {state.status = false;}
}
export default {
    state,
    mutations
}