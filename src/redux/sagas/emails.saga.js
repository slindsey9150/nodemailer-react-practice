import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendEmail(action){
    try{
        yield axios.post('/api/email/send')
        yield put({ type: 'RESET_PASSWORD', payload: action.payload });
    }catch(error){
        console.log("error sending email");
    }
}


function* emailsSaga() {
    yield takeLatest('SEND', sendEmail);

  }
  
  export default emailsSaga;
  