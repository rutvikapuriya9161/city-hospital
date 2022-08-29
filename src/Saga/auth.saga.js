import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignUpapi, SignInapi } from '../../common/api/Auth.api';
import * as ActionTypes from '../ActionTypes';
import { SignOutapi } from '../Comman/API/auth.api';

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

function* SignIn(action) {
  try {
    const user = yield call(SignInapi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);

  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* SignOut() {
  try {
    const user = yield call(SignOutapi);
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

function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGN_IN, SignIn);
}

function* watchSignOut() {
  yield takeEvery(ActionType.SIGN_OUT, SignOut)
}

export function* signUpSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchSignOut()
  ])
}
