import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './route_components/Home/Home';
import TextOverImages from './route_components/TextOverImages/TextOverImages';
import Images from './route_components/Images/Images';
import Fonts from './route_components/Fonts/Fonts';
import ColorTheme from './route_components/ColorTheme/ColorTheme';
import NotFound from './route_components/NotFound/NotFound';


export default (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/text-over-images' component={TextOverImages} />
    <Route path='/images' component={Images} />
    <Route path='/fonts' component={Fonts} />
    <Route path='/color-theme' component={ColorTheme} />
    <Route component={NotFound} />
  </Switch>
)