import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Login = lazy(() => import('./components/login/login'))
const Signup = lazy(() => import('./components/signup/signup'))
const Dashboard =lazy(()=> import('./components/dashboard/dashboard'))
const renderLoader = () => <p>Loading</p>;
function App() {
  return (
    <div className="App">
      <Suspense fallback={renderLoader()}>
        <Router>
          <Switch>
            < Route exact path="/login" component={Login} />
            < Route exact path="/signup" component={Signup} />
            < Route exact path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}
export default App;