import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CreatePolice from "../pages/policeRegistrationPage/policeCreate";
import PoliceMapPage from "../pages/policeMapPage/policeMap";
import DeletePolice from "../pages/policeDeletePage/policeDelete"

const Police = ({match}) => {
    return(
        <Switch>
        <Route path={`${match.url}/register`} exact={true} component={CreatePolice} />
        <Route path={`${match.url}/map`} exact={true} component={PoliceMapPage} />
        <Route path={`${match.url}/delete`} exact={true} component={DeletePolice} />
        <Redirect to='/not-found'/>
      </Switch>
    );
  };
 
export default Police;