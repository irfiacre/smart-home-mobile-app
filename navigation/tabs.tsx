import { createBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LightScreen from "../screens/Light";
import StepsScreen from "../screens/Motion";
import GeolocationScreen from "../screens/Geolocation";
import { useColorScheme } from "react-native";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          width: "100%",
          height: 60,
          position: "absolute",
          left: "-50%",
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        // options={{
        //   title: "Home",
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialCommunityIcons name="home" size={size} color={color} />
        //   ),
        // }}
        component={GeolocationScreen}
      />
      <Tab.Screen
        name="Steps"
        // options={{
        //   title: "Steps",
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="footsteps-sharp" size={size} color={color} />
        //   ),
        // }}
        component={StepsScreen}
      />
      <Tab.Screen
        name="Light"
        // options={{
        //   tabBarLabel: "Light",
        //   tabBarIcon: ({ color, size }) => (
        //     <Entypo name="light-down" size={size} color={color} />
        //   ),
        // }}
        component={LightScreen}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
