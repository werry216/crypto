 import React from "react";
import Market from "containers/Market";
import Coins from "containers/Coins";
import PoweredBy from "components/PoweredBy";
import MarketProvider from "store/MarketProvider";
import Exchanges from "components/Exchanges";
import Exchange from "components/Exchange";
import { BrowserRouter as Router, Route, Redirect, Switch, Link, LinkProps } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import { default as Tab, TabProps } from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import TimelineIcon from '@material-ui/icons/Timeline';



const LinkTab: React.ComponentType<TabProps & LinkProps> = Tab as React.ComponentType<TabProps & LinkProps>;

function NavBar() {
  const [value, setValue] = React.useState(0);

  // console.log(value);


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
  <div >
  <AppBar position="static">
           <Tabs>
               <Tab label="Exchanges" to="/exchange" component={Link}  />
               <Tab label="Coins" to="/" component={Link}  />
               <Tab label="Home" to="/" component={Link}  />
           </Tabs>
     </AppBar>
  </div>
)
};

const App = () => {
  return (
    <Router>
      <div>
        <NavBar  />
        <Switch>
          <Route exact path="/" component={Coins} />
          <Route exact path="/exchange" component={Exchanges} />
          <Route exact path="/market">
           <MarketProvider>
             <Market />
           </MarketProvider>
         </Route>
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
