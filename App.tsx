import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomeStack from "./HomeStack";
import RecordsStack from "./RecordsStack";
import Icon from "react-native-vector-icons/MaterialIcons";
import { store, persistor } from "./store";
import { ChartsStack } from "./ChartsStack";

const Tab = createBottomTabNavigator();

// // Clear stored state to avoid conflicts with new structure
// persistor.purge().then(() => {
//   console.log("Persisted state has been cleared");
// });

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "#FFFFFF", // Active icon color (e.g., white for visibility on black)
              tabBarInactiveTintColor: "#AAAAAA", // Inactive icon color (e.g., light gray)
              tabBarStyle: {
                backgroundColor: "#000000", // Black background for tab bar
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Records"
              component={RecordsStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="history" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Charts"
              component={ChartsStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="bar-chart" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
