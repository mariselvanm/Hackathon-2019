import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import DownloadSheetComponent from './components/Home/DownloadSheet';
import './App.scss';

function App() {
  return (
    <Router>
      <Redirect to="/home" />
      <div className="App">
          <Route exact path="/home" component={DownloadSheetComponent} />
      </div>
    </Router>
  );
}

export default App;
