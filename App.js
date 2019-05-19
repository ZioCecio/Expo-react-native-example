import { createStackNavigator, createAppContainer } from "react-navigation";

import MainPage from "./Screens/MainPage";
import Detail from "./Screens/Detail";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: MainPage },
    Detail: { screen: Detail }
  },
  { initialRouteName: "Home" }
);

const App = createAppContainer(MainNavigator);

export default App;
