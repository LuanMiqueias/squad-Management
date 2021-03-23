import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateTeam from "./pages/CreateTeam";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/create-team/" component={CreateTeam}></Route>
          <Route path="/edit/:id" component={CreateTeam}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routes;
