import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function Routes(initialRoute) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Home,
        Registration,
        Profile,
      },
      {
        initialRouteName: initialRoute,
      }
    )
  );
}
