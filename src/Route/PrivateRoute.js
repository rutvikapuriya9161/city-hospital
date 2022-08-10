import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utils';

function PrivateRoute({ component : Components, ...rest }) {
    return (
        <Route {...rest} render = {props => (
            isLogin() ? 
            <Components {...props} />
            :
            <Redirect to={"/Login"} />
        )}
        />
    );
}

export default PrivateRoute;