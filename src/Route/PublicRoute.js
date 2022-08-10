import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utils';

function PublicRoute({component : Components, restriced = false, ...rest}) {
    return (
        <Route {...rest} render = {props => (
            isLogin() && restriced ? 
            <Redirect to={"/"} />
            :
            <Components />
        )}
        />
    );
}

export default PublicRoute;