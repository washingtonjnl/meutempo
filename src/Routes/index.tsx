import { Route } from 'react-router-dom';

import Onboarding from '../pages/Onboarding';
import Home from '../pages/Home';
import Settings from '../pages/Settings';

function Routes() {
  return (
    <>
      <Route path="/onboarding" component={Onboarding} exact />
      <Route path="/" component={Home} exact />
      <Route path="/settings" component={Settings} exact />
    </>
  );
}

export default Routes;
