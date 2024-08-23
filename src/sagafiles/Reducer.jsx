
import {success,fail} from './Constants'

const initialstate={
  newsarticles:[]
}

export const reducerfn=(state=initialstate,action)=>{
  

    
    switch(action.type){

        
     
            case success :return{
                ...state,
               newsarticles:[action.payload]
            

            }
                case fail : return{
                    ...state,
                  newsarticles:[],
                    error: action.payload 
                }
            default:
                return state;
    }
}