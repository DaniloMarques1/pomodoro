import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Registration from './pages/Registration';
import Login from './pages/Login';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Registration,
  })
);
