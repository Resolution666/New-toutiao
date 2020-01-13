import * as types from "./types";
export default {
    [types.HOME]:(state,payload)=>state.home = payload,
    [types.COLLECT]:(state,payload)=>state.collect = payload,
    [types.CROSSTALK]:(state,payload)=>state.crossTalk = payload,
    [types.DETAIl]:(state,payload)=>state.detail = payload,

    [types.FOOTER]:(state,payload)=>state.footer = payload,
    [types.HEADER]:(state,payload)=>state.header = payload,
    [types.LOAGING]:(state,payload)=>state.loading = payload,
    [types.BACK]:(state,payload)=>state.back = payload
}