import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import CareersPage from "./careers/CareersPage";
import ContactUsPage from "./contactus/ContactUsPage";
import ServicesPage from "./services/ServicesPage";
import ParalegalServicesPage from "./home/ParalegalServicesPage";


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/contactus" component={ContactUsPage} />  
        <Route path="/services" component={ServicesPage} />                
        <Route path="/paralegal-services" component={ParalegalServicesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
