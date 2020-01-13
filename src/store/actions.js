import * as types from "./types"
import axios from 'axios'
export default {
    [types.HOME]:({commit,state},payload)=>{
        axios({
            url:"/api/home",
            params:{
                _limit:10
            }
        }).then(
            res=> {
                commit(types.HOME,res.data.data)
            }
        )
    },
    [types.DETAIl]:({commit,state},{_id,dataName})=>{
        // console.log(_id,dataName)
        axios({
            url:"/api/"+dataName+"/"+_id
        }).then(
            res=>{
                commit(types.DETAIl,res.data.data)
            }
        )
    },
}