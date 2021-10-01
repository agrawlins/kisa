import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CreateDid from "../pages/didRegistrationPage/didCreate";
import DidMapPage from "../pages/didMapPage/didMap";
import DeleteDid from "../pages/didDeletePage/didDelete";

const Did = ({match}) => {
    return(
        <Switch>
        <Route path={`${match.url}/register`} exact={true} component={CreateDid} />
        <Route path={`${match.url}/map`} exact={true} component={DidMapPage} />
        <Route path={`${match.url}/delete`} exact={true} component={DeleteDid} />
        <Redirect to='/not-found'/>
      </Switch>
    );
  };
export default Did;

