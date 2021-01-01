import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/homeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import CheckOutTemplate from "./templates/CheckOutTemplate/CheckOutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from 'react'
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";

// const CheckOutTemplateLazy = lazy(() => import('./templates/CheckOutTemplate/CheckOutTemplate'))

export const history = createBrowserHistory();

function App() {
  return (

    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <Route path="/register" exact Component={Register} />
        <HomeTemplate path="/" exact Component={Home} />

        <UserTemplate path="/login" exact Component={Login} />



        <CheckOutTemplate path="/checkout/:id" exact Component={Checkout} />

        {/* <Suspense fallback={<div>Loading...</div>}>
          <CheckOutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}
      </Switch>
    </Router>

  );
}

export default App;
