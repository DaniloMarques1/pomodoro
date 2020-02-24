import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddPomodoro from './pages/AddPomodoro';

export default function Routes(initialRoute) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Registration,
        Home,
        Profile,
        AddPomodoro,
      },
      {
        initialRouteName: initialRoute,
      }
    )
  );
}
