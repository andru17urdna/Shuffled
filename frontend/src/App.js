import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignUpFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LocationBar from "./components/LocationBar/LocationBar";
import BrowseCards from "./components/BrowseCards";
import BrowseStores from "./components/BrowseStores";
import Checkins from "./components/Checkins";
import LandingPage from "./components/Landing Page/LandingPage";
import CreateCardForm from "./components/AddCard";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState('CARDS');

  

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <LocationBar location={location} />
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path ='/browsecards'>
            <BrowseCards />
          </Route>
          <Route path = '/onecard/:id'>
            <CardDetail />
          </Route>
          <Route exact path='/addcard'>
              <CreateCardForm />
          </Route>
          <Route path='/browsestores'>
            <BrowseStores />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/check-ins'>
            <Checkins />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
