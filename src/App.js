import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage/homepage";
import AboutUs from "./components/aboutus/about";
import ReqList from "./components/reqlist/reqlist";
import Form from "./components/module/Form";

import LoginForm2 from "./components/login2/login";
import Footer from "./components/footer/footer";
import Register from "./components/login2/logReg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/careers" exact component={AboutUs} />
          <Route path="/ATS" exact component={ReqList} />
          <Route path="/addreq" exact component={Form} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={LoginForm2} />
          <Route path="/projects" exact component={AboutUs} />
          <Route path="/login" exact component={AboutUs} />
          <Redirect path="/" exact to="/home" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
