import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import GoogleApiWrapper from './components/react-googlemaps';
// import DidCreate from './pages/didRegistrationPage/didCreate';
// import DidMap from './pages/didMapPage/didMap';
// import DeleteDid from './pages/didDeletePage/didDelete';
// import KisaCreate from './pages/kisaRegistrationPage/kisaCreate';
// import KisaMap from './pages/kisaMapPage/kisaMap';
// import DeleteKisa from './pages/kisaDeletePage/kisaDelete';
// import PoliceCreate from './pages/policeRegistrationPage/policeCreate';
// import PoliceMap from './pages/policeMapPage/policeMap';
// import PoliceApprovals from './pages/policeApprovalsPage/policeApprovals';
// import DeletePolice from './pages/policeDeletePage/policeDelete';
// import Login from './pages/loginPage/login';
// import LoginSelection from './pages/loginSelectionPage/loginSelection';
import Home from './components/Home';
import Did from './components/Did'
import Kisa from './components/Kisa'
import Police from './components/Police'
import Redirect from './components/Redirect'
import NavBar from './navBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/did" component={Did} />
                <Route path="/kisa" component={Kisa} />
                <Route path="/police" component={Police} />
                <Redirect to='/not-found'/>
            </Switch>
        </div>
        
    );
}
 
export default App;