import {start,success,fail} from './Constants'

export function started(){
    return {
        type:start    
    }
}

export function succeeded(data){
    return{
        type: success,
        payload:data

    }
}

export function failed(err){
    return{
        type: fail,
        payload:err

    }
}