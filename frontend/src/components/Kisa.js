import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CreateKisa from "../pages/kisaRegistrationPage/kisaCreate";
import KisaMapPage from "../pages/kisaMapPage/kisaMap";
import DeleteKisa from "../pages/kisaDeletePage/kisaDelete";

const Kisa = ({match}) => {
    return(
      <Switch>
        <Route path={`${match.url}/register`} exact={true} component={CreateKisa} />
        <Route path={`${match.url}/map`} exact={true} component={KisaMapPage} />
        <Route path={`${match.url}/delete`} exact={true} component={DeleteKisa} />
        <Redirect to='/not-found'/>
      </Switch>
    );
  };
 
export default Kisa;