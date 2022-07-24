import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Switch>
  );
}
