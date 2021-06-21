import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage/homepage";
import AboutUs from "./components/aboutus/about";
import Form from "./components/module/Form";
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
          <Route path="/ATS" exact component={Form} />
          <Route path="/projects" exact component={AboutUs} />
          <Route path="/login" exact component={AboutUs} />
          <Redirect path="/" exact to="/home" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
