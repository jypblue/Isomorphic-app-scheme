/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-28 10:50:51
 * @version $Id$
 */

import { Route,IndexRoute } from "react-router";
import React from "react";

import App from "../containers/App";

//Redux Smart
import CounterPage from "../containers/CounterPage";
import TodoPage from "../containers/TodoPage";

//realworld
import RealWorldPage from '../containers/realworld/RealWorldPage';
import RepoPage from '../containers/realworld/RepoPage';
import UserPage from '../containers/realworld/UserPage';

//Redux Dumb
import HomePage from "../components/Home";
//import AboutPage from "../components/About";
import error404 from "../components/404";
import Hotel from '../components/hotelpunish/Hotel';

const AboutPage = (location, cb) => {
  if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);
    require.ensure([], require => {
      cb(null, require('../components/About'))
    },'about')
}



export default (
  <Route name="app" path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="home" component={HomePage} />
      <Route path="todo" component={TodoPage} />
      <Route path="counter" component={CounterPage} />
      <Route path="realworld" component={RealWorldPage}>
        <Route path="/realworld/:login/:name"
           component={RepoPage} />
        <Route path="/realworld/:login"
           component={UserPage} />
      </Route>
      <Route path="hotel" component={Hotel} />
      <Route path="about" getComponent={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
);



