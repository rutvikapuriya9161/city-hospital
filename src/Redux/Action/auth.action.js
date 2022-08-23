import * as ActionTypes from '../ActionTypes';

export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.SIGN_UP , payload : data});
}   
