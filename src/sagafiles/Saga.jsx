import { put, takeLatest } from "redux-saga/effects";
import { getdata } from "./Services";
import {succeeded,failed} from './Action'
import { start } from "./Constants";
function* gettingNews(){
    try{
      let data=  yield getdata();
      console.log(data);
      
     
    
      
      
      yield put(succeeded(data))
    }
    catch(err) {
yield put(failed(err.message))
    }
}

export function* fetchNews(){
  yield takeLatest(start,gettingNews)
}