import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerRight: () => (
            <Icon
              name="search" // Search icon in the top-right corner
              size={24}
              color="white"
              onPress={() => navigation.navigate("Map")}
              style={{ marginRight: 15 }}
            />
          ),
          headerStyle: {
            backgroundColor: "#121212", // Set background color if needed
          },
          headerTintColor: "white", // Set header text color
        })}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "近くのパチスロ店",
          headerStyle: {
            backgroundColor: "#121212", // Set background color if needed
          },
          headerTintColor: "white", // Set header text color
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
