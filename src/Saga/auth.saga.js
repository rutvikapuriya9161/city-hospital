import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignUpapi, SignInapi } from '../../common/api/Auth.api';
import * as ActionTypes from '../ActionTypes';

function* SignUp(action) {
   try {
      const user = yield call(SignUpapi, action.payload);
      console.log(user);
   } catch (e) {
      console.log(e);
   }
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, SignUp);
}

export function* signUpSaga() {
    yield all([
        watchSignUp(),
        watchSignIn()
    ])
}

function* SignIn(action){
  try {
    const user = yield call(SignInapi, action.payload);
    console.log(user);

  } catch (e) {
    console.log(e);
  }
}

function* watchSignIn(){
  yield takeEvery(ActionTypes.SIGN_IN , SignIn);
}
