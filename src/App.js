import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Containers/About/About';
import Appointment from './Containers/Appointment/Appointment';
import Contact from './Containers/Contact/Contact';
import Department from './Containers/Department/Department';
import Doctor from './Containers/Doctor/Doctor';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Medicines from './Containers/Medicines/Medicines';
import RefExample from './Containers/RefExample/RefExample';


function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/department"} exact component={Department} />
        <Route path={"/Doctor"} exact component={Doctor} />
        <Route path={"/About"} exact component={About} />
        <Route path={"/Contact"} exact component={Contact} />
        <Route path={"/Appointment"} exact component={Appointment} />
        <Route path={"/Login"} exact component={Login} />
        <Route path={"/Medicines"} exact component={Medicines} />
        <Route path={"/RefExample"} exact component={RefExample} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;