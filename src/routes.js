import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateTeam from "./pages/CreateTeam";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/create-team" component={CreateTeam}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default Routes;
