import React from 'react';
import './App.scss';
import Navigation from "./components/organisms/Navigation/Navigation";
import Router from "./Router";

const App = () => {
  return (
    <div className="root">
      <div className="pages">
        <Navigation/>
        <Router />
      </div>
    </div>
  );
};

export default App;
