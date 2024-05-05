import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LightScreen from "../screens/Light";
import MotionScreen from "../screens/Motion";
import GeolocationScreen from "../screens/Geolocation";

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={GeolocationScreen} />
      <Tab.Screen name="Settings" component={LightScreen} />
      <Tab.Screen name="Motion" component={MotionScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
