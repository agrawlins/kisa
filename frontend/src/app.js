import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import Login from './components/Home';
import Did from './components/Did'
import Kisa from './components/Kisa'
import Police from './components/Police'
import NavBar from './navBar';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                    <Route path="/" component={Login} />
                <button>
                    <Route path="/did" component={Did} />
                    Did
                </button>
                <button>
                <Route path="/kisa" component={Kisa} />
                    Kisa
                </button>
                <button>
                <Route path="/police" component={Police} />
                    Police
                </button>
                <Redirect to='/not-found'/>
            </Switch>
        </div>
        
    );
}


  
  


  

export default App;