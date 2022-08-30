import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Containers/About/About';
import Appointment from './Containers/Appointment/BookAppointment';
import BookAppointment from './Containers/Appointment/BookAppointment';
import ListAppointment from './Containers/Appointment/ListAppointment';
import Contact from './Containers/Contact/Contact';
import Department from './Containers/Department/Department';
import Doctor from './Containers/Doctor/Doctor';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Medicines from './Containers/Medicines/Medicines';
import RefExample from './Containers/RefExample/RefExample';
import { ThemeProvider } from './Context/ThemeContext';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { SnackbarProvider } from 'notistack';


function App(props) {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <Switch>
              <PublicRoute path={"/"} exact component={Home} />
              <PublicRoute path={"/department"} exact component={Department} />
              <PublicRoute path={"/Doctor"} exact component={Doctor} />
              <PublicRoute path={"/About"} exact component={About} />
              <PublicRoute path={"/Contact"} exact component={Contact} />
              <PublicRoute path={"/Appointment"} exact component={Appointment} />
              <PublicRoute path={"/Login"} restriced={true} exact component={Login} />
              <PublicRoute path={"/Medicines"} exact component={Medicines} />
              <PublicRoute path={"/RefExample"} exact component={RefExample} />
              <PrivateRoute path={"/bookappointment"} exact component={BookAppointment} />
              <PrivateRoute path={"/listappointment"} exact component={ListAppointment} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;