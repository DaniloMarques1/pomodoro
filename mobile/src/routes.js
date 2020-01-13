import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Registration,
      Home,
    },
    { backBehavior: 'initialRoute' }
  )
);
