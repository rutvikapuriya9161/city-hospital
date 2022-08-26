import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignUpapi, SignInapi } from '../../common/api/Auth.api';
import * as ActionTypes from '../ActionTypes';

function* SignUp(action) {
   try {
      const user = yield call(SignUpapi, action.payload);
      yield put(setAlert({ text: user.payload, color: "success" }))
      console.log(user);
   } catch (e) {
      yield put(setAlert({ text: e.payload, color: "error" }))
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
     yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);

  } catch (e) {
     yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* watchSignIn(){
  yield takeEvery(ActionTypes.SIGN_IN , SignIn);
}
